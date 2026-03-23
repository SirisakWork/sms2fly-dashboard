import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Globe, Info, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';

export default function AddDomainModal({ isOpen, onClose }) {
    const [step, setStep] = useState(1);
    const [domainName, setDomainName] = useState('');

    // Reset state when modal opens
    useEffect(() => {
        if (isOpen) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setStep(1);
            setDomainName('');
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleNext = () => setStep(2);
    const handleBack = () => setStep(1);
    const handleCreate = () => {
        // Mock creation
        console.log("Domain Created:", domainName);
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
            <div style={{ position: 'relative', width: '800px', backgroundColor: 'var(--bg-card, white)', borderRadius: 'var(--radius-2xl, 16px)', boxShadow: '0px 20px 24px -4px rgba(16,24,40,0.08), 0px 8px 8px -4px rgba(16,24,40,0.03)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

                {/* Decorative Background Pattern */}
                <div style={{ position: 'absolute', left: '-120px', top: '-120px', width: '336px', height: '336px', pointerEvents: 'none' }}>
                    <div style={{ position: 'absolute', left: '50%', top: 0, width: '336px', height: '336px', transform: 'translateX(-50%)', maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)' }}>
                        <div style={{ width: '100%', height: '100%', backgroundColor: 'rgba(152, 162, 179, 0.05)', backgroundImage: 'linear-gradient(90deg, transparent 19px, rgba(152, 162, 179, 0.2) 20px), linear-gradient(transparent 19px, rgba(152, 162, 179, 0.2) 20px)', backgroundSize: '20px 20px' }} />
                    </div>
                </div>

                {/* Header */}
                <div style={{ position: 'relative', paddingTop: '40px', paddingLeft: '24px', paddingRight: '24px', paddingBottom: '0px' }}>

                    {/* Icon Container */}
                    <div style={{ width: '48px', height: '48px', position: 'relative', marginBottom: '16px' }}>
                        <div style={{ position: 'absolute', left: '0', top: '0', width: '48px', height: '48px', backgroundColor: 'var(--bg-glass)', backdropFilter: 'blur(8px)', border: '1px solid var(--border-glass)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
                            <Globe size={24} color="#1571ef" />
                        </div>
                        <div style={{ position: 'absolute', left: '2px', top: '-4px', width: '44px', height: '44px', backgroundColor: '#1571ef', borderRadius: '10px', transform: 'rotate(15deg)', zIndex: 1 }} />
                    </div>

                    <h2 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)', margin: '0 0 4px 0' }}>
                        เพิ่มโดเมน
                    </h2>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: 0 }}>
                        {step === 1
                            ? "เพิ่มโดเมนใหม่เพื่อใช้ในสำหรับหน้า Tracking"
                            : "โปรดตั้งค่า DNS ให้โดเมนใหม่ชี้มาที่สถิติการใช้งาน"}
                    </p>

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        style={{ position: 'absolute', top: '16px', right: '16px', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer', borderRadius: '8px' }}
                    >
                        <X size={24} color="#667085" />
                    </button>
                    <div style={{ height: '20px' }}></div>
                </div>

                {/* Content Area */}
                <div style={{ padding: '0 24px', flex: 1 }}>
                    {step === 1 ? (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {/* Form Input */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                <label style={{ fontSize: '14px', fontWeight: 500, color: '#344054' }}>
                                    ชื่อโดเมน
                                </label>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid #cdd4de', borderRadius: '8px', padding: '10px 14px', backgroundColor: 'var(--bg-card)', boxShadow: '0px 1px 2px 0px rgba(16,24,40,0.05)' }}>
                                    <Globe size={20} color="#667085" />
                                    <input
                                        type="text"
                                        placeholder="sample.com"
                                        value={domainName}
                                        onChange={(e) => setDomainName(e.target.value)}
                                        style={{ border: 'none', outline: 'none', flex: 1, fontSize: '16px', color: 'var(--text-primary)', backgroundColor: 'transparent' }}
                                    />
                                </div>
                                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: 0 }}>
                                    รองรับทั้งโดเมนหลักและซับโดเมน แนะนำให้ใช้ซับโดเมนสำหรับการติดตั้งระบบ
                                </p>
                            </div>

                            {/* Alert Box */}
                            <div style={{ backgroundColor: '#f8fafc', border: '1px solid #cdd4de', borderRadius: '12px', padding: '16px', display: 'flex', gap: '16px', alignItems: 'flex-start', boxShadow: '0px 1px 2px 0px rgba(16,24,40,0.05)' }}>
                                <div style={{ width: '20px', height: '20px', position: 'relative', flexShrink: 0 }}>
                                    <Info size={20} color="#475467" />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                    <p style={{ fontSize: '14px', fontWeight: 600, color: '#344054', margin: 0 }}>ข้อกำหนด</p>
                                    <ul style={{ margin: 0, paddingLeft: '21px', color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '20px' }}>
                                        <li>โดเมนต้องไม่เคยลงทะเบียนกับระบบอื่น</li>
                                        <li>แนะนำให้ใช้ Subdomain เพื่อไม่ให้กระทบเว็บไซต์หลัก</li>
                                        <li>ต้องสามารถเข้าถึงการตั้งค่า DNS ได้</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div style={{ backgroundColor: 'var(--bg-card)', borderRadius: '16px', border: '1px solid #eaecf0', overflow: 'hidden' }}>
                            {/* DNS Settings Table */}
                            <div style={{ display: 'flex', borderBottom: '1px solid #eaecf0' }}>
                                {/* Type Column */}
                                <div style={{ width: '96px', borderRight: '1px solid #eaecf0' }}>
                                    <div style={{ height: '44px', backgroundColor: '#f8fafc', borderBottom: '1px solid #eaecf0', padding: '12px 24px', display: 'flex', alignItems: 'center' }}>
                                        <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--text-secondary)' }}>ประเภท</span>
                                    </div>
                                    <div style={{ height: '72px', padding: '16px 24px', display: 'flex', alignItems: 'center' }}>
                                        <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-primary)' }}>CNAME</span>
                                    </div>
                                </div>
                                {/* Name Column */}
                                <div style={{ flex: 1, borderRight: '1px solid #eaecf0' }}>
                                    <div style={{ height: '44px', backgroundColor: '#f8fafc', borderBottom: '1px solid #eaecf0', padding: '12px 24px', display: 'flex', alignItems: 'center' }}>
                                        <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--text-secondary)' }}>ชื่อ</span>
                                    </div>
                                    <div style={{ height: '72px', padding: '16px 24px', display: 'flex', alignItems: 'center' }}>
                                        <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-primary)' }}>{domainName.split('.')[0] || 'exam'}</span>
                                    </div>
                                </div>
                                {/* Value Column */}
                                <div style={{ width: '225px', borderRight: '1px solid #eaecf0' }}>
                                    <div style={{ height: '44px', backgroundColor: '#f8fafc', borderBottom: '1px solid #eaecf0', padding: '12px 24px', display: 'flex', alignItems: 'center' }}>
                                        <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--text-secondary)' }}>ค่า (Value)</span>
                                    </div>
                                    <div style={{ height: '72px', padding: '16px 24px', display: 'flex', alignItems: 'center' }}>
                                        <span style={{ fontSize: '14px', color: 'var(--text-secondary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                            sms2fly-frontend.pages.dev
                                        </span>
                                    </div>
                                </div>
                                {/* TTL Column */}
                                <div style={{ width: '113px' }}>
                                    <div style={{ height: '44px', backgroundColor: '#f8fafc', borderBottom: '1px solid #eaecf0', padding: '12px 24px', display: 'flex', alignItems: 'center' }}>
                                        <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--text-secondary)' }}>TTL</span>
                                    </div>
                                    <div style={{ height: '72px', padding: '16px 24px', display: 'flex', alignItems: 'center' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', backgroundColor: '#ecfdf3', border: '1px solid #abefc6', borderRadius: '6px', padding: '2px 6px' }}>
                                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#067647' }}></div>
                                            <span style={{ fontSize: '12px', fontWeight: 500, color: '#067647' }}>อัตโนมัติ</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Alert Box */}
                            <div style={{ margin: '16px', backgroundColor: '#ecfdf3', border: '1px solid #75e0a7', borderRadius: '12px', padding: '16px', display: 'flex', gap: '16px', alignItems: 'flex-start', boxShadow: '0px 1px 2px 0px rgba(16,24,40,0.05)' }}>
                                <div style={{ width: '20px', height: '20px', position: 'relative', flexShrink: 0, marginTop: '2px' }}>
                                    <CheckCircle size={20} color="#079455" />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: 0, lineHeight: '20px' }}>
                                        หลังจากบันทึกค่า DNS แล้ว ระบบจะใช้เวลา 10-60 นาทีในการอัปเดตสถานะ เมื่อเสร็จสมบูรณ์สถานะจะเปลี่ยนเป็น "พร้อมใช้งาน" โดยอัตโนมัติ
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Actions */}
                <div style={{ padding: '32px 24px 24px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {step === 1 ? (
                        <>
                            <button
                                onClick={onClose}
                                style={{ backgroundColor: 'var(--bg-card)', border: '1px solid #cdd4de', borderRadius: '12px', padding: '10px 16px', fontSize: '16px', fontWeight: 600, color: '#344054', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            >
                                ยกเลิก
                            </button>
                            <button
                                onClick={handleNext}
                                disabled={!domainName}
                                style={{ backgroundColor: '#1571ef', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px', padding: '10px 16px', fontSize: '16px', fontWeight: 600, color: 'white', cursor: domainName ? 'pointer' : 'not-allowed', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', opacity: domainName ? 1 : 0.7 }}
                            >
                                ถัดไป
                                <ArrowRight size={20} />
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                onClick={handleBack}
                                style={{ backgroundColor: 'var(--bg-card)', border: '1px solid #cdd4de', borderRadius: '12px', padding: '10px 16px', fontSize: '16px', fontWeight: 600, color: '#344054', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                            >
                                <ArrowLeft size={20} />
                                ยกเลิก
                            </button>
                            <button
                                onClick={handleCreate}
                                style={{ backgroundColor: '#1571ef', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px', padding: '10px 16px', fontSize: '16px', fontWeight: 600, color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                            >
                                เปิดใช้งานโดเมน
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    , document.body);
}
