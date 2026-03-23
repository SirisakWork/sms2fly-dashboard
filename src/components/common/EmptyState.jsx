import React from 'react';
import { FolderOpen } from 'lucide-react';
import './EmptyState.css';

const EmptyState = ({ 
    icon: Icon = FolderOpen, 
    title = 'ไม่มีข้อมูลในขณะนี้', 
    description = 'ยังไม่มีข้อมูลในระบบ หรือคุณยังไม่ได้สร้างรายการใดๆ', 
    actionLabel, 
    onAction 
}) => {
    return (
        <div className="empty-state-container stagger-item">
            <div className="empty-state-icon">
                <Icon size={32} />
            </div>
            <h3 className="empty-state-title">{title}</h3>
            <p className="empty-state-description">{description}</p>
            
            {actionLabel && onAction && (
                <button 
                    className="action-btn-primary empty-state-action"
                    onClick={onAction}
                >
                    {actionLabel}
                </button>
            )}
        </div>
    );
};

export default EmptyState;
