import React from 'react';
import BrandCard from '../components/BrandCard';
import StatCards from '../components/StatCards';
import PerformanceChart from '../components/PerformanceChart';
import CampaignTable from '../components/CampaignTable';

const DashboardView = ({ onAnalyzeCampaign }) => {
    return (
        <>
            <BrandCard />
            <StatCards />
            <PerformanceChart />
            <CampaignTable onAnalyzeCampaign={onAnalyzeCampaign} />
        </>
    );
};

export default DashboardView;
