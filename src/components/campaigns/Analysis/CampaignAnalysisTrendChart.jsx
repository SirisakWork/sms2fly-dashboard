import React from 'react';
import { ChevronDown, MoreVertical } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { time: '10:00', value: 10 },
    { time: '12:00', value: 15 },
    { time: '14:00', value: 20 },
    { time: '16:00', value: 35 },
    { time: '18:00', value: 50 },
    { time: '20:00', value: 45 },
    { time: '22:00', value: 60 },
];

const CampaignAnalysisTrendChart = () => {
    return (
        <div className="card" style={{ padding: '24px' }}>
            <div className="flex items-start justify-between mb-6">
                <div className="flex flex-col gap-1">
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>
                        ประสิทธิภาพตามเวลา
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)', margin: 0 }}>
                        30 วันล่าสุด
                    </p>
                </div>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: 'var(--text-tertiary)' }}>
                    <MoreVertical size={16} />
                </button>
            </div>

            <div style={{ height: '240px', width: '100%' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#1571ef" stopOpacity={0.1}/>
                                <stop offset="95%" stopColor="#1571ef" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                        <XAxis 
                            dataKey="time" 
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: 'var(--text-tertiary)', fontSize: 12 }}
                            dy={10}
                        />
                        <YAxis 
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: 'var(--text-tertiary)', fontSize: 12 }}
                            dx={-10}
                        />
                        <Tooltip 
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                            labelStyle={{ color: 'var(--text-secondary)', fontWeight: 500, marginBottom: '4px' }}
                            itemStyle={{ color: 'var(--primary)', fontWeight: 600 }}
                        />
                        <Line 
                            type="monotone" 
                            dataKey="value" 
                            stroke="#1571ef" 
                            strokeWidth={2}
                            dot={false}
                            activeDot={{ r: 6, fill: '#1571ef', stroke: 'white', strokeWidth: 2 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default CampaignAnalysisTrendChart;
