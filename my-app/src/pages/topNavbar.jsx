import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using react-router for navigation

const topNavbar = () => {
    const [user, setUser ] = useState({
        firstName: 'John', // Replace with actual user data
        lastName: 'Doe' // Replace with actual user data
    });

    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <div className="top-heading fw-bolder">
                <h4 style={{ fontSize: '28px' }}>
                    <b>Ollato's Mind Mapping Programme</b>
                </h4>
            </div>

            {/* Sidebar Toggle (Topbar) */}
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
            </button>

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