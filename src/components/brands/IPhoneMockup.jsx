import React from 'react';
import './IPhoneMockup.css';

const IPhoneMockup = ({ primaryColor = '#2f90fb', title = 'แคมเปญของคุณ', message = 'โปรโมชันพิเศษ! สำหรับสมาชิกใหม่ รับส่วนลด 50% ทุกรายการ' }) => {
  return (
    <div className="iphone-mockup-wrapper">
      <div className="iphone-mockup-frame">
        {/* Top Notch Area */}
        <div className="iphone-notch"></div>
        <div className="iphone-speaker"></div>
        <div className="iphone-camera"></div>

        {/* Screen Content */}
        <div className="iphone-screen">
          
          <div className="mockup-ui-header" style={{ backgroundColor: primaryColor }}>
             <span>{title || 'แคมเปญของคุณ'}</span>
          </div>

          <div className="mockup-ui-body">
             <div className="mockup-ui-bubble" style={{ backgroundColor: primaryColor + '20', color: 'var(--text-primary)' }}>
                {message || 'พิมพ์คำอธิบายแบรนด์เพื่อดูตัวอย่าง ข้อความอาจถูกตัดให้สั้นลง'}
             </div>
             <div className="mockup-ui-btn" style={{ backgroundColor: primaryColor }}>
                ดูเพิ่มเติม
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default IPhoneMockup;
