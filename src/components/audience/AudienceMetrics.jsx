import React from 'react';
import { Users, UserCheck, Clock } from 'lucide-react';

// eslint-disable-next-line no-unused-vars
const MetricItem = ({ icon: Icon, value, label, bgColor, iconColor }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', position: 'relative' }}>
            <div style={{ position: 'relative', flexShrink: 0, width: '48px', height: '48px' }}>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: bgColor, transform: 'rotate(15deg)', opacity: 0.9 }} />
                </div>
                <div style={{ position: 'absolute', inset: 0, backdropFilter: 'blur(12px)', backgroundColor: 'var(--bg-glass)', border: '1px solid var(--border-glass)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <Icon size={24} color={iconColor} strokeWidth={2} />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'flex-start', width: '100px' }}>
                <p style={{ fontWeight: 600, fontSize: '1.5rem', color: 'var(--text-primary)', lineHeight: '2rem' }}>
                    {value}
                </p>
                <p style={{ fontWeight: 500, fontSize: '0.875rem', color: 'var(--text-tertiary)', lineHeight: '1.25rem', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', width: '100%' }}>
                    {label}
                </p>
            </div>
        </div>
    );
};

export const AudienceMetrics = () => {
    return (
        <div style={{
            backgroundColor: 'var(--bg-card)',
            borderRadius: 'var(--radius-lg)',
            padding: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: 'var(--shadow-sm)',
            border: '1px solid var(--border)',
            flexWrap: 'wrap',
            gap: '32px'
        }}>
            {/* Brand Info (Left Side) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
                <div style={{ width: '56px', height: '56px', position: 'relative', borderRadius: '50%', flexShrink: 0, border: '0.75px solid rgba(0,0,0,0.1)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
                    <img
                        alt="Brand Avatar"
                        src="https://ui-avatars.com/api/?name=BR&background=1571ef&color=fff"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1, gap: '4px' }}>
                    <p style={{ fontWeight: 600, fontSize: '1.125rem', color: 'var(--text-primary)', lineHeight: '1.75rem', margin: 0 }}>
                        แบรนด์หลัก
                    </p>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)', lineHeight: '1.25rem', margin: 0 }}>
                        แบรนด์หลักของบริษัท
                    </p>
                </div>
            </div>

            {/* Metrics (Right Side) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap', justifyContent: 'flex-end', flex: 1 }}>

                <MetricItem
                    icon={Users}
                    value="25,063"
                    label="ทั้งหมด"
                    bgColor="#1571EF"
                    iconColor="#1d4ed8"
                />

                <div style={{ width: '1px', height: '56px', backgroundColor: 'var(--border)' }} />

                <MetricItem
                    icon={UserCheck}
                    value="24,341"
                    label="กำลังใช้งาน"
                    bgColor="#17B26A"
                    iconColor="#047857"
                />

                <div style={{ width: '1px', height: '56px', backgroundColor: 'var(--border)' }} />

                <MetricItem
                    icon={Clock}
                    value="347"
                    label="รออนุมัติ"
                    bgColor="#FAC515"
                    iconColor="#ca8a04"
                />

            </div>
        </div>
    );
};

export default AudienceMetrics;
