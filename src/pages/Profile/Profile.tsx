import { useState, useEffect, useRef } from 'react';
import { onAuthStateChanged, updateProfile } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import AWS from 'aws-sdk';
import { auth, db } from '../../firebaseConfig';
import styles from './Profile.module.css';
import chipIcon from '../../assets/chip.png';

// === CONFIGURACIÓN DE AWS S3 ===
AWS.config.update({
  accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
  secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
  region: import.meta.env.VITE_AWS_REGION
});

const s3 = new AWS.S3({
  params: { Bucket: import.meta.env.VITE_AWS_BUCKET_NAME }
});

export default function Profile() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  // Estados para controlar el comportamiento dinámico del botón ('idle' | 'saving' | 'success')
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'success'>('idle');

  // Estados del formulario
  const [fullName, setFullName] = useState("");
  const [university, setUniversity] = useState("");
  const [specialty, setSpecialty] = useState("");
  
  // Estado para la foto
  const [photoURL, setPhotoURL] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      
      if (currentUser) {
        setFullName(currentUser.displayName || "");
        setPhotoURL(currentUser.photoURL || "");

        try {
          const userDocRef = doc(db, 'users', currentUser.uid);
          const userSnap = await getDoc(userDocRef);
          
          if (userSnap.exists()) {
            const data = userSnap.data();
            if (data.name) setFullName(data.name);
            if (data.university) setUniversity(data.university);
            if (data.specialty) setSpecialty(data.specialty);
            if (data.photoURL) setPhotoURL(data.photoURL);
          }
        } catch (error) {
          console.error("Error cargando datos de Firestore:", error);
        }
      }
      setLoading(false);
    });
    
    return () => unsubscribe();
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      setPhotoURL(URL.createObjectURL(file));
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    
    setSaveStatus('saving');

    try {
      let finalPhotoURL = photoURL;

      // 1. Subir la imagen a AWS S3 si hay una nueva
      if (imageFile) {
        const fileExtension = imageFile.name.split('.').pop();
        const fileName = `profile_images/${user.uid}_${Date.now()}.${fileExtension}`;

        const params = {
          Bucket: import.meta.env.VITE_AWS_BUCKET_NAME,
          Key: fileName,
          Body: imageFile,
          ContentType: imageFile.type,
          ACL: 'public-read'
        };

        const uploadResult = await s3.upload(params).promise();
        finalPhotoURL = uploadResult.Location; 
      }

      // 2. Actualizar Auth
      await updateProfile(user, {
        displayName: fullName,
        photoURL: finalPhotoURL
      });

      // 3. Actualizar Firestore
      const userDocRef = doc(db, 'users', user.uid);
      await setDoc(userDocRef, {
        name: fullName,
        email: user.email,
        university: university,
        specialty: specialty,
        photoURL: finalPhotoURL,
        updatedAt: new Date()
      }, { merge: true });

      // Cambiamos a estado de éxito con visto SVG
      setSaveStatus('success');
      setImageFile(null);

      // Después de 3 segundos, regresamos el botón a su estado normal (amarillo)
      setTimeout(() => {
        setSaveStatus('idle');
      }, 3000);
      
    } catch (error) {
      console.error("Error guardando el perfil:", error);
      alert("Hubo un error al guardar el perfil.");
      setSaveStatus('idle');
    }
  };

  if (loading) return <div className={styles.pageContainer}><div className={styles.mainContent}>Cargando perfil...</div></div>;

  return (
    <div className={styles.pageContainer}>
      <main className={styles.mainContent}>
        
        <div className={styles.header}>
          <h1 className={styles.title}>Mi <span>perfil</span></h1>
          <p className={styles.subtitle}>Completa tus datos si quieres. Todo es opcional y puedes cambiarlo cuando quieras.</p>
        </div>

        {/* TARJETA FOTO DE PERFIL */}
        <div className={styles.card}>
          <div className={styles.photoRow}>
            <div className={styles.avatarBox}>
              <img 
                src={photoURL || chipIcon} 
                alt="Avatar" 
                className={styles.avatarImg} 
                style={!photoURL ? { width: '50px', height: '50px', filter: 'brightness(200%)' } : {}}
              />
            </div>
            <div className={styles.photoInfo}>
              <span className={styles.photoLabel}>FOTO</span>
              <p className={styles.emailText}>{user?.email || "usuario@correo.com"}</p>
              
              <input 
                type="file" 
                accept="image/*" 
                ref={fileInputRef}
                onChange={handleImageChange}
                style={{ display: 'none' }} 
              />
              
              <button 
                type="button" 
                className={styles.btnUpload} 
                onClick={handleUploadClick}
                disabled={saveStatus === 'saving'}
              >
                {imageFile ? 'Cambiar selección' : 'Subir foto'}
              </button>
              
              <p className={styles.photoHint}>
                Se recorta en cuadrado y se comprime en tu dispositivo.<br/>
                Sin foto, usamos tu ícono de Google o del grupo.
              </p>
            </div>
          </div>
        </div>

        {/* TARJETA DATOS */}
        <div className={styles.card}>
          <form className={styles.formGroup} onSubmit={handleSave}>
            
            <div className={styles.inputWrapper}>
              <label className={styles.label}>Nombres Completos</label>
              <input 
                type="text" 
                className={styles.input} 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Ej: Marko Rojas" 
                required
              />
            </div>

            <div className={styles.inputWrapper}>
              <label className={styles.label}>Universidad / Instituto</label>
              <select 
                className={styles.select} 
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
              >
                <option value="">Selecciona tu institución...</option>
                <optgroup label="Guayaquil">
                  <option value="ITB">Instituto Superior Universitario Bolivariano (ITB)</option>
                  <option value="ESPOL">Escuela Superior Politécnica del Litoral (ESPOL)</option>
                  <option value="UG">Universidad de Guayaquil (UG)</option>
                  <option value="TES">Tecnológico Espíritu Santo (TES)</option>
                </optgroup>
                <optgroup label="Quito">
                  <option value="EPN">Escuela Politécnica Nacional (EPN)</option>
                  <option value="USFQ">Universidad San Francisco de Quito (USFQ)</option>
                  <option value="PUCE">Pontificia Universidad Católica del Ecuador (PUCE)</option>
                </optgroup>
                <optgroup label="Cuenca">
                  <option value="UCUENCA">Universidad de Cuenca</option>
                  <option value="UPS">Universidad Politécnica Salesiana (UPS)</option>
                </optgroup>
                <optgroup label="Milagro">
                  <option value="UNEMI">Universidad Estatal de Milagro (UNEMI)</option>
                </optgroup>
                <optgroup label="Machala">
                  <option value="UTMACH">Universidad Técnica de Machala (UTMACH)</option>
                </optgroup>
                <option value="OTRA">Otra institución...</option>
              </select>
            </div>

            <div className={styles.inputWrapper}>
              <label className={styles.label}>Especialidad / Interés Principal</label>
              <select 
                className={styles.select} 
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
              >
                <option value="">Elige tu rama tecnológica...</option>
                <option value="mobile">📱 Desarrollo Móvil (Android/iOS, Kotlin, Compose)</option>
                <option value="frontend">🎨 Desarrollo Web Frontend (React, Vue, Tailwind)</option>
                <option value="backend">⚙️ Desarrollo Web Backend (Node, Python, Bases de Datos)</option>
                <option value="cloud">☁️ Arquitectura Cloud (AWS, GCP, Firebase)</option>
                <option value="ai">🤖 Inteligencia Artificial & Data Science</option>
                <option value="devops">🚀 DevOps & SecOps</option>
                <option value="iot">🔌 Internet de las Cosas (IoT) & Hardware</option>
                <option value="networking">🌐 Redes y Telecomunicaciones</option>
              </select>
            </div>

            {/* BOTÓN DINÁMICO */}
            <button 
              type="submit" 
              className={saveStatus === 'success' ? styles.btnSuccess : styles.btnSave} 
              disabled={saveStatus === 'saving' || saveStatus === 'success'}
            >
              {saveStatus === 'saving' && 'Guardando...'}
              {saveStatus === 'idle' && 'Guardar perfil'}
              {saveStatus === 'success' && (
                <>
                  <span>Guardado con éxito</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>

        <p className={styles.disclaimer}>
          Guardamos tu nombre, universidad, especialidad y foto para personalizar tu cuenta con el AWS Student Builder Group ITB. Tu foto se muestra en los tableros públicos de los eventos en los que participes; tus demás datos solo los ve el equipo organizador. Puedes modificar o solicitar la eliminación de tus datos cuando quieras. Tratamiento conforme a la <strong>Ley Orgánica de Protección de Datos Personales (LOPDP) de Ecuador</strong>.
        </p>

      </main>
    </div>
  );
}