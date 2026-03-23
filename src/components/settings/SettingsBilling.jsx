import React from 'react';
import { MoreVertical, ArrowUpRight, Link2, MousePointerClick, Building2, DownloadCloud } from 'lucide-react';

const StatusChip = ({ status }) => {
    let style = {};
    if (status === 'paid') {
        style = {
            bg: 'var(--utility-success-50, #ecfdf3)',
            border: 'var(--utility-success-200, #abefc6)',
            color: 'var(--utility-success-700, #067647)',
            dot: '#17b26a',
            label: 'ชำระแล้ว'
        };
    } else {
        style = {
            bg: 'var(--bg-hover)',
            border: 'var(--border)',
            color: '#344054',
            dot: 'var(--text-secondary)',
            label: 'ค้างชำระ'
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

const SettingsBilling = ({ onUpgrade }) => {
    return (
        <div className="settings-section flex flex-col gap-6">
            
            {/* Subscription Plan Card */}
            <div className="card" style={{ padding: '0' }}>
                <div style={{ padding: '24px 24px 20px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0, lineHeight: '28px' }}>แผนการใช้งาน</h3>
                    <button className="icon-btn" style={{ padding: '8px', color: 'var(--text-secondary)' }}>
                        <MoreVertical size={20} />
                    </button>
                </div>
                
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <div className="flex flex-col gap-6">
                        {/* Main Pricing Tier */}
                        <div style={{ border: '1px solid var(--border)', borderRadius: '12px', padding: '24px', boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '24px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <h4 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>แผน Professional</h4>
                                    <span style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-xs)', padding: '2px 8px', borderRadius: '16px', color: 'var(--text-secondary)', fontSize: '12px', fontWeight: 500 }}>
                                        รายเดือน
                                    </span>
                                </div>
                                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: 0 }}>แผนยอดนิยมที่สุดของเราสำหรับทีมขนาดเล็ก</p>
                            </div>
                            
                            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', marginBottom: '24px' }}>
                                <span style={{ fontSize: '30px', fontWeight: 600, color: 'var(--text-primary)', letterSpacing: '-0.02em', paddingBottom: '4px' }}>฿</span>
                                <span style={{ fontSize: '48px', fontWeight: 600, color: 'var(--text-primary)', letterSpacing: '-0.02em', lineHeight: 1 }}>1,999</span>
                                <span style={{ fontSize: '16px', fontWeight: 500, color: 'var(--text-tertiary)', paddingBottom: '6px' }}>/เดือน</span>
                            </div>
                            
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <h5 style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-primary)', margin: 0 }}>เครดิต SMS สิ้นสุดโปรโมชั่นเดือนนี้แล้ว</h5>
                                    <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>80,000/100,000</span>
                                </div>
                                <div style={{ width: '100%', backgroundColor: '#f1f5f9', borderRadius: '9999px', height: '8px', overflow: 'hidden' }}>
                                    <div style={{ backgroundColor: '#1571ef', height: '100%', borderRadius: '9999px', width: '80%' }}></div>
                                </div>
                            </div>

                            <div style={{ marginTop: 'auto', paddingTop: '24px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'flex-end' }}>
                                <button onClick={onUpgrade} style={{ fontSize: '14px', fontWeight: 600, color: '#1571ef', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}>
                                    อัปเกรดแผน
                                    <ArrowUpRight size={16} />
                                </button>
                            </div>
                        </div>

                        {/* Stats Cards */}
                        <div style={{ display: 'flex', flexDirection: 'row', gap: '24px', flexWrap: 'nowrap', overflowX: 'auto' }}>
                            {/* Stat 1 */}
                            <div style={{ flex: 1, minWidth: '200px', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px', boxShadow: 'var(--shadow-sm)', position: 'relative', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: '#1571ef', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <Link2 color="#fff" size={24} />
                                    </div>
                                    <button className="icon-btn" style={{ padding: '4px', color: 'var(--text-secondary)', margin: '-4px -4px 0 0' }}>
                                        <MoreVertical size={20} />
                                    </button>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                    <p style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-secondary)', margin: 0 }}>ลิงก์ที่สร้าง</p>
                                    <p style={{ fontSize: '30px', fontWeight: 600, color: 'var(--text-primary)', margin: 0, lineHeight: 1 }}>1,247</p>
                                </div>
                            </div>
                            {/* Stat 2 */}
                            <div style={{ flex: 1, minWidth: '200px', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px', boxShadow: 'var(--shadow-sm)', position: 'relative', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: '#1571ef', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <MousePointerClick color="#fff" size={24} />
                                    </div>
                                    <button className="icon-btn" style={{ padding: '4px', color: 'var(--text-secondary)', margin: '-4px -4px 0 0' }}>
                                        <MoreVertical size={20} />
                                    </button>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                    <p style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-secondary)', margin: 0 }}>คลิกรวม</p>
                                    <p style={{ fontSize: '30px', fontWeight: 600, color: 'var(--text-primary)', margin: 0, lineHeight: 1 }}>45,678</p>
                                </div>
                            </div>
                            {/* Stat 3 */}
                            <div style={{ flex: 1, minWidth: '200px', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px', boxShadow: 'var(--shadow-sm)', position: 'relative', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: '#1571ef', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <Building2 color="#fff" size={24} />
                                    </div>
                                    <button className="icon-btn" style={{ padding: '4px', color: 'var(--text-secondary)', margin: '-4px -4px 0 0' }}>
                                        <MoreVertical size={20} />
                                    </button>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                    <p style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-secondary)', margin: 0 }}>แบรนด์</p>
                                    <p style={{ fontSize: '30px', fontWeight: 600, color: 'var(--text-primary)', margin: 0, lineHeight: 1 }}>3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Invoices Card */}
            <div className="card" style={{ padding: '0' }}>
                <div style={{ padding: '24px 24px 20px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0, lineHeight: '28px' }}>ใบแจ้งหนี้</h3>
                    <button className="icon-btn" style={{ padding: '8px', color: 'var(--text-secondary)' }}>
                        <MoreVertical size={20} />
                    </button>
                </div>
                
                <div style={{ width: '100%', overflowX: 'auto' }}>
                    <table style={{ minWidth: '800px', width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-secondary)' }}>
                            <tr>
                                <th style={{ padding: '12px 24px', fontSize: '12px', fontWeight: 500, color: 'var(--text-tertiary)' }}>ใบแจ้งหนี้</th>
                                <th style={{ padding: '12px 24px', fontSize: '12px', fontWeight: 500, color: 'var(--text-tertiary)' }}>วันที่ออกบิล</th>
                                <th style={{ padding: '12px 24px', fontSize: '12px', fontWeight: 500, color: 'var(--text-tertiary)' }}>สถานะ</th>
                                <th style={{ padding: '12px 24px', fontSize: '12px', fontWeight: 500, color: 'var(--text-tertiary)' }}>รวม</th>
                                <th style={{ padding: '12px 24px', width: '68px' }}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { id: '007', date: 'Dec 1, 2025', status: 'paid', amount: 'THB 1,999.00' },
                                { id: '006', date: 'Nov 1, 2025', status: 'paid', amount: 'THB 1,999.00' },
                                { id: '005', date: 'Oct 1, 2025', status: 'paid', amount: 'THB 1,999.00' },
                                { id: '004', date: 'Sep 1, 2025', status: 'paid', amount: 'THB 1,999.00' },
                                { id: '003', date: 'Aug 1, 2025', status: 'paid', amount: 'THB 1,999.00' },
                                { id: '002', date: 'Jul 1, 2025', status: 'paid', amount: 'THB 1,999.00' },
                                { id: '001', date: 'Jun 1, 2025', status: 'paid', amount: 'THB 1,999.00' }
                            ].map((invoice, index) => (
                                <tr key={index} style={{ borderBottom: index === 6 ? 'none' : '1px solid var(--border-secondary)' }}>
                                    <td style={{ padding: '16px 24px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '0.75px solid rgba(0,0,0,0.1)', backgroundColor: 'var(--bg-hover)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7 18H17M7 14H17M7 10H13M6 22H18C19.1046 22 20 21.1046 20 20V8L14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22Z" stroke="#475467" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </div>
                                            <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-primary)' }}>Invoice #{invoice.id} – {invoice.date.split(' ')[0]} {invoice.date.split(' ')[2]}</span>
                                        </div>
                                    </td>
                                    <td style={{ padding: '16px 24px', fontSize: '14px', color: 'var(--text-tertiary)' }}>{invoice.date}</td>
                                    <td style={{ padding: '16px 24px' }}>
                                        <StatusChip status={invoice.status} />
                                    </td>
                                    <td style={{ padding: '16px 24px', fontSize: '14px', color: 'var(--text-tertiary)' }}>{invoice.amount}</td>
                                    <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                                        <button className="icon-btn" style={{ padding: '8px', color: '#1571ef' }}>
                                            <DownloadCloud size={20} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default SettingsBilling;
