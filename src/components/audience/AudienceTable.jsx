import React, { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown, ChevronLeft, ChevronRight, MoreVertical, Edit2, Trash2 } from 'lucide-react';
import CustomerModal from './CustomerModal';
import DeleteConfirmModal from '../modals/DeleteConfirmModal';
import SkeletonLoader from '../common/SkeletonLoader';
import EmptyState from '../common/EmptyState';

const StatusBadge = ({ status }) => {
    const styles = {
        'ใช้งาน': { bg: '#ECFDF3', border: '#ABRFC6', text: '#067647', dot: '#12B76A' },
        'ไม่ใช้': { bg: '#F8F9FC', border: '#D5D9EB', text: '#363F72', dot: 'var(--text-secondary)' },
        'รออนุมัติ': { bg: '#FFFAEB', border: '#FEDF89', text: '#B54708', dot: '#F79009' }
    };

    const style = styles[status] || styles['ไม่ใช้'];

    return (
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '2px 8px', borderRadius: '16px', border: `1px solid ${style.border}`, backgroundColor: style.bg, color: style.text }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: style.dot }} />
            <span style={{ fontWeight: 500, fontSize: '0.75rem', lineHeight: '1rem' }}>{status}</span>
        </div>
    );
};

const RoleBadge = ({ role }) => {
    const styles = {
        'แอดมิน': { bg: '#eff6ff', border: '#bfdbfe', text: '#1d4ed8' },
        'การตลาด': { bg: '#ecfdf5', border: '#a7f3d0', text: '#047857' }
    };

    const style = styles[role] || { bg: 'var(--bg-hover)', border: 'var(--border)', text: '#374151' };

    return (
        <div style={{ display: 'inline-flex', alignItems: 'center', padding: '2px 8px', borderRadius: '16px', border: `1px solid ${style.border}`, backgroundColor: style.bg, color: style.text }}>
            <span style={{ fontWeight: 500, fontSize: '0.75rem', lineHeight: '1rem', whiteSpace: 'nowrap' }}>{role}</span>
        </div>
    );
};

const AUDIENCE_DATA = [
    {
        id: 1,
        name: 'สมชาย ใจดี',
        email: 'somchai@main.shorturl.com',
        avatarImg: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64',
        role: 'แอดมิน',
        lastLogin: '24 ม.ค.68 , 16:20',
        company: 'บริษัท หลัก จำกัด',
        status: 'ใช้งาน'
    },
    {
        id: 2,
        name: 'สมหญิง รักดี',
        email: 'somying@main.shorturl.com',
        avatarImg: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64',
        role: 'แอดมิน',
        lastLogin: '22 ม.ค.68 , 23:15',
        company: 'บริษัท หลัก จำกัด',
        status: 'ใช้งาน'
    },
    {
        id: 3,
        name: 'สมปอง มีความสุข',
        email: 'sompong@main.shorturl.com',
        avatarImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64',
        role: 'การตลาด',
        lastLogin: '24 ม.ค.68 , 16:20',
        company: 'บริษัท หลัก จำกัด',
        status: 'ใช้งาน'
    },
    {
        id: 4,
        name: 'สมศรี ชื่นใจ',
        email: 'somsri@main.shorturl.com',
        avatarImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64',
        role: 'การตลาด',
        lastLogin: '22 ม.ค.68 , 23:15',
        company: 'บริษัท หลัก จำกัด',
        status: 'ไม่ใช้'
    },
    {
        id: 5,
        name: 'นายทดสอบ ระบบ',
        email: 'test@main.shorturl.com',
        avatarImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64',
        role: 'การตลาด',
        lastLogin: '24 ม.ค.68 , 16:20',
        company: 'บริษัท หลัก จำกัด',
        status: 'รออนุมัติ'
    }
];

