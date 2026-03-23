import React, { useState, useEffect, useRef } from 'react';
import { Search, ChevronDown, ChevronLeft, ChevronRight, MoreVertical, Copy, Trash2, Edit3, LineChart } from 'lucide-react';
import SkeletonLoader from '../common/SkeletonLoader';
import EmptyState from '../common/EmptyState';

const DotBadge = ({ status }) => {
    const styles = {
        'เสร็จ': { bg: '#ECFDF3', border: '#ABRFC6', text: '#067647' },
        'ส่งอยู่': { bg: '#FFFAEB', border: '#FEDF89', text: '#B54708' },
        'ร่าง': { bg: '#F8F9FC', border: '#D5D9EB', text: '#363F72' }
    };

    const dotColor = {
        'เสร็จ': '#12B76A',
        'ส่งอยู่': '#F79009',
        'ร่าง': 'var(--text-secondary)'
    };

    const style = styles[status] || styles['ร่าง'];
    const dot = dotColor[status] || dotColor['ร่าง'];

    return (
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '2px 8px', borderRadius: '16px', border: `1px solid ${style.border}`, backgroundColor: style.bg, color: style.text }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: dot }} />
            <span style={{ fontWeight: 500, fontSize: '0.75rem', lineHeight: '1rem' }}>{status}</span>
        </div>
    );
};

const PositionBadge = ({ position }) => {
    const styles = {
        'โปรโมชัน': { bg: '#eff6ff', border: '#bfdbfe', text: '#1d4ed8' },
        'แจ้งเตือน': { bg: '#fff7ed', border: '#fed7aa', text: '#c2410c' },
        'จดหมายข่าว': { bg: '#ecfdf5', border: '#a7f3d0', text: '#047857' }
    };

    const style = styles[position] || { bg: 'var(--bg-hover)', border: 'var(--border)', text: '#374151' };

    return (
        <div style={{ display: 'inline-flex', alignItems: 'center', padding: '2px 8px', borderRadius: '16px', border: `1px solid ${style.border}`, backgroundColor: style.bg, color: style.text }}>
            <span style={{ fontWeight: 500, fontSize: '0.75rem', lineHeight: '1rem', whiteSpace: 'nowrap' }}>{position}</span>
        </div>
    );
};

const ProgressBar = ({ percentage }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '100%' }}>
            <div style={{ flex: 1, height: '8px', backgroundColor: '#F8FAFC', borderRadius: '9999px', overflow: 'hidden', position: 'relative' }}>
                <div
                    style={{ position: 'absolute', top: 0, left: 0, height: '100%', backgroundColor: '#1571EF', borderRadius: '9999px', width: `${percentage}%` }}
                />
            </div>
            <span style={{ fontWeight: 500, fontSize: '0.875rem', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>
                {percentage}%
            </span>
        </div>
    );
};

const CAMPAIGN_DATA = [
    {
        id: 1,
        name: 'โปรโมชันเปิดร้านใหม่',
        description: 'แคมเปญส่งโปรโมชันลูกค้าใหม่',
        avatarStr: 'P',
        position: 'โปรโมชัน',
        recipients: '5.0K/5.0K',
        clicks: '1.3K คลิก',
        date: '24 ม.ค.68 , 16:20',
        status: 'เสร็จ',
        progress: 100
    },
    {
        id: 2,
        name: 'แจ้งเตือนการชำระเงิน',
        description: 'แจ้งเตือนลูกค้าที่ค้างชำระ',
        avatarStr: 'N',
        position: 'แจ้งเตือน',
        recipients: '1.9K/2.5K',
        clicks: '468 คลิก',
        date: '22 ม.ค.68 , 23:15',
        status: 'ส่งอยู่',
        progress: 38
    },
    {
        id: 3,
        name: 'จดหมายข่าวรายเดือน',
        description: 'ข่าวสารและอัปเดตประจำเดือน',
        avatarStr: 'M',
        position: 'จดหมายข่าว',
        recipients: '0/12.0K',
        clicks: '0 คลิก',
        date: '24 ม.ค.68 , 16:20',
        status: 'ร่าง',
        progress: 0
    },
    {
        id: 4,
        name: 'กิจกรรมพิเศษ',
        description: 'งานกิจกรรมที่น่าสนใจในเดือนนี้',
        avatarStr: 'E',
        position: 'แจ้งเตือน',
        recipients: '1/12.0K',
        clicks: '5 คลิก',
        date: '22 ม.ค.68 , 23:15',
        status: 'เสร็จ',
        progress: 100
    },
    {
        id: 5,
        name: 'ข้อเสนอพิเศษ',
        description: 'ส่วนลดและโปรโมชั่นสำหรับสมาชิก',
        avatarStr: 'S',
        position: 'จดหมายข่าว',
        recipients: '2/12.0K',
        clicks: '10 คลิก',
        date: '24 ม.ค.68 , 16:20',
        status: 'ส่งอยู่',
        progress: 38
    }
];

