// components/SuccessModal.tsx
'use client';
import React from 'react';
import { CheckCircle, X } from 'lucide-react';
import styles from './SuccessModal.module.css';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          <X size={20} />
        </button>

        <div className={styles.successIcon}>
          <CheckCircle size={64} />
        </div>

        <h2 className={styles.title}>Reserva Confirmada!</h2>
        
        <p className={styles.message}>
          Sua reserva foi realizada com sucesso! Entraremos em contato em breve.
        </p>

        <button className={styles.okButton} onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;