import React, { useState } from 'react';
import { useToast } from '../context/ToastContext';
import { HelpCircle, ChevronDown, Check, ArrowLeft, Save, Eye, Building2 } from 'lucide-react';
import IPhoneMockup from '../components/brands/IPhoneMockup';
import './AddBrandView.css';

const AddBrandView = ({ onBack, isEdit = false, initialData = null }) => {
    const { addToast } = useToast();
    const [primaryColor, setPrimaryColor] = useState('#2f90fb');
    const [secondaryColor, setSecondaryColor] = useState('#1949a9');
    const [tertiaryColor, setTertiaryColor] = useState('#84cbff');
    
    const [brandName, setBrandName] = useState('');
    const [brandDesc, setBrandDesc] = useState('');

    const [activeTheme, setActiveTheme] = useState(1);

    const [maxUsers] = useState('100');
    const [maxCampaigns] = useState('50');
    
    // Checkboxes
    const [allowCampaigns, setAllowCampaigns] = useState(true);
    const [allowUsers, setAllowUsers] = useState(true);
    const [statusActive, setStatusActive] = useState(true);

    React.useEffect(() => {
        if (isEdit && initialData) {
            setBrandName(initialData.title || '');
            setBrandDesc(initialData.description || '');
            if (initialData.iconBg) {
                const match = initialData.iconBg.match(/#([0-9a-fA-F]{3,6})/);
                if (match) {
                    setPrimaryColor(match[0]);
                } else if (initialData.iconBg.startsWith('#')) {
                    setPrimaryColor(initialData.iconBg);
                }
            }
        }
    }, [isEdit, initialData]);

    const presetThemes = [
        { id: 1, primary: '#f04438', secondary: '#912018', tertiary: '#fda29b' },
        { id: 2, primary: '#f79009', secondary: '#93370d', tertiary: '#fec84b' },
        { id: 3, primary: '#16b364', secondary: '#095c37', tertiary: '#73e2a3' },
        { id: 4, primary: '#7a5af8', secondary: '#4a1fb8', tertiary: '#bdb4fe' },
        { id: 5, primary: '#5d6b98', secondary: '#30374f', tertiary: '#b3b8db' },
    ];

    return (
        <div className="add-brand-view-container">

            <div className="ab-content-area">
                <div className="ab-content-inner">
                    
                    {/* Sub Header */}
                    <div className="ab-sub-header">
                        <div className="ab-sh-left">
                            <button className="ab-back-btn" onClick={onBack}>
                                <ArrowLeft size={20} />
                                <span>กลับไปจัดการแบรนด์</span>
                            </button>
                            <h3 className="ab-sh-title">{isEdit ? 'แก้ไขแบรนด์' : 'เพิ่มแบรนด์ใหม่'}</h3>
                            <p className="ab-sh-subtitle">{isEdit ? 'แก้ไขข้อมูลและการตั้งค่าแบรนด์ของคุณ' : 'สร้างแบรนด์ใหม่เพื่อจัดกลุ่มและจัดการแคมเปญ SMS'}</p>
                        </div>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <button className="action-btn-outline" style={{ height: '40px', padding: '0 16px', borderRadius: '12px', color: 'var(--text-secondary)' }} onClick={() => addToast('info', 'บันทึกฉบับร่าง', 'ข้อมูลแบรนด์ถูกบันทึกเป็นฉบับร่างแล้ว')}>
                                <Save size={20} style={{ marginRight: '6px', color: 'var(--text-secondary)' }} />
                                <span style={{ fontWeight: 600, fontSize: '14px' }}>บันทึกฉบับร่าง</span>
                            </button>
                        </div>
                    </div>

                    {/* 2-Column Grid */}
                    <div className="ab-grid-layout">
                        {/* Left Column (Form) */}
                        <div className="ab-form-column">
                            
                            {/* Card 1: ข้อมูลแบรนด์ (Brand Info) */}
                            <div className="ab-card">
                                <h4 className="ab-card-title">ข้อมูลแบรนด์</h4>
                                <div className="ab-card-content">
                                    <div className="ab-form-group">
                                        <label className="ab-form-label">ชื่อแบรนด์ <span className="asterisk">*</span></label>
                                        <div className="ab-input-wrapper">
                                            <input 
                                                className="ab-input" 
                                                placeholder="ชื่อแบรนด์ของคุณ" 
                                                value={brandName}
                                                onChange={(e) => setBrandName(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="ab-form-group">
                                        <div className="ab-label-wrapper">
                                            <label className="ab-form-label">คำอธิบายแบรนด์ <span className="asterisk">*</span></label>
                                            <HelpCircle size={16} color="var(--text-tertiary)" />
                                        </div>
                                        <div className="ab-textarea-wrapper">
                                            <textarea 
                                                className="ab-textarea" 
                                                placeholder="คำอธิบายหรือวัตถุประสงค์ของแบรนด์นี้..."
                                                value={brandDesc}
                                                onChange={(e) => setBrandDesc(e.target.value)}
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2: อัตลักษณ์และธีมสี (Identity & Theme) */}
                            <div className="ab-card">
                                <h4 className="ab-card-title">อัตลักษณ์และธีมสี</h4>
                                <div className="ab-card-content">
                                    <div className="ab-form-group">
                                        <label className="ab-form-label">อัตลักษณ์แบรนด์</label>
                                        <div className="ab-color-row">
                                            <div className="ab-color-col">
                                                <span className="ab-color-title">สีหลัก</span>
                                                <div className="ab-color-picker-box">
                                                    <div className="ab-color-swatch" style={{ backgroundColor: primaryColor }}></div>
                                                    <span className="ab-color-hex">{primaryColor.toUpperCase()}</span>
                                                </div>
                                            </div>
                                            <div className="ab-color-col">
                                                <span className="ab-color-title">สีรอง</span>
                                                <div className="ab-color-picker-box">
                                                    <div className="ab-color-swatch" style={{ backgroundColor: secondaryColor }}></div>
                                                    <span className="ab-color-hex">{secondaryColor.toUpperCase()}</span>
                                                </div>
                                            </div>
                                            <div className="ab-color-col">
                                                <span className="ab-color-title">สีเสริม</span>
                                                <div className="ab-color-picker-box">
                                                    <div className="ab-color-swatch" style={{ backgroundColor: tertiaryColor }}></div>
                                                    <span className="ab-color-hex">{tertiaryColor.toUpperCase()}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="ab-form-group">
                                        <label className="ab-form-label">ชุดสีแนะนำ</label>
                                        <div className="ab-theme-row">
                                            {presetThemes.map((theme) => (
                                                <button 
                                                    key={theme.id} 
                                                    className={`ab-theme-preset ${activeTheme === theme.id ? 'active' : ''}`}
                                                    onClick={() => {
                                                        setActiveTheme(theme.id);
                                                        setPrimaryColor(theme.primary);
                                                        setSecondaryColor(theme.secondary);
                                                        setTertiaryColor(theme.tertiary);
                                                    }}
                                                >
                                                    <div className="ab-theme-preset-inner">
                                                        {/* Imitating the stacked colors design */}
                                                        <div className="ab-theme-primary-circle" style={{ backgroundColor: theme.primary }}></div>
                                                        <div className="ab-theme-secondary-bar" style={{ backgroundColor: theme.secondary }}></div>
                                                        <div className="ab-theme-tertiary-bar" style={{ backgroundColor: theme.tertiary }}></div>
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3: การตั้งค่า (Settings) */}
                            <div className="ab-card" style={{ padding: '0' }}>
                                <div style={{ padding: '24px' }}>
                                    <h4 className="ab-card-title" style={{ marginBottom: '16px' }}>การตั้งค่า</h4>
                                    <div className="ab-card-content">
                                        <div className="ab-split-row">
                                            <div className="ab-form-group flex-1">
                                                <div className="ab-label-wrapper">
                                                    <label className="ab-form-label">จำนวนผู้ใช้สูงสุด</label>
                                                    <HelpCircle size={16} color="var(--text-tertiary)" />
                                                </div>
                                                <div className="ab-input-wrapper dropdown-wrapper">
                                                    <span className="ab-input-text">{maxUsers}</span>
                                                    <ChevronDown size={20} color="var(--text-tertiary)" />
                                                </div>
                                            </div>
                                            <div className="ab-form-group flex-1">
                                                <div className="ab-label-wrapper">
                                                    <label className="ab-form-label">จำนวนแคมเปญสูงสุด</label>
                                                    <HelpCircle size={16} color="var(--text-tertiary)" />
                                                </div>
                                                <div className="ab-input-wrapper dropdown-wrapper">
                                                    <span className="ab-input-text">{maxCampaigns}</span>
                                                    <ChevronDown size={20} color="var(--text-tertiary)" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="ab-form-group">
                                            <label className="ab-form-label">อีเมลผู้ดูแลระบบ <span className="asterisk">*</span></label>
                                            <div className="ab-input-wrapper">
                                                <input className="ab-input" defaultValue="pream@sms2fly.com" />
                                            </div>
                                        </div>

                                        <div className="divider" style={{ margin: '8px 0', background: 'transparent' }}></div>

                                        <div className="ab-checkbox-list">
                                            <label className="ab-checkbox-item" onClick={(e) => { e.preventDefault(); setAllowCampaigns(!allowCampaigns); }}>
                                                <div className={`ab-checkbox-square ${allowCampaigns ? 'active' : ''}`}>
                                                    {allowCampaigns && <Check size={14} color="#fff" strokeWidth={3} />}
                                                </div>
                                                <span className="ab-checkbox-label">อนุญาตให้สร้างแคมเปญ SMS</span>
                                            </label>
                                            <label className="ab-checkbox-item" onClick={(e) => { e.preventDefault(); setAllowUsers(!allowUsers); }}>
                                                <div className={`ab-checkbox-square ${allowUsers ? 'active' : ''}`}>
                                                    {allowUsers && <Check size={14} color="#fff" strokeWidth={3} />}
                                                </div>
                                                <span className="ab-checkbox-label">อนุญาตให้เพิ่มผู้ใช้งาน</span>
                                            </label>
                                            <label className="ab-checkbox-item" onClick={(e) => { e.preventDefault(); setStatusActive(!statusActive); }}>
                                                <div className={`ab-checkbox-square ${statusActive ? 'active' : ''}`}>
                                                    {statusActive && <Check size={14} color="#fff" strokeWidth={3} />}
                                                </div>
                                                <span className="ab-checkbox-label">เปิดใช้งานแบรนด์ทันที</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="ab-card-footer">
                                    <button className="action-btn-outline" style={{ height: '40px', padding: '0 16px', borderRadius: '12px', color: 'var(--text-secondary)' }}>
                                        <Eye size={20} style={{ marginRight: '6px' }} />
                                        <span style={{ fontWeight: 600, fontSize: '14px' }}>ดูตัวอย่าง</span>
                                    </button>
                                    <button className="action-btn-primary" style={{ height: '40px', padding: '0 16px', borderRadius: '12px' }} onClick={() => {
                                        addToast('success', isEdit ? 'แก้ไขแบรนด์สำเร็จ' : 'สร้างแบรนด์สำเร็จ', isEdit ? 'ข้อมูลแบรนด์ของคุณได้รับการอัปเดตแล้ว' : 'แบรนด์ใหม่ถูกสร้างและบันทึกในระบบแล้ว');
                                    }}>
                                        <Building2 size={20} style={{ marginRight: '6px' }} />
                                        <span style={{ fontWeight: 600, fontSize: '14px' }}>{isEdit ? 'บันทึกการเปลี่ยนแปลง' : 'สร้างแบรนด์'}</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Column (Preview & Summary) */}
                        <div className="ab-right-column">
                            <div className="ab-preview-header-wrap">
                                <h4 className="ab-preview-title">ส่วนแสดงตัวอย่าง (Live Preview)</h4>
                                <div className="ab-live-badge">
                                    <div className="ab-live-dot"></div>
                                    กำลังอัปเดต
                                </div>
                            </div>
                            
                            <div className="ab-mockup-wrap">
                                <IPhoneMockup primaryColor={primaryColor} title={brandName} message={brandDesc} />
                            </div>

                            <div className="ab-card ab-summary-card" style={{ padding: '0' }}>
                                <div style={{ padding: '24px 24px 16px 24px' }}>
                                    <div className="ab-summary-header">
                                        <h4 className="ab-card-title">สรุปอัตลักษณ์</h4>
                                        <div className="ab-verify-badge">
                                            <div className="ab-verify-dot"></div>
                                            ยืนยันความถูกต้อง
                                        </div>
                                    </div>
                                    
                                    <div className="ab-summary-list">
                                        <div className="ab-summary-item">
                                            <span className="ab-summary-label">ผู้ใช้สูงสุด:</span>
                                            <span className="ab-summary-value">{maxUsers} คน</span>
                                        </div>
                                        <div className="ab-summary-item">
                                            <span className="ab-summary-label">แคมเปญสูงสุด:</span>
                                            <span className="ab-summary-value">{maxCampaigns} แคมเปญ</span>
                                        </div>
                                        <div className="ab-summary-item">
                                            <span className="ab-summary-label">สร้างแคมเปญ:</span>
                                            <span className="ab-summary-value">{allowCampaigns ? 'อนุญาต' : 'ไม่อนุญาต'}</span>
                                        </div>
                                        <div className="ab-summary-item">
                                            <span className="ab-summary-label">เพิ่มผู้ใช้:</span>
                                            <span className="ab-summary-value">{allowUsers ? 'อนุญาต' : 'ไม่อนุญาต'}</span>
                                        </div>
                                        <div className="ab-summary-item">
                                            <span className="ab-summary-label">สถานะ:</span>
                                            <span className="ab-summary-value">{statusActive ? 'เปิดใช้งาน' : 'ปิดการใช้งาน'}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="ab-summary-alert">
                                        <p>โทนสีและชุดสีที่คุณเลือกจะถูกใช้ในทุกองค์ประกอบของแบรนด์ รวมถึงลิงก์ย่อและการแจ้งเตือนลูกค้าโดยอัตโนมัติ</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBrandView;
