import React, { useState } from 'react';
import { Mail, ArrowLeft, KeyRound } from 'lucide-react';

const ForgetPasswordView = ({ onNavigate }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onNavigate('check-email');
  };

  return (
    <div className="auth-view forget-password-view">
      <div className="auth-icon-container">
        <div className="auth-icon-circle">
          <KeyRound size={28} />
        </div>
      </div>
      <div className="auth-header-text">
        <h2>ลืมรหัสผ่าน?</h2>
        <p>ไม่ต้องกังวล เราจะส่งคำแนะนำการรีเซ็ตรหัสผ่านให้คุณ</p>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>อีเมล</label>
          <div className="input-with-icon">
            <Mail className="input-icon" size={20} />
            <input 
              type="email" 
              placeholder="กรอกอีเมลของคุณ" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <button type="submit" className="auth-btn primary-btn btn-full">
          ส่งลิงก์รีเซ็ต
        </button>

        <a href="#" className="auth-back-link" onClick={(e) => { e.preventDefault(); onNavigate('login'); }}>
          <ArrowLeft size={16} /> กลับไปหน้าเข้าสู่ระบบ
        </a>
      </form>
    </div>
  );
};

export default ForgetPasswordView;
