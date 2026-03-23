import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';
import { Send, Hash, MoreVertical } from 'lucide-react';

const campaignTypeData = [
    { name: 'โปรโมชัน', value: 45, color: '#1A68FF' },
    { name: 'จดหมายข่าว', value: 9, color: '#8B5CF6' },
    { name: 'แจ้งเตือน', value: 18, color: '#F59E0B' },
    { name: 'ประกาศ', value: 28, color: '#10B981' },
];

const campaigns = [
    { name: 'โปรโมชันเปิดร้านใหม่', subtext: 'แคมเปญส่งโปรโมชันลูกค้าใหม่', count: '49,000', rate: '100%', iconColor: '#8B5CF6' },
    { name: 'แจ้งเตือนการชำระเงิน', subtext: 'แจ้งเตือนลูกค้าที่ค้างชำระ', count: '49,000', rate: '100%', iconColor: '#1A68FF' },
    { name: 'จดหมายข่าวรายเดือน', subtext: 'ข่าวสารและอัปเดตประจำเดือน', count: '19,324', rate: '38%', iconColor: '#1E293B' },
    { name: 'แจ้งเตือนการชำระเงิน', subtext: 'แจ้งเตือนลูกค้าที่ค้างชำระ', count: '0', rate: '0%', iconColor: '#60A5FA' },
];

const AnalysisCampaigns = () => {
    return (
        <div className="grid grid-cols-2 gap-6">
            {/* Campaign Types Pie Chart */}
            <div className="card flex-col" style={{ padding: '24px' }}>
                <div className="flex items-center justify-between" style={{ marginBottom: '24px' }}>
                    <h2 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>ประเภทแคมเปญ</h2>
                    <button className="icon-btn custom-hover" style={{ color: 'var(--text-secondary)' }}>
                        <MoreVertical size={20} />
                    </button>
                </div>
                <div className="flex items-center justify-center gap-8 h-full">
                    <div style={{ width: '240px', height: '240px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie data={campaignTypeData} cx="50%" cy="50%" outerRadius={100} paddingAngle={2} dataKey="value">
                                    {campaignTypeData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <RechartsTooltip contentStyle={{ borderRadius: 'var(--radius-md)', border: 'none', boxShadow: 'var(--shadow-sm)' }} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="flex-col gap-4">
                        {campaignTypeData.map((item, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: item.color }}></div>
                                <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                                    {item.name} <span style={{ color: 'var(--text-tertiary)', marginLeft: '4px' }}>{item.value}%</span>
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Recent Campaigns Table */}
            <div className="card flex-col" style={{ padding: '24px' }}>
                <div className="flex items-center justify-between" style={{ marginBottom: '24px' }}>
                    <h2 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>สรุปแคมเปญล่าสุด</h2>
                    <span className="text-sm font-semibold cursor-pointer" style={{ color: 'var(--primary)' }}>ดูแคมเปญทั้งหมด</span>
                </div>

                <div style={{ width: '100%' }}>
                    <table style={{ width: '100%', minWidth: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr>
                                <th className="text-left text-xs font-medium text-secondary" style={{ paddingBottom: '16px', borderBottom: '1px solid var(--border-light)' }}>
                                    ชื่อ <span style={{ fontSize: '10px' }}>▼</span>
                                </th>
                                <th className="text-left text-xs font-medium text-secondary" style={{ paddingBottom: '16px', borderBottom: '1px solid var(--border-light)' }}>
                                    จำนวน
                                </th>
                                <th className="text-center text-xs font-medium text-secondary" style={{ paddingBottom: '16px', borderBottom: '1px solid var(--border-light)' }}>
                                    ส่งแล้ว
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {campaigns.map((campaign, index) => (
                                <tr key={index} style={{ borderBottom: '1px solid var(--border-light)' }}>
                                    <td style={{ padding: '16px 0' }}>
                                        <div className="flex items-center gap-3">
                                            <div style={{ padding: '8px', backgroundColor: campaign.iconColor + '15', borderRadius: '50%' }}>
                                                <Hash size={20} color={campaign.iconColor} />
                                            </div>
                                            <div className="flex-col">
                                                <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{campaign.name}</span>
                                                <span className="text-xs text-secondary">{campaign.subtext}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td style={{ padding: '16px 0', verticalAlign: 'middle' }}>
                                        <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{campaign.count}</span>
                                    </td>
                                    <td style={{ padding: '16px 0', verticalAlign: 'middle', width: '120px' }}>
                                        <div className="flex items-center gap-2 justify-end">
                                            <div className="progress-bg" style={{ flex: 1, height: '6px', maxWidth: '60px' }}>
                                                <div className="progress-fill" style={{ width: campaign.rate, height: '6px', backgroundColor: 'var(--primary)' }}></div>
                                            </div>
                                            <span className="text-sm font-medium" style={{ color: 'var(--text-primary)', width: '32px', textAlign: 'right' }}>{campaign.rate}</span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AnalysisCampaigns;
