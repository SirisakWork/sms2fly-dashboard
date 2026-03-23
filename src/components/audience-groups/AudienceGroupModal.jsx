import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, UploadCloud, FolderPlus, HelpCircle, Edit2 } from 'lucide-react';

const AudienceGroupModal = ({ isOpen, onClose, mode = 'create', initialData = null }) => {
    const [groupName, setGroupName] = useState('');
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        if (isOpen) {
            if (mode === 'edit' && initialData) {
                // eslint-disable-next-line react-hooks/set-state-in-effect
                setGroupName(initialData.name || '');
                setIsActive(initialData.active ?? true);
            } else {
                setGroupName('');
                setIsActive(true);
            }
        }
    }, [isOpen, mode, initialData]);

    if (!isOpen) return null;

    const isImport = mode === 'import';
    const isEdit = mode === 'edit';
    
    let title = 'สร้างกลุ่มลูกค้าใหม่';
    let primaryButtonText = 'สร้างกลุ่มลูกค้าใหม่';
    let headerIcon = <FolderPlus size={24} />;
    
    if (isImport) {
        title = 'นำเข้ากลุ่มลูกค้าใหม่';
        primaryButtonText = 'สร้างกลุ่มลูกค้าใหม่';
        headerIcon = <UploadCloud size={24} />;
    } else if (isEdit) {
        title = 'แก้ไขกลุ่มลูกค้า';
        primaryButtonText = 'บันทึกการแก้ไข';
        headerIcon = <Edit2 size={24} />;
    }

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
                maxWidth: '640px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden'
            }}>
                {/* Decorative Pattern Image - Mocked with CSS gradient like custom tags if asset missing, or just removed if not critical. We'll use a subtle radial gradient. */}
                <div style={{
                    position: 'absolute',
                    top: '-120px',
                    left: '-120px',
                    width: '336px',
                    height: '336px',
                    background: 'radial-gradient(50% 50% at 50% 50%, rgba(21, 113, 239, 0.04) 0%, rgba(21, 113, 239, 0) 100%)',
                    pointerEvents: 'none',
                    zIndex: 0
                }} />

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
                        backgroundColor: '#eff4ff',
                        color: '#1571ef',
                        border: '8px solid #f5f8ff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxSizing: 'content-box',
                        transform: 'translateX(-8px) translateY(-8px)'
                    }}>
                        {headerIcon}
                    </div>

                    <h2 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0, lineHeight: '28px' }}>
                        {title}
                    </h2>
                </div>

                {/* Form Section */}
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px', position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {/* Group Name Input */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <label style={{ fontSize: '14px', fontWeight: 500, color: '#344054', display: 'flex', gap: '2px' }}>
                                ชื่อกลุ่มลูกค้าใหม่ <span style={{ color: '#1571ef' }}>*</span>
                            </label>
                            <input 
                                type="text"
                                placeholder="เช่น Pixel_Facebook"
                                value={groupName}
                                onChange={(e) => setGroupName(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '10px 14px',
                                    borderRadius: '12px',
                                    border: '1px solid #cdd4de',
                                    backgroundColor: 'var(--bg-card)',
                                    boxShadow: '0px 1px 2px rgba(16,24,40,0.05)',
                                    fontSize: '16px',
                                    color: 'var(--text-primary)',
                                    outline: 'none',
                                    boxSizing: 'border-box'
                                }}
                            />
                        </div>

                        {/* Region Code Input (Mocked as disabled/readonly input with TH flag) */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <label style={{ fontSize: '14px', fontWeight: 500, color: '#344054', display: 'flex', gap: '2px' }}>
                                รหัสท้องถิ่น <span style={{ color: '#1571ef' }}>*</span>
                            </label>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                width: '100%',
                                padding: '10px 14px',
                                borderRadius: '12px',
                                border: '1px solid #cdd4de',
                                backgroundColor: 'var(--bg-card)',
                                boxShadow: '0px 1px 2px rgba(16,24,40,0.05)',
                                boxSizing: 'border-box'
                            }}>
                                <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#f1f5f9', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span style={{ fontSize: '12px' }}>🇹🇭</span>
                                </div>
                                <span style={{ fontSize: '16px', color: 'var(--text-secondary)' }}>+66 ประเทศไทย</span>
                            </div>
                        </div>

                        {/* Status Toggle */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '344px' }}>
                            <div 
                                onClick={() => setIsActive(!isActive)}
                                style={{
                                    width: '44px',
                                    height: '24px',
                                    backgroundColor: isActive ? '#1571ef' : '#f8fafc',
                                    borderRadius: '9999px',
                                    position: 'relative',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '2px',
                                    transition: 'background-color 0.2s',
                                    border: isActive ? 'none' : '1px solid var(--border)',
                                    boxSizing: 'border-box'
                                }}
                            >
                                <div style={{
                                    width: '20px',
                                    height: '20px',
                                    backgroundColor: 'var(--bg-card)',
                                    borderRadius: '50%',
                                    boxShadow: '0 1px 3px rgba(16,24,40,0.1)',
                                    transform: `translateX(${isActive ? '20px' : '0px'})`,
                                    transition: 'transform 0.2s',
                                }} />
                            </div>
                            <span style={{ fontSize: '16px', fontWeight: 500, color: '#344054' }}>
                                เปิดใช้งาน
                            </span>
                        </div>

                        {/* File Upload Area - ONLY on Import Mode */}
                        {isImport && (
                            <div style={{ width: '100%' }}>
                                <div style={{
                                    backgroundColor: '#f8fafc',
                                    border: '1px solid #f8fafc',
                                    borderRadius: '12px',
                                    padding: '24px 24px 16px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '12px',
                                    width: '100%',
                                    boxSizing: 'border-box'
                                }}>
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '8px',
                                        backgroundColor: '#eff4ff',
                                        color: '#1571ef',
                                        border: '6px solid #f5f8ff',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxSizing: 'content-box'
                                    }}>
                                        <UploadCloud size={20} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                                        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                                            <span style={{ fontSize: '14px', fontWeight: 600, color: '#175cd3', cursor: 'pointer' }}>อัปโหลดไฟล์</span>
                                            <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>ลากหรือวาง</span>
                                        </div>
                                        <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>รองรับไฟล์ CSV, TXT ขนาดไม่เกิน 5MB</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer Actions */}
                <div style={{ padding: '0 24px 24px 24px', display: 'flex', gap: '12px', position: 'relative', zIndex: 1 }}>
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
                        className="action-btn-primary"
                        onClick={onClose}
                        style={{
                            flex: 1,
                            height: '44px',
                            justifyContent: 'center',
                            borderRadius: '12px',
                            fontSize: '16px',
                            fontWeight: 600
                        }}
                    >
                        {primaryButtonText}
                    </button>
                </div>
            </div>
        </div>
    , document.body);
};

export default AudienceGroupModal;
