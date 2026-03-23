import React, { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown, ChevronLeft, ChevronRight, MoreVertical, Edit2, Trash2, Folder } from 'lucide-react';

const mockGroups = [
    { id: 1, name: 'Mass', count: '40,002', created: '24 ม.ค.68 , 16:20', active: true },
    { id: 2, name: 'Niche', count: '40,001', created: '22 ม.ค.68 , 23:15', active: false },
    { id: 3, name: 'Royalty', count: '40,002', created: '24 ม.ค.68 , 16:20', active: true },
    { id: 4, name: 'New Target', count: '40,002', created: '22 ม.ค.68 , 23:15', active: true },
    { id: 5, name: 'New Member', count: '40,003', created: '24 ม.ค.68 , 16:20', active: true },
];

const ActionDropdown = ({ onEdit, onDelete }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div ref={dropdownRef} style={{ position: 'relative', display: 'inline-block' }}>
            <button 
                onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen); }}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', display: 'flex', alignItems: 'center', justifyItems: 'center' }}
            >
                <MoreVertical size={20} color="#475467" />
            </button>
            {isOpen && (
                <div style={{
                    position: 'absolute',
                    right: 0,
                    top: '100%',
                    marginTop: '4px',
                    backgroundColor: 'var(--bg-card)',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    border: '1px solid var(--border)',
                    minWidth: '160px',
                    zIndex: 50,
                    padding: '4px 0',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <button 
                        onClick={(e) => { e.stopPropagation(); setIsOpen(false); onEdit && onEdit(); }}
                        style={{
                            display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', border: 'none', background: 'transparent', width: '100%', textAlign: 'left', cursor: 'pointer', fontSize: '14px', color: 'var(--text-primary)'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-hover)'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                        <Edit2 size={16} />
                        แก้ไข
                    </button>
                    <button 
                        onClick={(e) => { e.stopPropagation(); setIsOpen(false); onDelete && onDelete(); }}
                        style={{
                            display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', border: 'none', background: 'transparent', width: '100%', textAlign: 'left', cursor: 'pointer', fontSize: '14px', color: '#ef4444'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fef2f2'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                        <Trash2 size={16} />
                        ลบ
                    </button>
                </div>
            )}
        </div>
    );
};

const GroupRow = ({ group, isLast, onEdit, onDelete }) => {
    const [isActive, setIsActive] = useState(group.active);

    return (
        <tr style={{ borderBottom: isLast ? 'none' : '1px solid var(--border-secondary)' }}>
            <td style={{ padding: '16px 24px', height: '72px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#F0F6FF', color: 'var(--primary)', flexShrink: 0, border: '1px solid #D1E5FF' }}>
                        <Folder size={20} strokeWidth={2.5} />
                    </div>
                    <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-primary)' }}>{group.name}</span>
                </div>
            </td>
            <td style={{ padding: '16px 24px', height: '72px' }}>
                <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-primary)' }}>{group.count}</span>
            </td>
            <td style={{ padding: '16px 24px', height: '72px' }}>
                <span style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}>{group.created}</span>
            </td>
            <td style={{ padding: '16px 24px', height: '72px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div 
                        onClick={() => setIsActive(!isActive)}
                        style={{
                            width: '36px',
                            height: '20px',
                            backgroundColor: isActive ? 'var(--primary, #1571ef)' : '#f8fafc',
                            borderRadius: '9999px',
                            position: 'relative',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            padding: '2px',
                            transition: 'background-color 0.2s',
                            border: isActive ? 'none' : '1px solid var(--border)',
                            boxSizing: 'border-box'
                        }}
                    >
                        <div style={{
                            width: '16px',
                            height: '16px',
                            backgroundColor: 'var(--bg-card)',
                            borderRadius: '50%',
                            boxShadow: '0 1px 3px rgba(16,24,40,0.1)',
                            transform: `translateX(${isActive ? '16px' : '0px'})`,
                            transition: 'transform 0.2s',
                        }} />
                    </div>
                    <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-primary)' }}>
                        {isActive ? 'ใช้งาน' : 'ไม่ใช้งาน'}
                    </span>
                </div>
            </td>
            <td style={{ padding: '16px 24px', textAlign: 'right', height: '72px' }}>
                <ActionDropdown onEdit={() => onEdit && onEdit(group)} onDelete={() => onDelete && onDelete(group)} />
            </td>
        </tr>
    );
};

const AudienceGroupsTable = ({ onEdit, onDelete }) => {
    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-card, #FFFFFF)', borderRadius: 'var(--radius-2xl, 16px)', border: '1px solid var(--border)', overflow: 'hidden' }}>

            {/* Table Header Section */}
            <div style={{ padding: '24px 24px 20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="flex justify-between items-start">
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0, lineHeight: '28px', letterSpacing: '-0.02em' }}>
                        รายชื่อกลุ่มลูกค้า
                    </h3>
                    
                    <div className="flex items-center gap-3">
                        {/* Search Input */}
                        <div style={{ position: 'relative', width: '320px', maxWidth: '100%' }}>
                            <div style={{ position: 'absolute', inset: '0 0 0 0', left: 0, paddingLeft: '14px', display: 'flex', alignItems: 'center', pointerEvents: 'none' }}>
                                <Search size={20} color="#6b7280" />
                            </div>
                            <input
                                type="text"
                                placeholder="ค้นหาลูกค้า..."
                                style={{ width: '100%', paddingLeft: '40px', paddingRight: '14px', paddingTop: '10px', paddingBottom: '10px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', fontSize: '1rem', color: 'var(--text-primary)', boxShadow: 'var(--shadow-sm)', outline: 'none' }}
                            />
                        </div>

                        {/* Filter Status Button */}
                        <button className="action-btn-secondary" style={{ padding: '10px 16px', borderRadius: '12px', border: '1px solid var(--border)', backgroundColor: 'var(--bg-card)', boxShadow: 'var(--shadow-sm)' }}>
                            <span style={{ fontSize: '16px', fontWeight: 500, color: 'var(--text-secondary)', marginRight: '6px' }}>สถานะทั้งหมด</span>
                            <ChevronDown size={20} color="var(--text-secondary)" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="divider" style={{ margin: '0' }}></div>

            {/* Table */}
            <div style={{ width: '100%', overflowX: 'auto' }}>
                <table className="data-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-secondary)' }}>
                        <tr>
                            <th style={{ padding: '12px 24px', textAlign: 'left', minWidth: '248px' }}>
                                <div className="flex items-center gap-1 cursor-pointer">
                                    <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--text-tertiary)' }}>ชื่อกลุ่ม</span>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.00004 3.33333V12.6667M8.00004 12.6667L12.6667 8M8.00004 12.6667L3.33337 8" stroke="#475467" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </th>
                            <th style={{ padding: '12px 24px', textAlign: 'left', width: '200px' }}>
                                <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--text-tertiary)' }}>จำนวน</span>
                            </th>
                            <th style={{ padding: '12px 24px', textAlign: 'left', width: '250px' }}>
                                <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--text-tertiary)' }}>เวลาที่สร้าง</span>
                            </th>
                            <th style={{ padding: '12px 24px', textAlign: 'left', width: '160px' }}>
                                <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--text-tertiary)' }}>สถานะ</span>
                            </th>
                            <th style={{ padding: '12px 24px', textAlign: 'right', width: '90px' }}>
                                <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--text-tertiary)' }}>จัดการ</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockGroups.map((group, index) => (
                            <GroupRow 
                                key={group.id} 
                                group={group} 
                                isLast={index === mockGroups.length - 1} 
                                onEdit={onEdit} 
                                onDelete={onDelete} 
                            />
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="divider" style={{ margin: '0' }}></div>

            {/* Pagination */}
            <div style={{ padding: '12px 24px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-secondary)' }}>แสดง 1 ถึง 5 จาก 5 รายการ</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <button className="action-btn-outline" style={{ height: '36px', padding: '0 12px', gap: '4px', borderRadius: '8px' }}>
                        <ChevronLeft size={20} color="#374151" />
                        <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>ก่อนหน้า</span>
                    </button>
                    <button className="action-btn-outline" style={{ height: '36px', padding: '0 12px', gap: '4px', borderRadius: '8px' }}>
                        <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>ถัดไป</span>
                        <ChevronRight size={20} color="#374151" />
                    </button>
                </div>
            </div>

        </div>
    );
};

export default AudienceGroupsTable;
