import React, { useState } from 'react';
import { Eye, EyeOff, Lock, CheckCircle2 } from 'lucide-react';

const SetNewPasswordView = ({ onNavigate }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password && confirmPassword && password === confirmPassword) {
      setIsSuccess(true);
    } else {
      alert("รหัสผ่านไม่ตรงกัน"); // Basic validation
    }
  };

  if (isSuccess) {
    return (
      <div className="auth-view success-view" style={{ textAlign: 'center' }}>
        <div className="auth-icon-container">
          <div className="auth-icon-circle success">
            <CheckCircle2 size={32} />
          </div>
        </div>
        <div className="auth-header-text">
          <h2>ตั้งรหัสผ่านสำเร็จ</h2>
          <p>รหัสผ่านของคุณถูกเปลี่ยนเรียบร้อยแล้ว<br/>คุณสามารถเข้าสู่ระบบด้วยรหัสผ่านใหม่ได้ทันที</p>
        </div>
        <div className="auth-form" style={{ marginTop: '32px' }}>
          <button 
            className="auth-btn primary-btn btn-full"
            onClick={() => onNavigate('login')}
          >
            ไปที่หน้าเข้าสู่ระบบ
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-view set-new-password-view">
      <div className="auth-header-text">
        <h2>ตั้งรหัสผ่านใหม่</h2>
        <p>รหัสผ่านใหม่ต้องมีความยาวอย่างน้อย 8 ตัวอักษรและไม่ซ้ำกับรหัสผ่านเดิมที่คุณเคยใช้งาน</p>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>รหัสผ่านใหม่</label>
          <div className="input-with-icon">
            <Lock className="input-icon" size={20} />
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
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

        <div className="form-group">
          <label>ยืนยันรหัสผ่านใหม่</label>
          <div className="input-with-icon">
            <Lock className="input-icon" size={20} />
            <input 
              type={showConfirmPassword ? "text" : "password"} 
              placeholder="••••••••" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              minLength={8}
            />
            <button 
              type="button" 
              className="toggle-password" 
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <button type="submit" className="auth-btn primary-btn btn-full" style={{ marginTop: '12px' }}>
          รีเซ็ตรหัสผ่าน
        </button>
      </form>
    </div>
  );
};

export default SetNewPasswordView;
