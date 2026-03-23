import React, { useState, useEffect } from 'react';
import { Search, Plus, Trash2, ChevronLeft, ChevronRight, Globe } from 'lucide-react';
import DeleteModal from '../common/DeleteModal';
import SkeletonLoader from '../common/SkeletonLoader';
import EmptyState from '../common/EmptyState';

const DomainVerificationBadge = ({ status }) => {
    const isVerified = status === 'ยืนยันแล้ว';
    const bg = isVerified ? '#ECFDF3' : '#FEF3F2';
    const border = isVerified ? '#ABRFC6' : '#FEE4E2';
    const text = isVerified ? '#067647' : '#B42318';
    const dot = isVerified ? '#12B76A' : '#F04438';

    return (
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '2px 8px', borderRadius: '16px', border: `1px solid ${border}`, backgroundColor: bg, color: text }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: dot }} />
            <span style={{ fontWeight: 500, fontSize: '0.75rem', lineHeight: '1rem' }}>{status}</span>
        </div>
    );
};

const ToggleSwitch = ({ checked, onChange }) => {
    return (
        <button
            onClick={onChange}
            style={{
                width: '36px',
                height: '20px',
                borderRadius: '9999px',
                backgroundColor: checked ? '#1A68FF' : 'var(--border)',
                border: 'none',
                position: 'relative',
                cursor: 'pointer',
                transition: 'all var(--transition-normal) var(--ease-framer)',
                padding: 0
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: '2px',
                    left: checked ? 'calc(100% - 18px)' : '2px',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--bg-card)',
                    transition: 'left var(--transition-normal) var(--ease-framer)',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
                }}
            />
        </button>
    );
};

