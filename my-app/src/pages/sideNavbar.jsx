import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
// Import your CSS file for styling



const Sidebar = () => {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            {/* Sidebar - Brand */}
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/dashboard">
                <div className="sidebar-brand-icon">
                    <img src="https://onemind.ollato.com/public/images/small.png" alt="logo" width="60" height="60" />
                </div>
            </Link>

            {/* Divider */}
            <hr className="sidebar-divider" />

            {/* Nav Item - Dashboard */}
            <li className="nav-item active">
                <Link className="nav-link" to="/dashboard">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span className="text-center">Dashboard</span><br />
                    <span>Ashish Vishwakarma.</span>
                </Link>
            </li>

            {/* Divider */}
            <hr className="sidebar-divider" />

            <div className="sideNavBox">
                {/* Nav Items */}
                <li className="nav-item active">
                    <Link className="nav-link" to="/package">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Packages</span>
                    </Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/language">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Assessment</span>
                    </Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/summary">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Download Summary</span>
                    </Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/report-session">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Report</span>
                    </Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/book-session">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Book Session</span>
                    </Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/session-management">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Session Management</span>
                    </Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/virtualcounselling">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>My Activity</span>
                    </Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/settings">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Settings</span>
                    </Link>
                </li>
            </div>

            {/* Divider */}
            <hr className="sidebar-divider" />

            {/* Logout section */}
            <div className="sidebar-card d-none d-lg-flex">
                <Link className="btn btn-danger btn-sm" to="#" data-toggle="modal" data-target="#logoutModal">
                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i> Logout
                </Link>
            </div>

            {/* Sidebar Toggler (Sidebar) */}
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>
        </ul>
    );
};

export default Sidebar;