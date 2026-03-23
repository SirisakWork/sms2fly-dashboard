import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: '17 ก.ค.', value: 1200 },
    { name: '18 ก.ค.', value: 2100 },
    { name: '19 ก.ค.', value: 800 },
    { name: '20 ก.ค.', value: 1600 },
    { name: '21 ก.ค.', value: 900 },
    { name: '22 ก.ค.', value: 1400 },
    { name: '23 ก.ค.', value: 2400 },
];

const PerformanceChart = () => (
    <div className="chart-container">
        <div className="chart-header">
            <h3 className="chart-title">ประสิทธิภาพ 7 วันล่าสุด</h3>
            <button className="chart-btn">ดูรายงาน</button>
        </div>
        <div className="chart-area">
            <ResponsiveContainer width="100%" height={320}>
                <BarChart data={data} barSize={32}>
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'var(--text-secondary)', fontSize: 13 }} dy={10} />
                    <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: 'var(--shadow-soft)' }} />
                    <defs>
                        <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#60A5FA" />
                            <stop offset="100%" stopColor="#1D4ED8" />
                        </linearGradient>
                    </defs>
                    <Bar dataKey="value" radius={[8, 8, 8, 8]} fill="url(#blueGradient)" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
);

export default PerformanceChart;
