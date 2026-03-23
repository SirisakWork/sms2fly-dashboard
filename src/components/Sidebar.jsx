import React, { useState } from 'react';
import { LayoutDashboard, BarChart2, Layers, Send, Globe, Users, UserPlus, HelpCircle, Settings, ChevronsUpDown, LogOut, X, Tag, Contact, CheckCircle2, BookOpen } from 'lucide-react';

import { useToast } from '../context/ToastContext';

const Sidebar = ({ activeTab, setActiveTab, onLogout }) => {
    // eslint-disable-next-line no-unused-vars
    const [isCreditVisible, setIsCreditVisible] = useState(true);
    const { addToast } = useToast();

    const handleLogout = () => {
        addToast('info', 'ออกจากระบบ', 'คุณได้ออกจากระบบเปรม ปรีดา เรียบร้อยแล้ว');
        if (onLogout) onLogout();
    };

    return (
        <aside className="sidebar">
            <div className="sidebar-logo flex items-center gap-2">
                <div className="logo-icon"><Send size={18} fill="currentColor" /></div>
                <span className="logo-text">SMS2FLY</span>
            </div>

            <div className="workspace-selector flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="workspace-icon"><Layers size={20} /></div>
                    <div className="flex-col">
                        <span className="text-sm font-semibold">แบรนด์หลัก</span>
                        <span className="text-xs text-secondary">แบรนด์หลักของบริษัท</span>
                    </div>
                </div>
                <ChevronsUpDown size={16} color="#9ca3af" />
            </div>

            <nav className="nav-menu">
                <NavItem icon={LayoutDashboard} label="แดชบอร์ด" active={activeTab === 'แดชบอร์ด'} onClick={() => setActiveTab('แดชบอร์ด')} />
                <NavItem icon={BarChart2} label="วิเคราะห์" active={activeTab === 'วิเคราะห์'} onClick={() => setActiveTab('วิเคราะห์')} />
                <NavItem icon={Layers} label="แบรนด์" active={activeTab === 'แบรนด์' || activeTab === 'เพิ่มแบรนด์'} onClick={() => setActiveTab('แบรนด์')} />
                <NavItem icon={CheckCircle2} label="แคมเปญ" active={activeTab === 'แคมเปญ'} onClick={() => setActiveTab('แคมเปญ')} />
                <NavItem icon={Users} label="ลูกค้า" active={activeTab === 'ลูกค้า'} onClick={() => setActiveTab('ลูกค้า')} />
                <NavItem icon={Send} label="ผู้ส่ง" active={activeTab === 'ผู้ส่ง'} onClick={() => setActiveTab('ผู้ส่ง')} />
                <NavItem icon={Contact} label="กลุ่มลูกค้า" active={activeTab === 'กลุ่มลูกค้า'} onClick={() => setActiveTab('กลุ่มลูกค้า')} />
                <NavItem icon={Globe} label="โดเมน" active={activeTab === 'โดเมน'} onClick={() => setActiveTab('โดเมน')} />
                <NavItem icon={Tag} label="แท็กกำหนดเอง" active={activeTab === 'แท็กกำหนดเอง'} onClick={() => setActiveTab('แท็กกำหนดเอง')} />
                <div className="nav-divider"></div>
                <NavItem icon={HelpCircle} label="ช่วยเหลือ" active={activeTab === 'ช่วยเหลือ'} onClick={() => setActiveTab('ช่วยเหลือ')} />
                <NavItem icon={Settings} label="ตั้งค่า" active={activeTab === 'ตั้งค่า'} onClick={() => setActiveTab('ตั้งค่า')} />
                <NavItem icon={BookOpen} label="เอกสารอ้างอิง" active={activeTab === 'เอกสารอ้างอิง'} onClick={() => setActiveTab('เอกสารอ้างอิง')} />
            </nav>


            <div className="user-footer">
                <div className="flex items-center gap-3">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64" alt="Profile" className="user-avatar" />
                    <div className="flex-col" style={{ marginTop: '-2px' }}>
                        <span className="text-sm font-semibold">เปรม ปรีดา</span>
                        <span className="text-xs text-secondary">pream@sms2fly.com</span>
                    </div>
                </div>
                <LogOut size={18} color="#64748b" style={{ cursor: 'pointer' }} onClick={handleLogout} />
            </div>
        </aside >
    );
};

// eslint-disable-next-line no-unused-vars
const NavItem = ({ icon: Icon, label, active = false, onClick }) => (
    <div className={`nav-item ${active ? 'active' : ''}`} onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
        <Icon size={20} />
        <span>{label}</span>
    </div>
);

export default Sidebar;
