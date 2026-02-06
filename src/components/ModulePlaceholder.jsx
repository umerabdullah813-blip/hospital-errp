import React from 'react';
import { Construction } from 'lucide-react';

const ModulePlaceholder = ({ title }) => {
    return (
        <div className="module-placeholder" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '80vh',
            textAlign: 'center',
            color: 'var(--text-secondary)'
        }}>
            <Construction size={100} color="var(--primary-color)" strokeWidth={1} />
            <h1 style={{ marginTop: '24px', color: 'var(--sidebar-bg)' }}>{title} Module</h1>
            <p style={{ maxWidth: '400px', marginTop: '12px' }}>
                We are currently setting up the {title} module. This section will include all the features requested in your 17-point list.
            </p>
            <button className="btn-primary" style={{ marginTop: '32px' }} onClick={() => window.history.back()}>
                Go Back
            </button>
        </div>
    );
};

export default ModulePlaceholder;
