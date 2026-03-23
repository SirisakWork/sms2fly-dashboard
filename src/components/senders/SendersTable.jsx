import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, ChevronLeft, ChevronRight, Eye, Trash2 } from 'lucide-react';
import SkeletonLoader from '../common/SkeletonLoader';
import EmptyState from '../common/EmptyState';

const mockSenders = [
    { id: 1, name: 'สมชาย ใจดี', email: 'somchai@main.shorturl.com', position: 'การตลาด', status: 'active', avatarUrl: 'https://i.pravatar.cc/150?u=1' },
    { id: 2, name: 'สมหญิง รักดี', email: 'somying@main.shorturl.com', position: 'การตลาด', status: 'active', avatarUrl: 'https://i.pravatar.cc/150?u=2' },
    { id: 3, name: 'สมปอง มีความสุข', email: 'sompong@main.shorturl.com', position: 'การตลาด', status: 'active', avatarUrl: 'https://i.pravatar.cc/150?u=3' },
    { id: 4, name: 'สมศรี ชื่นใจ', email: 'somsri@main.shorturl.com', position: 'การตลาด', status: 'inactive', avatarUrl: 'https://i.pravatar.cc/150?u=4' },
    { id: 5, name: 'นายทดสอบ ระบบ', email: 'test@main.shorturl.com', position: 'การตลาด', status: 'pending', avatarUrl: 'https://i.pravatar.cc/150?u=5' },
];

const SenderRow = ({ sender, index, isLast, onEdit, onDelete }) => {
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

    const badge = getBadgeStyle(sender.status);
    const initial = sender.name.charAt(0);

    return (
        <tr className={`stagger-item stagger-delay-${(index % 5) + 1}`} style={{ borderBottom: isLast ? 'none' : '1px solid var(--border)', transition: 'background-color 0.2s', cursor: 'default' }} onMouseOver={e => e.currentTarget.style.backgroundColor = 'var(--bg-hover)'} onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}>
            <td style={{ padding: '16px 24px', minWidth: '320px' }}>
                <div className="flex items-center gap-3">
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: sender.avatarUrl ? 'transparent' : 'var(--bg-hover)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '0.75px solid rgba(0,0,0,0.08)' }}>
                        {sender.avatarUrl ? (
                            <img src={sender.avatarUrl} alt={sender.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        ) : (
                            <span style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-secondary)' }}>{initial}</span>
                        )}
                    </div>
                    <div className="flex flex-col gap-0.5">
                        <span className="truncate-text" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-primary)', maxWidth: '200px' }}>{sender.name}</span>
                        <span className="truncate-text" style={{ fontSize: '14px', color: 'var(--text-tertiary)', maxWidth: '200px' }}>{sender.email}</span>
                    </div>
                </div>
            </td>
            <td style={{ padding: '16px 24px' }}>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{sender.position}</span>
            </td>
            <td style={{ padding: '16px 24px' }}>
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '2px 8px 2px 6px',
                    borderRadius: '6px',
                    backgroundColor: badge.bg,
                    border: `1px solid ${badge.border}`,
                    whiteSpace: 'nowrap'
                }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: badge.dot }} />
                    <span style={{ fontSize: '12px', fontWeight: 500, color: badge.color }}>{badge.label}</span>
                </div>
            </td>
            <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', justifyContent: 'flex-end' }}>
                    <button 
                        onClick={() => onEdit(sender)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                        <Eye size={20} color="#475467" />
                    </button>
                    <button 
                        onClick={() => onDelete(sender)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fef2f2'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                        <Trash2 size={20} color="#ef4444" />
                    </button>
                </div>
            </td>
        </tr>
    );
};

const SendersTable = ({ onEdit, onDelete, onAdd }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div style={{ backgroundColor: 'var(--bg-card)', borderRadius: 'var(--radius-lg)', display: 'flex', flexDirection: 'column', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>

            {/* Table Header Section */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'flex-start', justifyContent: 'space-between', padding: '24px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '320px', flex: 1 }}>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: '28px', margin: 0 }}>
                        รายชื่อผู้ส่ง
                    </h2>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ position: 'relative', width: '320px' }}>
                        <div style={{ position: 'absolute', inset: '0 0 0 0', left: 0, paddingLeft: '14px', display: 'flex', alignItems: 'center', pointerEvents: 'none' }}>
                            <Search size={20} color="#6b7280" />
                        </div>
                        <input
                            type="text"
                            placeholder="ค้นหาผู้ส่ง..."
                            style={{ width: '100%', height: '44px', paddingLeft: '40px', paddingRight: '14px', paddingTop: '10px', paddingBottom: '10px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', fontSize: '1rem', color: 'var(--text-primary)', boxShadow: 'var(--shadow-sm)', outline: 'none' }}
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
                    <thead style={{ backgroundColor: 'var(--bg-hover)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
                        <tr>
                            <th style={{ padding: '12px 24px', fontWeight: 500, fontSize: '0.75rem', color: 'var(--text-secondary)', whiteSpace: 'nowrap', minWidth: '320px' }}>ชื่อ</th>
                            <th style={{ padding: '12px 24px', fontWeight: 500, fontSize: '0.75rem', color: 'var(--text-secondary)', width: '200px', whiteSpace: 'nowrap' }}>ตำแหน่ง</th>
                            <th style={{ padding: '12px 24px', fontWeight: 500, fontSize: '0.75rem', color: 'var(--text-secondary)', width: '180px', whiteSpace: 'nowrap' }}>สถานะ</th>
                            <th style={{ padding: '12px 24px', fontWeight: 500, fontSize: '0.75rem', color: 'var(--text-secondary)', width: '140px', whiteSpace: 'nowrap', textAlign: 'right' }}>จัดการ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading ? (
                            <tr>
                                <td colSpan="4" style={{ padding: '24px' }}>
                                    <SkeletonLoader rows={5} columns={4} />
                                </td>
                            </tr>
                        ) : mockSenders.length === 0 ? (
                            <tr>
                                <td colSpan="4" style={{ padding: '0' }}>
                                    <EmptyState title="ไม่พบผู้ส่ง" description="ยังไม่มีรายชื่อผู้ส่งในระบบ" />
                                </td>
                            </tr>
                        ) : mockSenders.map((sender, index) => (
                            <SenderRow key={sender.id} sender={sender} index={index} isLast={index === mockSenders.length - 1} onEdit={onEdit} onDelete={onDelete} />
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 24px', borderTop: '1px solid var(--border)' }}>
                <p style={{ fontWeight: 500, fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0 }}>
                    แสดง 1 ถึง {mockSenders.length} จาก {mockSenders.length} รายการ
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

export default SendersTable;
