import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import CustomTagsTable from '../components/tags/CustomTagsTable';
import TagModal from '../components/tags/TagModal';
import DeleteModal from '../components/common/DeleteModal';

const CustomTagsView = () => {
    const [isTagModalOpen, setIsTagModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState('add');
    const [selectedTag, setSelectedTag] = useState(null);

    const handleAddClick = () => {
        setModalMode('add');
        setSelectedTag(null);
        setIsTagModalOpen(true);
    };

    const handleEditClick = (tag) => {
        setModalMode('edit');
        setSelectedTag(tag);
        setIsTagModalOpen(true);
    };

    const handleDeleteClick = (tag) => {
        setSelectedTag(tag);
        setIsDeleteModalOpen(true);
    };

    const handleSaveTag = () => {
        console.log('Saving tag:', selectedTag, 'mode:', modalMode);
        setIsTagModalOpen(false);
    };

    const handleConfirmDelete = () => {
        console.log('Deleting tag:', selectedTag);
        setIsDeleteModalOpen(false);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

            {/* Header Section */}
            <div className="header-section" style={{ marginBottom: '8px' }}>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                        <h2 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)' }}>แท็กกำหนดเอง</h2>
                        <span className="text-sm text-secondary">จัดการและตั้งค่าแท็กสำหรับติดตามแคมเปญ</span>
                    </div>
                    <button 
                        onClick={handleAddClick}
                        className="action-btn-primary" 
                    >
                        <Plus size={20} />
                        <span>เพิ่มแท็กใหม่</span>
                    </button>
                </div>
            </div>

            {/* Content Section (Table wrapped in cards matching new design) */}
            <div className="card" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <CustomTagsTable 
                    onEdit={handleEditClick}
                    onDelete={handleDeleteClick}
                />
            </div>

            <TagModal 
                isOpen={isTagModalOpen}
                onClose={() => setIsTagModalOpen(false)}
                mode={modalMode}
                initialData={selectedTag}
                onSave={handleSaveTag}
            />

            <DeleteModal 
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={handleConfirmDelete}
                title="ลบแท็กนี้?"
                description="คุณแน่ใจหรือไม่ว่าต้องการลบแท็กนี้? การดำเนินการนี้ไม่สามารถย้อนกลับได้"
                confirmText="ลบแท็ก"
            />
        </div>
    );
};

export default CustomTagsView;
