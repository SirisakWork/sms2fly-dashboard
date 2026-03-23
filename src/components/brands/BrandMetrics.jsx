import React from 'react';
import { MoreVertical } from 'lucide-react';

const BrandMetrics = () => {
    const metrics = [
        {
            title: "แบรนด์ทั้งหมด",
            value: "3",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 21H21M5 21V7C5 5.89543 5.89543 5 7 5H17C18.1046 5 19 5.89543 19 7V21M9 21V11C9 9.89543 9.89543 9 11 9H13C14.1046 9 15 9.89543 15 11V21M9 13H15M9 17H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            iconBg: "var(--colors-brand-secondary, #d0e8ff)",
            iconColor: "var(--colors-brand-800, #1571ef)"
        },
        {
            title: "แคมเปญทั้งหมด",
            value: "23",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21C11.4477 21 11 20.5523 11 20C11 19.4477 11.4477 19 12 19C12.5523 19 13 19.4477 13 20C13 20.5523 12.5523 21 12 21ZM10 16.5C8.01955 15.6888 7 14.1287 7 12V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V12C17 14.1287 15.9804 15.6888 14 16.5V17H10V16.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            iconBg: "var(--colors-violet-100, #ece9fe)",
            iconColor: "var(--colors-violet-700, #4c1d95)"
        },
        {
            title: "SMS ส่งแล้ว",
            value: "25,846",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V15C3 16.1046 3.89543 17 5 17H19C20.1046 17 21 16.1046 21 15ZM21 8L12 13L3 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 21L18 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 21L8 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            iconBg: "var(--colors-success-secondary, #dcfae6)",
            iconColor: "var(--colors-success-700, #17b26a)"
        },
        {
            title: "ผู้รับ SMS",
            value: "21,324",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 21V19C16 17.8954 15.1046 17 14 17H6C4.89543 17 4 17.8954 4 19V21M14.5 9C14.5 11.4853 12.4853 13.5 10 13.5C7.51472 13.5 5.5 11.4853 5.5 9C5.5 6.51472 7.51472 4.5 10 4.5C12.4853 4.5 14.5 6.51472 14.5 9ZM20 14L22 12M20 10L22 12M22 12L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            iconBg: "var(--colors-warning-secondary, #fef0c7)",
            iconColor: "var(--colors-warning-700, #f79009)"
        }
    ];

    return (
        <div className="stat-cards-grid grid-cols-4 gap-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '24px', marginBottom: '24px' }}>
            {metrics.map((metric, index) => (
                <div key={index} className="stat-card relative" style={{ borderRadius: 'var(--radius-lg)', padding: '24px' }}>
                    <div style={{ position: 'absolute', top: '20px', right: '20px', cursor: 'pointer', color: '#98A2B3' }}>
                        <MoreVertical size={20} />
                    </div>
                    <div className="stat-title text-sm text-secondary font-medium" style={{ marginBottom: '8px' }}>{metric.title}</div>
                    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', width: '100%' }}>
                        <div className="stat-value" style={{ flex: 1, letterSpacing: '-0.72px', fontSize: '32px', lineHeight: 1 }}>{metric.value}</div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            width: '48px',
                            height: '48px',
                            borderRadius: '50%',
                            backgroundColor: metric.iconBg,
                            color: metric.iconColor
                        }}>
                            {metric.icon}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BrandMetrics;
