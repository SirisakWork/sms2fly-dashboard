import React from 'react';
import { ChevronDown, Share, ArrowLeft } from 'lucide-react';

const AnalysisHeader = ({ brand, campaign, onBack }) => {
    return (
        <div className="flex items-center justify-between" style={{ paddingBottom: '24px', borderBottom: '1px solid var(--border-light)' }}>
            <div className="flex flex-col gap-1">
                {onBack && (
                    <button onClick={onBack} className="flex items-center gap-1" style={{ color: 'var(--text-secondary)', fontSize: '13px', fontWeight: 500, border: 'none', background: 'none', cursor: 'pointer', padding: 0, marginBottom: '8px' }}>
                        <ArrowLeft size={14} /> {campaign ? 'กลับไปหน้าแคมเปญ' : 'กลับไปจัดการแบรนด์'}
                    </button>
                )}
                <h2 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>
                    {campaign ? `รายงานแคมเปญ: ${campaign.name}` : brand ? `วิเคราะห์ข้อมูลแบรนด์: ${brand.title}` : 'วิเคราะห์'}
                </h2>
                <span className="text-sm text-secondary">
                    {campaign ? `ภาพรวมประสิทธิภาพแคมเปญ ${campaign.name}` : brand ? `ภาพรวมประสิทธิภาพแคมเปญของ ${brand.title}` : 'วิเคราะห์ข้อมูลของ แบรนด์หลัก'}
                </span>
            </div>

            <div className="flex items-center gap-3">
                <button className="flex items-center gap-2" style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '14px', padding: '8px 12px' }}>
                    30 วันล่าสุด <ChevronDown size={16} />
                </button>
                <button className="card flex items-center gap-2 cursor-pointer" style={{ padding: '8px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                    <Share size={16} color="var(--text-secondary)" />
                    <span className="text-sm" style={{ fontWeight: '600', color: 'var(--text-primary)' }}>ส่งออก</span>
                </button>
            </div>
        </div>
    );
};

export default AnalysisHeader;
