import React from 'react';
import { Plus, BarChart2, MoreVertical } from 'lucide-react';

const RightSidebar = ({ setActiveTab }) => (
    <aside className="right-sidebar">
        <div>
            <div className="r-section-header">
                <h3 className="r-title">เครื่องมือด่วน</h3>
                <MoreVertical size={16} color="#9ca3af" />
            </div>
            <div className="flex-col">
                <QuickTool icon={Plus} label="สร้างแคมเปญใหม่" onClick={() => setActiveTab && setActiveTab('สร้างแคมเปญใหม่')} />
                <QuickTool icon={BarChart2} label="วิเคราะห์" onClick={() => setActiveTab && setActiveTab('วิเคราะห์')} />
                <button style={{ color: 'var(--primary)', fontSize: '0.875rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px', background: 'none', border: 'none', cursor: 'pointer' }}>
                    <Plus size={16} />เพิ่ม
                </button>
            </div>
        </div>
        <div>
            <h3 className="r-title" style={{ marginBottom: '16px' }}>ผู้ใช้งานล่าสุด</h3>
            <div className="flex-col gap-4">
                <UserItem name="Demi Wikinson" action="ลงชื่อเข้าใช้งาน" role="Admin" roleColor="blue" online img="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64" />
                <UserItem name="Liam Thompson" action="ตั้งค่าบัญชีผู้ใช้" role="User" roleColor="purple" online img="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=64" />
                <UserItem name="Ella Martinez" action="รีเซ็ตรหัสผ่าน" role="Moderator" roleColor="purple" online img="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=64" />
                <UserItem name="Sofia Chen" action="ส่งคำขอการเข้าถึง" role="User" roleColor="blue" online img="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=64" />
            </div>
        </div>
    </aside >
);

// eslint-disable-next-line no-unused-vars
const QuickTool = ({ icon: Icon, label, onClick }) => (
    <button className="quick-tool-btn" onClick={onClick}>
        <div className="quick-tool-icon"><Icon size={18} /></div>
        <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>{label}</span>
    </button>
);

const UserItem = ({ name, action, role, roleColor, online, img }) => (
    <div className="user-item">
        <div className="user-avatar-container">
            <img src={img} alt={name} style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }} />
            {online && <div className="user-online-dot"></div>}
        </div>
        <div className="user-details">
            <span className="user-name">{name}</span>
            <span className="user-action">{action}</span>
            <span className={`user-role-badge ${roleColor}`}>{role}</span>
        </div>
        <div className="activity-dot"></div>
    </div>
);

export default RightSidebar;
