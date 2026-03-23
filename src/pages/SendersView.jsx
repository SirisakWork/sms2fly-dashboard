import React, { useState } from 'react';
import './SendersView.css';
import { Bell, Search, ChevronDown, Plus, Sun } from 'lucide-react';
import SendersTable from '../components/senders/SendersTable';
import AddSenderModal from '../components/senders/AddSenderModal';
import DeleteModal from '../components/common/DeleteModal';

const SendersView = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [senderToDelete, setSenderToDelete] = useState(null);

    const handleDeleteClick = (sender) => {
        setSenderToDelete(sender);
        setIsDeleteModalOpen(true);
    };

    const handleConfirmDelete = () => {
        console.log('Confirmed delete for:', senderToDelete);
        setIsDeleteModalOpen(false);
        setSenderToDelete(null);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)' }}>จัดการผู้ส่ง</h3>
                    <p style={{ fontSize: '14px', color: 'var(--text-tertiary)', margin: 0 }}>จัดการข้อมูลผู้ส่งของ แบรนด์หลัก</p>
                </div>
                
                <button 
                    onClick={() => setIsAddModalOpen(true)}
                    className="action-btn-primary" 
                    style={{ padding: '10px 14px', borderRadius: '12px', gap: '4px' }}
                >
                    <Plus size={20} color="white" />
                    <span style={{ fontSize: '14px', fontWeight: 600 }}>เพิ่มผู้ส่งใหม่</span>
                </button>
            </div>

            {/* Senders Table Content */}
            <SendersTable 
                onEdit={(sender) => console.log('View/Edit', sender)}
                onDelete={handleDeleteClick}
            />

            {/* Modals */}
            <AddSenderModal 
                isOpen={isAddModalOpen} 
                onClose={() => setIsAddModalOpen(false)} 
            />

            <DeleteModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={handleConfirmDelete}
                title="ลบผู้ส่ง?"
                description={`คุณแน่ใจหรือไม่ว่าต้องการลบผู้ส่ง "${senderToDelete?.name || ''}"? การดำเนินการนี้ไม่สามารถย้อนกลับได้`}
            />
        </div>
    );
};

export default SendersView;