export const CampaignTable = ({ onEditCampaign, onAnalyzeCampaign }) => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showDuplicateModal, setShowDuplicateModal] = useState(false);
    const [selectedCampaign, setSelectedCampaign] = useState(null);
    const [duplicateName, setDuplicateName] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);
    
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleDropdown = (id, event) => {
        event.stopPropagation();
        setActiveDropdown(activeDropdown === id ? null : id);
    };

    const handleEdit = (row) => {
        setActiveDropdown(null);
        if (onEditCampaign) onEditCampaign(row);
    };

    const handleDuplicate = (row) => {
        setActiveDropdown(null);
        setSelectedCampaign(row);
        setDuplicateName(`${row.name} (สำเนา)`);
        setShowDuplicateModal(true);
    };

    const handleReport = (row) => {
        setActiveDropdown(null);
        if (onAnalyzeCampaign) onAnalyzeCampaign(row);
    };

    const handleDelete = (row) => {
        setActiveDropdown(null);
        setSelectedCampaign(row);
        setShowDeleteModal(true);
    };

    return (
        <div style={{ backgroundColor: 'var(--bg-card)', borderRadius: 'var(--radius-lg)', display: 'flex', flexDirection: 'column', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
            {/* Table Header Section */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'flex-start', justifyContent: 'space-between', padding: '24px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '320px', flex: 1 }}>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: '28px', margin: 0 }}>
                        แคมเปญ
                    </h2>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ position: 'relative', width: '320px' }}>
                        <div style={{ position: 'absolute', inset: '0 0 0 0', left: 0, paddingLeft: '14px', display: 'flex', alignItems: 'center', pointerEvents: 'none' }}>
                            <Search size={20} color="#6b7280" />
                        </div>
                        <input
                            type="text"
                            placeholder="ค้นหาลูกค้า..."
                            style={{ width: '100%', paddingLeft: '40px', paddingRight: '14px', paddingTop: '10px', paddingBottom: '10px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', fontSize: '1rem', color: 'var(--text-primary)', boxShadow: 'var(--shadow-sm)', outline: 'none' }}
                        />
                    </div>
                    <button className="action-btn-outline" style={{ height: '44px', borderRadius: '12px' }}>
                        <span style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>สถานะทั้งหมด</span>
                        <ChevronDown size={20} color="#6b7280" />
                    </button>
                </div>
            </div>

            {/* Table Content */}
            <div style={{ width: '100%', overflowX: 'auto' }}>
                <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ backgroundColor: 'var(--bg-hover)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
                            <th style={{ padding: '12px 24px', fontWeight: 500, fontSize: '0.75rem', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>ชื่อ</th>
                            <th style={{ padding: '12px 24px', fontWeight: 500, fontSize: '0.75rem', color: 'var(--text-secondary)', width: '125px', whiteSpace: 'nowrap' }}>ตำแหน่ง</th>
                            <th style={{ padding: '12px 24px', fontWeight: 500, fontSize: '0.75rem', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>ผู้รับ/คลิก</th>
                            <th style={{ padding: '12px 24px', fontWeight: 500, fontSize: '0.75rem', color: 'var(--text-secondary)', width: '158px', whiteSpace: 'nowrap' }}>วันที่สร้าง</th>
                            <th style={{ padding: '12px 0 12px 24px', fontWeight: 500, fontSize: '0.75rem', color: 'var(--text-secondary)', width: '114px', whiteSpace: 'nowrap' }}>สถานะการส่ง</th>
                            <th style={{ padding: '12px 24px 12px 0', fontWeight: 500, fontSize: '0.75rem', color: 'var(--text-secondary)', width: '200px', whiteSpace: 'nowrap' }}></th>
                            <th style={{ padding: '12px 24px', fontWeight: 500, fontSize: '0.75rem', color: 'var(--text-secondary)', width: '64px', whiteSpace: 'nowrap' }}>จัดการ</th>
                        </tr>
                    </thead>
                    <tbody style={{ backgroundColor: 'var(--bg-card)' }}>
                        {isLoading ? (
                            <tr>
                                <td colSpan="7" style={{ padding: '24px' }}>
                                    <SkeletonLoader rows={5} columns={7} />
                                </td>
                            </tr>
                        ) : CAMPAIGN_DATA.length === 0 ? (
                            <tr>
                                <td colSpan="7" style={{ padding: '0' }}>
                                    <EmptyState title="ไม่พบแคมเปญ" description="ยังไม่มีแคมเปญในระบบ กดสร้างแคมเปญใหม่เพื่อเริ่มต้น" />
                                </td>
                            </tr>
                        ) : CAMPAIGN_DATA.map((row, index) => (
                            <tr key={row.id} className={`stagger-item stagger-delay-${(index % 5) + 1}`} style={{ borderBottom: index < CAMPAIGN_DATA.length - 1 ? '1px solid var(--border)' : 'none', transition: 'background-color 0.2s', cursor: 'default' }} onMouseOver={e => e.currentTarget.style.backgroundColor = 'var(--bg-hover)'} onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}>
                                {/* Name */}
                                <td style={{ padding: '16px 24px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', flexShrink: 0, border: '0.75px solid rgba(0,0,0,0.1)', overflow: 'hidden' }}>
                                            <img src={`https://ui-avatars.com/api/?name=${row.avatarStr}&background=F2F4F7&color=475467`} alt={row.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <p 
                                                className="truncate-text"
                                                style={{ fontWeight: 500, fontSize: '0.875rem', color: 'var(--text-primary)', margin: 0, cursor: 'pointer', transition: 'color 0.2s', maxWidth: '200px' }}
                                                onClick={() => handleReport(row)}
                                                onMouseOver={e => e.currentTarget.style.color = 'var(--primary)'}
                                                onMouseOut={e => e.currentTarget.style.color = 'var(--text-primary)'}
                                            >
                                                {row.name}
                                            </p>
                                            <p className="truncate-text" style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)', margin: 0, maxWidth: '200px' }}>
                                                {row.description}
                                            </p>
                                        </div>
                                    </div>
                                </td>

                                {/* Position */}
                                <td style={{ padding: '16px 24px' }}>
                                    <PositionBadge position={row.position} />
                                </td>

                                {/* Recipients / Clicks */}
                                <td style={{ padding: '16px 24px' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <p style={{ fontWeight: 500, fontSize: '0.875rem', color: 'var(--text-primary)', margin: 0 }}>
                                            {row.recipients}
                                        </p>
                                        <p style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)', margin: 0 }}>
                                            {row.clicks}
                                        </p>
                                    </div>
                                </td>

                                {/* Date */}
                                <td style={{ padding: '16px 24px' }}>
                                    <p style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)', margin: 0 }}>
                                        {row.date}
                                    </p>
                                </td>

                                {/* Status */}
                                <td style={{ padding: '16px 0 16px 24px' }}>
                                    <DotBadge status={row.status} />
                                </td>

                                {/* Progress */}
                                <td style={{ padding: '16px 24px 16px 0' }}>
                                    <ProgressBar percentage={row.progress} />
                                </td>

                                {/* Action */}
                                <td style={{ padding: '16px 24px', position: 'relative' }}>
                                    <button 
                                        style={{ padding: '8px', color: '#9ca3af', borderRadius: '8px', border: 'none', background: 'transparent', cursor: 'pointer' }} 
                                        onClick={(e) => toggleDropdown(row.id, e)}
                                        onMouseOver={e => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.backgroundColor = 'var(--bg-hover)'; }} 
                                        onMouseOut={e => { e.currentTarget.style.color = '#9ca3af'; e.currentTarget.style.backgroundColor = 'transparent'; }}
                                    >
                                        <MoreVertical size={20} />
                                    </button>
                                    
                                    {activeDropdown === row.id && (
                                        <div ref={dropdownRef} style={{ position: 'absolute', right: '40px', top: '40px', backgroundColor: 'var(--bg-card)', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', border: '1px solid var(--border)', zIndex: 50, width: '160px', overflow: 'hidden' }}>
                                            <button onClick={() => handleEdit(row)} style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%', padding: '10px 16px', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', fontSize: '14px', color: 'var(--text-primary)' }} onMouseOver={e => e.currentTarget.style.backgroundColor = 'var(--bg-hover)'} onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}>
                                                <Edit3 size={16} color="var(--text-secondary)" />
                                                แก้ไข
                                            </button>
                                            <button onClick={() => handleDuplicate(row)} style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%', padding: '10px 16px', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', fontSize: '14px', color: 'var(--text-primary)' }} onMouseOver={e => e.currentTarget.style.backgroundColor = 'var(--bg-hover)'} onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}>
                                                <Copy size={16} color="var(--text-secondary)" />
                                                ทำสำเนา
                                            </button>
                                            <button onClick={() => handleReport(row)} style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%', padding: '10px 16px', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', fontSize: '14px', color: 'var(--text-primary)' }} onMouseOver={e => e.currentTarget.style.backgroundColor = 'var(--bg-hover)'} onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}>
                                                <LineChart size={16} color="var(--text-secondary)" />
                                                ดูรายงาน
                                            </button>
                                            <div style={{ height: '1px', backgroundColor: 'var(--border)', margin: '4px 0' }} />
                                            <button onClick={() => handleDelete(row)} style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%', padding: '10px 16px', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', fontSize: '14px', color: 'var(--utility-error-700)' }} onMouseOver={e => e.currentTarget.style.backgroundColor = 'var(--utility-error-50)'} onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}>
                                                <Trash2 size={16} color="var(--utility-error-700)" />
                                                ลบ
                                            </button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination Footer */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 24px', borderTop: '1px solid var(--border)' }}>
                <p style={{ fontWeight: 500, fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0 }}>
                    แสดง 1 ถึง 5 จาก 5 รายการ
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <button className="action-btn-outline" style={{ height: '36px', padding: '0 12px', gap: '4px' }}>
                        <ChevronLeft size={20} color="#374151" />
                        <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>ก่อนหน้า</span>
                    </button>
                    <button className="action-btn-outline" style={{ height: '36px', padding: '0 12px', gap: '4px' }}>
                        <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>ถัดไป</span>
                        <ChevronRight size={20} color="#374151" />
                    </button>
                </div>
            </div>

            {/* Delete Modal */}
            {showDeleteModal && (
                <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.5)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ backgroundColor: 'var(--bg-card)', borderRadius: '12px', padding: '24px', width: '400px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}>
                        {/* Feature Icon Delete */}
                        <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--utility-error-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                            <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--utility-error-100)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Trash2 size={16} color="var(--utility-error-600)" />
                            </div>
                        </div>
                        <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)', margin: '0 0 12px 0' }}>ยืนยันการลบแคมเปญ</h3>
                        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: '0 0 24px 0', lineHeight: 1.5 }}>
                            คุณแน่ใจหรือไม่ว่าต้องการลบ <strong>{selectedCampaign?.name}</strong>? การดำเนินการนี้ไม่สามารถย้อนกลับได้
                        </p>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <button onClick={() => setShowDeleteModal(false)} className="action-btn-outline" style={{ flex: 1, justifyContent: 'center' }}>ยกเลิก</button>
                            <button onClick={() => setShowDeleteModal(false)} className="action-btn-primary" style={{ flex: 1, justifyContent: 'center', backgroundColor: '#d92d20', borderColor: '#d92d20' }}>ลบรายการ</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Duplicate Modal */}
            {showDuplicateModal && (
                <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.5)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ backgroundColor: 'var(--bg-card)', borderRadius: '12px', padding: '24px', width: '400px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}>
                        {/* Feature Icon Duplicate */}
                        <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#F0F9FF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                            <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#E0F2FE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Copy size={16} color="#0284C7" />
                            </div>
                        </div>
                        <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)', margin: '0 0 16px 0' }}>ทำสำเนาแคมเปญ</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                            <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)' }}>ตั้งชื่อแคมเปญใหม่</label>
                            <input 
                                type="text" 
                                value={duplicateName} 
                                onChange={(e) => setDuplicateName(e.target.value)}
                                style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '0.875rem', width: '100%', outline: 'none' }}
                                autoFocus
                            />
                        </div>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <button onClick={() => setShowDuplicateModal(false)} className="action-btn-outline" style={{ flex: 1, justifyContent: 'center' }}>ยกเลิก</button>
                            <button onClick={() => setShowDuplicateModal(false)} className="action-btn-primary" style={{ flex: 1, justifyContent: 'center' }}>ทำสำเนา</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CampaignTable;
