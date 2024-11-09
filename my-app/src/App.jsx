import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Package from './pages/Package.jsx';
import SideNavbar from './pages/sideNavbar.jsx';
import TopNavbar from './pages/topNavbar.jsx';
import Dashboard from './pages/dashboard.jsx';
import Home from './pages/home/home.jsx';
import BasicExample from './Login.jsx';



function App() {

  return (
    <>
      <Router>
      {/* Define Routes */}
       
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

        <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        
        <Route path="/" element={<BasicExample/>} />
        
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/package" element={<Package />} />

      
        
      
        </Routes>

        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        


     </Router>
    
    </>
  );
}

export default App
