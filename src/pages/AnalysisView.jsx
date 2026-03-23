import React from 'react';
import AnalysisHeader from '../components/analysis/AnalysisHeader';
import AnalysisMetrics from '../components/analysis/AnalysisMetrics';
import AnalysisTrendChart from '../components/analysis/AnalysisTrendChart';
import AnalysisDemographics from '../components/analysis/AnalysisDemographics';
import AnalysisCampaigns from '../components/analysis/AnalysisCampaigns';

const AnalysisView = ({ brand, campaign, onBack }) => {
    return (
        <div className="flex-col gap-6 w-full">
            <AnalysisHeader brand={brand} campaign={campaign} onBack={onBack} />
            <AnalysisMetrics />
            <AnalysisTrendChart />
            <AnalysisDemographics />
            <AnalysisCampaigns />
        </div>
    );
};

export default AnalysisView;
