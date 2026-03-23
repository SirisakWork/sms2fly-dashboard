import React from 'react';
import { FileText, ChevronRight, ArrowRight } from 'lucide-react';

const HelpCategoryCard = ({ title, icon: Icon, iconBgColorHex, iconColor = "#1570ef", items }) => {
    return (
        <div className="help-category-card">
            {/* Header */}
            <div className="hc-header">
                {/* Glass Icon */}
                <div className="hc-icon-wrapper">
                    <div className="hc-icon-bg-rotate">
                        <div className="hc-icon-bg-inner">
                            <div className="hc-icon-bg" style={{ backgroundColor: iconBgColorHex }}></div>
                        </div>
                    </div>
                    <div className="hc-icon-glass">
                        <Icon size={20} color={iconColor} strokeWidth={2} />
                    </div>
                </div>
                {/* Title */}
                <h3 className="hc-title">{title}</h3>
            </div>

            {/* List of items */}
            <div className="hc-items-list">
                {items.map((item, index) => (
                    <div key={index} className="hc-item">
                        <div className="hc-item-left">
                            <FileText size={20} className="hc-item-icon" />
                            <span className="hc-item-text">{item}</span>
                        </div>
                        <ChevronRight size={16} className="hc-item-chevron" />
                    </div>
                ))}
            </div>

            {/* View All Button */}
            <div className="hc-view-all">
                <span className="hc-view-all-text">ดูทั้งหมด</span>
                <ArrowRight size={16} className="hc-view-all-icon" />
            </div>
        </div>
    );
};

export default HelpCategoryCard;
