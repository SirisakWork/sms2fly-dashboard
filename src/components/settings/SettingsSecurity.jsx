import React, { useState } from 'react';
import { MoreVertical, Trash2 } from 'lucide-react';

const Toggle = ({ active, label, onChange }) => (
    <div onClick={onChange} style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '300px', cursor: 'pointer' }}>
        <div style={{
            width: '36px',
            height: '20px',
            backgroundColor: active ? '#1571ef' : '#f8fafc',
            borderRadius: '9999px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            padding: '2px',
            transition: 'background-color var(--transition-normal) var(--ease-framer)',
            border: active ? 'none' : '1px solid var(--border)',
            boxSizing: 'border-box'
        }}>
            <div style={{
                width: '16px',
                height: '16px',
                backgroundColor: 'var(--bg-card)',
                borderRadius: '50%',
                boxShadow: '0 1px 3px rgba(16,24,40,0.1)',
                transform: `translateX(${active ? '16px' : '0px'})`,
                transition: 'transform var(--transition-normal) var(--ease-framer)'
            }} />
        </div>
        <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-primary)' }}>
            {label}
        </span>
    </div>
);

const StatusChip = ({ status }) => {
    let style = {};
    if (status === 'active') {
        style = {
            bg: 'var(--utility-success-50, #ecfdf3)',
            border: 'var(--utility-success-200, #abefc6)',
            color: 'var(--utility-success-700, #067647)',
            dot: '#17b26a',
            label: 'ใช้งาน'
        };
    } else {
        style = {
            bg: 'var(--bg-hover)',
            border: 'var(--border)',
            color: '#344054',
            dot: 'var(--text-secondary)',
            label: 'ปิดใช้งาน'
        };
    }

    return (
        <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '2px 8px 2px 6px',
            borderRadius: '6px',
            backgroundColor: style.bg,
            border: `1px solid ${style.border}`,
            whiteSpace: 'nowrap'
        }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: style.dot }} />
            <span style={{ fontSize: '12px', fontWeight: 500, color: style.color }}>{style.label}</span>
        </div>
    );
};

const SettingsSecurity = () => {
    const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

    return (
        <div className="settings-section flex flex-col gap-6">
            
            {/* 2FA Card */}
            <div className="card">
                <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900">ความปลอดภัย</h3>
                    <button className="text-gray-400 hover:text-gray-500">
                        <MoreVertical size={20} />
                    </button>
                </div>
                
                <div className="p-6">
                    <div className="flex flex-wrap items-center gap-x-16 gap-y-4 w-full">
                        <div className="flex-1 min-w-[200px] flex flex-col">
                            <h4 className="text-sm font-semibold text-gray-700 mb-0.5">Two-Factor Authentication (2FA)</h4>
                            <p className="text-sm text-gray-500">เพิ่มความปลอดภัยด้วยการยืนยันตัวตน 2 ขั้นตอน</p>
                        </div>
                        <div className="w-[300px] shrink-0">
                            <Toggle active={twoFactorEnabled} label={twoFactorEnabled ? "เปิด 2FA แล้ว" : "เปิด 2FA"} onChange={() => setTwoFactorEnabled(!twoFactorEnabled)} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Logged in Devices Card */}
            <div className="card">
                <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900">อุปกรณ์ที่เข้าสู่ระบบ</h3>
                    <button className="text-gray-400 hover:text-gray-500">
                        <MoreVertical size={20} />
                    </button>
                </div>
                
                <div className="overflow-x-auto pt-6">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200 text-xs font-medium text-gray-600">
                                <th className="px-6 py-3 font-medium">อุปกรณ์</th>
                                <th className="px-6 py-3 font-medium">บราวเซอร์และ IP</th>
                                <th className="px-6 py-3 font-medium">สถานะ</th>
                                <th className="px-6 py-3 font-medium w-[68px]"></th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            <tr className="border-b border-gray-200 last:border-0 hover:bg-gray-50/50">
                                <td className="px-6 py-4">
                                    <div className="font-normal text-gray-900">macOS Catalina 10.15</div>
                                    <div className="font-normal text-gray-600">Bangkok, Thailand</div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="font-normal text-gray-900">Chrome 143</div>
                                    <div className="font-normal text-gray-600">43.208.206.209</div>
                                </td>
                                <td className="px-6 py-4">
                                    <StatusChip status="active" />
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <button className="text-gray-400 hover:text-error-600 transition-colors rounded-lg p-2 hover:bg-error-50">
                                        <Trash2 size={20} />
                                    </button>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200 last:border-0 hover:bg-gray-50/50">
                                <td className="px-6 py-4">
                                    <div className="font-normal text-gray-900">iPhone 16</div>
                                    <div className="font-normal text-gray-600">Bangkok, Thailand</div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="font-normal text-gray-900">Safari</div>
                                    <div className="font-normal text-gray-600">43.208.206.208</div>
                                </td>
                                <td className="px-6 py-4">
                                    <StatusChip status="inactive" />
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <button className="text-gray-400 hover:text-error-600 transition-colors rounded-lg p-2 hover:bg-error-50">
                                        <Trash2 size={20} />
                                    </button>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200 last:border-0 hover:bg-gray-50/50">
                                <td className="px-6 py-4">
                                    <div className="font-normal text-gray-900">iPad</div>
                                    <div className="font-normal text-gray-600">Chiang Mai, Thailand</div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="font-normal text-gray-900">Edge 150</div>
                                    <div className="font-normal text-gray-600">43.208.206.207</div>
                                </td>
                                <td className="px-6 py-4">
                                    <StatusChip status="inactive" />
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <button className="text-gray-400 hover:text-error-600 transition-colors rounded-lg p-2 hover:bg-error-50">
                                        <Trash2 size={20} />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default SettingsSecurity;
