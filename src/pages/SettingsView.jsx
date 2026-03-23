import React, { useState } from 'react';
import { User, Monitor, Bell, Shield, CreditCard } from 'lucide-react';
import SettingsProfile from '../components/settings/SettingsProfile';
import SettingsSystem from '../components/settings/SettingsSystem';
import SettingsNotifications from '../components/settings/SettingsNotifications';
import SettingsSecurity from '../components/settings/SettingsSecurity';
import SettingsBilling from '../components/settings/SettingsBilling';

const SettingsView = ({ onUpgrade }) => {
    const [activeSection, setActiveSection] = useState('profile');

    const renderContent = () => {
        switch (activeSection) {
            case 'profile': return <SettingsProfile />;
            case 'system': return <SettingsSystem />;
            case 'notifications': return <SettingsNotifications />;
            case 'security': return <SettingsSecurity />;
            case 'billing': return <SettingsBilling onUpgrade={onUpgrade} />;
            default: return <SettingsProfile />;
        }
    };

    return (
        <div className="view-container">
            <div className="header-section" style={{ marginBottom: '8px' }}>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                        <h2 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)' }}>ตั้งค่า</h2>
                        <span className="text-sm text-secondary">จัดการการตั้งค่าบัญชีและระบบของคุณ</span>
                    </div>
                </div>
            </div>

            <div className="settings-layout">
                {/* Settings Sidebar */}
                <div className="settings-sidebar card">
                    <nav className="settings-nav">
                        <button 
                            className={`settings-tab ${activeSection === 'profile' ? 'active' : ''}`}
                            onClick={() => setActiveSection('profile')}
                        >
                            <User size={18} />
                            <span>โปรไฟล์</span>
                        </button>
                        <button 
                            className={`settings-tab ${activeSection === 'system' ? 'active' : ''}`}
                            onClick={() => setActiveSection('system')}
                        >
                            <Monitor size={18} />
                            <span>ระบบ</span>
                        </button>
                        <button 
                            className={`settings-tab ${activeSection === 'notifications' ? 'active' : ''}`}
                            onClick={() => setActiveSection('notifications')}
                        >
                            <Bell size={18} />
                            <span>การแจ้งเตือน</span>
                        </button>
                        <button 
                            className={`settings-tab ${activeSection === 'security' ? 'active' : ''}`}
                            onClick={() => setActiveSection('security')}
                        >
                            <Shield size={18} />
                            <span>ความปลอดภัย</span>
                        </button>
                        <button 
                            className={`settings-tab ${activeSection === 'billing' ? 'active' : ''}`}
                            onClick={() => setActiveSection('billing')}
                        >
                            <CreditCard size={18} />
                            <span>การเรียกเก็บเงิน</span>
                        </button>
                    </nav>
                </div>

                {/* Settings Main Content */}
                <div className="settings-content">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default SettingsView;
