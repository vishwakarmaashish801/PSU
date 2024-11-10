import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


// Import your CSS file for styling
import { LuLayoutDashboard } from "react-icons/lu";
import { TbPackages } from "react-icons/tb";
import { MdAssessment } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";
import { SiSession } from "react-icons/si";
import { LuActivitySquare } from "react-icons/lu";
import { MdLibraryBooks } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";



const topNavbar = () => {
    const [user, setUser ] = useState({
        firstName: 'John', // Replace with actual user data
        lastName: 'Doe' // Replace with actual user data
    });


    // State to track visibility
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle visibility
  const toggleParagraph = () => {
    setIsVisible(!isVisible);
  };


    return (
        <nav className="navbar  navbar-light bg-white  mb-4 static-top shadow">
            
            {/* Sidebar Toggle (Topbar) */}
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3" onClick={toggleParagraph}>
                <i className="fa fa-bars" ></i>
              
                
            </button>

            {isVisible && (
       
       <ul className="mobileview" id="accordionSidebar">
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
         
       
      )}
            {/* Topbar Search */}
            {/* Uncomment if needed */}
            {/* <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div className="input-group">
                    <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                        aria-label="Search" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                            <i className="fas fa-search fa-sm"></i>
                        </button>
                    </div>
                </div>
            </form> */}

            {/* Topbar Navbar */}
            <ul className="navbar-nav ml-auto">

                {/* Nav Item - Search Dropdown (Visible Only XS) */}
                <li className="nav-item dropdown no-arrow d-sm-none">
                    <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-search fa-fw"></i>
                    </a>
                    {/* Dropdown - Search */}
                    <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                        aria-labelledby="searchDropdown">
                        <form className="form-inline mr-auto w-100 navbar-search">
                            <div className="input-group">
                                <input type="text" className="form-control bg-light border-0 small"
                                    placeholder="Search for..." aria-label="Search"
                                    aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button">
                                        <i className="fas fa-search fa-sm"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </li>

                {/* Nav Item - Alerts */}
                <li className="nav-item dropdown no-arrow mx-1">
                    {/* Alert Notification */}
                </li>

                {/* Nav Item - Messages */}
                <li className="nav-item dropdown no-arrow mx-1">
                    {/* Message Notification */}
                </li>

                <div className="topbar-divider d-none d-sm-block"></div>

                {/* Nav Item - User Information */}
                <li className="nav-item dropdown no-arrow">
                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">{user.firstName} {user.lastName}</span>
                        <img className="img-profile rounded-circle" src="../public/images/user_profile.svg" alt="User  Profile" />
                    </a>
                    {/* Dropdown - User Information */}
                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="userDropdown">
                        <Link className="dropdown-item" to="#">
                            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                            Profile
                        </Link>
                        <Link className="dropdown-item" to="#">
                            <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                            Settings
                        </Link>
                        <Link className="dropdown-item" to="#">
                            <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                            Activity Log
                        </Link>
                        <Link className="dropdown-item" to="/forgot-password">
                            <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                            Forgot Password
                        </Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to="#" data-toggle="modal" data-target="#logoutModal">
                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                            Logout
                        </Link>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default topNavbar;