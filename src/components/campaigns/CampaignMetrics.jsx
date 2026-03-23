import React from 'react';
import { Megaphone, Activity, Send } from 'lucide-react';

// eslint-disable-next-line no-unused-vars
const MetricItem = ({ icon: Icon, value, label, bgColor, iconColor }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', position: 'relative' }}>
            <div style={{ position: 'relative', flexShrink: 0, width: '48px', height: '48px' }}>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: bgColor, transform: 'rotate(15deg)', opacity: 0.9 }} />
                </div>
                <div style={{ position: 'absolute', inset: 0, backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', backgroundColor: 'var(--bg-glass)', border: '1px solid var(--border-glass)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
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

export const CampaignMetrics = () => {
    return (
        <div className="brand-card" style={{ marginBottom: 0, padding: '32px' }}>
            {/* Background elements (already styled through container if needed, but removing absolute img) */}

            {/* Brand Info (Left Side) */}
            <div className="brand-info" style={{ gap: '24px' }}>
                <div style={{ width: '56px', height: '56px', position: 'relative', borderRadius: '50%', flexShrink: 0, border: '0.75px solid rgba(0,0,0,0.1)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
                    <img
                        alt="Brand Avatar"
                        src="https://ui-avatars.com/api/?name=BR&background=1571ef&color=fff"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1, gap: '4px' }}>
                    <p style={{ fontWeight: 600, fontSize: '1.125rem', color: 'var(--text-primary)', lineHeight: '1.75rem' }}>
                        แบรนด์หลัก
                    </p>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)', lineHeight: '1.25rem' }}>
                        แบรนด์หลักของบริษัท
                    </p>
                </div>
            </div>

            {/* Metrics (Right Side) */}
            <div className="brand-stats-container" style={{ gap: '24px' }}>

                <MetricItem
                    icon={Megaphone}
                    value="300"
                    label="แคมเปญทั้งหมด"
                    bgColor="#1571EF"
                    iconColor="#1d4ed8"
                />

                <div className="stat-divider" style={{ height: '56px' }} />

                <MetricItem
                    icon={Activity}
                    value="201"
                    label="กำลังใช้งาน"
                    bgColor="#17B26A"
                    iconColor="#047857"
                />

                <div className="stat-divider" style={{ height: '56px' }} />

                <MetricItem
                    icon={Send}
                    value="86.8K"
                    label="ส่งแล้ว"
                    bgColor="#FAC515"
                    iconColor="#ca8a04"
                />

            </div>
        </div>
    );
};

export default CampaignMetrics;
