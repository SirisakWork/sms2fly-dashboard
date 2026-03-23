import React, { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown, ChevronLeft, ChevronRight, Tag, MoreVertical, Edit2, Trash2 } from 'lucide-react';

const mockTags = [
    { id: 1, name: 'SMS', type: 'asynchronous', condition: '1', status: 'active' },
    { id: 2, name: 'Email', type: 'asynchronous', condition: '1', status: 'active' },
    { id: 3, name: 'Push Notification', type: 'asynchronous', condition: '1', status: 'active' },
    { id: 4, name: 'Social Media Alert', type: 'asynchronous', condition: '1', status: 'active' },
    { id: 5, name: 'Voice Call', type: 'asynchronous', condition: '1', status: 'active' },
    { id: 6, name: 'Video Call', type: 'asynchronous', condition: '1', status: 'inactive' },
    { id: 7, name: 'Conference Call', type: 'asynchronous', condition: '1', status: 'pending' },
];

const TagRow = ({ tag, isLast, onEdit, onDelete }) => {
    // Utility for different badge variants based on the design tokens
    const getBadgeStyle = (status) => {
        switch (status) {
            case 'active':
                return {
                    bg: 'var(--utility-success-50, #ecfdf3)',
                    border: 'var(--utility-success-200, #abefc6)',
                    color: 'var(--utility-success-700, #067647)',
                    dot: '#17b26a',
                    label: 'ใช้งาน'
                };
            case 'inactive':
                return {
                    bg: 'var(--utility-gray-blue-50, #f8f9fc)',
                    border: 'var(--utility-gray-blue-200, #d5d9eb)',
                    color: 'var(--utility-gray-blue-700, #363f72)',
                    dot: '#a3aed0',
                    label: 'ไม่ใช้'
                };
            case 'pending':
                return {
                    bg: 'var(--utility-warning-50, #fffaeb)',
                    border: 'var(--utility-warning-200, #fedf89)',
                    color: 'var(--utility-warning-700, #b54708)',
                    dot: '#f79009',
                    label: 'รออนุมัติ'
                };
            default:
                return { bg: '#f8fafc', border: 'var(--border)', color: 'var(--text-secondary)', dot: '#94a3b8', label: 'ไม่ทราบ' };
        }
    };

    const badge = getBadgeStyle(tag.status);

    return (
        <tr style={{ borderBottom: isLast ? 'none' : '1px solid var(--border)', transition: 'background-color 0.2s', cursor: 'default' }} onMouseOver={e => e.currentTarget.style.backgroundColor = 'var(--bg-hover)'} onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}>
            <td style={{ padding: '16px 24px', minWidth: '248px' }}>
                <div className="flex items-center gap-3">
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--bg-hover)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '0.75px solid rgba(0,0,0,0.1)' }}>
                        <Tag size={20} color="#475467" />
                    </div>
                    <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-primary)' }}>{tag.name}</span>
                </div>
            </td>
            <td style={{ padding: '16px 24px' }}>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)' }}>{tag.type}</span>
            </td>
            <td style={{ padding: '16px 24px' }}>
                <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-primary)' }}>{tag.condition}</span>
            </td>
            <td style={{ padding: '16px 24px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '2px 8px', borderRadius: '16px', border: `1px solid ${badge.border}`, backgroundColor: badge.bg, color: badge.color }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: badge.dot }} />
                    <span style={{ fontWeight: 500, fontSize: '0.75rem', lineHeight: '1rem' }}>{badge.label}</span>
                </div>
            </td>
            <td style={{ padding: '16px 24px' }}>
                <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-primary)' }}>0</span>
            </td>
            <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                <ActionDropdown onEdit={() => onEdit(tag)} onDelete={() => onDelete(tag)} />
            </td>
        </tr>
    );
};

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
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
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
                        onClick={(e) => { e.stopPropagation(); setIsOpen(false); onEdit(); }}
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
                        onClick={(e) => { e.stopPropagation(); setIsOpen(false); onDelete(); }}
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

const CustomTagsTable = ({ onEdit, onDelete }) => {
    return (
        <div style={{ backgroundColor: 'var(--bg-card)', borderRadius: 'var(--radius-lg)', display: 'flex', flexDirection: 'column', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>

            {/* Table Header Section */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'flex-start', justifyContent: 'space-between', padding: '24px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '320px', flex: 1 }}>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: '28px', margin: 0 }}>
                        รายการแท็ก
                    </h2>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ position: 'relative', width: '320px' }}>
                        <div style={{ position: 'absolute', inset: '0 0 0 0', left: 0, paddingLeft: '14px', display: 'flex', alignItems: 'center', pointerEvents: 'none' }}>
                            <Search size={20} color="#6b7280" />
                        </div>
                        <input
                            type="text"
                            placeholder="ค้นหาแท็ก..."
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
                            <th style={{ padding: '12px 24px', fontWeight: 500, fontSize: '0.75rem', color: 'var(--text-secondary)', whiteSpace: 'nowrap', minWidth: '248px' }}>ชื่อ</th>
                            <th style={{ padding: '12px 24px', fontWeight: 500, fontSize: '0.75rem', color: 'var(--text-secondary)', width: '200px', whiteSpace: 'nowrap' }}>ประเภท</th>
                            <th style={{ padding: '12px 24px', fontWeight: 500, fontSize: '0.75rem', color: 'var(--text-secondary)', width: '115px', whiteSpace: 'nowrap' }}>เงื่อนไข</th>
                            <th style={{ padding: '12px 24px', fontWeight: 500, fontSize: '0.75rem', color: 'var(--text-secondary)', width: '115px', whiteSpace: 'nowrap' }}>สถานะ</th>
                            <th style={{ padding: '12px 24px', fontWeight: 500, fontSize: '0.75rem', color: 'var(--text-secondary)', width: '115px', whiteSpace: 'nowrap' }}>ลำดับ</th>
                            <th style={{ padding: '12px 24px', fontWeight: 500, fontSize: '0.75rem', color: 'var(--text-secondary)', width: '90px', whiteSpace: 'nowrap', textAlign: 'right' }}>จัดการ</th>
                        </tr>
                    </thead>
                    <tbody style={{ backgroundColor: 'var(--bg-card)' }}>
                        {mockTags.map((tag, index) => (
                            <TagRow key={tag.id} tag={tag} isLast={index === mockTags.length - 1} onEdit={onEdit} onDelete={onDelete} />
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

        </div>
    );
};

export default CustomTagsTable;
