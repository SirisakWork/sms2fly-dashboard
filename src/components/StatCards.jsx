import React from 'react';
import { MoreHorizontal, Send, Users, UserPlus } from 'lucide-react';

const StatCards = () => (
    <div className="stat-cards-grid">
        <StatCard title="SMS ส่งแล้ว" mainValue="6.9K" subText="จากทั้งหมด 78,983" icon={Send} theme="blue" />
        <StatCard title="ผู้ใช้งานออนไลน์" mainValue="39,523" subText="จากทั้งหมด 69,093" icon={Users} theme="green" />
        <StatCard title="ผู้ใช้งานใหม่" mainValue="2,365" subText="เพิ่มขึ้นจากเดือนที่แล้ว 46%" icon={UserPlus} theme="orange" growth />
    </div>
);

// eslint-disable-next-line no-unused-vars
const StatCard = ({ title, mainValue, subText, icon: Icon, theme, growth }) => (
    <div className="stat-card">
        <div className="flex items-center justify-between" style={{ marginBottom: '16px' }}>
            <span className="stat-card-title">{title}</span>
            <MoreHorizontal size={20} color="#9ca3af" style={{ cursor: 'pointer' }} />
        </div>
        <div className="flex items-center justify-between">
            <div>
                <h3 className="stat-card-main">{mainValue}</h3>
                <p className="text-xs text-secondary">
                    {growth ? <>เพิ่มขึ้นจากเดือนที่แล้ว <span className="stat-card-growth">46%</span></> : subText}
                </p>
            </div>
            <div className={`stat-card-icon stat-icon ${theme}`}><Icon size={24} /></div>
        </div>
    </div>
);

export default StatCards;
