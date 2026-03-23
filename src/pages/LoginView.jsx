import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';

const LoginView = ({ onLogin, onNavigate }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login attempt, trigger modal in App
    onLogin();
  };

  return (
    <div className="auth-view login-view">
      <div className="auth-header-text">
        <h2>เข้าสู่ระบบ</h2>
        <p>ยินดีต้อนรับกลับมา! โปรดเข้าสู่ระบบบัญชีของคุณ</p>
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

        <div className="form-group">
          <label>รหัสผ่าน</label>
          <div className="input-with-icon">
            <Lock className="input-icon" size={20} />
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button 
              type="button" 
              className="toggle-password" 
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <div className="form-actions-row">
          <label className="checkbox-label">
            <input type="checkbox" />
            <span>จำฉันไว้</span>
          </label>
          <a href="#" className="forgot-link" onClick={(e) => { e.preventDefault(); onNavigate('forget-password'); }}>
            ลืมรหัสผ่าน?
          </a>
        </div>

        <button type="submit" className="auth-btn primary-btn btn-full">
          เข้าสู่ระบบ
        </button>
      </form>
    </div>
  );
};

export default LoginView;
