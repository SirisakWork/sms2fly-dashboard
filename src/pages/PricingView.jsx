import React from 'react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import './PricingView.css';

const pricingPlans = [
    { title: 'Starter', price: '70', credit: '4,545', rate: '$0.0154', popular: false },
    { title: 'Starter Plus', price: '140', credit: '9,434', rate: '$0.0148', popular: false },
    { title: 'Popular', price: '0.27', credit: '15,000', rate: '$0.0143', popular: true },
    { title: 'Basic', price: '285', credit: '20,833', rate: '$0.0137', popular: false },
    { title: 'Standard', price: '656', credit: '44,444', rate: '$0.0127', popular: false },
    { title: 'Standard Plus', price: '850', credit: '69,767', rate: '$0.0122', popular: false },
    { title: 'Pro', price: '1,135', credit: '100,000', rate: '$0.0114', popular: false },
    { title: 'Pro Plus', price: '1,420', credit: '131,579', rate: '$0.0108', popular: false },
    { title: 'Business', price: '2,125', credit: '214,286', rate: '$0.0099', popular: false },
    { title: 'Business Max', price: '2,835', credit: '303,030', rate: '$0.0094', popular: false },
    { title: 'Enterprise', price: '5,675', credit: '666,667', rate: '$0.0085', popular: false },
    { title: 'Enterprise Plus', price: '8,510', credit: '1,071,429', rate: '$0.0079', popular: false }
];

const PricingCard = ({ plan }) => (
    <div className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
        <div className="pricing-card-header">
            {plan.popular && (
                <div className="popular-badge">
                    <div className="popular-dot"></div>
                    Most popular
                </div>
            )}
            <h3 className="pricing-tier-title">{plan.title}</h3>
            
            <div className="pricing-price-container">
                <span className="pricing-currency">$</span>
                <span className="pricing-amount">{plan.price}</span>
                <span className="pricing-period">USD</span>
            </div>
            <p className="pricing-desc">Valid for 1 Year</p>
        </div>

        <div className="pricing-card-body">
            <ul className="pricing-features">
                <li>
                    <CheckCircle2 size={24} className={plan.popular ? "text-primary" : "text-gray"} />
                    <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{plan.credit} Credit</span>
                </li>
                <li>
                    <CheckCircle2 size={24} className={plan.popular ? "text-primary" : "text-gray"} />
                    <span style={{ color: 'var(--text-secondary)' }}>{plan.rate} Credit / SMS</span>
                </li>
            </ul>
        </div>

        <div className="pricing-card-footer">
            <button className={`action-btn-${plan.popular ? 'primary' : 'outline'} w-full justify-center`}>
                เลือกแพ็กเกจนี้
            </button>
        </div>
    </div>
);

const PricingView = ({ onBack }) => {
    return (
        <div className="view-container pricing-view fade-in">
            {/* Header Section */}
            <div className="header-section" style={{ borderBottom: 'none', paddingBottom: '0' }}>
                <div className="flex items-center gap-3 mb-6">
                    <button onClick={onBack} className="icon-btn" style={{ padding: '8px', border: '1px solid var(--border)', borderRadius: '8px' }}>
                        <ArrowLeft size={16} color="var(--text-secondary)" />
                    </button>
                    <span style={{ fontWeight: 500, fontSize: '14px', color: 'var(--text-secondary)' }}>
                        กลับไปหน้าการตั้งค่า
                    </span>
                </div>

                <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto mb-12">
                    <h1 style={{ fontSize: '36px', fontWeight: 600, color: 'var(--text-primary)', letterSpacing: '-0.02em', marginBottom: '16px' }}>
                        แผนราคาของเรา
                    </h1>
                    <p style={{ fontSize: '18px', color: 'var(--text-secondary)', marginBottom: '32px' }}>
                        เริ่มต้นง่าย เติบโตไปด้วยกัน จ่ายเฉพาะสิ่งที่คุณใช้จริง
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <button className="action-btn-outline" style={{ height: '44px', padding: '0 24px', fontSize: '16px' }}>
                            ติดต่อฝ่ายขาย
                        </button>
                        <button className="action-btn-primary" style={{ height: '44px', padding: '0 24px', fontSize: '16px' }}>
                            ขอใบเสนอราคา
                        </button>
                    </div>
                </div>
            </div>

            {/* Pricing Grid */}
            <div className="pricing-grid">
                {pricingPlans.map((plan, index) => (
                    <PricingCard key={index} plan={plan} />
                ))}
            </div>
        </div>
    );
};

export default PricingView;
