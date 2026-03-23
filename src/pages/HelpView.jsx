import React from 'react';
import { Search, Rocket, BarChart2, CreditCard, Shield, Settings, Send } from 'lucide-react';
import HelpCategoryCard from '../components/help/HelpCategoryCard';
import FaqItem from '../components/help/FaqItem';
import ContactCard from '../components/help/ContactCard';
import './HelpView.css';

const HelpView = () => {
    const categories = [
        {
            title: "เริ่มต้นใช้งาน (Getting Started)",
            icon: Rocket,
            iconBgColorHex: "#1570ef",
            iconColor: "#1570ef",
            items: [
                "ขั้นตอนการสมัครสมาชิก",
                "ทำความรู้จักแดชบอร์ด",
                "แนะนำการใช้งาน Workspace",
                "การสร้างแบรนด์แรกของคุณ"
            ]
        },
        {
            title: "แคมเปญ (Campaigns)",
            icon: Send,
            iconBgColorHex: "#f79009",
            iconColor: "#f79009",
            items: [
                "สร้างแบรนด์และแคมเปญใหม่",
                "วิธีการเลือก Sender Name",
                "ตรวจสอบสถิติและการส่งออก",
                "การตั้งเวลาส่งล่วงหน้า"
            ]
        },
        {
            title: "กลุ่มลูกค้า (Audience)",
            icon: BarChart2,
            iconBgColorHex: "#039855",
            iconColor: "#039855",
            items: [
                "วิธีนำเข้ารายชื่อผ่านไฟล์ .CSV",
                "เทคนิคการใส่ Custom Data",
                "การสร้างและกำหนดแท็ก",
                "ตรวจสอบความถูกต้องของเบอร์"
            ]
        },
        {
            title: "การเรียกเก็บเงิน (Billing)",
            icon: CreditCard,
            iconBgColorHex: "#7a5af8",
            iconColor: "#7a5af8",
            items: [
                "เติมเครดิตในระบบอย่างไร",
                "ขั้นตอนการขอใบกำกับภาษี",
                "ตรวจสอบประวัติการซื้อเครดิต",
                "รายละเอียดเครดิตคงเหลือ"
            ]
        },
        {
            title: "ความปลอดภัย (Security)",
            icon: Shield,
            iconBgColorHex: "#d92d20",
            iconColor: "#d92d20",
            items: [
                "การเปิดใช้งาน 2FA",
                "กู้คืนรหัสผ่านและอีเมลฉุกเฉิน",
                "ตรวจสอบอุปกรณ์ที่เข้าสู่ระบบ",
                "จัดการบทบาทและสิทธิ์การใช้งาน"
            ]
        },
        {
            title: "ตั้งค่าระบบ (Settings)",
            icon: Settings,
            iconBgColorHex: "#475467",
            iconColor: "#475467",
            items: [
                "แก้ไขข้อมูลส่วนตัวของบัญชี",
                "จัดการการแจ้งเตือนต่างๆ",
                "ตั้งค่าพฤติกรรมบนแอปพลิเคชัน",
                "เปลี่ยนภาษาบนหน้าจอ"
            ]
        }
    ];

    const faqs = [
        {
            question: "จะเริ่มต้นส่ง SMS ครั้งแรกได้อย่างไร?",
            answer: "คุณสามารถเริ่มต้นได้โดยการสร้างแบรนด์ก่อน จากนั้นไปที่เมนูแคมเปญและกด \"สร้างแคมเปญใหม่\""
        },
        {
            question: "อัตราค่าบริการคิดอย่างไร?",
            answer: "ระบบคิดค่าบริการตามจำนวนเครดิตที่ใช้จริง โดย 1 เครดิตเท่ากับ 1 ข้อความ (ไม่เกิน 160 ตัวอักษรภาษาอังกฤษ หรือ 70 ตัวอักษรภาษาไทย)"
        },
        {
            question: "โดเมนพรีเมียมคืออะไร?",
            answer: "คือโดเมนส่วนตัวที่คุณสามารถนำมาใช้เป็นลิงก์ย่อใน SMS เพื่อเพิ่มความน่าเชื่อถือให้กับแบรนด์ของคุณ"
        }
    ];

    return (
        <div className="help-view-container">
            {/* Header Area */}
            <div className="help-header">
                <div className="help-header-inner">
                    <div className="help-title-container">
                        <h1 className="help-title">คู่มือการใช้งาน</h1>
                        <p className="help-subtitle">ค้นหาคำแนะนำและวิธีการใช้งานฟีเจอร์ต่างๆ ของ SMS2FLY</p>
                    </div>
                    <div className="help-search-container">
                        <div className="search-input-wrapper">
                            <Search className="search-icon" size={20} />
                            <input type="text" placeholder="ค้นหา..." className="search-input" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="help-content-area">
                <div className="help-content-inner">
                    {/* Categories Grid */}
                    <div className="help-categories-grid">
                        {categories.map((category, index) => (
                            <HelpCategoryCard
                                key={index}
                                title={category.title}
                                icon={category.icon}
                                iconBgColorHex={category.iconBgColorHex}
                                iconColor={category.iconColor}
                                items={category.items}
                            />
                        ))}
                    </div>

                    {/* Bottom Section: FAQ & Contact */}
                    <div className="help-bottom-section">
                        {/* FAQ Left */}
                        <div className="help-faq-container">
                            <div className="help-faq-header">
                                <h2 className="help-faq-title">คำถามที่พบบ่อย (FAQ)</h2>
                            </div>
                            <div className="help-faq-list">
                                {faqs.map((faq, index) => (
                                    <FaqItem key={index} question={faq.question} answer={faq.answer} />
                                ))}
                            </div>
                        </div>

                        {/* Contact Right */}
                        <div className="help-contact-sidebar">
                            <div className="contact-card-container">
                                <h2 className="contact-card-title">ติดต่อเรา</h2>
                                <ContactCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpView;
