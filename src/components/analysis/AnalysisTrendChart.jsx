import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MoreVertical } from 'lucide-react';

const data = [
    { name: '01/01', sms: 400, campaign: 240 },
    { name: '05/01', sms: 300, campaign: 139 },
    { name: '10/01', sms: 200, campaign: 980 },
    { name: '15/01', sms: 278, campaign: 390 },
    { name: '20/01', sms: 189, campaign: 480 },
    { name: '25/01', sms: 239, campaign: 380 },
    { name: '30/01', sms: 349, campaign: 430 },
];

const AnalysisTrendChart = () => {
    return (
        <div className="card" style={{ padding: '24px' }}>
            <div className="flex items-center justify-between" style={{ marginBottom: '24px' }}>
                <div className="flex-col">
                    <h2 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>แนวโน้มการส่ง SMS</h2>
                    <p className="text-sm text-secondary">30 วันล่าสุด</p>
                </div>
                <button className="icon-btn custom-hover" style={{ color: 'var(--text-secondary)' }}>
                    <MoreVertical size={20} />
                </button>
            </div>

            <div style={{ width: '100%', height: '320px' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorSms" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#1A68FF" stopOpacity={0.1} />
                                <stop offset="95%" stopColor="#1A68FF" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorCampaign" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#80B3FF" stopOpacity={0.1} />
                                <stop offset="95%" stopColor="#80B3FF" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} dy={10} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} dx={-10} />
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                        <Tooltip
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}
                            cursor={{ stroke: 'var(--border-light)', strokeWidth: 1, strokeDasharray: '3 3' }}
                        />
                        <Area type="monotone" dataKey="sms" stroke="#1A68FF" strokeWidth={2} fillOpacity={1} fill="url(#colorSms)" />
                        <Area type="monotone" dataKey="campaign" stroke="#80B3FF" strokeWidth={2} fillOpacity={1} fill="url(#colorCampaign)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            <div className="flex items-center justify-center gap-6" style={{ marginTop: '16px' }}>
                <div className="flex items-center gap-2">
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#1A68FF' }}></div>
                    <span className="text-sm text-secondary">จำนวน SMS</span>
                </div>
                <div className="flex items-center gap-2">
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#80B3FF' }}></div>
                    <span className="text-sm text-secondary">จำนวนแคมเปญ</span>
                </div>
            </div>
        </div>
    );
};

export default AnalysisTrendChart;
