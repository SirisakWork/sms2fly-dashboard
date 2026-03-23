import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Tag, X, ChevronDown } from 'lucide-react';

const TagModal = ({ isOpen, onClose, mode = 'add', initialData = null, onSave }) => {
    // Escape key to close
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

    const isAddMode = mode === 'add';
    const title = isAddMode ? 'สร้างแท็กใหม่' : 'แก้ไขแท็กใหม่';
    const buttonText = isAddMode ? 'สร้างและเผยแพร่แท็ก' : 'อัปเดตและเผยแพร่แท็ก';

    // Default form values
    const defaultData = {
        name: '',
        type: 'Asynchronous (แนะนำ)',
        condition: 'All Pageview',
        description: '',
        order: '0'
    };

    const formData = initialData || defaultData;
    
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
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)'
                }}
                onClick={onClose}
            />

            {/* Modal Content */}
            <div style={{
                backgroundColor: 'var(--bg-card)',
                width: '100%',
                maxWidth: '640px',
                borderRadius: 'var(--radius-lg)',
                boxShadow: '0px 20px 24px -4px rgba(16,24,40,0.08), 0px 8px 8px -4px rgba(16,24,40,0.03)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Decorative background pattern */}
                <div style={{
                    position: 'absolute',
                    left: '-120px',
                    top: '-120px',
                    width: '336px',
                    height: '336px',
                    pointerEvents: 'none'
                }}>
                      <svg width="336" height="336" viewBox="0 0 336 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="168" cy="168" r="168" fill="url(#paint0_radial)" opacity="0.3"/>
                        <defs>
                          <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(168 168) rotate(90) scale(168)">
                            <stop stopColor="var(--bg-hover)"/>
                            <stop offset="1" stopColor="var(--bg-hover)" stopOpacity="0"/>
                          </radialGradient>
                        </defs>
                      </svg>
                </div>

                {/* Header */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
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
                                borderRadius: '10px',
                                backgroundColor: isAddMode ? '#1571ef' : '#fac515',
                                transform: 'rotate(15deg)',
                                opacity: 1
                            }} />
                        </div>
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            backdropFilter: 'blur(8px)',
                            WebkitBackdropFilter: 'blur(8px)',
                            backgroundColor: 'var(--bg-glass)',
                            border: '1px solid var(--border-glass)',
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 10
                        }}>
                            <Tag size={24} color={isAddMode ? "#1571ef" : "#ca8a04"} strokeWidth={2} />
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '100%' }}>
                        <p style={{
                            fontWeight: 600,
                            fontSize: '18px',
                            color: 'var(--text-primary)',
                            lineHeight: '28px',
                            margin: 0
                        }}>
                            {title}
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

                    {/* Padding bottom substitute */}
                    <div style={{ height: '20px', width: '100%' }} />
                </div>

                {/* Form Content */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    padding: '0 24px',
                    width: '100%'
                }}>

                    {/* Tag Name */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%' }}>
                        <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
                            <label style={{ fontWeight: 500, fontSize: '14px', color: '#344054', margin: 0 }}>ชื่อแท็ก</label>
                            <span style={{ color: '#1571ef' }}>*</span>
                        </div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '10px 14px',
                            backgroundColor: 'var(--bg-card)',
                            border: '1px solid #cdd4de',
                            borderRadius: '12px',
                            boxShadow: '0px 1px 2px 0px rgba(16,24,40,0.05)',
                            width: '100%'
                        }}>
                            <input
                                type="text"
                                placeholder={isAddMode ? "เช่น Pixel_Facebook" : "SMS"}
                                defaultValue={formData.name}
                                style={{ border: 'none', outline: 'none', width: '100%', fontSize: '16px', color: 'var(--text-primary)' }}
                            />
                        </div>
                        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: 0 }}>ควรตั้งชื่อที่สื่อความหมายและเข้าใจง่าย เพื่อความสะดวกในการจัดการภายหลัง</p>
                    </div>

                    {/* Types and Conditions */}
                    <div style={{ display: 'flex', gap: '16px', width: '100%' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
                            <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
                                <label style={{ fontWeight: 500, fontSize: '14px', color: '#344054', margin: 0 }}>ประเภทแท็ก</label>
                                <span style={{ color: '#1571ef' }}>*</span>
                            </div>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '10px 14px',
                                backgroundColor: 'var(--bg-card)',
                                border: '1px solid #cdd4de',
                                borderRadius: '12px',
                                boxShadow: '0px 1px 2px 0px rgba(16,24,40,0.05)',
                                width: '100%',
                                position: 'relative'
                            }}>
                                <select
                                    defaultValue={formData.type}
                                    style={{
                                        border: 'none',
                                        outline: 'none',
                                        width: '100%',
                                        fontSize: '16px',
                                        color: 'var(--text-primary)',
                                        appearance: 'none',
                                        backgroundColor: 'transparent',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <option value="Asynchronous (แนะนำ)">Asynchronous (แนะนำ)</option>
                                    <option value="Synchronous">Synchronous</option>
                                </select>
                                <div style={{ position: 'absolute', right: '14px', pointerEvents: 'none', display: 'flex', alignItems: 'center' }}>
                                    <ChevronDown size={20} color="#667085" />
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
                            <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
                                <label style={{ fontWeight: 500, fontSize: '14px', color: '#344054', margin: 0 }}>เงื่อนไข</label>
                                <span style={{ color: '#1571ef' }}>*</span>
                            </div>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '10px 14px',
                                backgroundColor: 'var(--bg-card)',
                                border: '1px solid #cdd4de',
                                borderRadius: '12px',
                                boxShadow: '0px 1px 2px 0px rgba(16,24,40,0.05)',
                                width: '100%',
                                position: 'relative'
                            }}>
                                <select
                                    defaultValue={formData.condition}
                                    style={{
                                        border: 'none',
                                        outline: 'none',
                                        width: '100%',
                                        fontSize: '16px',
                                        color: 'var(--text-primary)',
                                        appearance: 'none',
                                        backgroundColor: 'transparent',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <option value="All Pageview">All Pageview</option>
                                    <option value="Specific Pages">Specific Pages</option>
                                </select>
                                <div style={{ position: 'absolute', right: '14px', pointerEvents: 'none', display: 'flex', alignItems: 'center' }}>
                                    <ChevronDown size={20} color="#667085" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%' }}>
                        <label style={{ fontWeight: 500, fontSize: '14px', color: '#344054', margin: 0 }}>คำอธิบายแท็ก</label>
                        <div style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            padding: '12px 14px',
                            backgroundColor: 'var(--bg-card)',
                            border: '1px solid #cdd4de',
                            borderRadius: '12px',
                            boxShadow: '0px 1px 2px 0px rgba(16,24,40,0.05)',
                            width: '100%',
                            height: '180px',
                            position: 'relative'
                        }}>
                           <textarea 
                                placeholder="ระบุรายละเอียดหรือวัตถุประสงค์ของแท็กนี้…."
                                defaultValue={formData.description}
                                style={{
                                    border: 'none',
                                    outline: 'none',
                                    width: '100%',
                                    height: '100%',
                                    fontSize: '16px',
                                    color: 'var(--text-primary)',
                                    resize: 'none',
                                    backgroundColor: 'transparent'
                                }}
                           />
                            <svg style={{ position: 'absolute', bottom: '8px', right: '8px', width: '12px', height: '12px', pointerEvents: 'none', opacity: 0.5 }} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 2L2 10M10 5L5 10M10 8L8 10" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '16px', width: '100%' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
                            <label style={{ fontWeight: 500, fontSize: '14px', color: '#344054', margin: 0 }}>ชื่อ</label>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '10px 14px',
                                backgroundColor: 'var(--bg-card)',
                                border: '1px solid #cdd4de',
                                borderRadius: '12px',
                                boxShadow: '0px 1px 2px 0px rgba(16,24,40,0.05)',
                                width: '100%'
                            }}>
                                <input
                                    type="text"
                                    placeholder="0"
                                    defaultValue={formData.order}
                                    style={{ border: 'none', outline: 'none', width: '100%', fontSize: '16px', color: 'var(--text-primary)' }}
                                />
                            </div>
                            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: 0 }}>ตัวเลขยิ่งน้อย จะยิ่งถูกเรียกใช้งานก่อน (เริ่มต้นที่ 0)</p>
                        </div>
                        <div style={{ flex: 1 }}></div> {/* Empty space to match design row layout */}
                    </div>

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
                            backgroundColor: 'transparent',
                            border: '1px solid var(--border)',
                            borderRadius: '12px',
                            fontWeight: 600,
                            fontSize: '16px',
                            color: 'var(--text-secondary)',
                            cursor: 'pointer'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-hover)'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                        ยกเลิก
                    </button>
                    <button
                        onClick={onSave}
                        style={{
                            flex: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '10px 16px',
                            backgroundColor: '#1571ef',
                            border: '2px solid rgba(255,255,255,0.12)',
                            borderRadius: '12px',
                            fontWeight: 600,
                            fontSize: '16px',
                            color: '#fff',
                            boxShadow: '0px 1px 2px 0px rgba(16,24,40,0.05)',
                            cursor: 'pointer'
                        }}
                    >
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    , document.body);
};

export default TagModal;
