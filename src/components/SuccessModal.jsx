import React from 'react';
import { createPortal } from 'react-dom';
import { CheckCircle2 } from 'lucide-react';

const SuccessModal = ({ isOpen, onClose, title, description, buttonText }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="auth-modal-overlay">
      <div className="auth-modal-content">
        <div className="auth-icon-container" style={{ marginBottom: '16px' }}>
          <div className="auth-icon-circle success" style={{ margin: '0 auto' }}>
            <CheckCircle2 size={32} />
          </div>
        </div>
        
        <h3 className="auth-modal-title">{title}</h3>
        <p className="auth-modal-desc">{description}</p>
        
        <button 
          className="auth-btn primary-btn btn-full" 
          onClick={onClose}
        >
          {buttonText || 'ตกลง'}
        </button>
      </div>
    </div>
  , document.body);
};

export default SuccessModal;
