import React from 'react';
import { createPortal } from 'react-dom';
import { UserPlus, UserCircle, X, ChevronDown } from 'lucide-react'; // Fallback icon instead of UserEdit

const CustomerModal = ({ isOpen, onClose, mode = 'add', initialData = null }) => {
    if (!isOpen) return null;

    const isAddMode = mode === 'add';
    const title = isAddMode ? 'เพิ่มลูกค้าใหม่ ' : 'แก้ไขข้อมูลลูกค้า ';
    const buttonText = isAddMode ? 'เพิ่มลูกค้าใหม่' : 'บันทึกการแก้ไข';

    // Default form values if no initialData provided
    const defaultData = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        role: '',
        status: 'ใช้งาน'
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
                    backdropFilter: 'blur(8px)'
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
                {/* Decorative background pattern (omitted for simplicity, but reserved space if needed) */}

                {/* Header */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '16px',
                    padding: '40px 24px 0px 24px',
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
                            backgroundColor: 'var(--bg-glass)',
                            border: '1px solid var(--border-glass)',
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 10
                        }}>
                            {isAddMode ? (
                                <UserPlus size={24} color="#1571ef" strokeWidth={2} />
                            ) : (
                                <UserCircle size={24} color="#ca8a04" strokeWidth={2} />
                            )}
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
                        <p style={{
                            fontWeight: 400,
                            fontSize: '14px',
                            color: 'var(--text-tertiary)',
                            lineHeight: '20px',
                            margin: 0
                        }}>
                            (แบรนด์หลัก)
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
                    gap: '0px',
                    padding: '0 24px',
                    width: '100%'
                }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>

                        {/* Row 1: Name, Last Name */}
                        <div style={{ display: 'flex', gap: '16px', width: '100%', alignItems: 'flex-start' }}>
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
                                        placeholder="ระบุชื่อ"
                                        defaultValue={formData.firstName}
                                        style={{ border: 'none', outline: 'none', width: '100%', fontSize: '16px', color: 'var(--text-primary)' }}
                                    />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
                                <label style={{ fontWeight: 500, fontSize: '14px', color: '#344054', margin: 0 }}>นามสกุล</label>
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
                                        placeholder="ระบุนามสกุล"
                                        defaultValue={formData.lastName}
                                        style={{ border: 'none', outline: 'none', width: '100%', fontSize: '16px', color: 'var(--text-primary)' }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Row 2: Email */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%' }}>
                            <label style={{ fontWeight: 500, fontSize: '14px', color: '#344054', margin: 0 }}>อีเมล</label>
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
                                    type="email"
                                    placeholder="sample@gmail.com"
                                    defaultValue={formData.email}
                                    style={{ border: 'none', outline: 'none', width: '100%', fontSize: '16px', color: 'var(--text-primary)' }}
                                />
                            </div>
                        </div>

                        {/* Row 3: Phone (visible in edit mode, but we will make it visible in both for consistency, based on typical user feedback unless explicitly told to hide in add mode) */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%' }}>
                            <label style={{ fontWeight: 500, fontSize: '14px', color: '#344054', margin: 0 }}>เบอร์โทร</label>
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
                                    type="tel"
                                    placeholder="(+000)-123-4567"
                                    defaultValue={formData.phone}
                                    style={{ border: 'none', outline: 'none', width: '100%', fontSize: '16px', color: 'var(--text-primary)' }}
                                />
                            </div>
                        </div>

                        {/* Row 4: Company, Role */}
                        <div style={{ display: 'flex', gap: '16px', width: '100%', alignItems: 'flex-start' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
                                <label style={{ fontWeight: 500, fontSize: '14px', color: '#344054', margin: 0 }}>บริษัท</label>
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
                                        placeholder="ชื่อองค์กร"
                                        defaultValue={formData.company}
                                        style={{ border: 'none', outline: 'none', width: '100%', fontSize: '16px', color: 'var(--text-primary)' }}
                                    />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
                                <label style={{ fontWeight: 500, fontSize: '14px', color: '#344054', margin: 0 }}>ตำแหน่ง</label>
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
                                        defaultValue={formData.role || "เลือกตำแหน่งงาน"}
                                        style={{
                                            border: 'none',
                                            outline: 'none',
                                            width: '100%',
                                            fontSize: '16px',
                                            color: formData.role ? 'var(--text-primary)' : 'var(--text-placeholder)',
                                            appearance: 'none',
                                            backgroundColor: 'transparent',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <option disabled value="เลือกตำแหน่งงาน">เลือกตำแหน่งงาน</option>
                                        <option value="แอดมิน">แอดมิน</option>
                                        <option value="การตลาด">การตลาด</option>
                                    </select>
                                    <div style={{ position: 'absolute', right: '14px', pointerEvents: 'none', display: 'flex', alignItems: 'center' }}>
                                        <ChevronDown size={20} color="#667085" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Row 5: Status */}
                        <div style={{ display: 'flex', gap: '16px', width: '100%', alignItems: 'flex-start' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '280px' }}>
                                <label style={{ fontWeight: 500, fontSize: '14px', color: '#344054', margin: 0 }}>สถานะ</label>
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
                                        defaultValue={formData.status}
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
                                        <option value="ใช้งาน">ใช้งาน</option>
                                        <option value="ไม่ใช้">ไม่ใช้</option>
                                        <option value="รออนุมัติ">รออนุมัติ</option>
                                    </select>
                                    <div style={{ position: 'absolute', right: '14px', pointerEvents: 'none', display: 'flex', alignItems: 'center' }}>
                                        <ChevronDown size={20} color="#667085" />
                                    </div>
                                </div>
                            </div>
                        </div>

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

export default CustomerModal;
