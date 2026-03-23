import React from 'react';
import { Users, CheckCircle, Mail, MousePointerClick, MoreVertical } from 'lucide-react';

const CampaignAnalysisMetrics = () => {
    // Exact metrics from Figma for Campaign Analysis
    const metrics = [
        { title: 'ผู้รับทั้งหมด', value: '5.0K', pctText: '100%', pctColor: '#1571ef', icon: Users, iconColor: '#1571ef', iconBg: '#eff4ff' },
        { title: 'ส่งสำเร็จ', value: '5.0K', pctText: '100%', pctColor: '#039855', icon: CheckCircle, iconColor: '#039855', iconBg: '#ecfdf3' },
        { title: 'เปิดอ่าน', value: '5.0K', pctText: '85.0%', pctColor: '#6941c6', icon: Mail, iconColor: '#6941c6', iconBg: '#f4ebff' },
        { title: 'คลิก', value: '1.3K', pctText: '25.0%', pctColor: '#dc6803', icon: MousePointerClick, iconColor: '#dc6803', iconBg: '#fef0c7' },
    ];

    return (
        <div className="grid grid-cols-4 gap-6">
            {metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                    <div key={index} className="card flex-col" style={{ padding: '24px', position: 'relative' }}>
                        <div className="flex items-start justify-between mb-4">
                            <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>{metric.title}</span>
                            <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: 'var(--text-tertiary)' }}>
                                <MoreVertical size={16} />
                            </button>
                        </div>
                        
                        <div className="flex items-end justify-between">
                            <div className="flex flex-col gap-1">
                                <h2 className="text-3xl font-bold" style={{ color: 'var(--text-primary)', margin: 0, lineHeight: 1 }}>{metric.value}</h2>
                                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: metric.pctColor }}>
                                    {metric.pctText}
                                </span>
                            </div>
                            <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-full)', backgroundColor: metric.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Icon size={20} color={metric.iconColor} />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CampaignAnalysisMetrics;
