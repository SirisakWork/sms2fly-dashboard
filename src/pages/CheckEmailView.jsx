import React from 'react';
import { Mail, ArrowLeft } from 'lucide-react';

const CheckEmailView = ({ onNavigate }) => {
  return (
    <div className="auth-view check-email-view" style={{ textAlign: 'center' }}>
      <div className="auth-icon-container">
        <div className="auth-icon-circle">
          <Mail size={28} />
        </div>
      </div>
      <div className="auth-header-text">
        <h2>ตรวจสอบอีเมลของคุณ</h2>
        <p>เราได้ส่งลิงก์สำหรับรีเซ็ตรหัสผ่านไปให้คุณแล้ว<br/>กรุณาตรวจสอบกล่องข้อความของคุณ</p>
      </div>

      <div className="auth-form" style={{ marginTop: '32px' }}>
        <button 
          className="auth-btn primary-btn btn-full"
          onClick={() => {
            // mock open email app
            window.open('mailto:', '_blank');
          }}
        >
          เปิดแอปอีเมล
        </button>

        <button 
          className="auth-btn secondary-btn btn-full"
          onClick={() => onNavigate('set-new-password')}
        >
          ข้าม (ฉันจะยืนยันภายหลัง)
        </button>

        <a href="#" className="auth-back-link" onClick={(e) => { e.preventDefault(); onNavigate('login'); }}>
          <ArrowLeft size={16} /> กลับไปหน้าเข้าสู่ระบบ
        </a>
      </div>
    </div>
  );
};

export default CheckEmailView;
