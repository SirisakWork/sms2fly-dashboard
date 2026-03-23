import React from 'react';
import { Send, CheckCircle2, MailOpen, MousePointerClick, MoreVertical } from 'lucide-react';

// eslint-disable-next-line no-unused-vars
const StatCard = ({ title, value, growth, icon: Icon, themeBg, themeColor }) => {
    return (
        <div style={{
            backgroundColor: 'var(--bg-card)',
            borderRadius: 'var(--radius-lg)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow-sm)',
            position: 'relative'
        }}>
            <div style={{ position: 'absolute', top: '20px', right: '20px', cursor: 'pointer', color: '#98A2B3' }}>
                <MoreVertical size={20} />
            </div>

            <p style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-secondary)', margin: 0 }}>
                {title}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <h3 style={{ fontSize: '30px', fontWeight: 600, color: 'var(--text-primary)', margin: 0, letterSpacing: '-0.02em', lineHeight: 1 }}>
                        {value}
                    </h3>
                    <p style={{ fontSize: '14px', fontWeight: 500, color: '#067647', margin: 0 }}>
                        {growth}
                    </p>
                </div>

                <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: themeBg,
                    color: themeColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                }}>
                    <Icon size={24} />
                </div>
            </div>
        </div>
    );
};

export const AudienceStatGrid = () => {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gap: '24px',
            width: '100%'
        }}>
            <StatCard
                title="ส่งทั้งหมด"
                value="1150"
                growth="23.0%"
                icon={Send}
                themeBg="#d0e8ff"
                themeColor="#1571ef"
            />
            <StatCard
                title="ส่งสำเร็จ"
                value="750"
                growth="15.0%"
                icon={CheckCircle2}
                themeBg="#dcfae6"
                themeColor="#17b26a"
            />
            <StatCard
                title="เปิดอ่าน"
                value="3100"
                growth="62.0%"
                icon={MailOpen}
                themeBg="#ece9fe"
                themeColor="#7a5af8"
            />
            <StatCard
                title="ตอบสนอง"
                value="453"
                growth="23.0%"
                icon={MousePointerClick}
                themeBg="#fef0c7"
                themeColor="#f79009"
            />
        </div>
    );
};

export default AudienceStatGrid;
