import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { X, UserPlus, UploadCloud, ChevronDown } from 'lucide-react';

export default function AddSenderModal({ isOpen, onClose }) {
    const [senderName, setSenderName] = useState('');
    const [company, setCompany] = useState('');
    const [category, setCategory] = useState('');
    const [verificationMethod, setVerificationMethod] = useState('document'); // 'document' | 'url'
    const [companyUrl, setCompanyUrl] = useState('');
    const [description, setDescription] = useState('');

    if (!isOpen) return null;

    const handleCreate = () => {
        console.log({ senderName, company, category, verificationMethod, companyUrl, description });
        onClose();
    };

    return createPortal(
        <div style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Backdrop Blur Overlay */}
            <div
                style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(12, 17, 29, 0.7)', backdropFilter: 'blur(8px)' }}
                onClick={onClose}
            ></div>

            {/* Modal Container */}
            <div style={{ position: 'relative', width: '640px', maxWidth: '95vw', backgroundColor: 'var(--bg-card, white)', borderRadius: 'var(--radius-2xl, 16px)', boxShadow: '0px 20px 24px -4px rgba(16,24,40,0.08), 0px 8px 8px -4px rgba(16,24,40,0.03)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

                {/* Header Section */}
                <div style={{ padding: '24px 24px 24px 24px', display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative' }}>
                    {/* Featured Icon */}
                    <div style={{ position: 'relative', width: '48px', height: '48px', flexShrink: 0 }}>
                        {/* Soft blue offset square to simulate the glass effect */}
                        <div style={{ position: 'absolute', top: '-2px', left: '-2px', width: '52px', height: '52px', backgroundColor: '#e0eaff', borderRadius: '12px', zIndex: 0 }}></div>
                        <div style={{ position: 'relative', width: '48px', height: '48px', backgroundColor: '#1571ef', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1, boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)' }}>
                            <UserPlus size={24} color="white" />
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
                        <h2 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>
                            สร้างผู้ส่งใหม่
                        </h2>
                    </div>

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        style={{ position: 'absolute', top: '16px', right: '16px', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer', borderRadius: '8px' }}
                    >
                        <X size={24} color="#667085" />
                    </button>
                </div>

                {/* Content Area */}
                <div style={{ padding: '0 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    
                    {/* Sender Name Input */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
                             <label style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-secondary)' }}>ชื่อผู้ส่ง</label>
                             <span style={{ color: '#1571ef', fontSize: '14px', fontWeight: 500 }}>*</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #cdd4de', borderRadius: '12px', padding: '10px 14px', backgroundColor: 'var(--bg-card)', boxShadow: '0px 1px 2px rgba(16,24,40,0.05)' }}>
                            <input
                                type="text"
                                placeholder="เช่น Pixel_Facebook"
                                value={senderName}
                                onChange={(e) => setSenderName(e.target.value)}
                                style={{ border: 'none', outline: 'none', flex: 1, fontSize: '16px', color: 'var(--text-primary)', backgroundColor: 'transparent' }}
                            />
                        </div>
                        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: 0 }}>
                            ควรตั้งชื่อที่สื่อความหมายและเข้าใจง่าย เพื่อความสะดวกในการจัดการภายหลัง
                        </p>
                    </div>

                    {/* Company and Category Row */}
                    <div style={{ display: 'flex', gap: '16px' }}>
                        {/* Company Input */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
                            <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
                                 <label style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-secondary)' }}>บริษัท</label>
                                 <span style={{ color: '#1571ef', fontSize: '14px', fontWeight: 500 }}>*</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #cdd4de', borderRadius: '12px', padding: '10px 14px', backgroundColor: 'var(--bg-card)', boxShadow: '0px 1px 2px rgba(16,24,40,0.05)' }}>
                                <input
                                    type="text"
                                    placeholder="ระบุชื่อบริษัท"
                                    value={company}
                                    onChange={(e) => setCompany(e.target.value)}
                                    style={{ border: 'none', outline: 'none', flex: 1, fontSize: '16px', color: 'var(--text-primary)', backgroundColor: 'transparent' }}
                                />
                            </div>
                        </div>

                        {/* Category Dropdown */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
                            <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
                                 <label style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-secondary)' }}>หมวดหมู่</label>
                                 <span style={{ color: '#1571ef', fontSize: '14px', fontWeight: 500 }}>*</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #cdd4de', borderRadius: '12px', padding: '10px 14px', backgroundColor: 'var(--bg-card)', boxShadow: '0px 1px 2px rgba(16,24,40,0.05)', position: 'relative', cursor: 'pointer' }}>
                                <select 
                                    style={{ width: '100%', border: 'none', outline: 'none', appearance: 'none', fontSize: '16px', color: category ? 'var(--text-primary)' : 'var(--text-tertiary)', backgroundColor: 'transparent', cursor: 'pointer' }}
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                    <option value="" disabled hidden>การตลาด</option>
                                    <option value="marketing">การตลาด</option>
                                    <option value="transactional">การจัดการ (Transactional)</option>
                                    <option value="otp">ระบบ OTP</option>
                                </select>
                                <ChevronDown size={20} color="#667085" style={{ pointerEvents: 'none', position: 'absolute', right: '14px' }} />
                            </div>
                        </div>
                    </div>

                    {/* Verification Method: Document */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <label 
                            style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', userSelect: 'none' }}
                            onClick={() => setVerificationMethod('document')}
                        >
                            <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: verificationMethod === 'document' ? '6px solid #1571ef' : '1px solid #cdd4de', backgroundColor: 'var(--bg-card)', transition: 'all 0.2s' }}></div>
                            <span style={{ fontSize: '16px', fontWeight: 500, color: 'var(--text-secondary)' }}>เอกสารบริษัท</span>
                        </label>
                        
                        {/* Show dropzone only if document is selected */}
                        {verificationMethod === 'document' && (
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 24px', backgroundColor: 'var(--bg-body, #f8fafc)', cursor: 'pointer', marginLeft: '28px' }}>
                                <div style={{ position: 'relative', width: '40px', height: '40px', flexShrink: 0 }}>
                                    <div style={{ position: 'absolute', top: '-1px', left: '-1px', width: '42px', height: '42px', backgroundColor: '#e0eaff', borderRadius: '10px', zIndex: 0 }}></div>
                                    <div style={{ position: 'relative', width: '40px', height: '40px', backgroundColor: '#1571ef', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
                                        <UploadCloud size={20} color="white" />
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                                    <p style={{ fontSize: '14px', color: '#1571ef', fontWeight: 600, margin: 0 }}>อัปโหลดไฟล์ <span style={{ color: 'var(--text-tertiary)', fontWeight: 400 }}>ลากหรือวาง</span></p>
                                    <p style={{ fontSize: '12px', color: 'var(--text-tertiary)', margin: 0 }}>รองรับไฟล์ CSV, TXT ขนาดไม่เกิน 5MB</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Verification Method: URL */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <label 
                            style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', userSelect: 'none' }}
                            onClick={() => setVerificationMethod('url')}
                        >
                            <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: verificationMethod === 'url' ? '6px solid #1571ef' : '1px solid #cdd4de', backgroundColor: 'var(--bg-card)', transition: 'all 0.2s' }}></div>
                            <span style={{ fontSize: '16px', fontWeight: 500, color: 'var(--text-secondary)' }}>URL บริษัท</span>
                        </label>

                        {/* Show input only if URL is selected */}
                        {verificationMethod === 'url' && (
                            <div style={{ marginLeft: '28px', display: 'flex', alignItems: 'center', border: '1px solid #cdd4de', borderRadius: '12px', padding: '10px 14px', backgroundColor: 'var(--bg-card)', boxShadow: '0px 1px 2px rgba(16,24,40,0.05)' }}>
                                <input
                                    type="text"
                                    placeholder="https://www.example.com"
                                    value={companyUrl}
                                    onChange={(e) => setCompanyUrl(e.target.value)}
                                    style={{ border: 'none', outline: 'none', flex: 1, fontSize: '16px', color: 'var(--text-primary)', backgroundColor: 'transparent' }}
                                />
                            </div>
                        )}
                    </div>

                    {/* Description Textarea */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <label style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-secondary)' }}>
                            คำอธิบาย
                        </label>
                        <div style={{ display: 'flex', border: '1px solid #cdd4de', borderRadius: '12px', padding: '12px 14px', backgroundColor: 'var(--bg-card)', boxShadow: '0px 1px 2px rgba(16,24,40,0.05)', minHeight: '180px' }}>
                            <textarea
                                placeholder="ระบุรายละเอียดหรือวัตถุประสงค์ของแท็กนี้...."
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                style={{ border: 'none', outline: 'none', flex: 1, fontSize: '16px', color: 'var(--text-primary)', backgroundColor: 'transparent', resize: 'vertical', minHeight: '156px', fontFamily: 'inherit' }}
                            />
                        </div>
                    </div>

                </div>

                {/* Actions */}
                <div style={{ padding: '32px 24px 24px 24px', display: 'flex', gap: '12px', marginTop: 'auto' }}>
                    <button
                        onClick={onClose}
                        className="action-btn-outline"
                        style={{ flex: 1, padding: '10px 16px', borderRadius: '12px', border: '1px solid var(--border)', backgroundColor: 'var(--bg-card)' }}
                    >
                        <span style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-secondary)' }}>ยกเลิก</span>
                    </button>
                    <button
                        onClick={handleCreate}
                        disabled={!senderName || !company || !category}
                        className="action-btn-primary"
                        style={{ flex: 1, padding: '10px 16px', borderRadius: '12px', backgroundColor: '#1571ef', border: '1px solid rgba(255,255,255,0.12)', opacity: (senderName && company && category) ? 1 : 0.7, cursor: (senderName && company && category) ? 'pointer' : 'not-allowed', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0px 1px 2px rgba(16,24,40,0.05)' }}
                    >
                        <span style={{ fontSize: '16px', fontWeight: 600, color: 'white' }}>สร้างผู้ส่งใหม่</span>
                    </button>
                </div>
            </div>
        </div>
    , document.body);
}