export const DomainTable = () => {
    const [domains, setDomains] = useState([
        { id: 1, name: 'tracking-example.sms2fly.io', created: '2023-10-01', active: true, badges: [{ label: 'PATH: /', type: 'brand' }, { label: 'PORT: 3000', type: 'brand' }, { label: 'HTTPS', type: 'indigo', icon: true }, { label: 'CERT: Let\'s Encrypt', type: 'pink' }] },
        { id: 2, name: 'promo.brands-campaign.com', created: '2023-11-15', active: false, badges: [{ label: 'PATH: /promo', type: 'brand' }, { label: 'PORT: 443', type: 'brand' }, { label: 'HTTPS', type: 'indigo', icon: true }, { label: 'CERT: Custom', type: 'pink' }] },
        { id: 3, name: 'click.sms2fly.io', created: '2023-12-05', active: false, badges: [{ label: 'PATH: /click', type: 'brand' }, { label: 'PORT: 80', type: 'brand' }, { label: 'HTTP', type: 'gray' }] },
        { id: 4, name: 'track.mycompany.co.th', created: '2023-09-20', active: true, badges: [{ label: 'PATH: /', type: 'brand' }, { label: 'PORT: 3000', type: 'brand' }, { label: 'HTTPS', type: 'indigo', icon: true }, { label: 'CERT: Let\'s Encrypt', type: 'pink' }] },
        { id: 5, name: 'short.example-link.io', created: '2024-01-10', active: true, badges: [{ label: 'PATH: /s', type: 'brand' }, { label: 'PORT: 443', type: 'brand' }, { label: 'HTTPS', type: 'indigo', icon: true }, { label: 'CERT: Let\'s Encrypt', type: 'pink' }] },
    ]);

    const [domainToDelete, setDomainToDelete] = useState(null);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    const handleDeleteConfirm = () => {
        setIsDeleting(true);
        // Simulate API call
        setTimeout(() => {
            setDomains(prev => prev.filter(d => d.id !== domainToDelete.id));
            setIsDeleting(false);
            setDomainToDelete(null);
        }, 1000);
    };

    const getBadgeStyle = (type) => {
        switch (type) {
            case 'brand': return { bg: '#EEF9FF', border: '#B3DDFF', text: '#175CD3' };
            case 'indigo': return { bg: '#EEF4FF', border: '#C7D7FE', text: '#3538CD' };
            case 'pink': return { bg: '#FDF2FA', border: '#FCCEEE', text: '#C11574' };
            default: return { bg: '#F1F5F9', border: '#CBD5E1', text: '#334155' };
        }
    };

    const StatusBadge = ({ active }) => (
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '2px 6px', borderRadius: '6px', border: `1px solid ${active ? '#ABEFC6' : '#FEE4E2'}`, backgroundColor: active ? '#ECFDF3' : '#FEF3F2', color: active ? '#067647' : '#B42318' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: active ? '#12B76A' : '#F04438' }} />
            <span style={{ fontWeight: 500, fontSize: '0.75rem', lineHeight: '1.2' }}>{active ? 'ใช้งาน' : 'ไม่พร้อมใช้งาน'}</span>
        </div>
    );

    return (
        <div style={{ backgroundColor: 'var(--bg-card)', borderRadius: 'var(--radius-lg)', display: 'flex', flexDirection: 'column', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>

            {/* Header Section */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', justifyContent: 'space-between', padding: '24px' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0, minWidth: 'fit-content' }}>
                    โดเมนทั้งหมด
                </h2>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
                    <div style={{ position: 'relative', width: '320px', maxWidth: '100%' }}>
                        <div style={{ position: 'absolute', inset: '0 0 0 0', left: 0, paddingLeft: '14px', display: 'flex', alignItems: 'center', pointerEvents: 'none' }}>
                            <Search size={20} color="#6b7280" />
                        </div>
                        <input
                            type="text"
                            placeholder="ค้นหาโดเมน..."
                            style={{ width: '100%', paddingLeft: '40px', paddingRight: '14px', paddingTop: '10px', paddingBottom: '10px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', fontSize: '1rem', color: 'var(--text-primary)', boxShadow: 'var(--shadow-sm)', outline: 'none' }}
                        />
                    </div>
                </div>
            </div>

            {/* Metrics Row */}
            <div style={{ display: 'flex', gap: '24px', padding: '0 24px 24px 24px', borderBottom: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontWeight: 500, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>โดเมนทั้งหมด</span>
                    <div style={{ padding: '2px 8px', backgroundColor: '#F1F5F9', borderRadius: '16px', color: '#0F172A', fontWeight: 600, fontSize: '0.75rem' }}>15</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontWeight: 500, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>กำลังใช้งาน</span>
                    <div style={{ padding: '2px 8px', backgroundColor: '#ECFDF3', borderRadius: '16px', color: '#067647', fontWeight: 600, fontSize: '0.75rem' }}>13</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontWeight: 500, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>หมดอายุแล้ว</span>
                    <div style={{ padding: '2px 8px', backgroundColor: '#FEF3F2', borderRadius: '16px', color: '#B42318', fontWeight: 600, fontSize: '0.75rem' }}>2</div>
                </div>
            </div>

            {/* Table Content */}
            <div style={{ width: '100%', overflowX: 'auto' }}>
                <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ backgroundColor: 'var(--bg-hover)', borderBottom: '1px solid var(--border)' }}>
                            <th style={{ padding: '12px 24px', fontWeight: 500, fontSize: '0.75rem', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>ชื่อโดเมน</th>
                            <th style={{ padding: '12px 24px', fontWeight: 500, fontSize: '0.75rem', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>สถานะ</th>
                            <th style={{ padding: '12px 24px', fontWeight: 500, fontSize: '0.75rem', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>การเชื่อมต่อ</th>
                            <th style={{ padding: '12px 24px', fontWeight: 500, fontSize: '0.75rem', color: 'var(--text-secondary)', width: '64px', whiteSpace: 'nowrap' }}></th>
                        </tr>
                    </thead>
                    <tbody style={{ backgroundColor: 'var(--bg-card)' }}>
                        {isLoading ? (
                            <tr>
                                <td colSpan="4" style={{ padding: '24px' }}>
                                    <SkeletonLoader rows={5} columns={4} />
                                </td>
                            </tr>
                        ) : domains.length === 0 ? (
                            <tr>
                                <td colSpan="4" style={{ padding: '0' }}>
                                    <EmptyState title="ไม่พบโดเมน" description="ยังไม่มีโดเมนในระบบ" />
                                </td>
                            </tr>
                        ) : domains.map((row, index) => (
                            <tr key={row.id} className={`stagger-item stagger-delay-${(index % 5) + 1}`} style={{ borderBottom: index < domains.length - 1 ? '1px solid var(--border)' : 'none', transition: 'background-color 0.2s', cursor: 'default' }} onMouseOver={e => e.currentTarget.style.backgroundColor = 'var(--bg-hover)'} onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}>
                                {/* Name and Created Details */}
                                <td style={{ padding: '16px 24px' }}>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#F0F6FF', color: 'var(--primary)', flexShrink: 0, border: '1px solid #D1E5FF' }}>
                                            <Globe size={20} strokeWidth={2.5} />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '2px' }}>
                                            <p style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-primary)', margin: 0 }}>
                                                {row.name}
                                            </p>
                                            <p style={{ fontWeight: 400, fontSize: '0.875rem', color: 'var(--text-tertiary)', margin: 0 }}>
                                                สร้างเมื่อ: {row.created}
                                            </p>
                                        </div>
                                    </div>
                                </td>

                                {/* Active Badge */}
                                <td style={{ padding: '16px 24px' }}>
                                    <StatusBadge active={row.active} />
                                </td>

                                {/* Routing Badges */}
                                <td style={{ padding: '16px 24px' }}>
                                    <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                                        {row.badges.map((badge, idx) => {
                                            const st = getBadgeStyle(badge.type);
                                            return (
                                                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '2px', padding: '2px 8px', borderRadius: '9999px', backgroundColor: st.bg, border: `1px solid ${st.border}`, color: st.text, fontSize: '0.75rem', fontWeight: 500 }}>
                                                    {badge.icon && (
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '2px' }}><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                                    )}
                                                    {badge.label}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </td>

                                {/* External Link & Delete Actions */}
                                <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                                    <div style={{ display: 'flex', gap: '4px', justifyContent: 'flex-end' }}>
                                        <button style={{ padding: '8px', color: 'var(--text-secondary)', borderRadius: '8px', border: 'none', background: 'transparent', cursor: 'pointer' }} onMouseOver={e => e.currentTarget.style.backgroundColor = '#f1f5f9'} onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                                        </button>
                                        <button
                                            onClick={() => setDomainToDelete(row)}
                                            style={{ padding: '8px', color: 'var(--text-secondary)', borderRadius: '8px', border: 'none', background: 'transparent', cursor: 'pointer' }}
                                            onMouseOver={e => { e.currentTarget.style.color = '#ef4444'; e.currentTarget.style.backgroundColor = '#fef2f2'; }}
                                            onMouseOut={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.backgroundColor = 'transparent'; }}
                                        >
                                            <Trash2 size={20} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination Footer */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 24px', borderTop: '1px solid var(--border)' }}>
                <p style={{ fontWeight: 500, fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0 }}>
                    แสดง 1 ถึง 5 จาก 15 รายการ
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

            {/* Reusable Delete Modal */}
            <DeleteModal
                isOpen={!!domainToDelete}
                onClose={() => setDomainToDelete(null)}
                onConfirm={handleDeleteConfirm}
                isDeleting={isDeleting}
                title="ลบโดเมนนี้?"
            />
        </div>
    );
};

export default DomainTable;
