import React from 'react';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import SideNavbar from './sideNavbar.jsx';
import TopNavbar from './topNavbar.jsx';

import AnotherPage from './AnotherPage.jsx'; // Example of another page component

import NotFound from './NotFound.jsx';
import Dashboard from './dashboard.jsx';



function MainContent() {
  return (

      <div id="wrapper">
        <div className="sideNavbar-box">
          <SideNavbar />
        </div>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <TopNavbar />
            <div className="container-fluid">
              {/* Actual content start */}
              <div className="row">
                <div className="col-xl-12 col-lg-7">
                    <Dashboard/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  );
}

export default MainContent;