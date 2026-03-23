import React from 'react';
import { ExternalLink, Link as LinkIcon, Box, MessageSquare, Bell, Clock } from 'lucide-react';

const campaigns = [
    { id: 1, name: 'แคมเปญโปรโมชั่น 11.11', subtext: 'ส่ง SMS แจ้งสิทธิพิเศษ', icon: MessageSquare, iconBg: 'bg-blue-50 text-blue-600', date: '23 ก.ค. 2024, 10:30', progress: 100, amount: '45,000', status: 'success', statusLabel: 'สำเร็จ' },
    { id: 2, name: 'แจ้งอัปเดตระบบ', subtext: 'ลูกค้า VIP', icon: Bell, iconBg: 'bg-orange-50 text-orange-600', date: '23 ก.ค. 2024, 09:00', progress: 45, amount: '12,500', status: 'warning', statusLabel: 'กำลังส่ง' },
    { id: 3, name: 'ประกาศหยุดสงกรานต์', subtext: 'ลูกค้าทั้งหมด', icon: Clock, iconBg: 'bg-gray-100 text-gray-500', date: '22 ก.ค. 2024, 14:15', progress: 0, amount: '89,000', status: 'default', statusLabel: 'ฉบับร่าง' },
    { id: 4, name: 'สินค้าคอลเลคชั่นใหม่', subtext: 'Group A', icon: Box, iconBg: 'bg-green-50 text-green-600', date: '21 ก.ค. 2024, 11:45', progress: 60, amount: '5,000', status: 'error', statusLabel: 'ยกเลิก' }
];

const CampaignTable = ({ onAnalyzeCampaign }) => (
    <div className="table-container">
        <div className="table-header">
            <h3 className="table-title">แคมเปญล่าสุด</h3>
            <button className="table-link">ดูทั้งหมด <ExternalLink size={14} /></button>
        </div>
        <div style={{ width: '100%', overflowX: 'auto' }}>
            <table>
                <thead>
                    <tr>
                        <th style={{ paddingLeft: '16px' }}>ชื่อ &darr;</th>
                        <th>วันที่และเวลา</th>
                        <th style={{ width: '130px' }}>ส่งแล้ว</th>
                        <th>จำนวน</th>
                        <th>สถานะ</th>
                    </tr>
                </thead>
                <tbody>
                    {campaigns.map((camp) => (
                        <tr key={camp.id}>
                            <td style={{ paddingLeft: '16px' }}>
                                <div className="campaign-name-col">
                                    <div className="campaign-icon" style={getIconStyle(camp.iconBg)}>
                                        <camp.icon size={20} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span 
                                            style={{ fontWeight: 600, cursor: 'pointer', transition: 'color 0.2s' }}
                                            onClick={() => onAnalyzeCampaign && onAnalyzeCampaign(camp)}
                                            onMouseOver={e => e.currentTarget.style.color = 'var(--primary)'}
                                            onMouseOut={e => e.currentTarget.style.color = 'var(--text-primary)'}
                                        >
                                            {camp.name}
                                        </span>
                                        <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{camp.subtext}</span>
                                    </div>
                                </div>
                            </td>
                            <td style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{camp.date}</td>
                            <td><Progress progress={camp.progress} /></td>
                            <td style={{ fontWeight: 600 }}>{camp.amount}</td>
                            <td><StatusBadge status={camp.status} label={camp.statusLabel} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

const getIconStyle = (bgClass) => {
    if (bgClass.includes('blue')) return { background: '#eff6ff', color: '#2563eb' };
    if (bgClass.includes('orange')) return { background: '#fff7ed', color: '#ea580c' };
    if (bgClass.includes('green')) return { background: '#f0fdf4', color: '#16a34a' };
    return { background: '#f3f4f6', color: '#6b7280' };
};

const StatusBadge = ({ status, label }) => (
    <span className={`status-badge ${status}`}>
        <div className={`status-dot ${status}`}></div>
        {label}
    </span>
);

const Progress = ({ progress }) => (
    <div className="progress-bar-container">
        <div className="progress-bar-bg">
            <div className={`progress-bar-fill ${progress > 0 ? 'active' : 'empty'}`} style={{ width: `${progress}%` }}></div>
        </div>
        <span className="progress-text">{progress}%</span>
    </div>
);

export default CampaignTable;
