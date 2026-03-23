import React from 'react';
import { Upload, Mail, Phone, MapPin, Building, Lock } from 'lucide-react';

const SettingsProfile = () => {
    return (
        <div className="settings-section flex flex-col gap-6">
            
            {/* Profile Info Card */}
            <div className="card" style={{ padding: '0' }}>
                <div style={{ padding: '24px 24px 20px', borderBottom: '1px solid var(--border)' }}>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0, lineHeight: '28px' }}>
                        ข้อมูลโปรไฟล์
                    </h3>
                </div>
                
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    {/* Avatar Area */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border)', paddingBottom: '24px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#f1f5f9', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)' }}>
                                <img src="https://ui-avatars.com/api/?name=Prem+Prida&background=f1f5f9&color=475467" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                <h4 style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '14px', margin: 0 }}>รูปโปรไฟล์ปัจจุบัน</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', margin: 0 }}>ภาพโปรไฟล์ ขนาด : 400px x 400px</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <button className="action-btn-secondary" style={{ padding: '10px 14px', borderRadius: '12px' }}>ลบรูปภาพ</button>
                            <button className="action-btn-primary" style={{ padding: '10px 14px', borderRadius: '12px' }}>อัปโหลด</button>
                        </div>
                    </div>

                    {/* Form Fields */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '24px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <label style={{ fontSize: '14px', fontWeight: 500, color: '#344054', margin: 0 }}>ชื่อ</label>
                            <div style={{ display: 'flex', alignItems: 'center', padding: '10px 14px', backgroundColor: 'var(--bg-card)', border: '1px solid #cdd4de', borderRadius: '12px', boxShadow: '0px 1px 2px 0px rgba(16,24,40,0.05)', width: '100%' }}>
                                <input type="text" defaultValue="เปรม" style={{ border: 'none', outline: 'none', width: '100%', fontSize: '16px', color: 'var(--text-primary)' }} />
                            </div>
                        </div>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <label style={{ fontSize: '14px', fontWeight: 500, color: '#344054', margin: 0 }}>นามสกุล</label>
                            <div style={{ display: 'flex', alignItems: 'center', padding: '10px 14px', backgroundColor: 'var(--bg-card)', border: '1px solid #cdd4de', borderRadius: '12px', boxShadow: '0px 1px 2px 0px rgba(16,24,40,0.05)', width: '100%' }}>
                                <input type="text" defaultValue="ปรีดา" style={{ border: 'none', outline: 'none', width: '100%', fontSize: '16px', color: 'var(--text-primary)' }} />
                            </div>
                        </div>
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <label style={{ fontSize: '14px', fontWeight: 500, color: '#344054', margin: 0 }}>อีเมล</label>
                        <div style={{ display: 'flex', alignItems: 'center', padding: '10px 14px', backgroundColor: 'var(--bg-card)', border: '1px solid #cdd4de', borderRadius: '12px', boxShadow: '0px 1px 2px 0px rgba(16,24,40,0.05)', width: '100%' }}>
                            <input type="email" defaultValue="alisa.r@sms2fly.com" style={{ border: 'none', outline: 'none', width: '100%', fontSize: '16px', color: 'var(--text-primary)' }} />
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <label style={{ fontSize: '14px', fontWeight: 500, color: '#344054', margin: 0 }}>เบอร์โทร</label>
                        <div style={{ display: 'flex', alignItems: 'center', padding: '10px 14px', backgroundColor: 'var(--bg-card)', border: '1px solid #cdd4de', borderRadius: '12px', boxShadow: '0px 1px 2px 0px rgba(16,24,40,0.05)', width: '100%' }}>
                            <input type="tel" defaultValue="(+66) 81 234 5678" style={{ border: 'none', outline: 'none', width: '100%', fontSize: '16px', color: 'var(--text-primary)' }} />
                        </div>
                    </div>
                </div>

                <div style={{ padding: '16px 24px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                    <button className="action-btn-secondary" style={{ padding: '10px 14px', borderRadius: '12px' }}>ยกเลิก</button>
                    <button className="action-btn-primary" style={{ padding: '10px 14px', borderRadius: '12px' }}>บันทึกการเปลี่ยนแปลง</button>
                </div>
            </div>

            {/* Change Password Card */}
            <div className="card" style={{ padding: '0' }}>
                <div style={{ padding: '24px 24px 20px', borderBottom: '1px solid var(--border)' }}>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0, lineHeight: '28px' }}>
                        เปลี่ยนรหัสผ่าน
                    </h3>
                </div>
                
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <label style={{ fontSize: '14px', fontWeight: 500, color: '#344054', margin: 0 }}>รหัสผ่านปัจจุบัน</label>
                        <div style={{ display: 'flex', alignItems: 'center', padding: '10px 14px', backgroundColor: 'var(--bg-card)', border: '1px solid #cdd4de', borderRadius: '12px', boxShadow: '0px 1px 2px 0px rgba(16,24,40,0.05)', width: '100%' }}>
                            <input type="password" defaultValue="12345678" style={{ border: 'none', outline: 'none', width: '100%', fontSize: '16px', color: 'var(--text-primary)', fontFamily: 'monospace', letterSpacing: '0.1em' }} />
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <label style={{ fontSize: '14px', fontWeight: 500, color: '#344054', margin: 0 }}>รหัสผ่านใหม่</label>
                        <div style={{ display: 'flex', alignItems: 'center', padding: '10px 14px', backgroundColor: 'var(--bg-card)', border: '1px solid #cdd4de', borderRadius: '12px', boxShadow: '0px 1px 2px 0px rgba(16,24,40,0.05)', width: '100%' }}>
                            <input type="password" defaultValue="12345678" style={{ border: 'none', outline: 'none', width: '100%', fontSize: '16px', color: 'var(--text-primary)', fontFamily: 'monospace', letterSpacing: '0.1em' }} />
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <label style={{ fontSize: '14px', fontWeight: 500, color: '#344054', margin: 0 }}>ยืนยันรหัสผ่าน</label>
                        <div style={{ display: 'flex', alignItems: 'center', padding: '10px 14px', backgroundColor: 'var(--bg-card)', border: '1px solid #cdd4de', borderRadius: '12px', boxShadow: '0px 1px 2px 0px rgba(16,24,40,0.05)', width: '100%' }}>
                            <input type="password" defaultValue="12345678" style={{ border: 'none', outline: 'none', width: '100%', fontSize: '16px', color: 'var(--text-primary)', fontFamily: 'monospace', letterSpacing: '0.1em' }} />
                        </div>
                    </div>
                </div>

                <div style={{ padding: '16px 24px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                    <button className="action-btn-secondary" style={{ padding: '10px 14px', borderRadius: '12px', border: 'none', boxShadow: 'none' }}>ยกเลิก</button>
                    <button className="action-btn-primary" style={{ padding: '10px 14px', borderRadius: '12px' }}>เปลี่ยนรหัสผ่าน</button>
                </div>
            </div>

        </div>
    );
};

export default SettingsProfile;
