import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';

const deviceData = [
    { name: 'คอมพิวเตอร์', value: 400, color: '#1A68FF' },
    { name: 'มือถือ', value: 300, color: '#F59E0B' },
    { name: 'แท็บเล็ต', value: 300, color: '#8B5CF6' },
];

const browserData = [
    { name: 'Chrome', value: 400, color: '#10B981' },
    { name: 'Edge', value: 300, color: '#8B5CF6' },
    { name: 'Firefox', value: 300, color: '#F59E0B' },
    { name: 'Safari', value: 200, color: '#1A68FF' },
];

const AnalysisDemographics = () => {
    return (
        <div className="grid grid-cols-3 gap-6">
            {/* Countries Section */}
            <div className="card" style={{ padding: '24px' }}>
                <h2 className="text-lg font-bold" style={{ color: 'var(--text-primary)', marginBottom: '24px' }}>ประเทศยอดนิยม</h2>
                <div className="flex-col gap-4">
                    <CountryProgress country="ไทย" flag="🇹🇭" percent="50%" />
                    <CountryProgress country="สหรัฐฯ" flag="🇺🇸" percent="30%" />
                    <CountryProgress country="สิงคโปร์" flag="🇸🇬" percent="20%" />
                    <CountryProgress country="มาเลเซีย" flag="🇲🇾" percent="10%" />
                    <CountryProgress country="ญี่ปุ่น" flag="🇯🇵" percent="10%" />
                </div>
            </div>

            {/* Devices Section */}
            <div className="card" style={{ padding: '24px' }}>
                <h2 className="text-lg font-bold" style={{ color: 'var(--text-primary)', marginBottom: '24px' }}>อุปกรณ์ที่ใช้</h2>
                <div className="flex-col items-center justify-center">
                    <div style={{ width: '200px', height: '200px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie data={deviceData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={2} dataKey="value">
                                    {deviceData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <RechartsTooltip contentStyle={{ borderRadius: 'var(--radius-md)', border: 'none', boxShadow: 'var(--shadow-sm)' }} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
                        {deviceData.map((item, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: item.color }}></div>
                                <span className="text-sm text-secondary">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Browsers Section */}
            <div className="card" style={{ padding: '24px' }}>
                <h2 className="text-lg font-bold" style={{ color: 'var(--text-primary)', marginBottom: '24px' }}>เบราว์เซอร์</h2>
                <div className="flex-col items-center justify-center">
                    <div style={{ width: '200px', height: '200px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie data={browserData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={2} dataKey="value">
                                    {browserData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <RechartsTooltip contentStyle={{ borderRadius: 'var(--radius-md)', border: 'none', boxShadow: 'var(--shadow-sm)' }} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
                        {browserData.map((item, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: item.color }}></div>
                                <span className="text-sm text-secondary">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const CountryProgress = ({ country, flag, percent }) => (
    <div className="flex items-center gap-4 w-full">
        <div style={{ fontSize: '24px' }}>{flag}</div>
        <div className="flex-col gap-1 w-full">
            <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>{country}</span>
            <div className="flex items-center gap-3 w-full">
                <div className="progress-bg" style={{ flex: 1, maxWidth: '100%', height: '8px', backgroundColor: 'var(--bg-body)' }}>
                    <div className="progress-fill" style={{ width: percent, height: '8px', borderRadius: 'var(--radius-full)' }}></div>
                </div>
                <span className="text-sm font-medium text-secondary">{percent}</span>
            </div>
        </div>
    </div>
);

export default AnalysisDemographics;
