import React, { useState } from 'react';
import { useToast } from '../context/ToastContext';
import SkeletonLoader from '../components/common/SkeletonLoader';
import EmptyState from '../components/common/EmptyState';
import Tooltip from '../components/common/Tooltip';
import SuccessModal from '../components/SuccessModal';
import { FileText, Send, Info, AlertTriangle, AlertCircle, CheckCircle2, Check, ExternalLink, Edit, Trash2, Users, MessageSquare, TrendingUp, Search, ChevronDown } from 'lucide-react';
import './DocumentationView.css';

const ColorSwatch = ({ name, varName }) => (
    <div className="color-swatch-card">
        <div className="color-swatch-box" style={{ backgroundColor: `var(${varName})` }}></div>
        <div className="color-swatch-info">
            <span className="color-name">{name}</span>
            <span className="color-var">{varName}</span>
        </div>
    </div>
);

const DocShowcase = ({ title, description, code, propsTable, children }) => {
    const [showCode, setShowCode] = useState(false);
    return (
        <div className="doc-showcase mb-8">
            <div className="doc-showcase-header flex justify-between items-center mb-4">
                <div>
                    <h4 className="text-md font-semibold m-0 text-primary">{title}</h4>
                    {description && <p className="text-sm text-secondary m-0 mt-1">{description}</p>}
                </div>
                {code && (
                    <button className="action-btn-outline text-xs py-1 px-3" style={{ height: '28px' }} onClick={() => setShowCode(!showCode)}>
                        {showCode ? 'Hide JSX' : 'Copy JSX'}
                    </button>
                )}
            </div>
            <div className="doc-component-box" style={{ marginBottom: 0 }}>
                {children}
            </div>
            {showCode && code && (
                <div className="doc-code-block mt-2 p-4 bg-slate-900 rounded-lg overflow-x-auto">
                    <pre className="text-sm text-slate-50 m-0"><code>{code}</code></pre>
                </div>
            )}
            {propsTable && (
                 <div className="doc-props-table mt-4 border border-slate-200 rounded-lg overflow-hidden">
                    <table className="w-full text-sm text-left border-collapse">
                        <thead className="text-xs text-secondary bg-slate-50 border-b border-slate-200">
                            <tr>
                                <th className="py-2 px-4 font-medium">Prop</th>
                                <th className="py-2 px-4 font-medium">Type</th>
                                <th className="py-2 px-4 font-medium">Default</th>
                                <th className="py-2 px-4 font-medium">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {propsTable.map((prop, idx) => (
                                <tr key={idx} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
                                    <td className="py-2 px-4 font-mono text-primary">{prop.name}</td>
                                    <td className="py-2 px-4 text-emerald-600 font-mono text-xs">{prop.type}</td>
                                    <td className="py-2 px-4 font-mono text-slate-500 text-xs">{prop.default || '-'}</td>
                                    <td className="py-2 px-4 text-secondary">{prop.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                 </div>
            )}
        </div>
    );
};

const DocumentationView = () => {
    const { addToast } = useToast();
    const [activeSection, setActiveSection] = useState('foundation');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isChecked, setIsChecked] = useState(true);

    const triggerToast = (type) => {
        const messages = {
            success: ['บันทึกสำเร็จ', 'อัปเดตข้อมูลแบรนด์เรียบร้อยแล้ว'],
            error: ['เกิดข้อผิดพลาด', 'ไม่สามารถบันทึกข้อมูลได้ กรุณาลองใหม่อีกครั้ง'],
            warning: ['แจ้งเตือน', 'เครดิตของคุณใกล้จะหมดแล้ว'],
            info: ['ข้อมูลใหม่', 'มีประกาศอัปเดตระบบใหม่ล่าสุด']
        };
        addToast(type, messages[type][0], messages[type][1]);
    };

    const scrollTo = (id) => {
        setActiveSection(id);
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="doc-container fade-in">
            {/* Left Nav */}
            <aside className="doc-sidebar">
                <h3 className="doc-sidebar-title">Design System</h3>
                <nav className="doc-nav">
                    <button className={`doc-nav-item ${activeSection === 'foundation' ? 'active' : ''}`} onClick={() => scrollTo('foundation')}>1. Foundation</button>
                    <button className={`doc-nav-item ${activeSection === 'components' ? 'active' : ''}`} onClick={() => scrollTo('components')}>2. Components</button>
                    <button className={`doc-nav-item ${activeSection === 'patterns' ? 'active' : ''}`} onClick={() => scrollTo('patterns')}>3. Patterns & Layout</button>
                    <button className={`doc-nav-item ${activeSection === 'motion' ? 'active' : ''}`} onClick={() => scrollTo('motion')}>4. Interaction & Motion</button>
                    <button className={`doc-nav-item ${activeSection === 'guidelines' ? 'active' : ''}`} onClick={() => scrollTo('guidelines')}>5. Usage Guidelines</button>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="doc-content">
                <div className="doc-header">
                    <h1>SMS2FLY Documentation</h1>
                    <p>เอกสารอ้างอิง Foundation และ Components ทั้งหมดในระบบ สำหรับใช้เป็น Design System Reference สำหรับ Developer</p>
                </div>

                {/* 1. Foundation */}
                <section id="foundation" className="doc-section">
                    <h2>1. Foundation (Design Tokens)</h2>
                    
                    <h3>Colors</h3>
                    <div className="doc-grid">
                        <ColorSwatch name="Primary" varName="--primary" />
                        <ColorSwatch name="Background Body" varName="--bg-body" />
                        <ColorSwatch name="Background Card" varName="--bg-card" />
                        <ColorSwatch name="Border" varName="--border" />
                        <ColorSwatch name="Text Primary" varName="--text-primary" />
                        <ColorSwatch name="Text Secondary" varName="--text-secondary" />
                        <ColorSwatch name="Success" varName="--success" />
                        <ColorSwatch name="Error" varName="--error" />
                    </div>

                    <h3 className="mt-8">Typography</h3>
                    <div className="doc-component-box">
                        <div className="flex flex-col gap-4">
                            <div>
                                <span className="text-sm text-secondary block mb-1">Heading 1 (24px, 600)</span>
                                <h1 style={{ margin: 0 }}>เริ่มต้นใช้งาน SMS2FLY</h1>
                            </div>
                            <div>
                                <span className="text-sm text-secondary block mb-1">Heading 2 (20px, 600)</span>
                                <h2 style={{ margin: 0 }}>ภาพรวมแคมเปญ</h2>
                            </div>
                            <div>
                                <span className="text-sm text-secondary block mb-1">Body Primary (14px, 400)</span>
                                <p style={{ color: 'var(--text-primary)', margin: 0 }}>นี่คือข้อความตัวอย่างที่ใช้เป็น Body ประจำระบบ มีการเว้นวรรคและขนาดที่อ่านง่ายขึ้น</p>
                            </div>
                            <div>
                                <span className="text-sm text-secondary block mb-1">Body Secondary (14px, 400, color: text-secondary)</span>
                                <p style={{ color: 'var(--text-secondary)', margin: 0 }}>ข้อความสำหรับคำอธิบายเพิ่มเติม หรือรายละเอียดรองของระบบ</p>
                            </div>
                        </div>
                    </div>

                    <h3 className="mt-8">Shadows & Elevation</h3>
                    <div className="doc-grid">
                        <div className="doc-component-box" style={{ boxShadow: 'var(--shadow-xs)' }}>shadow-xs</div>
                        <div className="doc-component-box" style={{ boxShadow: 'var(--shadow-sm)' }}>shadow-sm</div>
                        <div className="doc-component-box" style={{ boxShadow: 'var(--shadow-md)' }}>shadow-md</div>
                        <div className="doc-component-box" style={{ boxShadow: 'var(--shadow-lg)' }}>shadow-lg</div>
                    </div>
                </section>

                <hr className="doc-divider" />

                {/* 2. Components */}
                <section id="components" className="doc-section">
                    <h2>2. Components</h2>

                    <h3>Buttons</h3>
                    <DocShowcase
                        title="Standard Buttons"
                        description="Global button variants used for primary actions, secondary actions, and icon-only triggers."
                        code={`<button className="action-btn-primary">Primary Action</button>
<button className="action-btn-outline">Secondary Action</button>
<button className="action-btn-primary" style={{ backgroundColor: '#d92d20', borderColor: '#d92d20' }}>Danger Action</button>
<button className="action-btn-outline" style={{ padding: '8px' }}><Send size={18} /></button>
<button className="action-btn-primary" disabled style={{ opacity: 0.5 }}>Disabled</button>`}
                        propsTable={[
                            { name: 'className', type: 'string', default: '"action-btn-primary"', description: 'Controls the visual hierarchy styling.' },
                            { name: 'disabled', type: 'boolean', default: 'false', description: 'Grays out the button and prevents interaction.' },
                            { name: 'onClick', type: 'function', default: '-', description: 'Callback function triggered on click.' }
                        ]}
                    >
                        <div className="flex flex-wrap gap-4 items-center">
                            <button className="action-btn-primary">Primary Button</button>
                            <button className="action-btn-outline">Secondary Button</button>
                            <button className="action-btn-primary" style={{ backgroundColor: '#d92d20', borderColor: '#d92d20' }}>Danger Button</button>
                            <button className="action-btn-outline" style={{ padding: '8px', border: '1px solid var(--border)' }}><Send size={18} /></button>
                            <button className="action-btn-primary" disabled style={{ opacity: 0.5, cursor: 'not-allowed' }}>Disabled</button>
                        </div>
                    </DocShowcase>

                    <h3 className="mt-8">Inputs</h3>
                    <div className="doc-component-box flex flex-col gap-4 max-w-md">
                        <div className="form-group">
                            <label className="form-label">Default Input</label>
                            <input type="text" className="form-input" placeholder="Enter text..." />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Search Input (Left Icon)</label>
                            <div className="input-with-icon">
                                <Search className="input-icon" size={18} />
                                <input type="text" className="form-input" placeholder="Search..." />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Error State Input</label>
                            <div className="input-with-icon">
                                <AlertCircle className="input-icon text-error" style={{ color: 'var(--error)' }} size={18} />
                                <input type="text" className="form-input" style={{ borderColor: 'var(--error)', backgroundColor: '#fef2f2' }} placeholder="Invalid value..." defaultValue="wrong-email@" />
                            </div>
                            <span className="text-xs text-error mt-1" style={{ color: 'var(--error)' }}>Please enter a valid email address.</span>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Disabled Input</label>
                            <input type="text" className="form-input" placeholder="Disabled" disabled />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Select Dropdown</label>
                            <div className="relative flex items-center">
                                <select className="form-select">
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                </select>
                                <ChevronDown size={20} color="#667085" className="absolute right-3 pointer-events-none" />
                            </div>
                        </div>
                        <div className="form-group mt-4">
                            <label className="form-label mb-2">Checkboxes & Toggles</label>
                            <div className="flex flex-col gap-3">
                                <label className="flex items-center gap-3 cursor-pointer" onClick={(e) => { e.preventDefault(); setIsChecked(!isChecked); }}>
                                    <div className={`doc-checkbox ${isChecked ? 'active' : ''}`}>
                                        {isChecked && <Check size={14} strokeWidth={3} />}
                                    </div>
                                    <span className="text-sm font-medium text-primary">Custom Checkbox</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input type="radio" name="doc-radio" defaultChecked />
                                    <span className="text-sm text-primary">Radio Option 1</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input type="radio" name="doc-radio" />
                                    <span className="text-sm text-primary">Radio Option 2</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <h3 className="mt-8">Cards & Modals</h3>
                    <div className="doc-grid">
                        <div className="doc-card-example">
                            <div className="doc-card-header">
                                <h4 className="m-0 text-md font-semibold text-primary">Profile Card</h4>
                            </div>
                            <div className="doc-card-body mt-4">
                                <p className="text-sm text-secondary m-0">Cards should utilize borders and spacing to isolate content efficiently from the background canvas.</p>
                            </div>
                            <div className="doc-card-footer mt-6 flex justify-end gap-3">
                                <button className="action-btn-outline" style={{ border: '1px solid transparent' }}>Cancel</button>
                                <button className="action-btn-primary">Save Changes</button>
                            </div>
                        </div>
                        
                        <div className="doc-card-example flex flex-col items-center justify-center p-8 text-center">
                            <p className="text-sm text-secondary mb-4">You can trigger a standardized Global Modal component directly via React Portal.</p>
                            <button className="action-btn-primary" onClick={() => setIsModalOpen(true)}>Trigger Success Modal</button>
                        </div>
                    </div>

                    <h3 className="mt-8">Metric Cards (Stat Cards)</h3>
                    <DocShowcase
                        title="Dashboard Metric Grid"
                        description="Used extensively on the Main Dashboard and Analysis views to report Key Performance Indicators."
                        code={`<div className="stat-cards-grid grid-cols-2">
    <div className="stat-card cursor-pointer">
        <div className="flex justify-between items-start mb-4">
            <div className="stat-card-title">เครดิตโควต้าคงเหลือ</div>
            <div className="stat-card-icon" style={{ background: '#eff6ff', color: '#2563eb' }}>
                <MessageSquare size={24} />
            </div>
        </div>
        <div className="stat-card-main">24,500</div>
        <div className="flex items-center gap-2">
            <span className="stat-card-growth flex items-center gap-1">
                <TrendingUp size={16} /> +12.5%
            </span>
            <span className="text-xs text-secondary">จากเดือนที่แล้ว</span>
        </div>
    </div>
</div>`}
                    >
                        <div className="stat-cards-grid grid-cols-2" style={{ marginBottom: 0 }}>
                            <div className="stat-card cursor-pointer">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="stat-card-title">เครดิตโควต้าคงเหลือ</div>
                                    <div className="stat-card-icon" style={{ background: '#eff6ff', color: '#2563eb' }}>
                                        <MessageSquare size={24} />
                                    </div>
                                </div>
                                <div className="stat-card-main">24,500</div>
                                <div className="flex items-center gap-2">
                                    <span className="stat-card-growth flex items-center gap-1">
                                        <TrendingUp size={16} /> +12.5%
                                    </span>
                                    <span className="text-xs text-secondary">จากเดือนที่แล้ว</span>
                                </div>
                            </div>
                            <div className="stat-card cursor-pointer">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="stat-card-title">แคมเปญที่ส่งสำเร็จ</div>
                                    <div className="stat-card-icon" style={{ background: '#f0fdf4', color: '#16a34a' }}>
                                        <Send size={24} />
                                    </div>
                                </div>
                                <div className="stat-card-main">1,284</div>
                                <div className="flex items-center gap-2">
                                    <span className="stat-card-growth flex items-center gap-1">
                                        <TrendingUp size={16} /> +5.2%
                                    </span>
                                    <span className="text-xs text-secondary">จากเดือนที่แล้ว</span>
                                </div>
                            </div>
                        </div>
                    </DocShowcase>

                    <h3 className="mt-8">Badges & Status</h3>
                    <div className="doc-component-box flex gap-4">
                        <span className="status-badge success">Success</span>
                        <span className="status-badge error">Error</span>
                        <span className="status-badge warning">Warning</span>
                        <span className="status-badge inactive">Inactive</span>
                    </div>

                    <h3 className="mt-8">Toast Notifications</h3>
                    <p className="doc-desc">ทดสอบระบบแจ้งเตือน Global Toast โดยคลิกที่ปุ่มด้านล่าง</p>
                    <div className="doc-component-box flex gap-4">
                        <button className="action-btn-outline" onClick={() => triggerToast('success')}>Trigger Success</button>
                        <button className="action-btn-outline" onClick={() => triggerToast('error')}>Trigger Error</button>
                        <button className="action-btn-outline" onClick={() => triggerToast('warning')}>Trigger Warning</button>
                        <button className="action-btn-outline" onClick={() => triggerToast('info')}>Trigger Info</button>
                    </div>

                    <h3 className="mt-8">Tooltip</h3>
                    <div className="doc-component-box flex gap-4">
                        <Tooltip content="เครื่องมือวิเคราะห์ระดับสูง">
                            <button className="icon-btn" style={{ border: '1px solid var(--border)' }}><Info size={18} /></button>
                        </Tooltip>
                    </div>
                </section>

                <hr className="doc-divider" />

                {/* 3. Patterns / Layout */}
                <section id="patterns" className="doc-section">
                    <h2>3. Patterns & Layout</h2>

                    <h3>Form Structural Layout</h3>
                    <div className="doc-component-box" style={{ background: 'var(--bg-secondary)' }}>
                        <div className="form-container" style={{ maxWidth: '600px', margin: '0 auto', background: 'var(--bg-primary)', padding: '24px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                            <div className="form-section">
                                <div className="form-section-header">
                                    <h3 className="form-section-title">General Information</h3>
                                    <p className="form-section-desc">Details applied directly over Form Structural layouts.</p>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Full Name <span className="text-error">*</span></label>
                                    <input type="text" className="form-input" placeholder="Type name..." />
                                </div>
                            </div>
                        </div>
                    </div>

                    <h3 className="mt-8">Data Tables</h3>
                    <div className="doc-component-box" style={{ padding: 0, overflow: 'hidden', backgroundColor: 'var(--bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
                        <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ backgroundColor: 'var(--bg-hover)', borderTop: 'none', borderBottom: '1px solid var(--border)' }}>
                                    <th style={{ padding: '12px 24px', fontWeight: 500, fontSize: '0.75rem', color: 'var(--text-secondary)' }}>NAME</th>
                                    <th style={{ padding: '12px 24px', fontWeight: 500, fontSize: '0.75rem', color: 'var(--text-secondary)' }}>STATUS</th>
                                    <th style={{ padding: '12px 24px', fontWeight: 500, fontSize: '0.75rem', color: 'var(--text-secondary)', textAlign: 'right' }}>ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody style={{ backgroundColor: 'var(--bg-card)' }}>
                                <tr style={{ borderBottom: '1px solid var(--border)', transition: 'background-color 0.2s' }} onMouseOver={e => e.currentTarget.style.backgroundColor = 'var(--bg-hover)'} onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}>
                                    <td style={{ padding: '16px 24px' }}>
                                        <div className="flex-col">
                                            <span style={{ fontWeight: 500, fontSize: '0.875rem', color: 'var(--text-primary)' }}>Promotion SMS</span>
                                            <span style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)' }}>Created today</span>
                                        </div>
                                    </td>
                                    <td style={{ padding: '16px 24px' }}><span className="status-badge success">Active</span></td>
                                    <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="action-btn-outline" style={{ height: '36px', padding: '0 12px' }}><Edit size={16} /></button>
                                            <button className="action-btn-outline" style={{ height: '36px', padding: '0 12px' }}><Trash2 size={16} color="var(--error)" /></button>
                                        </div>
                                    </td>
                                </tr>
                                <tr style={{ borderBottom: 'none', transition: 'background-color 0.2s' }} onMouseOver={e => e.currentTarget.style.backgroundColor = 'var(--bg-hover)'} onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}>
                                    <td style={{ padding: '16px 24px' }}>
                                        <div className="flex-col">
                                            <span style={{ fontWeight: 500, fontSize: '0.875rem', color: 'var(--text-primary)' }}>Onboarding Flow</span>
                                            <span style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)' }}>Created yesterday</span>
                                        </div>
                                    </td>
                                    <td style={{ padding: '16px 24px' }}><span className="status-badge inactive">Draft</span></td>
                                    <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="action-btn-outline" style={{ height: '36px', padding: '0 12px' }}><Edit size={16} /></button>
                                            <button className="action-btn-outline" style={{ height: '36px', padding: '0 12px' }}><Trash2 size={16} color="var(--error)" /></button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 className="mt-8">Empty State</h3>
                    <div className="doc-component-box" style={{ background: 'var(--bg-secondary)' }}>
                        <EmptyState 
                            icon={FileText}
                            title="No documents selected"
                            description="Select a document to see its details here."
                            actionLabel="Create Document"
                            onAction={() => alert('Action clicked')}
                        />
                    </div>

                    <h3 className="mt-8">Loading State (Skeleton)</h3>
                    <p className="doc-desc text-secondary mb-4">* หมายเหตุ: นี่คือตัวอย่างกราฟิกแสดงสถานะกำลังโหลดข้อมูล (ไม่ใช่เว็บค้าง)</p>
                    <div className="doc-component-box">
                        <div className="flex flex-col gap-4">
                            <SkeletonLoader width="100%" height="40px" radius="8px" />
                            <SkeletonLoader width="100%" height="40px" radius="8px" />
                            <SkeletonLoader width="100%" height="40px" radius="8px" />
                        </div>
                    </div>
                </section>

                <hr className="doc-divider" />

                {/* 4. Interaction & Motion */}
                <section id="motion" className="doc-section">
                    <h2>4. Interaction & Motion</h2>
                    <p className="doc-desc">การเคลื่อนไหวในระบบต้องเน้นความพรีเมียม นุ่มนวล ไม่กระตุกหรือเร็วเกินไป (คล้าย Framer)</p>
                    
                    <div className="doc-component-box">
                        <ul className="doc-list">
                            <li><strong>Ease Function:</strong> <code>cubic-bezier(0.23, 1, 0.32, 1)</code> (เรียกว่า <code>--ease-framer</code>)</li>
                            <li><strong>Fast Duration:</strong> <code>0.15s</code> (สำหรับการ hover บนปุ่ม)</li>
                            <li><strong>Normal Duration:</strong> <code>0.3s</code> (สำหรับการสลับหน้าหรือเปิด Modal)</li>
                            <li><strong>Slow Duration:</strong> <code>0.5s</code> (สำหรับ stagger animations)</li>
                        </ul>
                    </div>
                </section>

                <hr className="doc-divider" />

                {/* 5. Usage Guidelines */}
                <section id="guidelines" className="doc-section">
                    <h2>5. Usage Guidelines (สำหรับ Dev)</h2>
                    
                    <div className="doc-grid mb-8">
                        <div className="doc-guideline do">
                            <div className="guideline-header">
                                <CheckCircle2 className="text-success" size={20} />
                                <h4>Do</h4>
                            </div>
                            <ul className="doc-list">
                                <li>ใช้ตัวแปร CSS Variables เสมอในการกำหนดสีเพื่อรองรับ Dark Mode (อนาคต)</li>
                                <li>จำกัดความกว้างของหน้าจอเนื้อหา (center-area) ไว้ไม่เกินเพื่อไม่ให้เนื้อหาแตกบนจอขนาดใหญ่พิเศษ</li>
                                <li>ฝัง <EmptyState /> ทุกครั้งในตารางเมื่อไม่มีข้อมูล</li>
                            </ul>
                        </div>
                        <div className="doc-guideline dont">
                            <div className="guideline-header">
                                <AlertTriangle className="text-error" size={20} />
                                <h4>Don't</h4>
                            </div>
                            <ul className="doc-list">
                                <li>ห้ามใช้ Hardcoded HEX colors ใน Component CSS ตรงๆ </li>
                                <li>ห้ามทำปุ่มหลัก (Primary Button) 2 ปุ่มคู่กันโดยมีน้ำหนักสีเท่ากัน (ต้องมีอันนึงเป็น Secondary)</li>
                                <li>ห้ามใช้ Font-size หรือ Margin ที่แปลกไปจากค่าใน Foundation</li>
                            </ul>
                        </div>
                    </div>
                </section>
                
                
                <div style={{ height: '60px' }}></div>
            </main>

            <SuccessModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)}
                title="System Alert Created"
                description="This is an implementation of the SuccessModal hooked directly into the documentation viewport."
                buttonText="Close Example"
            />
        </div>
    );
};

export default DocumentationView;
