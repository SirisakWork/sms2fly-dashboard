import React from 'react';
import { Layers, Megaphone, Activity, Send } from 'lucide-react';

const BrandCard = () => (
    <div className="brand-card">
        <div className="brand-info">
            <div className="brand-icon"><Layers size={24} /></div>
            <div className="flex flex-col">
                <h2 className="brand-name">แบรนด์หลัก</h2>
                <span className="brand-desc">แบรนด์หลักของบริษัท</span>
            </div>
        </div>
        <div className="brand-stats-container">
            <StatItem icon={Megaphone} theme="blue" value="300" label="แคมเปญทั้งหมด" />
            <div className="stat-divider"></div>
            <StatItem icon={Activity} theme="green" value="201" label="กำลังใช้งาน" />
            <div className="stat-divider"></div>
            <StatItem icon={Send} theme="orange" value="86.8K" label="ส่งแล้ว" />
        </div>
    </div>
);

// eslint-disable-next-line no-unused-vars
const StatItem = ({ icon: Icon, theme, value, label }) => (
    <div className="stat-item">
        <div className={`stat-icon ${theme}`}><Icon size={18} /></div>
        <div className="flex flex-col">
            <span className="stat-value">{value}</span>
            <span className="text-xs text-secondary" style={{ marginTop: '2px' }}>{label}</span>
        </div>
    </div>
);

export default BrandCard;
