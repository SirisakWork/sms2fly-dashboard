import React from 'react';
import { Bell, Sun, Moon, ChevronDown, Plus, Settings } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const TopBar = ({ activeTab = 'แดชบอร์ด', setActiveTab }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="top-bar">
            <h1 className="page-title">{activeTab}</h1>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2" style={{ marginRight: '8px' }}>
                    <button className="icon-btn"><Bell size={18} /></button>
                    <button className="icon-btn" onClick={toggleTheme}>
                        {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
                    </button>
                    <button className="lang-btn">
                    <div className="thai-flag">
                        <div className="flag-red"></div>
                        <div className="flag-white"></div>
                        <div className="flag-blue"></div>
                    </div>
                    <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-primary)' }}>ภาษาไทย</span>
                    <ChevronDown size={14} />
                </button>
            </div>
            {activeTab === 'แดชบอร์ด' && (
                <div className="flex items-center gap-3">
                    <div className="action-btn-outline" style={{ cursor: 'default', fontWeight: 600, color: 'var(--text-primary)' }}>เครดิตคงเหลือ: 50,000</div>
                    <button className="action-btn-primary" onClick={() => setActiveTab && setActiveTab('สร้างแคมเปญใหม่')}><Plus size={20} /><span>สร้างแคมเปญใหม่</span></button>
                </div>
            )}
        </div>
    </header>
  );
};

export default TopBar;
