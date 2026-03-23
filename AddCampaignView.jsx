import React, { useState } from 'react';
import { useToast } from '../context/ToastContext';
import { ArrowLeft, Save, HelpCircle, ChevronDown, MoreVertical, UploadCloud, Eye, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import IPhoneMockup from '../components/brands/IPhoneMockup';
import './AddBrandView.css';
import './AddCampaignView.css';

const AddCampaignView = ({ onBack, isEdit = false }) => {
    const { addToast } = useToast();
    // Card 1
    const [campaignName, setCampaignName] = useState('');
    const [campaignType, setCampaignType] = useState('');
    const [campaignRef, setCampaignRef] = useState('');
    
    // Card 2
    const [linkName, setLinkName] = useState('');
    const [campaignDesc, setCampaignDesc] = useState('');

    // Card 3
    const [message, setMessage] = useState('');
    const [domain, setDomain] = useState('');
    const [sender, setSender] = useState('');

    // Card 4
    const [contactGroup, setContactGroup] = useState('');
    const [targetGroup, setTargetGroup] = useState('');
    const [scheduleType, setScheduleType] = useState('immediate');
    const [sendDate, setSendDate] = useState('');
    const [sendTime, setSendTime] = useState('');

    return (
        <div className="add-brand-view-container">
            <div className="ab-content-area">
                <div className="ab-content-inner">
                    
                    {/* Header */}
                    <div className="ab-sub-header" style={{ padding: '0 0 24px 0', borderBottom: 'none' }}>
                        <div className="ab-sh-left">
                            <button className="ab-back-btn" onClick={onBack}>
                                <ArrowLeft size={16} />
                                กลับไปหน้ารายการแคมเปญ
                            </button>
                            <h3 className="ab-sh-title" style={{ fontSize: '24px', marginBottom: '4px' }}>{isEdit ? 'แก้ไขแคมเปญ' : 'สร้างแคมเปญใหม่'}</h3>
                            <p className="ab-sh-subtitle">{isEdit ? 'แก้ไขข้อมูลและปรับแต่งแคมเปญเดิมของคุณ' : 'ออกแบบแคมเปญและจัดการเวลาการส่งข้อความ SMS'}</p>
                        </div>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <button className="action-btn-outline" style={{ height: '40px', padding: '0 16px', borderRadius: '8px', color: 'var(--text-secondary)' }} onClick={() => addToast('info', 'บันทึกฉบับร่าง', 'ข้อมูลแคมเปญถูกบันทึกเป็นฉบับร่างแล้ว')}>
                                <Save size={20} style={{ marginRight: '8px', color: 'var(--text-secondary)' }} />
                                <span style={{ fontWeight: 600, fontSize: '14px' }}>บันทึกฉบับร่าง</span>
                            </button>
                        </div>
                    </div>

                    {/* 2-Column Grid */}
                    <div className="ab-grid-layout">
                        
                        {/* Left Column (Form) */}
                        <div className="ab-form-column" style={{ gap: '24px' }}>
                            
                            {/* Card 1: ชื่อแคมเปญ */}
                            <div className="ab-card">
                                <h4 className="ab-card-title" style={{ fontSize: '16px', marginBottom: '16px' }}>ชื่อแคมเปญ</h4>
                                <div className="ab-card-content" style={{ gap: '16px' }}>
                                    <div className="ab-form-group">
                                        <label className="ab-form-label">ชื่อแคมเปญ <span className="asterisk">*</span></label>
                                        <div className="ab-input-wrapper">
                                            <input 
                                                className="ab-input" 
                                                placeholder="ชื่อแคมเปญของคุณ" 
                                                value={campaignName}
                                                onChange={(e) => setCampaignName(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="ab-split-row">
                                        <div className="ab-form-group flex-1">
                                            <label className="ab-form-label">จำนวนผู้ใช้สูงสุด <span className="asterisk">*</span></label>
                                            <div className="ab-input-wrapper dropdown-wrapper" style={{ position: 'relative' }}>
                                                <span className="ab-input-text" style={{ fontSize: '15px', color: campaignType ? 'var(--text-primary)' : 'var(--text-secondary)' }}>{campaignType || 'ระบุจำนวนสูงสุด'}</span>
                                                <ChevronDown size={20} color="var(--text-tertiary)" />
                                                <select className="ab-input" style={{ position: 'absolute', opacity: 0, inset: 0, cursor: 'pointer', zIndex: 10, width: '100%', height: '100%' }} value={campaignType} onChange={(e) => setCampaignType(e.target.value)}>
                                                    <option value="" disabled>ระบุจำนวนสูงสุด</option>
                                                    <option value="1,000">1,000</option>
                                                    <option value="5,000">5,000</option>
                                                    <option value="10,000">10,000</option>
                                                    <option value="ไม่จำกัด">ไม่จำกัด</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="ab-form-group flex-1">
                                            <label className="ab-form-label">รหัสอ้างอิง <span className="asterisk">*</span></label>
                                            <div className="ab-input-wrapper">
                                                <input 
                                                    className="ab-input" 
                                                    placeholder="ระบุรหัสอ้างอิง" 
                                                    value={campaignRef}
                                                    onChange={(e) => setCampaignRef(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2: เนื้อหาข้อความและลิงก์ */}
                            <div className="ab-card">
                                <h4 className="ab-card-title" style={{ fontSize: '16px', marginBottom: '16px' }}>เนื้อหาข้อความและลิงก์</h4>
                                <div className="ab-card-content" style={{ gap: '16px' }}>
                                    <div className="ab-form-group">
                                        <label className="ab-form-label">ชื่อแคมเปญ <span className="asterisk">*</span></label>
                                        <div className="ab-input-wrapper">
                                            <input 
                                                className="ab-input" 
                                                placeholder="ชื่อแคมเปญของคุณ" 
                                                value={linkName}
                                                onChange={(e) => setLinkName(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="ab-form-group">
                                        <div className="ab-label-wrapper">
                                            <label className="ab-form-label">คำอธิบายแคมเปญ</label>
                                            <HelpCircle size={14} color="var(--text-tertiary)" />
                                        </div>
                                        <div className="ab-textarea-wrapper">
                                            <textarea 
                                                className="ab-textarea" 
                                                style={{ minHeight: '100px' }}
                                                placeholder="คำอธิบายแคมเปญเพิ่มเติม..."
                                                value={campaignDesc}
                                                onChange={(e) => setCampaignDesc(e.target.value)}
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3: เนื้อหาข้อความ */}
                            <div className="ab-card">
                                <h4 className="ab-card-title" style={{ fontSize: '16px', marginBottom: '16px' }}>เนื้อหาข้อความ</h4>
                                <div className="ab-card-content" style={{ gap: '16px' }}>
                                    <div className="ab-form-group">
                                        <label className="ab-form-label">ข้อความ <span className="asterisk">*</span></label>
                                        <div className="ab-textarea-wrapper">
                                            <textarea 
                                                className="ab-textarea" 
                                                style={{ minHeight: '120px' }}
                                                placeholder="พิมพ์ข้อความที่ต้องการส่งถึงลูกค้า..."
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                            ></textarea>
                                        </div>
                                        <div style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>
                                            {message.length}/160 ตัวอักษร
                                        </div>
                                    </div>
                                    <div className="ab-split-row">
                                        <div className="ab-form-group flex-1">
                                            <label className="ab-form-label">โดเมน <span className="asterisk">*</span></label>
                                            <div className="ab-input-wrapper dropdown-wrapper" style={{ position: 'relative' }}>
                                                <span className="ab-input-text" style={{ fontSize: '15px', color: domain ? 'var(--text-primary)' : 'var(--text-secondary)' }}>{domain || 'เลือกโดเมน'}</span>
                                                <ChevronDown size={20} color="var(--text-tertiary)" />
                                                <select className="ab-input" style={{ position: 'absolute', opacity: 0, inset: 0, cursor: 'pointer', zIndex: 10, width: '100%', height: '100%' }} value={domain} onChange={(e) => setDomain(e.target.value)}>
                                                    <option value="" disabled>เลือกโดเมน</option>
                                                    <option value="sms2fly.link">sms2fly.link</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="ab-form-group flex-1">
                                            <label className="ab-form-label">Sender ID <span className="asterisk">*</span></label>
                                            <div className="ab-input-wrapper dropdown-wrapper" style={{ position: 'relative' }}>
                                                <span className="ab-input-text" style={{ fontSize: '15px', color: sender ? 'var(--text-primary)' : 'var(--text-secondary)' }}>{sender || 'เลือกผู้ส่ง'}</span>
                                                <ChevronDown size={20} color="var(--text-tertiary)" />
                                                <select className="ab-input" style={{ position: 'absolute', opacity: 0, inset: 0, cursor: 'pointer', zIndex: 10, width: '100%', height: '100%' }} value={sender} onChange={(e) => setSender(e.target.value)}>
                                                    <option value="" disabled>เลือกผู้ส่ง</option>
                                                    <option value="OTP_Verify">OTP_Verify</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 4: ผู้รับ SMS */}
                            <div className="ab-card">
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                                    <h4 className="ab-card-title" style={{ fontSize: '16px', margin: 0 }}>ผู้รับ SMS</h4>
                                    <MoreVertical size={20} color="var(--text-tertiary)" style={{ cursor: 'pointer' }} />
                                </div>
                                <div className="ab-card-content" style={{ gap: '16px' }}>
                                    <div className="ab-split-row">
                                        <div className="ab-form-group flex-1">
                                            <label className="ab-form-label">กลุ่มผู้ติดต่อ</label>
                                            <div className="ab-input-wrapper dropdown-wrapper" style={{ position: 'relative' }}>
                                                <span className="ab-input-text" style={{ fontSize: '15px', color: contactGroup ? 'var(--text-primary)' : 'var(--text-secondary)' }}>{contactGroup || 'เลือกกลุ่มผู้ติดต่อ'}</span>
                                                <ChevronDown size={20} color="var(--text-tertiary)" />
                                                <select className="ab-input" style={{ position: 'absolute', opacity: 0, inset: 0, cursor: 'pointer', zIndex: 10, width: '100%', height: '100%' }} value={contactGroup} onChange={(e) => setContactGroup(e.target.value)}>
                                                    <option value="" disabled>เลือกกลุ่มผู้ติดต่อ</option>
                                                    <option value="ลูกค้า VIP">ลูกค้า VIP</option>
                                                    <option value="พนักงาน">พนักงาน</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="ab-form-group flex-1">
                                            <label className="ab-form-label">กลุ่มเป้าหมาย</label>
                                            <div className="ab-input-wrapper dropdown-wrapper" style={{ position: 'relative' }}>
                                                <span className="ab-input-text" style={{ fontSize: '15px', color: targetGroup ? 'var(--text-primary)' : 'var(--text-secondary)' }}>{targetGroup || 'เลือกกลุ่มเป้าหมาย'}</span>
                                                <ChevronDown size={20} color="var(--text-tertiary)" />
                                                <select className="ab-input" style={{ position: 'absolute', opacity: 0, inset: 0, cursor: 'pointer', zIndex: 10, width: '100%', height: '100%' }} value={targetGroup} onChange={(e) => setTargetGroup(e.target.value)}>
                                                    <option value="" disabled>เลือกกลุ่มเป้าหมาย</option>
                                                    <option value="ทั้งหมด">ทั้งหมด</option>
                                                    <option value="เฉพาะภาคเหนือ">เฉพาะภาคเหนือ</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Upload box */}
                                    <div className="upload-box" style={{ border: '1px dashed #CDD4DE', borderRadius: '8px', padding: '24px', textAlign: 'center', backgroundColor: '#F8FAFC', cursor: 'pointer' }}>
                                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#E0EAFF', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px auto' }}>
                                            <UploadCloud size={20} color="#1571ef" />
                                        </div>
                                        <p style={{ fontSize: '14px', color: '#1571ef', fontWeight: 600, margin: 0 }}>
                                            อัปโหลดไฟล์ <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>ลากหรือวาง</span>
                                        </p>
                                        <p style={{ fontSize: '12px', color: 'var(--text-tertiary)', margin: '4px 0 0 0' }}>รองรับไฟล์ CSV, TXT ขนาดไม่เกิน 5MB</p>
                                    </div>

                                    <div className="ab-form-group">
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                            <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }} onClick={(e) => { e.preventDefault(); setScheduleType('immediate'); }}>
                                                <div className={`radio-custom ${scheduleType === 'immediate' ? 'checked' : ''}`}>
                                                    {scheduleType === 'immediate' && <div className="radio-inner"></div>}
                                                </div>
                                                <span style={{ fontSize: '14px', color: 'var(--text-primary)', fontWeight: scheduleType === 'immediate' ? 500 : 400 }}>ส่งทันที</span>
                                            </label>
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                                <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }} onClick={(e) => { e.preventDefault(); setScheduleType('scheduled'); }}>
                                                    <div className={`radio-custom ${scheduleType === 'scheduled' ? 'checked' : ''}`}>
                                                        {scheduleType === 'scheduled' && <div className="radio-inner"></div>}
                                                    </div>
                                                    <span style={{ fontSize: '14px', color: 'var(--text-primary)', fontWeight: scheduleType === 'scheduled' ? 500 : 400 }}>กำหนดเวลาส่ง</span>
                                                </label>
                                                {scheduleType === 'scheduled' && (
                                                    <div style={{ paddingLeft: '32px' }}>
                                                        <div className="ab-split-row">
                                                            <div className="ab-form-group flex-1">
                                                                <label className="ab-form-label" style={{ fontSize: '13px' }}>วันที่ส่ง</label>
                                                                <div className="ab-input-wrapper">
                                                                    <input type="date" className="ab-input" style={{ border: 'none', background: 'transparent', outline: 'none', color: sendDate ? 'var(--text-primary)' : 'var(--text-secondary)', fontSize: '15px', fontFamily: 'inherit', width: '100%' }} value={sendDate} onChange={(e) => setSendDate(e.target.value)} />
                                                                </div>
                                                            </div>
                                                            <div className="ab-form-group flex-1">
                                                                <label className="ab-form-label" style={{ fontSize: '13px' }}>เวลาที่ส่ง</label>
                                                                <div className="ab-input-wrapper">
                                                                    <input type="time" className="ab-input" style={{ border: 'none', background: 'transparent', outline: 'none', color: sendTime ? 'var(--text-primary)' : 'var(--text-secondary)', fontSize: '15px', fontFamily: 'inherit', width: '100%' }} value={sendTime} onChange={(e) => setSendTime(e.target.value)} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 5: สรุปแคมเปญ */}
                            <div className="ab-card">
                                <h4 className="ab-card-title" style={{ fontSize: '16px', marginBottom: '20px' }}>สรุปแคมเปญ</h4>
                                <div className="ab-card-content" style={{ gap: '16px' }}>
                                    
                                    <div className="summary-row">
                                        <span className="summary-label">โดเมน:</span>
                                        <span className="summary-value" style={{ color: 'var(--text-secondary)' }}>{domain || '-'}</span>
                                    </div>
                                    <div className="summary-row">
                                        <span className="summary-label">ผู้รับ:</span>
                                        <span className="summary-value">{contactGroup ? '1,000 คน' : '0 คน'}</span>
                                    </div>
                                    <div className="summary-row">
                                        <span className="summary-label">ข้อความ:</span>
                                        <span className="summary-value">{message.length} ตัวอักษร</span>
                                    </div>
                                    <div className="summary-row">
                                        <span className="summary-label">SMS:</span>
                                        <span className="summary-value">{message.length > 0 ? Math.ceil(message.length / 160) : 0} ข้อความ</span>
                                    </div>
                                    <div className="summary-row">
                                        <span className="summary-label">เครดิตที่ใช้ทั้งหมด:</span>
                                        <span className="summary-value">เครดิต</span>
                                    </div>
                                    <div className="summary-row">
                                        <span className="summary-label">แท็ก:</span>
                                        <span className="badge-outline">โปรโมชั่น</span>
                                    </div>
                                    <div className="summary-row" style={{ marginBottom: '8px' }}>
                                        <span className="summary-label">สถานะการสร้าง:</span>
                                        <span className="badge-success">● พร้อมส่ง</span>
                                    </div>

                                    <div style={{ height: '1px', backgroundColor: '#EAECF0', width: '100%', margin: '4px 0' }}></div>

                                    <div className="summary-row" style={{ marginTop: '8px', marginBottom: '8px' }}>
                                        <span className="summary-label" style={{ fontWeight: 500 }}>ค่าใช้จ่ายประมาณ:</span>
                                        <span className="summary-value" style={{ color: '#1571ef', fontWeight: 600, fontSize: '16px' }}>0 บาท</span>
                                    </div>

                                    <div className="info-box-blue">
                                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                            <HelpCircle size={16} color="#1571ef" style={{ marginTop: '2px' }} />
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                                <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)' }}>ทิปการสร้างแคมเปญ</span>
                                                <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '12px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                                    <li>ใช้ชื่อแคมเปญให้มีความหมาย</li>
                                                    <li>ข้อความควรระชับและชัดเจน</li>
                                                    <li>ระบุ Call-to-Action ที่ชัดเจน</li>
                                                    <li>ตรวจสอบการสะกดก่อนส่ง</li>
                                                    <li>ทดสอบส่งก่อนส่งจริง</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="campaign-actions" style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                                        <button className="action-btn-outline" style={{ flex: 1, height: '44px', borderRadius: '8px', fontSize: '14px', justifyContent: 'center' }}>
                                            <Eye size={18} style={{ marginRight: '6px' }} />
                                            ดูตัวอย่าง
                                        </button>
                                        <button className="action-btn-outline" style={{ flex: 1, height: '44px', borderRadius: '8px', fontSize: '14px', justifyContent: 'center' }} onClick={() => addToast('warning', 'ทดสอบการส่ง', 'ระบบกำลังจำลองจัดส่งข้อความไปยังหมายเลขของคุณ...')}>
                                            <MessageSquare size={18} style={{ marginRight: '6px' }} />
                                            ทดสอบการส่ง
                                        </button>
                                        <button className="action-btn-primary" style={{ flex: 1.2, height: '44px', borderRadius: '8px', fontSize: '14px', justifyContent: 'center' }} onClick={() => addToast('success', 'แคมเปญถูกจัดส่ง', 'ข้อมูลแคมเปญของคุณเข้าสู่คิวการส่งเรียบร้อยแล้ว')}>
                                            <Send size={18} style={{ marginRight: '6px' }} />
                                            สร้างและส่งทันที
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Right Column (Live Preview Sticky container) */}
                        <div className="ab-right-column" style={{ width: '400px' }}>
                            <div className="ab-right-column-inner" style={{ position: 'sticky', top: '24px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                                    <h4 className="ab-card-title" style={{ margin: 0, fontSize: '16px' }}>ส่วนแสดงตัวอย่าง (Live Preview)</h4>
                                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: '#ECFDF3', color: '#067647', padding: '4px 10px', borderRadius: '16px', fontSize: '12px', fontWeight: 500 }}>
                                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#12B76A' }}></div>
                                        กำลังอัปเดต
                                    </span>
                                </div>
                                <IPhoneMockup 
                                    primaryColor="#1571ef" 
                                    title={sender || 'ชื่อผู้ส่ง'} 
                                    message={message || 'กรุณาพิมพ์ข้อความ SMS เพื่อดูตัวอย่างแบบเรียลไทม์ที่นี่'} 
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCampaignView;
