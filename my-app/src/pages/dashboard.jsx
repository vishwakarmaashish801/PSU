import React from 'react';
import '../styles/sideNavbar.css'

import { Link } from 'react-router-dom';


function Dashboard() {
  return (

    <div className="MainContentDynamic p-3">

    <div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h2>Dashboard</h2>
   </div>

    <div class="card shadow mb-4">
        <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 class="m-0 font-weight-bold text-primary">Student Profile</h6>
        </div>

            <div className="card-body">

            <div className="row">
                <div className="col-md-8 dash-description">
                    <p className="text-dark mt-4 font-weight-bold" style={{ fontSize: '1.1rem' }}>
                        Dear Ashish ,
                    </p>
                    <p className="text-dark fw-normal">
                        Welcome to our Mind Mapping Program for students,
                    </p>
                    <p className="text-dark">
                        Please carefully review the following instructions. Completing this test will require a minimum of one hour of your time. At Ollato, we prioritize your well-being as a fundamental component. Field experts have meticulously crafted our assessment test to offer you a precise evaluation of your strengths and weaknesses status. Upon finishing the test, you will receive a comprehensive 17-page report. Following this, you can schedule a session for expert guidance.
                    </p>
                    <p className="text-dark font-weight-bold" style={{ fontSize: '1.1rem' }}>
                        Wish You All The Best!<br />
                        Team Ollato
                    </p>
                </div>
                <div className="col-md-4">
                    <img className="mt-5 userimage" src="https://onemind.ollato.com/images/profile.jpg" alt="st-profile-img" width={200}/>
                </div>
            </div>

            {/* process */}

            <div className="row">
            <div className="col-md-12 mx-auto p-5">
                <h5 className="font-weight-bold text-primary">PROCESS</h5>
                <div className="process-lavel text-center">
                    <div className="lavel">
                        <Link to="/package"><h5>SELECT <br />PACKAGE</h5></Link>
                    </div>
                    <div className="lavel">
                        <Link to="/package"><h5>Make <br />payment</h5></Link>
                    </div>
                    <div className="lavel">
                        <Link to="/language"><h5>GIVE <br />ASSESSMENT</h5></Link>
                    </div>
                    <div className="lavel">
                        <Link to="#"><h5>DETAILED <br />REPORT</h5></Link>
                    </div>
                    <div className="lavel">
                        <Link to="/book-session"><h5>BOOK <br />COUNSELLING</h5></Link>
                    </div>
                </div>
            </div>
        </div>



        </div>

    </div>
    

   </div>
   
  );
}

export default Dashboard;