import React, { useState } from 'react';
import './App.css';
import './components.css';

// Dashboard Components
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import RightSidebar from './components/RightSidebar';

// Dashboard Views
import DashboardView from './pages/DashboardView';
import AnalysisView from './pages/AnalysisView';
import CampaignAnalysisView from './pages/CampaignAnalysisView';
import BrandsView from './pages/BrandsView';
import CampaignsView from './pages/CampaignsView';
import DomainsView from './pages/DomainsView';
import AudienceView from './pages/AudienceView';
import CustomTagsView from './pages/CustomTagsView';
import AudienceGroupsView from './pages/AudienceGroupsView';
import SettingsView from './pages/SettingsView';
import HelpView from './pages/HelpView';
import SendersView from './pages/SendersView';
import AddBrandView from './pages/AddBrandView';
import AddCampaignView from './pages/AddCampaignView';
import PricingView from './pages/PricingView';
import DocumentationView from './pages/DocumentationView';

// Auth Components & Views
import AuthLayout from './components/AuthLayout';
import LoginView from './pages/LoginView';
import ForgetPasswordView from './pages/ForgetPasswordView';
import CheckEmailView from './pages/CheckEmailView';
import SetNewPasswordView from './pages/SetNewPasswordView';
import SuccessModal from './components/SuccessModal';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [authView, setAuthView] = useState('login'); // login, forget-password, check-email, set-new-password
  const [showLoginSuccess, setShowLoginSuccess] = useState(false);
  
  const [activeTab, setActiveTab] = useState('แดชบอร์ด');
  const [editingBrand, setEditingBrand] = useState(null);
  const [analyzingBrand, setAnalyzingBrand] = useState(null);
  const [editingCampaign, setEditingCampaign] = useState(null);
  const [analyzingCampaign, setAnalyzingCampaign] = useState(null);

  const handleLogin = () => {
    // Show success modal then set authenticated
    setShowLoginSuccess(true);
  };

  const confirmLogin = () => {
    setShowLoginSuccess(false);
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return (
      <>
        <AuthLayout>
          {authView === 'login' && <LoginView onLogin={handleLogin} onNavigate={setAuthView} />}
          {authView === 'forget-password' && <ForgetPasswordView onNavigate={setAuthView} />}
          {authView === 'check-email' && <CheckEmailView onNavigate={setAuthView} />}
          {authView === 'set-new-password' && <SetNewPasswordView onNavigate={setAuthView} />}
        </AuthLayout>
        
        <SuccessModal 
          isOpen={showLoginSuccess} 
          onClose={confirmLogin}
          title="เข้าสู่ระบบสำเร็จ"
          description="ยินดีต้อนรับกลับสู่ระบบเพื่อจัดการแคมเปญของคุณ"
          buttonText="เข้าสู่แดชบอร์ด"
        />
      </>
    );
  }

  return (
    <div className="app-container">
      {/* Left Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} onLogout={() => setIsAuthenticated(false)} />

      {/* Center Main Area */}
      <div className="main-content">
        <TopBar activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="content-wrapper">
          <main className="center-area" style={{ maxWidth: (activeTab === 'วิเคราะห์' || activeTab === 'รายงานแคมเปญ' || activeTab === 'วิเคราะห์แบรนด์' || activeTab === 'แบรนด์' || activeTab === 'เพิ่มแบรนด์' || activeTab === 'แก้ไขแบรนด์' || activeTab === 'แคมเปญ' || activeTab === 'สร้างแคมเปญใหม่' || activeTab === 'แก้ไขแคมเปญ' || activeTab === 'โดเมน' || activeTab === 'ผู้ส่ง' || activeTab === 'ลูกค้า' || activeTab === 'กลุ่มลูกค้า' || activeTab === 'แท็กกำหนดเอง' || activeTab === 'ตั้งค่า' || activeTab === 'ช่วยเหลือ' || activeTab === 'อัปเกรดแผน' || activeTab === 'เอกสารอ้างอิง') ? '100%' : undefined }}>
            <div key={activeTab} className="page-transition-enter w-full h-full">
              {/* Main Content Area Routing */}
              {activeTab === 'แดชบอร์ด' && <DashboardView onAnalyzeCampaign={(campaign) => { setAnalyzingCampaign(campaign); setActiveTab('รายงานแคมเปญ'); }} />}
              {activeTab === 'วิเคราะห์' && <AnalysisView />}
              {activeTab === 'แบรนด์' && <BrandsView onAddBrand={() => setActiveTab('เพิ่มแบรนด์')} onEditBrand={(brand) => { setEditingBrand(brand); setActiveTab('แก้ไขแบรนด์'); }} onAnalyzeBrand={(brand) => { setAnalyzingBrand(brand); setActiveTab('วิเคราะห์แบรนด์'); }} />}
              {activeTab === 'เพิ่มแบรนด์' && <AddBrandView onBack={() => setActiveTab('แบรนด์')} />}
              {activeTab === 'แก้ไขแบรนด์' && <AddBrandView isEdit={true} initialData={editingBrand} onBack={() => setActiveTab('แบรนด์')} />}
              {activeTab === 'แคมเปญ' && <CampaignsView onAddCampaign={() => setActiveTab('สร้างแคมเปญใหม่')} onEditCampaign={(campaign) => { setEditingCampaign(campaign); setActiveTab('แก้ไขแคมเปญ'); }} onAnalyzeCampaign={(campaign) => { setAnalyzingCampaign(campaign); setActiveTab('รายงานแคมเปญ'); }} />}
              {activeTab === 'สร้างแคมเปญใหม่' && <AddCampaignView onBack={() => setActiveTab('แคมเปญ')} />}
              {activeTab === 'แก้ไขแคมเปญ' && <AddCampaignView isEdit={true} initialData={editingCampaign} onBack={() => setActiveTab('แคมเปญ')} />}
              {activeTab === 'รายงานแคมเปญ' && <CampaignAnalysisView campaign={analyzingCampaign} onBack={() => setActiveTab('แคมเปญ')} />}
              {activeTab === 'วิเคราะห์แบรนด์' && <AnalysisView brand={analyzingBrand} onBack={() => setActiveTab('แบรนด์')} />}
              {activeTab === 'โดเมน' && <DomainsView />}
              {activeTab === 'ผู้ส่ง' && <SendersView />}
              {activeTab === 'ลูกค้า' && <AudienceView />}
              {activeTab === 'กลุ่มลูกค้า' && <AudienceGroupsView />}
              {activeTab === 'แท็กกำหนดเอง' && <CustomTagsView />}
              {activeTab === 'ตั้งค่า' && <SettingsView onUpgrade={() => setActiveTab('อัปเกรดแผน')} />}
              {activeTab === 'อัปเกรดแผน' && <PricingView onBack={() => setActiveTab('ตั้งค่า')} />}
              {activeTab === 'ช่วยเหลือ' && <HelpView />}
              {activeTab === 'เอกสารอ้างอิง' && <DocumentationView />}
            </div>
          </main>

          {/* Right Sidebar - Automatically hide on specific full-width views */}
          {(activeTab !== 'วิเคราะห์' && activeTab !== 'รายงานแคมเปญ' && activeTab !== 'วิเคราะห์แบรนด์' && activeTab !== 'แบรนด์' && activeTab !== 'เพิ่มแบรนด์' && activeTab !== 'แก้ไขแบรนด์' && activeTab !== 'แคมเปญ' && activeTab !== 'สร้างแคมเปญใหม่' && activeTab !== 'แก้ไขแคมเปญ' && activeTab !== 'โดเมน' && activeTab !== 'ผู้ส่ง' && activeTab !== 'ลูกค้า' && activeTab !== 'กลุ่มลูกค้า' && activeTab !== 'แท็กกำหนดเอง' && activeTab !== 'ตั้งค่า' && activeTab !== 'ช่วยเหลือ' && activeTab !== 'อัปเกรดแผน' && activeTab !== 'เอกสารอ้างอิง') && (
            <div className="sidebar-right-container">
              <RightSidebar setActiveTab={setActiveTab} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
