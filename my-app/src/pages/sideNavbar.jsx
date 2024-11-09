import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

// Import your CSS file for styling
import { LuLayoutDashboard } from "react-icons/lu";
import { TbPackages } from "react-icons/tb";
import { MdAssessment } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";
import { SiSession } from "react-icons/si";
import { LuActivitySquare } from "react-icons/lu";
import { MdLibraryBooks } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";



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
                <LuLayoutDashboard />
                     <span className="text-center"> Dashboard</span><br />
                    <span>Ashish Vishwakarma.</span>
                </Link>
            </li>

            {/* Divider */}
            <hr className="sidebar-divider" />

            <div className="sideNavBox">
                {/* Nav Items */}
                <li className="nav-item active">
                    <Link className="nav-link" to="/package">
                    <span><TbPackages /> Packages</span>
                    </Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/language">
                        <span><MdAssessment /> Assessment</span>
                    </Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/summary">
                        <span><IoMdDownload /> Download Summary</span>
                    </Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/report-session">
                       
                        <span> <IoMdDownload /> Report</span>
                    </Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/book-session">
                        <span><SiSession /> Book Session</span>
                    </Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/session-management">
                        <span><MdLibraryBooks /> Session Management</span>
                    </Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/virtualcounselling">         
                        <span><LuActivitySquare /> My Activity</span>
                    </Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/settings">
                        <span><AiOutlineSetting /> Settings</span>
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