import React from 'react';
import { createPortal } from 'react-dom';
import { Trash2, AlertTriangle, X } from 'lucide-react';

const DeleteConfirmModal = ({ isOpen, onClose, itemName, onDelete }) => {
    if (!isOpen) return null;

    return createPortal(
        <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '32px'
        }}>
            {/* Backdrop overlay */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(12, 17, 29, 0.7)',
                    backdropFilter: 'blur(8px)'
                }}
                onClick={onClose}
            />

            {/* Modal Content */}
            <div style={{
                backgroundColor: 'var(--bg-card)',
                width: '100%',
                maxWidth: '400px',
                borderRadius: 'var(--radius-lg)',
                boxShadow: '0px 20px 24px -4px rgba(16,24,40,0.08), 0px 8px 8px -4px rgba(16,24,40,0.03)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden'
            }}>

                {/* Header */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '24px 24px 0px 24px',
                    width: '100%',
                    position: 'relative'
                }}>
                    <div style={{
                        position: 'relative',
                        width: '48px',
                        height: '48px',
                        flexShrink: 0
                    }}>
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <div style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '24px',
                                backgroundColor: '#fee4e2',
                            }} />
                        </div>
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 10
                        }}>
                            <Trash2 size={24} color="#d92d20" strokeWidth={2} />
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%', textAlign: 'center' }}>
                        <p style={{
                            fontWeight: 600,
                            fontSize: '18px',
                            color: 'var(--text-primary)',
                            lineHeight: '28px',
                            margin: 0
                        }}>
                            ยืนยันการลบรายการ
                        </p>
                        <p style={{
                            fontWeight: 400,
                            fontSize: '14px',
                            color: 'var(--text-tertiary)',
                            lineHeight: '20px',
                            margin: 0
                        }}>
                            คุณแน่ใจหรือไม่ว่าต้องการลบรายการของ "{itemName}"? การกระทำนี้ไม่สามารถยกเลิกได้
                        </p>
                    </div>

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        style={{
                            position: 'absolute',
                            top: '16px',
                            right: '16px',
                            width: '44px',
                            height: '44px',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '8px',
                            backgroundColor: 'transparent',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-body)'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                        <X size={24} color="#667085" />
                    </button>

                </div>

                {/* Footer Actions */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '32px 24px 24px 24px',
                    width: '100%'
                }}>
                    <button
                        onClick={onClose}
                        style={{
                            flex: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '10px 16px',
                            backgroundColor: 'var(--bg-card)',
                            border: '1px solid #cdd4de',
                            borderRadius: '12px',
                            fontWeight: 600,
                            fontSize: '16px',
                            color: '#344054',
                            cursor: 'pointer'
                        }}
                    >
                        ยกเลิก
                    </button>
                    <button
                        onClick={() => {
                            if (onDelete) onDelete();
                            onClose();
                        }}
                        style={{
                            flex: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '10px 16px',
                            backgroundColor: '#d92d20',
                            border: '1px solid #d92d20',
                            borderRadius: '12px',
                            fontWeight: 600,
                            fontSize: '16px',
                            color: '#fff',
                            boxShadow: '0px 1px 2px 0px rgba(16,24,40,0.05)',
                            cursor: 'pointer'
                        }}
                    >
                        ลบรายการ
                    </button>
                </div>
            </div>
        </div>
    , document.body);
};

export default DeleteConfirmModal;
