import React from 'react';
import { Users, MoreVertical } from 'lucide-react';

const AudienceGroupsMetrics = () => {
    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '24px',
            alignItems: 'center',
            width: '100%',
        }}>
            <div style={{
                backgroundColor: 'var(--bg-card, #FFFFFF)',
                borderRadius: 'var(--radius-2xl, 16px)',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                width: '100%',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-sm)',
                position: 'relative'
            }}>
                <div style={{ position: 'absolute', top: '20px', right: '20px', cursor: 'pointer', color: '#98A2B3' }}>
                    <MoreVertical size={20} />
                </div>

                <p style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-tertiary)', margin: 0 }}>
                    จำนวนกลุ่มทั้งหมด
                </p>

                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '16px', width: '100%' }}>
                    <h3 style={{ fontSize: '36px', fontWeight: 600, color: 'var(--text-primary)', margin: 0, letterSpacing: '-0.02em', lineHeight: '44px', flex: 1 }}>
                        1,150
                    </h3>

                    <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        backgroundColor: '#d0e8ff',
                        color: '#1571ef',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                    }}>
                        <Users size={24} />
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <p style={{ fontSize: '14px', fontWeight: 500, color: '#079455', margin: 0 }}>
                        23.0%
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AudienceGroupsMetrics;
