import React from 'react';
import { useToast } from '../../context/ToastContext';
import { CheckCircle2, XCircle, AlertTriangle, Info, X } from 'lucide-react';
import './Toast.css';

const iconMap = {
    success: <CheckCircle2 size={20} color="#12B76A" />,
    error: <XCircle size={20} color="#F04438" />,
    warning: <AlertTriangle size={20} color="#F79009" />,
    info: <Info size={20} color="#1A68FF" />
};

export const Toast = () => {
    const { toasts, removeToast } = useToast();

    // Avoid wrapping if no toasts exist
    if (toasts.length === 0) return null;

    return (
        <div className="toast-container" aria-live="polite">
            {toasts.map((toast) => (
                <div key={toast.id} className="toast-item toast-enter" role="status">
                    <div className="toast-icon">
                        {iconMap[toast.type] || iconMap.info}
                    </div>
                    <div className="toast-content">
                        {toast.title && <div className="toast-title">{toast.title}</div>}
                        <div className="toast-message">{toast.message}</div>
                    </div>
                    <button className="toast-close" onClick={() => removeToast(toast.id)} aria-label="Close">
                        <X size={16} />
                    </button>
                </div>
            ))}
        </div>
    );
};
