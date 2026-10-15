import { useState } from 'react';
import AWS from 'aws-sdk';
import styles from './EmailConsentModal.module.css';
import { doc, setDoc } from 'firebase/firestore'; 
import { db } from '../../firebaseConfig';

// Configuración de AWS usando tus variables .env
AWS.config.update({
  accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
  secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
  region: import.meta.env.VITE_AWS_REGION
});

// Inicializamos el cliente de DynamoDB
const docClient = new AWS.DynamoDB.DocumentClient();

interface Props {
  user: any;
  onClose: () => void;
}

export default function EmailConsentModal({ user, onClose }: Props) {
  const [loading, setLoading] = useState(false);

  const handleResponse = async (accepted: boolean) => {
    setLoading(true);
    
    // Parámetros para guardar o actualizar el usuario en DynamoDB
    const params = {
      TableName: 'ITB_Users',
      Item: {
        uid: user.uid, // Usamos el ID de Firebase como clave principal en AWS
        email: user.email,
        name: user.displayName || "Builder ITB",
        newsletterOptIn: accepted,
        emailConsentPromptShown: true,
        updatedAt: new Date().toISOString()
      }
    };

    try {
      // ESTO YA LO TIENES: Guardamos en DynamoDB
      await docClient.put(params).promise();
      
      // AÑADE ESTAS DOS LÍNEAS AQUÍ ABAJO: Le avisamos a Firebase que ya se mostró
      const userRef = doc(db, 'users', user.uid);
      await setDoc(userRef, { emailConsentPromptShown: true }, { merge: true });

      console.log("Consentimiento guardado en AWS DynamoDB exitosamente");
    } catch (error) {
      console.error("Error guardando en DynamoDB:", error);
    } finally {
      setLoading(false);
      onClose();
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalCard}>
        <h3 className={styles.modalTitle}>¿Quieres enterarte de nuestros próximos eventos?</h3>
        
        <p className={styles.modalText}>
          Te escribiremos a <span className={styles.emailHighlight}>{user?.email}</span> solo cuando organicemos una nueva charla o evento del AWS Student Builder Group ITB. Si luego cambias de opinión, escríbenos a <span className={styles.emailHighlight}>student.awsl.eadersmarko@gmail.com</span>.
        </p>

        <div className={styles.buttonGroup}>
          <button 
            className={styles.btnPrimary} 
            onClick={() => handleResponse(true)}
            disabled={loading}
          >
            {loading ? 'Guardando...' : 'Sí, avísame'}
          </button>
          
          <button 
            className={styles.btnSecondary} 
            onClick={() => handleResponse(false)}
            disabled={loading}
          >
            No, gracias
          </button>
        </div>
      </div>
    </div>
  );
}