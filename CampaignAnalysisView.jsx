import React from 'react';
import { ArrowLeft, Share, Download } from 'lucide-react';
import CampaignAnalysisHeaderCard from '../components/campaigns/Analysis/CampaignAnalysisHeaderCard';
import CampaignAnalysisMetrics from '../components/campaigns/Analysis/CampaignAnalysisMetrics';
import CampaignAnalysisTrendChart from '../components/campaigns/Analysis/CampaignAnalysisTrendChart';
import CampaignAnalysisDetailsAndSummary from '../components/campaigns/Analysis/CampaignAnalysisDetailsAndSummary';
import CampaignAnalysisTimingAndType from '../components/campaigns/Analysis/CampaignAnalysisTimingAndType';
import CampaignAnalysisContentAndActions from '../components/campaigns/Analysis/CampaignAnalysisContentAndActions';

const CampaignAnalysisView = ({ campaign, onBack }) => {
    // If no campaign is passed, we shouldn't really render, but we'll mock one for safety during dev
    const activeCampaign = campaign || {
        name: 'โปรโมชันเปิดร้านใหม่',
        type: 'แคมเปญส่งโปรโมชันลูกค้าลูกค้าใหม่',
        status: 'เสร็จสิ้น',
        sentAt: '20 ม.ค. 2567 17:00'
    };

    return (
        <div className="flex-col gap-6 w-full" style={{ paddingBottom: '40px' }}>
            {/* Top Level Action Header */}
            <div className="flex items-center justify-between" style={{ paddingBottom: '24px' }}>
                <div className="flex flex-col gap-1">
                    {onBack && (
                        <button onClick={onBack} className="flex items-center gap-1" style={{ color: 'var(--text-secondary)', fontSize: '13px', fontWeight: 500, border: 'none', background: 'none', cursor: 'pointer', padding: 0, marginBottom: '8px' }}>
                            <ArrowLeft size={14} /> กลับไปหน้าแคมเปญ
                        </button>
                    )}
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>
                        รายงานแคมเปญ
                    </h2>
                    <span className="text-sm text-secondary">
                        {activeCampaign.type}
                    </span>
                </div>

                <div className="flex items-center gap-3">
                    <button className="card flex items-center gap-2 cursor-pointer" style={{ padding: '8px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                        <Download size={16} color="var(--text-secondary)" />
                        <span className="text-sm" style={{ fontWeight: '600', color: 'var(--text-primary)' }}>ส่งออก PDF</span>
                    </button>
                    <button className="flex items-center gap-2 cursor-pointer transition-colors" style={{ padding: '8px 16px', borderRadius: 'var(--radius-md)', border: 'none', backgroundColor: 'var(--primary)', color: 'white' }}>
                        <Share size={16} color="white" />
                        <span className="text-sm" style={{ fontWeight: '600' }}>แชร์รายงาน</span>
                    </button>
                </div>
            </div>

            {/* Content Cards */}
            <div className="flex flex-col gap-6 w-full">
                <CampaignAnalysisHeaderCard campaign={activeCampaign} />
                <CampaignAnalysisMetrics />
                <CampaignAnalysisTrendChart />
                <CampaignAnalysisDetailsAndSummary />
                <CampaignAnalysisTimingAndType />
                <CampaignAnalysisContentAndActions />
            </div>
        </div>
    );
};

export default CampaignAnalysisView;
