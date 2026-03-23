import React from 'react';

const CampaignAnalysisDetailsAndSummary = () => {
    return (
        <div className="flex gap-6 w-full">
            {/* Detailed Stats */}
            <div className="card flex-1 flex-col" style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)', margin: '0 0 20px 0' }}>สถิติรายละเอียด</h3>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <span style={{ color: 'var(--text-tertiary)', fontSize: '1rem' }}>ผู้รับเป้าหมาย:</span>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: 600 }}>5,000</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span style={{ color: 'var(--text-tertiary)', fontSize: '1rem' }}>ส่งสำเร็จ:</span>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: 600 }}>5,000</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span style={{ color: 'var(--text-tertiary)', fontSize: '1rem' }}>ส่งไม่สำเร็จ:</span>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: 600 }}>0</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span style={{ color: 'var(--text-tertiary)', fontSize: '1rem' }}>เปิดอ่าน:</span>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: 600 }}>4,250</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <span style={{ color: 'var(--text-tertiary)', fontSize: '1rem' }}>คลิกลิงก์:</span>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: 600 }}>1,250</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span style={{ color: 'var(--text-tertiary)', fontSize: '1rem' }}>ยกเลิกสมัครรับ:</span>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: 600 }}>100</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span style={{ color: 'var(--text-tertiary)', fontSize: '1rem' }}>แปลงเป็นลูกค้า:</span>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: 600 }}>375</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span style={{ color: 'var(--text-tertiary)', fontSize: '1rem' }}>ROI:</span>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: 600 }}>1400.0%</span>
                    </div>
                </div>
            </div>

            {/* Summary */}
            <div className="card flex-1 flex-col" style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)', margin: '0 0 20px 0' }}>สรุปผล</h3>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <span style={{ color: 'var(--text-tertiary)', fontSize: '1rem' }}>อัตราส่งสำเร็จ</span>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: 600 }}>100.0%</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span style={{ color: 'var(--text-tertiary)', fontSize: '1rem' }}>อัตราเปิดอ่าน</span>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: 600 }}>85.0%</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span style={{ color: 'var(--text-tertiary)', fontSize: '1rem' }}>อัตราคลิก</span>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: 600 }}>25.0%</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span style={{ color: 'var(--text-tertiary)', fontSize: '1rem' }}>อัตราแปลง</span>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: 600 }}>7.5%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampaignAnalysisDetailsAndSummary;
