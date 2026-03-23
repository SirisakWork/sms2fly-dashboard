import React, { useState } from 'react';
import { MoreVertical } from 'lucide-react';

const Toggle = ({ active, label, onChange }) => (
    <div onClick={onChange} style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '300px', cursor: 'pointer' }}>
        <div style={{
            width: '36px',
            height: '20px',
            backgroundColor: active ? '#1571ef' : '#f8fafc',
            borderRadius: '9999px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            padding: '2px',
            transition: 'background-color var(--transition-normal) var(--ease-framer)',
            border: active ? 'none' : '1px solid var(--border)',
            boxSizing: 'border-box'
        }}>
            <div style={{
                width: '16px',
                height: '16px',
                backgroundColor: 'var(--bg-card)',
                borderRadius: '50%',
                boxShadow: '0 1px 3px rgba(16,24,40,0.1)',
                transform: `translateX(${active ? '16px' : '0px'})`,
                transition: 'transform var(--transition-normal) var(--ease-framer)'
            }} />
        </div>
        <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-primary)' }}>
            {label}
        </span>
    </div>
);

const SettingsNotifications = () => {
    const [emailNotif, setEmailNotif] = useState(true);
    const [weeklyReport, setWeeklyReport] = useState(true);

    return (
        <div className="settings-section flex flex-col gap-6">
            
            {/* Notifications Settings Card */}
            <div className="card" style={{ padding: '0' }}>
                <div style={{ padding: '24px 24px 20px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0, lineHeight: '28px' }}>การแจ้งเตือน</h3>
                    <button className="icon-btn" style={{ padding: '8px', color: 'var(--text-secondary)' }}>
                        <MoreVertical size={20} />
                    </button>
                </div>
                
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '16px', justifyContent: 'space-between', width: '100%' }}>
                        <div style={{ flex: 1, minWidth: '200px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                            <h4 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>การแจ้งเตือนทางอีเมล</h4>
                            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: 0 }}>รับการแจ้งเตือนเมื่อมีกิจกรรมสำคัญ</p>
                        </div>
                        <Toggle 
                            active={emailNotif} 
                            label="เปิดแจ้งเตือน" 
                            onChange={() => setEmailNotif(!emailNotif)} 
                        />
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '16px', justifyContent: 'space-between', width: '100%' }}>
                        <div style={{ flex: 1, minWidth: '200px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                            <h4 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>รายงานประจำสัปดาห์</h4>
                            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: 0 }}>รับสรุปสถิติการใช้งานทุกสัปดาห์</p>
                        </div>
                        <Toggle 
                            active={weeklyReport} 
                            label="เปิดแจ้งเตือน" 
                            onChange={() => setWeeklyReport(!weeklyReport)} 
                        />
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

export default SettingsNotifications;
