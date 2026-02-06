import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './views/Dashboard';
import ModulePlaceholder from './components/ModulePlaceholder';
import { Menu, X } from 'lucide-react';
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const routes = [
    { path: '/patients', title: 'Patient Management' },
    { path: '/appointment', title: 'Appointment Booking' },
    { path: '/payments', title: 'Payments & Billing' },
    { path: '/employee', title: 'Staff Management' },
    { path: '/activity', title: 'Recent Activity' },
    { path: '/opd-ipd', title: 'OPD/IPD' },
    { path: '/pharmacy', title: 'Pharmacy & Inventory' },
    { path: '/lab', title: 'Laboratory Management' },
    { path: '/radiology', title: 'Radiology' },
    { path: '/emr', title: 'Clinical EMR' },
    { path: '/inventory', title: 'Inventory Management' },
    { path: '/accounting', title: 'Finance & Accounting' },
    { path: '/analytics', title: 'Reports & Analytics' },
    { path: '/compliance', title: 'Security & Compliance' },
    { path: '/help', title: 'Help & Support' },
    { path: '/settings', title: 'Settings' },
  ];

  return (
    <Router>
      <div className={`app-container ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <button className="mobile-toggle" onClick={toggleSidebar}>
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        {isSidebarOpen && <div className="sidebar-overlay" onClick={() => setIsSidebarOpen(false)}></div>}

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<ModulePlaceholder title={route.title} />}
              />
            ))}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
