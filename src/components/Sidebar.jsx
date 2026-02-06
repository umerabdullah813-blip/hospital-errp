import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    Users,
    Calendar,
    CreditCard,
    UserSquare2,
    Activity,
    FileText,
    Settings,
    HelpCircle,
    LogOut,
    Stethoscope,
    Pill,
    FlaskConical,
    Microscope,
    ShieldCheck,
    BarChart3,
    Briefcase,
    Layers,
    LayoutGrid,
    MessageSquare,
    PieChart,
    Shapes
} from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
    const mainNav = [
        { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/' },
        { name: 'Patients', icon: <Users size={20} />, path: '/patients' },
        { name: 'Appointments', icon: <Calendar size={20} />, path: '/appointment' },
        { name: 'Doctors', icon: <Stethoscope size={20} />, path: '/doctors' },
        { name: 'Departments', icon: <Shapes size={20} />, path: '/departments' },
        { name: 'Pharmacy', icon: <Pill size={20} />, path: '/pharmacy' },
        { name: 'Reports', icon: <PieChart size={20} />, path: '/reports' },
        { name: 'Settings', icon: <Settings size={20} />, path: '/settings' },
    ];

    const modulesNav = [
        { name: 'OPD/IPD', icon: <Stethoscope size={20} />, path: '/opd-ipd' },
        { name: 'Pharmacy', icon: <Pill size={20} />, path: '/pharmacy' },
        { name: 'Laboratory', icon: <FlaskConical size={20} />, path: '/lab' },
        { name: 'Radiology', icon: <Microscope size={20} />, path: '/radiology' },
        { name: 'Clinical EMR', icon: <FileText size={20} />, path: '/emr' },
        { name: 'Inventory', icon: <Layers size={20} />, path: '/inventory' },
        { name: 'Accounting', icon: <Briefcase size={20} />, path: '/accounting' },
        { name: 'Analytics', icon: <BarChart3 size={20} />, path: '/analytics' },
        { name: 'Compliance', icon: <ShieldCheck size={20} />, path: '/compliance' },
    ];

    return (
        <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="sidebar-logo">
                <div style={{ background: 'var(--accent-cyan)', borderRadius: '8px', padding: '6px', display: 'flex', boxShadow: '0 0 15px rgba(45, 212, 191, 0.4)' }}>
                    <Activity color="#000" size={20} />
                </div>
                <span>MediCore</span>
            </div>

            <nav className="nav-section">
                <div className="nav-group">
                    <p className="nav-label">Main Menu</p>
                    {mainNav.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                            onClick={onClose}
                        >
                            <i>{item.icon}</i>
                            <span>{item.name}</span>
                        </NavLink>
                    ))}
                </div>

                <div className="nav-group">
                    <p className="nav-label">ERP Modules</p>
                    {modulesNav.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                            onClick={onClose}
                        >
                            <i>{item.icon}</i>
                            <span>{item.name}</span>
                        </NavLink>
                    ))}
                </div>
            </nav>

            <div className="sidebar-footer" style={{ border: 'none', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', padding: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(45, 212, 191, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ color: 'var(--accent-cyan)', fontWeight: '700' }}>DR</span>
                    </div>
                    <div>
                        <div style={{ fontSize: '13px', fontWeight: '600', color: '#fff' }}>Dr. Rebecca ...</div>
                        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Chief Physician</div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
