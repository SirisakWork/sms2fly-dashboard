import React from 'react';
import { Copy, Users, BarChart2, MoreVertical } from 'lucide-react';

const CampaignAnalysisContentAndActions = () => {
    return (
        <div className="flex gap-6 w-full">
            {/* Content (SMS Text) */}
            <div className="card flex-1 flex-col" style={{ padding: '24px' }}>
                <div className="flex items-center justify-between mb-4">
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>เนื้อหาข้อความ</h3>
                    <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: 'var(--text-tertiary)' }}>
                        <MoreVertical size={16} />
                    </button>
                </div>

                <div className="flex flex-col gap-2">
                    <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)' }}>ข้อความ</label>
                    <div style={{ padding: '12px 14px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', backgroundColor: '#f8fafc', minHeight: '154px' }}>
                        <p style={{ fontSize: '1rem', color: 'var(--text-disabled)', margin: '0 0 16px 0', lineHeight: 1.5 }}>
                            ยินดีต้อนรับสู่ร้านใหม่! รับส่วนลด 50% สำหรับการสั่งซื้อครั้งแรก
                        </p>
                        <p style={{ fontSize: '1rem', color: 'var(--text-disabled)', margin: 0 }}>
                            ลิงก์: <span style={{ color: '#1571ef' }}>https://main.shorturl.com/newstore</span>
                        </p>
                    </div>
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)', marginTop: '4px' }}>
                        64/160 ตัวอักษร
                    </span>
                </div>
            </div>

            {/* Actions */}
            <div className="card flex-1 flex-col justify-between" style={{ padding: '24px' }}>
                <div className="flex items-center justify-between mb-4">
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>การดำเนินการ</h3>
                    <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: 'var(--text-tertiary)' }}>
                        <MoreVertical size={16} />
                    </button>
                </div>

                <div className="flex flex-col gap-3 h-full justify-end" style={{ marginTop: '56px' }}>
                    <button className="action-btn-outline w-full justify-center">
                        <Copy size={16} />
                        <span>ทำสำเนาแคมเปญ</span>
                    </button>
                    
                    <button className="action-btn-outline w-full justify-center">
                        <Users size={16} />
                        <span>ดูรายชื่อผู้รับ</span>
                    </button>

                    <button className="action-btn-primary w-full justify-center">
                        <BarChart2 size={16} />
                        <span>วิเคราะห์เชิงลึก</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CampaignAnalysisContentAndActions;
