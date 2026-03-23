import React from 'react';
import { MessageCircle, Mail, Phone, Headphones } from 'lucide-react';

const ContactCard = () => {
    return (
        <div className="contact-methods-list">
            {/* Live Chat */}
            <div className="contact-method-item">
                <div className="contact-method-inner">
                    {/* icon glass */}
                    <div className="hc-icon-wrapper">
                        <div className="hc-icon-bg-rotate">
                            <div className="hc-icon-bg-inner">
                                <div className="hc-icon-bg" style={{ backgroundColor: '#1570ef' }}></div>
                            </div>
                        </div>
                        <div className="hc-icon-glass">
                            <MessageCircle size={20} color="#1570ef" strokeWidth={2} />
                        </div>
                    </div>
                    <div className="cm-text-container">
                        <span className="cm-label">Live Chat</span>
                        <span className="cm-value">แชทกับเจ้าหน้าที่</span>
                    </div>
                </div>
            </div>

            {/* Email */}
            <div className="contact-method-item">
                <div className="contact-method-inner">
                    {/* icon glass */}
                    <div className="hc-icon-wrapper">
                        <div className="hc-icon-bg-rotate">
                            <div className="hc-icon-bg-inner">
                                <div className="hc-icon-bg" style={{ backgroundColor: '#7a5af8' }}></div>
                            </div>
                        </div>
                        <div className="hc-icon-glass">
                            <Mail size={20} color="#7a5af8" strokeWidth={2} />
                        </div>
                    </div>
                    <div className="cm-text-container">
                        <span className="cm-label">อีเมลฝ่ายสนับสนุน</span>
                        <span className="cm-value">support@sms2fly.io</span>
                    </div>
                </div>
            </div>

            {/* Phone */}
            <div className="contact-method-item">
                <div className="contact-method-inner">
                    {/* icon glass */}
                    <div className="hc-icon-wrapper">
                        <div className="hc-icon-bg-rotate">
                            <div className="hc-icon-bg-inner">
                                <div className="hc-icon-bg" style={{ backgroundColor: '#17b26a' }}></div>
                            </div>
                        </div>
                        <div className="hc-icon-glass">
                            <Phone size={20} color="#17b26a" strokeWidth={2} />
                        </div>
                    </div>
                    <div className="cm-text-container">
                        <span className="cm-label">โทรศัพท์</span>
                        <span className="cm-value">02-123-4567</span>
                    </div>
                </div>
            </div>

            {/* Button */}
            <button className="action-btn-primary help-contact-btn">
                <Headphones size={20} />
                <span className="help-contact-btn-text">ติดต่อฝ่ายสนับสนุน</span>
            </button>
        </div>
    );
};

export default ContactCard;
