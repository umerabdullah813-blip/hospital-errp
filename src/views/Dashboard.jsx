import React from 'react';
import {
    Search,
    Bell,
    Plus,
    TrendingUp,
    TrendingDown,
    Phone,
    Stethoscope,
    Users,
    MoreVertical,
    Calendar,
    ChevronRight,
    FileText,
    Activity
} from 'lucide-react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell
} from 'recharts';

const data = [
    { name: 'Jan', active: 400, recovered: 240 },
    { name: 'Feb', active: 300, recovered: 139 },
    { name: 'Mar', active: 200, recovered: 980 },
    { name: 'Apr', active: 278, recovered: 390 },
    { name: 'May', active: 189, recovered: 480 },
    { name: 'Jun', active: 239, recovered: 380 },
    { name: 'Jul', active: 349, recovered: 430 },
];

const balanceData = [
    { name: 'Spent', value: 400 },
    { name: 'Remaining', value: 300 },
];
const COLORS = ['#2d9f8c', '#e2e8f0'];

const Dashboard = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const handleAddPatient = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <div className="search-bar">
                    <Search size={18} color="var(--text-secondary)" />
                    <input type="text" placeholder="Search anything..." />
                </div>
                <div className="user-actions">
                    <div className="notification-icon">
                        <Bell size={20} color="var(--text-secondary)" />
                        <div className="notification-badge"></div>
                    </div>
                    <div className="user-profile">
                        <div className="profile-info">
                            <div className="profile-dept">Cardiology Dept.</div>
                        </div>
                        <img src="https://ui-avatars.com/api/?name=Dr+Stone&background=2dd4bf&color=000" alt="User" className="avatar" />
                    </div>
                </div>
            </header>

            <section className="greeting">
                <h1>Welcome back, <span className="highlight">Dr. Stone</span></h1>
                <p>Monday, January 5, 2026</p>
            </section>

            <section className="dashboard-grid">
                <div className="stat-card">
                    <div className="stat-card-header">
                        <div className="stat-icon" style={{ background: 'rgba(45, 212, 191, 0.1)', color: 'var(--accent-cyan)' }}>
                            <Users size={20} />
                        </div>
                        <div className="stat-info">
                            <h3>Total Patients</h3>
                            <div className="stat-value">1,284</div>
                        </div>
                    </div>
                    <div className="stat-trend" style={{ color: '#10b981' }}>
                        <TrendingUp size={14} />
                        <span>+12.5%</span>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-card-header">
                        <div className="stat-icon" style={{ background: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent-blue)' }}>
                            <Calendar size={20} />
                        </div>
                        <div className="stat-info">
                            <h3>Appointments Today</h3>
                            <div className="stat-value">48</div>
                        </div>
                    </div>
                    <div className="stat-trend" style={{ color: '#10b981' }}>
                        <TrendingUp size={14} />
                        <span>+8.2%</span>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-card-header">
                        <div className="stat-icon" style={{ background: 'rgba(168, 85, 247, 0.1)', color: '#a855f7' }}>
                            <Stethoscope size={20} />
                        </div>
                        <div className="stat-info">
                            <h3>Available Doctors</h3>
                            <div className="stat-value">32</div>
                        </div>
                    </div>
                    <div className="stat-trend" style={{ color: '#ef4444' }}>
                        <TrendingDown size={14} />
                        <span>-2</span>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-card-header">
                        <div className="stat-icon" style={{ background: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent-blue)' }}>
                            <span style={{ fontWeight: '700' }}>$</span>
                        </div>
                        <div className="stat-info">
                            <h3>Revenue (MTD)</h3>
                            <div className="stat-value">$284K</div>
                        </div>
                    </div>
                    <div className="stat-trend" style={{ color: '#10b981' }}>
                        <TrendingUp size={14} />
                        <span>+18.7%</span>
                    </div>
                </div>
            </section>

            <div className="mid-section">
                <div className="chart-card">
                    <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                        <h2 style={{ fontSize: '18px' }}>Patient statistics</h2>
                        <div className="chart-legend" style={{ display: 'flex', gap: '16px', fontSize: '12px' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#0a4d4a' }}></div> Active</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#2d9f8c' }}></div> Recovered</span>
                        </div>
                    </div>
                    <div style={{ width: '100%', height: '300px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={data}>
                                <defs>
                                    <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="var(--accent-cyan)" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="var(--accent-cyan)" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                                <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: 'var(--card-border)', color: '#fff' }} />
                                <Line type="monotone" dataKey="active" stroke="var(--accent-cyan)" strokeWidth={3} dot={false} activeDot={{ r: 6 }} fill="url(#colorActive)" />
                                <Line type="monotone" dataKey="recovered" stroke="var(--accent-blue)" strokeWidth={3} dot={false} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="quick-actions-card" style={{ background: 'var(--card-bg)', padding: '24px', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--card-border)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                        <h2 style={{ fontSize: '18px', color: '#fff' }}>Quick Actions</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                        <button onClick={handleAddPatient} style={{ background: 'rgba(45, 212, 191, 0.05)', border: '1px solid var(--card-border)', padding: '16px', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '12px', transition: 'all 0.2s' }} className="action-btn">
                            <div style={{ background: 'rgba(45, 212, 191, 0.2)', padding: '8px', borderRadius: '8px' }}>
                                <Users size={20} color="var(--accent-cyan)" />
                            </div>
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ fontSize: '14px', fontWeight: '600', color: '#fff' }}>Add Patient</div>
                                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Register new patient</div>
                            </div>
                        </button>
                        <button style={{ background: 'rgba(16, 185, 129, 0.05)', border: '1px solid var(--card-border)', padding: '16px', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '12px' }} className="action-btn">
                            <div style={{ background: 'rgba(16, 185, 129, 0.2)', padding: '8px', borderRadius: '8px' }}>
                                <Calendar size={20} color="#10b981" />
                            </div>
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ fontSize: '14px', fontWeight: '600', color: '#fff' }}>Schedule</div>
                                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Book appointment</div>
                            </div>
                        </button>
                        <button style={{ background: 'rgba(251, 146, 60, 0.05)', border: '1px solid var(--card-border)', padding: '16px', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '12px' }} className="action-btn">
                            <div style={{ background: 'rgba(251, 146, 60, 0.2)', padding: '8px', borderRadius: '8px' }}>
                                <FileText size={20} color="var(--accent-orange)" />
                            </div>
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ fontSize: '14px', fontWeight: '600', color: '#fff' }}>New Report</div>
                                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Generate reports</div>
                            </div>
                        </button>
                        <button style={{ background: 'rgba(248, 113, 113, 0.05)', border: '1px solid var(--card-border)', padding: '16px', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '12px' }} className="action-btn">
                            <div style={{ background: 'rgba(248, 113, 113, 0.2)', padding: '8px', borderRadius: '8px' }}>
                                <Activity size={20} color="var(--accent-red)" />
                            </div>
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ fontSize: '14px', fontWeight: '600', color: '#fff' }}>Emergency</div>
                                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Alert response</div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <div className="bottom-section" style={{ gridTemplateColumns: '2fr 1fr' }}>
                <div className="recent-patients-card" style={{ background: 'var(--card-bg)', padding: '24px', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--card-border)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                        <div>
                            <h2 style={{ fontSize: '18px', color: '#fff' }}>Recent Patients</h2>
                            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>Manage and monitor patient records</p>
                        </div>
                        <div className="search-bar" style={{ width: '250px', padding: '8px 16px' }}>
                            <Search size={14} color="var(--text-secondary)" />
                            <input type="text" placeholder="Search patients..." style={{ fontSize: '12px' }} />
                        </div>
                    </div>
                    <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 8px' }}>
                        <thead>
                            <tr style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', textAlign: 'left' }}>
                                <th style={{ padding: '12px', fontWeight: '400' }}>PATIENT</th>
                                <th style={{ padding: '12px', fontWeight: '400' }}>CONDITION</th>
                                <th style={{ padding: '12px', fontWeight: '400' }}>STATUS</th>
                                <th style={{ padding: '12px', fontWeight: '400' }}>ROOM</th>
                                <th style={{ padding: '12px', fontWeight: '400' }}>ASSIGNED DOCTOR</th>
                                <th style={{ padding: '12px' }}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { name: 'Sarah Johnson', age: 34, cond: 'Post-Surgery Recovery', status: 'Stable', room: 'A-201', doctor: 'Dr. Michael Chen', color: 'var(--accent-cyan)' },
                                { name: 'James Williams', age: 57, cond: 'Cardiac Monitoring', status: 'Critical', room: 'ICU-05', doctor: 'Dr. Emily Parker', color: 'var(--accent-blue)' },
                                { name: 'Maria Garcia', age: 45, cond: 'Diabetes Management', status: 'Stable', room: 'B-112', doctor: 'Dr. David Lee', color: 'var(--accent-cyan)' },
                            ].map((p, i) => (
                                <tr key={i} style={{ background: 'rgba(255,255,255,0.02)', color: '#fff', fontSize: '13px' }}>
                                    <td style={{ padding: '16px', borderRadius: '12px 0 0 12px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: p.color }}>
                                                {p.name.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <div>
                                                <div style={{ fontWeight: '600' }}>{p.name}</div>
                                                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Age: {p.age}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td style={{ padding: '16px' }}>{p.cond}</td>
                                    <td style={{ padding: '16px' }}>
                                        <span style={{ color: p.status === 'Critical' ? '#ef4444' : 'var(--accent-cyan)', background: p.status === 'Critical' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(45, 212, 191, 0.1)', padding: '4px 10px', borderRadius: '10px', fontSize: '11px' }}>{p.status}</span>
                                    </td>
                                    <td style={{ padding: '16px' }}>{p.room}</td>
                                    <td style={{ padding: '16px' }}>{p.doctor}</td>
                                    <td style={{ padding: '16px', borderRadius: '0 12px 12px 0', textAlign: 'right' }}>
                                        <MoreVertical size={16} color="rgba(255,255,255,0.2)" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="today-appointments-card" style={{ background: 'var(--card-bg)', padding: '24px', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--card-border)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                        <div>
                            <h2 style={{ fontSize: '18px', color: '#fff' }}>Today's Appointments</h2>
                            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>4 scheduled for today</p>
                        </div>
                        <button style={{ fontSize: '12px', color: 'var(--accent-cyan)', background: 'rgba(45, 212, 191, 0.1)', padding: '4px 12px', borderRadius: '8px' }}>View All</button>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {[
                            { name: 'Emma Thompson', type: 'Check-up', time: '09:00 AM', color: 'var(--accent-cyan)' },
                            { name: 'Michael Scott', type: 'Follow-up', time: '10:30 AM', color: 'var(--accent-blue)' },
                            { name: 'Jessica Alba', type: 'Consultation', time: '02:00 PM', color: 'var(--accent-cyan)' },
                            { name: 'David Kim', type: 'Lab Results', time: '03:30 PM', color: 'var(--accent-cyan)' },
                        ].map((appt, i) => (
                            <div key={i} style={{ background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '12px', border: '1px solid var(--card-border)' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: appt.color, fontSize: '12px', fontWeight: '700' }}>
                                    {appt.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontSize: '14px', fontWeight: '600', color: '#fff' }}>{appt.name}</div>
                                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>{appt.type}</div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        <Calendar size={12} /> {appt.time}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Add Patient Modal */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2>Add New Patient</h2>
                            <button className="close-btn" onClick={closeModal}>×</button>
                        </div>
                        <form className="modal-form" onSubmit={(e) => { e.preventDefault(); closeModal(); }}>
                            <div className="form-group">
                                <label>Patient Name</label>
                                <input type="text" placeholder="Enter name" required />
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="tel" placeholder="Enter phone" required />
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Age</label>
                                    <input type="number" placeholder="Age" required />
                                </div>
                                <div className="form-group">
                                    <label>Gender</label>
                                    <select required>
                                        <option value="">Select</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Address</label>
                                <textarea placeholder="Enter address"></textarea>
                            </div>
                            <div className="form-actions">
                                <button type="button" className="btn-cancel" onClick={closeModal}>Cancel</button>
                                <button type="submit" className="btn-submit">Register Patient</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