export const AudienceTable = () => {
    const [actionMenuOpen, setActionMenuOpen] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const menuRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setActionMenuOpen(null);
            }
        };

        if (actionMenuOpen !== null) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [actionMenuOpen]);

    const handleEditClick = (customer) => {
        // Parse name into first and last name for the modal
        const nameParts = customer.name.split(' ');
        const firstName = nameParts[0] || '';
        const lastName = nameParts.slice(1).join(' ') || '';

        setSelectedCustomer({
            ...customer,
            firstName,
            lastName,
            phone: '(+000)-123-4567' // Mock phone data as it doesn't exist in the list
        });
        setIsEditModalOpen(true);
        setActionMenuOpen(null);
    };

    const handleDeleteClick = (customer) => {
        setSelectedCustomer(customer);
        setIsDeleteModalOpen(true);
        setActionMenuOpen(null);
    };

    return (
        <div style={{ backgroundColor: 'var(--bg-card)', borderRadius: 'var(--radius-lg)', display: 'flex', flexDirection: 'column', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>

            {/* Table Header Section */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'flex-start', justifyContent: 'space-between', padding: '24px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '320px', flex: 1 }}>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: '28px', margin: 0 }}>
                        ลูกค้า
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
                            <th style={{ padding: '12px 24px', fontWeight: 500, fontSize: '0.75rem', color: 'var(--text-secondary)', width: '140px', whiteSpace: 'nowrap' }}>ตำแหน่ง</th>
                            <th style={{ padding: '12px 24px', fontWeight: 500, fontSize: '0.75rem', color: 'var(--text-secondary)', width: '200px', whiteSpace: 'nowrap' }}>เข้าใช้ล่าสุด</th>
                            <th style={{ padding: '12px 24px', fontWeight: 500, fontSize: '0.75rem', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>บริษัท</th>
                            <th style={{ padding: '12px 24px', fontWeight: 500, fontSize: '0.75rem', color: 'var(--text-secondary)', width: '120px', whiteSpace: 'nowrap' }}>สถานะ</th>
                            <th style={{ padding: '12px 24px', fontWeight: 500, fontSize: '0.75rem', color: 'var(--text-secondary)', width: '64px', whiteSpace: 'nowrap', textAlign: 'right' }}>จัดการ</th>
                        </tr>
                    </thead>
                    <tbody style={{ backgroundColor: 'var(--bg-card)' }}>
                        {isLoading ? (
                            <tr>
                                <td colSpan="6" style={{ padding: '24px' }}>
                                    <SkeletonLoader rows={5} columns={6} />
                                </td>
                            </tr>
                        ) : AUDIENCE_DATA.length === 0 ? (
                            <tr>
                                <td colSpan="6" style={{ padding: '0' }}>
                                    <EmptyState title="ไม่พบรายชื่อลูกค้า" description="ยังไม่มีข้อมูลลูกค้าในระบบ" />
                                </td>
                            </tr>
                        ) : AUDIENCE_DATA.map((row, index) => (
                            <tr key={row.id} className={`stagger-item stagger-delay-${(index % 5) + 1}`} style={{ borderBottom: index < AUDIENCE_DATA.length - 1 ? '1px solid var(--border)' : 'none', transition: 'background-color 0.2s', cursor: 'default' }} onMouseOver={e => e.currentTarget.style.backgroundColor = 'var(--bg-hover)'} onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}>
                                {/* Name & Email */}
                                <td style={{ padding: '16px 24px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', flexShrink: 0, border: '0.75px solid rgba(0,0,0,0.1)', overflow: 'hidden' }}>
                                            <img src={row.avatarImg} alt={row.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <p className="truncate-text" style={{ fontWeight: 500, fontSize: '0.875rem', color: 'var(--text-primary)', margin: 0, maxWidth: '180px' }}>
                                                {row.name}
                                            </p>
                                            <p className="truncate-text" style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)', margin: 0, maxWidth: '180px' }}>
                                                {row.email}
                                            </p>
                                        </div>
                                    </div>
                                </td>

                                {/* Role */}
                                <td style={{ padding: '16px 24px' }}>
                                    <RoleBadge role={row.role} />
                                </td>

                                {/* Last Login */}
                                <td style={{ padding: '16px 24px' }}>
                                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0 }}>
                                        {row.lastLogin}
                                    </p>
                                </td>

                                {/* Company */}
                                <td style={{ padding: '16px 24px' }}>
                                    <p style={{ fontWeight: 500, fontSize: '0.875rem', color: 'var(--text-primary)', margin: 0 }}>
                                        {row.company}
                                    </p>
                                </td>

                                {/* Status */}
                                <td style={{ padding: '16px 24px' }}>
                                    <StatusBadge status={row.status} />
                                </td>

                                {/* Action */}
                                <td style={{ padding: '16px 24px', textAlign: 'right', position: 'relative' }}>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setActionMenuOpen(actionMenuOpen === row.id ? null : row.id);
                                        }}
                                        style={{ padding: '8px', color: '#9ca3af', borderRadius: '8px', border: 'none', background: actionMenuOpen === row.id ? 'var(--bg-hover)' : 'transparent', cursor: 'pointer' }}
                                        onMouseOver={e => { e.currentTarget.style.color = 'var(--text-primary)'; if (actionMenuOpen !== row.id) e.currentTarget.style.backgroundColor = 'var(--bg-hover)'; }}
                                        onMouseOut={e => { if (actionMenuOpen !== row.id) { e.currentTarget.style.color = '#9ca3af'; e.currentTarget.style.backgroundColor = 'transparent'; } }}
                                    >
                                        <MoreVertical size={20} />
                                    </button>

                                    {/* Action Menu Dropdown */}
                                    {actionMenuOpen === row.id && (
                                        <div
                                            ref={menuRef}
                                            style={{
                                                position: 'absolute',
                                                top: '100%',
                                                right: '24px',
                                                marginTop: '-8px',
                                                zIndex: 50,
                                                backgroundColor: 'var(--bg-card)',
                                                borderRadius: 'var(--radius-md)',
                                                boxShadow: 'var(--shadow-lg), 0 0 0 1px var(--border)',
                                                width: '160px',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                padding: '4px',
                                                overflow: 'hidden'
                                            }}
                                        >
                                            <button
                                                className="table-action-menu-item"
                                                onClick={() => handleEditClick(row)}
                                            >
                                                <Edit2 size={16} />
                                                <span>แก้ไขข้อมูล</span>
                                            </button>

                                            <div style={{ height: '1px', backgroundColor: 'var(--border)', margin: '4px 0' }} />

                                            <button
                                                className="table-action-menu-item danger"
                                                onClick={() => handleDeleteClick(row)}
                                            >
                                                <Trash2 size={16} />
                                                <span>ลบรายการ</span>
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

            {/* Modals */}
            <CustomerModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                mode="edit"
                initialData={selectedCustomer}
            />

            <DeleteConfirmModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                itemName={selectedCustomer?.name || 'รายการนี้'}
            />
        </div>
    );
};

export default AudienceTable;
