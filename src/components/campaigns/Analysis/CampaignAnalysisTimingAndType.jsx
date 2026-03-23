import React from 'react';
import { MoreVertical } from 'lucide-react';

const CampaignAnalysisTimingAndType = () => {
    return (
        <div className="flex gap-6 w-full">
            {/* Best Times */}
            <div className="card flex-1 flex-col" style={{ padding: '24px' }}>
                <div className="flex items-center justify-between mb-6">
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>ช่วงเวลาที่ดีที่สุด</h3>
                </div>
                
                <div className="flex flex-col gap-6">
                    <div className="flex items-start justify-between">
                        <div className="flex flex-col gap-1">
                            <span style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-secondary)' }}>แคมเปญเสร็จสิ้น</span>
                            <span style={{ fontSize: '1rem', color: '#1571ef' }}>เปิดอ่านสูงสุด</span>
                        </div>
                        <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-tertiary)', marginTop: '4px' }}>28%</span>
                    </div>

                    <div className="flex items-start justify-between">
                        <div className="flex flex-col gap-1">
                            <span style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-secondary)' }}>14:00 - 15:00</span>
                            <span style={{ fontSize: '1rem', color: '#1571ef' }}>คลิกสูงสุด</span>
                        </div>
                        <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-tertiary)', marginTop: '4px' }}>15%</span>
                    </div>

                    <div className="flex items-start justify-between">
                        <div className="flex flex-col gap-1">
                            <span style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-secondary)' }}>11:00 - 12:00</span>
                            <span style={{ fontSize: '1rem', color: '#1571ef' }}>แปลงสูงสุด</span>
                        </div>
                        <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-tertiary)', marginTop: '4px' }}>8%</span>
                    </div>
                </div>
            </div>

            {/* Campaign Type / Timeline */}
            <div className="card flex-1 flex-col" style={{ padding: '24px' }}>
                <div className="flex items-center justify-between mb-6">
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>ประเภทแคมเปญ</h3>
                    <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: 'var(--text-tertiary)' }}>
                        <MoreVertical size={16} />
                    </button>
                </div>

                <div className="flex flex-col relative" style={{ paddingTop: '8px' }}>
                    
                    {/* Step 1 */}
                    <div className="flex items-start relative" style={{ paddingBottom: '40px', paddingLeft: '64px' }}>
                        {/* Status Line */}
                        <div style={{ position: 'absolute', left: '19px', top: '40px', bottom: '0', width: '2px', backgroundColor: 'var(--border)' }} />
                        {/* Status Icon */}
                        <div style={{ position: 'absolute', left: '0', top: '0', width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#2563eb' }} />
                        </div>
                        <div className="flex flex-col" style={{ marginTop: '8px' }}>
                            <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-secondary)' }}>แคมเปญเสร็จสิ้น</span>
                            <span style={{ fontSize: '1rem', color: 'var(--text-tertiary)' }}>25 ม.ค. 2567 23:30</span>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex items-start relative" style={{ paddingBottom: '40px', paddingLeft: '64px' }}>
                        {/* Status Line */}
                        <div style={{ position: 'absolute', left: '19px', top: '40px', bottom: '0', width: '2px', backgroundColor: 'var(--border)' }} />
                        {/* Status Icon */}
                        <div style={{ position: 'absolute', left: '0', top: '0', width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#16a34a' }} />
                        </div>
                        <div className="flex flex-col" style={{ marginTop: '8px' }}>
                            <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-secondary)' }}>เริ่มส่ง SMS</span>
                            <span style={{ fontSize: '1rem', color: 'var(--text-tertiary)' }}>A few details about your company</span>
                        </div>
                    </div>

                    {/* Step 3 (Final, No bounding line below) */}
                    <div className="flex items-start relative" style={{ paddingLeft: '64px' }}>
                        {/* Status Icon */}
                        <div style={{ position: 'absolute', left: '0', top: '0', width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#6b7280' }} />
                        </div>
                        <div className="flex flex-col" style={{ marginTop: '8px' }}>
                            <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-secondary)' }}>สร้างแคมเปญ</span>
                            <span style={{ fontSize: '1rem', color: 'var(--text-tertiary)' }}>18 ม.ค. 2567 21:30</span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default CampaignAnalysisTimingAndType;
