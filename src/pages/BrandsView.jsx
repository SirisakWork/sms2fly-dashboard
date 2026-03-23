import React from 'react';
import { Plus } from 'lucide-react';
import BrandMetrics from '../components/brands/BrandMetrics';
import BrandList from '../components/brands/BrandList';

const BrandsView = ({ onAddBrand, onEditBrand, onAnalyzeBrand }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingBottom: '32px' }}>
            <div className="header-section" style={{ marginBottom: '8px' }}>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                        <h2 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>จัดการแบรนด์</h2>
                        <span className="text-sm text-secondary">สร้างและจัดการแบรนด์สำหรับแยกประเภทลิงก์และแคมเปญ SMS</span>
                    </div>
                    <button className="action-btn-primary" onClick={onAddBrand}>
                        <Plus size={20} />
                        <span>สร้างแบรนด์ใหม่</span>
                    </button>
                </div>
            </div>

            <BrandMetrics />
            <BrandList onAddBrand={onAddBrand} onEditBrand={onEditBrand} onAnalyzeBrand={onAnalyzeBrand} />
        </div>
    );
};

export default BrandsView;
