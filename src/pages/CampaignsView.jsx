import React from 'react';
import { Plus, Search, ChevronDown, ChevronLeft, ChevronRight, CheckCircle2, Clock, FileEdit, LineChart, Send, Settings, MoreVertical } from 'lucide-react';
import CampaignMetrics from '../components/campaigns/CampaignMetrics';
import CampaignTable from '../components/campaigns/CampaignTable';

// eslint-disable-next-line no-unused-vars
const CampaignsView = ({ activeTab, onAddCampaign, onEditCampaign, onAnalyzeCampaign }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

            {/* Main Content Area */}
            <div className="header-section" style={{ marginBottom: '8px' }}>

                {/* Section Header */}
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                        <h2 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)' }}>แคมเปญ SMS</h2>
                        <span className="text-sm text-secondary">จัดการแคมเปญของ แบรนด์หลัก</span>
                    </div>
                    <button className="action-btn-primary" onClick={onAddCampaign}>
                        <Plus size={20} />
                        <span>สร้างแคมเปญใหม่</span>
                    </button>
                </div>
            </div>

            {/* Content Section */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* Metrics Banner */}
                <CampaignMetrics />

                {/* Table Section */}
                <CampaignTable 
                    onEditCampaign={onEditCampaign}
                    onAnalyzeCampaign={onAnalyzeCampaign}
                />
            </div>
        </div>
    );
};

export default CampaignsView;
