import React from 'react';
import { Trash2, Building2, Megaphone, PenTool, Plus } from 'lucide-react';

const BrandCard = ({ variant = "Default", title, description, domain, iconType, iconBg, iconColor, metrics, onDelete, onAddBrand, onEdit, onAnalyze }) => {

    // Icon selection logic for default cards
    const renderIcon = () => {
        if (iconType === 'megaphone') return <Megaphone size={24} color={iconColor} />;
        if (iconType === 'pen') return <PenTool size={24} color={iconColor} />;
        return <Building2 size={24} color={iconColor} />;
    };

    if (variant === "Add New") {
        return (
            <div 
                onClick={onAddBrand}
                style={{
                    backgroundColor: 'var(--bg-body, #F8FAFC)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    cursor: 'pointer',
                    borderRadius: 'var(--radius-md, 12px)',
                    width: 'calc(25% - 18px)', // 4 cards per row roughly, matching metric cards width
                    minWidth: '220px',
                    height: '352px',
                    border: '1px dashed var(--border-primary, #CDD4DE)',
                    boxSizing: 'border-box',
                    transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = 'var(--primary)';
                    e.currentTarget.style.backgroundColor = 'var(--bg-hover)';
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-primary, #CDD4DE)';
                    e.currentTarget.style.backgroundColor = 'var(--bg-body, #F8FAFC)';
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', textAlign: 'center', padding: '0 24px' }}>
                    <div style={{ position: 'relative', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px' }}>
                        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'var(--primary)', borderRadius: '12px', transform: 'rotate(15deg)', opacity: 0.1 }}></div>
                        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--primary)', width: '56px', height: '56px', borderRadius: '12px', backdropFilter: 'blur(8px)', boxShadow: '0 4px 12px rgba(26, 104, 255, 0.2)' }}>
                            <Plus size={28} color="white" />
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '16px' }}>
                        <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>เพิ่มแบรนด์ใหม่</h3>
                        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.4 }}>สร้างแบรนด์ใหม่เพื่อจัดกลุ่มและจัดการแคมเปญ SMS</p>
                    </div>
                </div>
            </div>
        );
    }

    // Default Variant
    return (
        <div style={{
            backgroundColor: 'var(--bg-card, #FFFFFF)',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            borderRadius: 'var(--radius-md, 12px)',
            width: 'calc(25% - 18px)',
            minWidth: '220px',
            border: '1px solid var(--border)',
            boxSizing: 'border-box',
            transition: 'box-shadow 0.2s ease',
            boxShadow: '0 1px 3px rgba(15, 23, 42, 0.05)'
        }}
        onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 10px 25px rgba(15, 23, 42, 0.05)'}
        onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 1px 3px rgba(15, 23, 42, 0.05)'}
        >
            {/* Header section */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', position: 'relative', width: '100%', paddingTop: '16px', paddingLeft: '16px', paddingRight: '16px', boxSizing: 'border-box' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', width: '100%' }}>
                    <div style={{ position: 'relative', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px' }}>
                        <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyItems: 'center', width: '48px', height: '48px', backgroundColor: iconBg, borderRadius: '10px', transform: 'rotate(15deg)' }}></div>
                        <div style={{ position: 'absolute', left: 0, top: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '10px', background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.6)', zIndex: 1, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                            {renderIcon()}
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: 0, marginTop: '2px', overflow: 'hidden' }}>
                        <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0, whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', lineHeight: '28px' }}>{title}</h3>
                        <p style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)', margin: 0, whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>{description}</p>
                    </div>
                </div>
                <div className="divider" style={{ marginTop: '4px', marginBottom: '0', background: 'var(--border)', alignSelf: 'stretch' }}></div>
            </div>

            {/* Metrics section */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '16px', width: '100%', boxSizing: 'border-box' }}>
                <div style={{ backgroundColor: 'var(--bg-body, #F8FAFC)', display: 'flex', flex: 1, flexDirection: 'column', gap: '4px', alignItems: 'center', justifyContent: 'center', padding: '16px', borderRadius: 'var(--radius-md, 12px)' }}>
                    <p style={{ fontSize: '0.75rem', fontWeight: 500, color: 'var(--text-tertiary)', margin: 0 }}>SMS ส่ง</p>
                    <p style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>{metrics?.sent || 0}</p>
                </div>
                <div style={{ backgroundColor: 'var(--bg-body, #F8FAFC)', display: 'flex', flex: 1, flexDirection: 'column', gap: '4px', alignItems: 'center', justifyContent: 'center', padding: '16px', borderRadius: 'var(--radius-md, 12px)' }}>
                    <p style={{ fontSize: '0.75rem', fontWeight: 500, color: 'var(--text-tertiary)', margin: 0 }}>ผู้รับ</p>
                    <p style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>{metrics?.recipients || 0}</p>
                </div>
            </div>

            {/* Domain section */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'flex-start', paddingLeft: '24px', paddingRight: '24px', paddingBottom: '16px', width: '100%', boxSizing: 'border-box' }}>
                <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>โดเมน</p>
                <div style={{ padding: '6px 12px', backgroundColor: 'var(--bg-hover)', color: 'var(--primary)', borderRadius: '6px', fontSize: '0.875rem', fontWeight: 500, margin: 0 }}>{domain}</div>
            </div>

            <div className="divider" style={{ margin: 0, background: 'var(--border)', alignSelf: 'stretch' }}></div>

            {/* Actions section */}
            <div style={{ display: 'flex', alignItems: 'flex-start', paddingTop: '16px', paddingBottom: '16px', paddingLeft: '16px', paddingRight: '16px', width: '100%', gap: '8px', boxSizing: 'border-box' }}>
                <button onClick={onDelete} className="icon-btn" style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-sm, 8px)' }}>
                    <Trash2 size={20} />
                </button>
                <button onClick={onEdit} className="action-btn-outline" style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', height: '44px', borderRadius: 'var(--radius-sm, 8px)', fontWeight: 600, boxShadow: 'none' }}>
                    แก้ไข
                </button>
                <button onClick={onAnalyze} className="action-btn-primary" style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', height: '44px', borderRadius: 'var(--radius-sm, 8px)', fontWeight: 600, boxShadow: 'none' }}>
                    วิเคราะห์
                </button>
            </div>
        </div>
    );
};

export default BrandCard;
