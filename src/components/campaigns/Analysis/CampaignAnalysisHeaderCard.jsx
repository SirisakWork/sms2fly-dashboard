import React from 'react';
import { Mail } from 'lucide-react';

const CampaignAnalysisHeaderCard = ({ campaign }) => {
    return (
        <div className="card flex items-center justify-between" style={{ padding: '24px' }}>
            <div className="flex items-center gap-4">
                {/* Avatar Icon */}
                <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-full)', backgroundColor: '#E0EAFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {/* Simplified avatar/logo for campaign */}
                    <div style={{ width: '24px', height: '24px', borderRadius: 'var(--radius-full)', backgroundColor: '#444CE7', opacity: 0.8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '10px' }}>
                        S
                    </div>
                </div>

                {/* Campaign Info */}
                <div className="flex flex-col gap-1">
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>
                        {campaign.name}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0 }}>
                        {campaign.type}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                        <span style={{ display: 'inline-flex', alignItems: 'center', padding: '2px 8px', borderRadius: '16px', backgroundColor: '#ECFDF3', color: '#027A48', fontSize: '0.75rem', fontWeight: 500 }}>
                            {campaign.status}
                        </span>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
                            ส่งเมื่อ: {campaign.sentAt}
                        </span>
                    </div>
                </div>
            </div>

            {/* Right Summary Graphic */}
            <div className="flex items-center gap-3">
                <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-md)', backgroundColor: '#ECFDF3', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #D1FADF' }}>
                   <Mail size={20} color="#039855" /> 
                </div>
                <div className="flex flex-col">
                    <span style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)' }}>5.0K</span>
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>SMS ส่งแล้ว</span>
                </div>
            </div>
        </div>
    );
};

export default CampaignAnalysisHeaderCard;
