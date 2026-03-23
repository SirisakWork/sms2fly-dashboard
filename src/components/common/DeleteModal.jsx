import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Trash2, X } from 'lucide-react';

const DeleteModal = ({
    isOpen,
    onClose,
    onConfirm,
    title = 'ลบรายการนี้?',
    description = 'คุณแน่ใจหรือไม่ว่าต้องการลบรายการนี้? การดำเนินการนี้ไม่สามารถย้อนกลับได้',
    confirmText = 'ลบรายการ',
    cancelText = 'ยกเลิก',
    isDeleting = false
}) => {

    // Handle Escape key to close
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return createPortal(
        <div
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 9999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px'
            }}
        >
            {/* Backdrop */}
            <div
                onClick={onClose}
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(12, 17, 29, 0.7)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)'
                }}
            />

            {/* Modal Container */}
            <div
                style={{
                    position: 'relative',
                    background: 'var(--bg-card)',
                    borderRadius: '16px',
                    width: '100%',
                    maxWidth: '400px',
                    boxShadow: '0px 20px 24px -4px rgba(16,24,40,0.08), 0px 8px 8px -4px rgba(16,24,40,0.03)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                {/* Close Button Top Right */}
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '16px',
                        right: '16px',
                        padding: '8px',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        color: 'var(--text-tertiary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '8px',
                        zIndex: 10
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                    <X size={24} />
                </button>

                {/* Content Area */}
                <div style={{ padding: '24px 24px 0 24px', paddingTop: '40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

                    {/* Icon Header */}
                    <div style={{ position: 'relative', width: '48px', height: '48px' }}>
                        {/* Red background layer */}
                        <div style={{
                            position: 'absolute',
                            width: '48px',
                            height: '48px',
                            backgroundColor: '#fee4e2', // Light red outer
                            borderRadius: '28px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <div style={{
                                width: '36px',
                                height: '36px',
                                backgroundColor: '#fee4e2',
                                borderRadius: '28px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    backgroundColor: '#d92d20', // Main red
                                    borderRadius: '10px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: '0 0 0 4px #fee4e2'
                                }}>
                                    <Trash2 size={24} color="#ffffff" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Texts */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <h3 style={{
                            fontSize: '18px',
                            fontWeight: 600,
                            color: 'var(--text-primary)',
                            margin: 0,
                            fontFamily: 'var(--font-family-body, "Anuphan")'
                        }}>
                            {title}
                        </h3>
                        <p style={{
                            fontSize: '14px',
                            color: 'var(--text-tertiary)',
                            margin: 0,
                            lineHeight: '20px',
                            fontWeight: 400,
                            fontFamily: 'var(--font-family-body, "Anuphan")'
                        }}>
                            {description}
                        </p>
                    </div>

                </div>

                {/* Actions */}
                <div style={{
                    padding: '32px 24px 24px 24px',
                    display: 'flex',
                    gap: '12px',
                    width: '100%'
                }}>
                    <button
                        onClick={onClose}
                        disabled={isDeleting}
                        className="action-btn-secondary"
                        style={{
                            flex: 1,
                            height: '44px',
                            borderRadius: '12px',
                            fontWeight: 600,
                            fontSize: '16px',
                            backgroundColor: 'var(--bg-card)',
                            color: '#344054',
                            border: '1px solid #cdd4de',
                            cursor: isDeleting ? 'not-allowed' : 'pointer'
                        }}
                    >
                        {cancelText}
                    </button>
                    <button
                        onClick={onConfirm}
                        disabled={isDeleting}
                        style={{
                            flex: 1,
                            height: '44px',
                            borderRadius: '12px',
                            fontWeight: 600,
                            fontSize: '16px',
                            backgroundColor: '#d92d20',
                            color: '#ffffff',
                            border: '1px solid #d92d20',
                            boxShadow: '0px 1px 2px 0px rgba(16,24,40,0.05)',
                            cursor: isDeleting ? 'not-allowed' : 'pointer',
                            opacity: isDeleting ? 0.7 : 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        {isDeleting ? 'กำลังลบ...' : confirmText}
                    </button>
                </div>
            </div>
        </div>
    , document.body);
};

export default DeleteModal;
