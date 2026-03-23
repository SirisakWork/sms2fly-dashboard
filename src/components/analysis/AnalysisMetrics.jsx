import React from 'react';
import { Zap } from 'lucide-react';

const AnalysisMetrics = () => {
    const metrics = [
        { title: 'SMS ส่งทั้งหมด', value: '48.6K', change: '+12.5%', changeType: 'positive', iconSrc: 'zap', iconColor: '#1A68FF', iconBg: '#E8F0FF' },
        { title: 'ผู้รับ SMS', value: '32.1K', change: '+8.3%', changeType: 'positive', iconSrc: 'zap', iconColor: '#8B5CF6', iconBg: '#F3E8FF' },
        { title: 'อัตราเปิดอ่าน', value: '85.2%', change: '-2.1%', changeType: 'negative', iconSrc: 'zap', iconColor: '#10B981', iconBg: '#D1FAE5' },
        { title: 'อัตราตอบกลับ', value: '23.4%', change: '-5.7%', changeType: 'negative', iconSrc: 'zap', iconColor: '#F59E0B', iconBg: '#FEF3C7' },
    ];

    return (
        <div className="grid grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
                <div key={index} className="card flex-col gap-4" style={{ padding: '24px' }}>
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-secondary">{metric.title}</span>
                        <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-full)', backgroundColor: metric.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Zap size={24} color={metric.iconColor} />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>{metric.value}</h2>
                        <div className="flex items-center gap-2" style={{ marginTop: '8px' }}>
                            <span className="text-sm font-medium" style={{ color: metric.changeType === 'positive' ? 'var(--success)' : 'var(--error)' }}>
                                {metric.change}
                            </span>
                            <span className="text-sm text-secondary">เทียบกับเดือนที่แล้ว</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AnalysisMetrics;
