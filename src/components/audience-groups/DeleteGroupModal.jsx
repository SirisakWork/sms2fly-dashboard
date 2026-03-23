import React from 'react';
import { createPortal } from 'react-dom';
import { X, AlertCircle } from 'lucide-react';

const DeleteGroupModal = ({ isOpen, onClose, onConfirm, groupName }) => {
    if (!isOpen) return null;

    return createPortal(
        <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '32px'
        }}>
            {/* Backdrop Blur overlay */}
            <div 
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(12, 17, 29, 0.7)',
                    backdropFilter: 'blur(8px)',
                }}
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div style={{
                backgroundColor: 'var(--bg-primary, white)',
                borderRadius: 'var(--radius-2xl, 16px)',
                boxShadow: '0px 20px 24px -4px rgba(16,24,40,0.08), 0px 8px 8px -4px rgba(16,24,40,0.03)',
                width: '100%',
                maxWidth: '400px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden'
            }}>
                {/* Header Section */}
                <div style={{ 
                    padding: '24px 24px 0 24px', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '16px', 
                    position: 'relative', 
                    zIndex: 1 
                }}>
                    <button 
                        onClick={onClose}
                        style={{
                            position: 'absolute',
                            top: '16px',
                            right: '16px',
                            width: '44px',
                            height: '44px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            borderRadius: '8px',
                            color: 'var(--text-secondary)'
                        }}
                    >
                        <X size={24} />
                    </button>

                    <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '10px',
                        backgroundColor: '#fef3f2',
                        color: '#d92d20',
                        border: '8px solid #fef3f2',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxSizing: 'content-box',
                        transform: 'translateX(-8px) translateY(-8px)'
                    }}>
                        <AlertCircle size={24} />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <h2 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0, lineHeight: '28px' }}>
                            ยืนยันการลบกลุ่มลูกค้า?
                        </h2>
                        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: 0, lineHeight: '20px' }}>
                            คุณแน่ใจหรือไม่ว่าต้องการลบกลุ่ม <strong>{groupName || 'นี้'}</strong>? การกระทำนี้ไม่สามารถย้อนกลับได้ และข้อมูลที่เกี่ยวข้องจะถูกลบออกจากระบบ
                        </p>
                    </div>
                </div>

                {/* Footer Actions */}
                <div style={{ padding: '32px 24px 24px 24px', display: 'flex', gap: '12px', position: 'relative', zIndex: 1 }}>
                    <button 
                        onClick={onClose}
                        className="action-btn-secondary"
                        style={{
                            flex: 1,
                            height: '44px',
                            justifyContent: 'center',
                            borderRadius: '12px',
                            fontSize: '16px',
                            fontWeight: 600
                        }}
                    >
                        ยกเลิก
                    </button>
                    <button 
                        onClick={() => {
                            if (onConfirm) onConfirm();
                            onClose();
                        }}
                        style={{
                            flex: 1,
                            height: '44px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '12px',
                            fontSize: '16px',
                            fontWeight: 600,
                            backgroundColor: '#d92d20',
                            color: 'white',
                            border: '1px solid #d92d20',
                            boxShadow: '0px 1px 2px rgba(16,24,40,0.05)',
                            cursor: 'pointer'
                        }}
                    >
                        ยืนยันการลบ
                    </button>
                </div>
            </div>
        </div>
    , document.body);
};

export default DeleteGroupModal;
