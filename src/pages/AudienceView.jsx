import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import AudienceMetrics from '../components/audience/AudienceMetrics';
import AudienceStatGrid from '../components/audience/AudienceStatGrid';
import AudienceTable from '../components/audience/AudienceTable';
import CustomerModal from '../components/audience/CustomerModal';

const AudienceView = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 0 32px 0' }}>

            {/* Header Area */}
            <div className="header-section" style={{ marginBottom: '8px' }}>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                        <h2 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>จัดการลูกค้า</h2>
                        <span className="text-sm text-secondary">จัดการข้อมูลลูกค้าของ แบรนด์หลัก</span>
                    </div>
                    <button
                        className="action-btn-primary"
                        onClick={() => setIsAddModalOpen(true)}
                    >
                        <Plus size={20} />
                        <span>เพิ่มลูกค้าใหม่</span>
                    </button>
                </div>
            </div>

            {/* Top Banner Metrics */}
            <AudienceMetrics />

            {/* Sub Metric Grid Cards */}
            <AudienceStatGrid />

            {/* Audience Table */}
            <AudienceTable />

            {/* Modals */}
            <CustomerModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                mode="add"
            />
        </div>
    );
};

export default AudienceView;
