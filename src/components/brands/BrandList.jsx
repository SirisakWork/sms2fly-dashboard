import React, { useState } from 'react';
import { Search } from 'lucide-react';
import BrandCard from './BrandCard';
import DeleteConfirmModal from '../modals/DeleteConfirmModal';

const BrandList = ({ onAddBrand, onEditBrand, onAnalyzeBrand }) => {
    const defaultBrands = [
        {
            title: "แบรนด์หลัก",
            description: "แบรนด์หลักของบริษัท",
            domain: "main.shorturl.com",
            iconType: "building",
            iconBg: "var(--colors-brand-500, #1571ef)",
            iconColor: "#ffffff",
            metrics: { sent: 432, recipients: "2,000" }
        },
        {
            title: "แบรนด์โปรโมชัน",
            description: "สำหรับแคมเปญโปรโมชัน",
            domain: "promotion.shorturl.com",
            iconType: "megaphone",
            iconBg: "var(--colors-success-500, #12b76a)",
            iconColor: "#ffffff",
            metrics: { sent: 189, recipients: "8,934" }
        },
        {
            title: "แบรนด์ทดสอบ",
            description: "สำหรับทดสอบฟีเจอร์ใหม่",
            domain: "test.shorturl.com",
            iconType: "pen",
            iconBg: "var(--colors-warning-400, #fac515)",
            iconColor: "#ffffff",
            metrics: { sent: 67, recipients: "1,234" }
        }
    ];

    const [brands, setBrands] = useState(defaultBrands);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [brandToDelete, setBrandToDelete] = useState(null);

    const handleDeleteClick = (brand) => {
        setBrandToDelete(brand);
        setIsDeleteModalOpen(true);
    };

    const confirmDelete = () => {
        if (brandToDelete) {
            setBrands(brands.filter(b => b.title !== brandToDelete.title));
            setBrandToDelete(null);
        }
    };

    return (
        <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column', marginBottom: '32px' }}>
            {/* Header / Search Bar */}
            <div className="flex items-center justify-between" style={{ padding: '24px' }}>
                <div className="flex flex-col gap-1 flex-1">
                    <h2 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>รายการแบรนด์</h2>
                </div>
                <div style={{ position: 'relative', width: '100%', maxWidth: '320px' }}>
                    <div style={{ position: 'absolute', left: '12px', top: '0', bottom: '0', display: 'flex', alignItems: 'center', pointerEvents: 'none', color: 'var(--text-tertiary)' }}>
                        <Search size={20} />
                    </div>
                    <input
                        type="text"
                        placeholder="ค้นหาแบรนด์"
                        style={{ padding: '8px 16px 8px 40px', width: '100%', boxSizing: 'border-box', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', fontSize: '0.875rem', outline: 'none', color: 'var(--text-primary)' }}
                    />
                </div>
            </div>

            <div className="divider" style={{ margin: 0, background: 'var(--border)' }}></div>

            {/* Grid Content */}
            <div style={{ padding: '24px', display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
                {brands.map((brand, i) => (
                    <BrandCard 
                        key={i} 
                        {...brand} 
                        onDelete={() => handleDeleteClick(brand)} 
                        onEdit={() => onEditBrand && onEditBrand(brand)}
                        onAnalyze={() => onAnalyzeBrand && onAnalyzeBrand(brand)}
                    />
                ))}

                {/* Add New Variant */}
                <BrandCard variant="Add New" onAddBrand={onAddBrand} />
            </div>

            {/* Delete Confirmation Modal */}
            <DeleteConfirmModal 
                isOpen={isDeleteModalOpen}
                onClose={() => {
                    setIsDeleteModalOpen(false);
                    setBrandToDelete(null);
                }}
                itemName={brandToDelete?.title || "แบรนด์"}
                onDelete={confirmDelete}
            />
        </div>
    );
};

export default BrandList;
