import React, { useState } from 'react';
import { Plus, Download } from 'lucide-react';
import AudienceGroupsMetrics from '../components/audience-groups/AudienceGroupsMetrics';
import AudienceGroupsTable from '../components/audience-groups/AudienceGroupsTable';
import AudienceGroupModal from '../components/audience-groups/AudienceGroupModal';
import DeleteGroupModal from '../components/audience-groups/DeleteGroupModal';

const AudienceGroupsView = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState('create');
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const openModal = (mode, group = null) => {
        setModalMode(mode);
        setSelectedGroup(group);
        setIsModalOpen(true);
    };

    const handleEditGroup = (group) => {
        openModal('edit', group);
    };

    const handleDeleteClick = (group) => {
        setSelectedGroup(group);
        setIsDeleteModalOpen(true);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%', maxWidth: '100%' }}>
            {/* Header Section */}
            <div className="header-section" style={{ marginBottom: '8px' }}>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                        <h2 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>จัดการกลุ่มลูกค้า</h2>
                        <span className="text-sm text-secondary">จัดการข้อมูลกลุ่มลูกค้าของ แบรนด์หลัก</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                        <button 
                            className="action-btn-outline" 
                            onClick={() => openModal('import')}
                            style={{ display: 'flex', alignItems: 'center', gap: '6px', height: '40px', padding: '0 14px', borderRadius: '12px' }}
                        >
                            <Download size={20} />
                            <span style={{ fontWeight: 600, fontSize: '14px' }}>นำเข้าไฟล์</span>
                        </button>
                        <button 
                            className="action-btn-primary"
                            onClick={() => openModal('create')}
                        >
                            <Plus size={20} />
                            <span>เพิ่มกลุ่มลูกค้าใหม่</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Metrics Section */}
            <AudienceGroupsMetrics />

            {/* Table Section */}
            <AudienceGroupsTable 
                onEdit={handleEditGroup}
                onDelete={handleDeleteClick}
            />

            {/* Modals */}
            <AudienceGroupModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                mode={modalMode} 
                initialData={selectedGroup}
            />

            <DeleteGroupModal 
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                groupName={selectedGroup?.name}
                onConfirm={() => {
                    console.log('Deleted group:', selectedGroup?.name);
                }}
            />
        </div>
    );
};

export default AudienceGroupsView;
