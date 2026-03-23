import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import DomainTable from '../components/domains/DomainTable';
import AddDomainModal from '../components/domains/AddDomainModal';

export const DomainsView = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%', maxWidth: '100%' }}>

            {/* Section Header */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <h2 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>
                        โดเมน
                    </h2>
                    <p style={{ fontSize: '14px', color: 'var(--text-tertiary)', margin: 0 }}>
                        โดเมนใช้สำหรับเข้าถึงระบบและลิงก์ที่สร้างจากแคมเปญของคุณ เช่น ลิงก์ติดตามผล หรือหน้า Landing Page
                    </p>
                </div>

                <button
                    onClick={() => setIsAddModalOpen(true)}
                    className="action-btn-primary"
                >
                    <Plus size={20} />
                    <span>สร้างโดเมนใหม่</span>
                </button>
            </div>

            {/* Add Domain Modal */}
            <AddDomainModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
            />

            {/* Main Domain Data Table Container */}
            <DomainTable />

        </div>
    );
};

export default DomainsView;
