import React from 'react';
import { Copy, ExternalLink, ChevronDown, HelpCircle, MoreVertical } from 'lucide-react';

const SettingsSystem = () => {
    return (
        <div className="settings-section flex flex-col gap-6">
            
            {/* System Settings Card */}
            <div className="card" style={{ padding: '0' }}>
                <div style={{ padding: '24px 24px 20px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0, lineHeight: '28px' }}>จัดการการตั้งค่าระบบและบัญชีผู้ใช้</h3>
                    <button className="icon-btn" style={{ padding: '8px', color: 'var(--text-secondary)' }}>
                        <MoreVertical size={20} />
                    </button>
                </div>
                
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <label style={{ fontSize: '14px', fontWeight: 500, color: '#344054', margin: 0 }}>ชื่อเว็บไซต์</label>
                            <HelpCircle size={16} color="#98A2B3" />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', padding: '10px 14px', backgroundColor: 'var(--bg-card)', border: '1px solid #cdd4de', borderRadius: '12px', boxShadow: '0px 1px 2px 0px rgba(16,24,40,0.05)', width: '100%' }}>
                            <input type="text" defaultValue="SMS2FLY" style={{ border: 'none', outline: 'none', width: '100%', fontSize: '16px', color: 'var(--text-primary)' }} />
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#98A2B3' }}>
                                <ExternalLink size={20} />
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <label style={{ fontSize: '14px', fontWeight: 500, color: '#344054', margin: 0 }}>อีเมล</label>
                            <HelpCircle size={16} color="#98A2B3" />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', padding: '10px 14px', backgroundColor: 'var(--bg-card)', border: '1px solid #cdd4de', borderRadius: '12px', boxShadow: '0px 1px 2px 0px rgba(16,24,40,0.05)', width: '100%' }}>
                            <input type="email" defaultValue="support@sms2fly.com" style={{ border: 'none', outline: 'none', width: '100%', fontSize: '16px', color: 'var(--text-primary)' }} />
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#98A2B3' }}>
                                <Copy size={20} />
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <label style={{ fontSize: '14px', fontWeight: 500, color: '#344054', margin: 0 }}>ภาษา</label>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', padding: '10px 14px', backgroundColor: 'var(--bg-card)', border: '1px solid #cdd4de', borderRadius: '12px', boxShadow: '0px 1px 2px 0px rgba(16,24,40,0.05)', width: '100%', position: 'relative' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%' }}>
                                {/* Thai Flag */}
                                <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#f1f5f9', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)' }}>
                                    <img src="https://flagcdn.com/w40/th.png" alt="TH" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <select style={{ border: 'none', outline: 'none', width: '100%', fontSize: '16px', color: 'var(--text-primary)', appearance: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}>
                                    <option>ภาษาไทย</option>
                                    <option>English</option>
                                </select>
                            </div>
                            <div style={{ position: 'absolute', right: '14px', pointerEvents: 'none', display: 'flex', alignItems: 'center', backgroundColor: 'var(--bg-card)' }}>
                                <ChevronDown size={20} color="#667085" />
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <label style={{ fontSize: '14px', fontWeight: 500, color: '#344054', margin: 0 }}>โซนเวลา</label>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', padding: '10px 14px', backgroundColor: 'var(--bg-card)', border: '1px solid #cdd4de', borderRadius: '12px', boxShadow: '0px 1px 2px 0px rgba(16,24,40,0.05)', width: '100%', position: 'relative' }}>
                            <select style={{ border: 'none', outline: 'none', width: '100%', fontSize: '16px', color: 'var(--text-primary)', appearance: 'none', backgroundColor: 'transparent', cursor: 'pointer', zIndex: 10 }}>
                                <option>Asia/Bangkok (UTC+7)</option>
                                <option>UTC</option>
                            </select>
                            <div style={{ position: 'absolute', right: '14px', pointerEvents: 'none', display: 'flex', alignItems: 'center', zIndex: 0 }}>
                                <ChevronDown size={20} color="#667085" />
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ padding: '16px 24px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                    <button className="action-btn-secondary" style={{ padding: '10px 14px', borderRadius: '12px' }}>ยกเลิก</button>
                    <button className="action-btn-primary" style={{ padding: '10px 14px', borderRadius: '12px' }}>บันทึกการตั้งค่า</button>
                </div>
            </div>

        </div>
    );
};

export default SettingsSystem;
