import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Package from './pages/Package.jsx';
import SideNavbar from './pages/sideNavbar.jsx';
import TopNavbar from './pages/topNavbar.jsx';
import Dashboard from './pages/dashboard.jsx';
import Home from './pages/home/home.jsx';
import Language from './pages/language.jsx';
import Instruction from './pages/Instruction.jsx';
import Setting from './pages/Setting.jsx';
import Report from './pages/Report.jsx';
import Summary from './pages/Summary.jsx';
import BookSession from './pages/BookSession.jsx';
import SessionManagement from './pages/SessionManagement.jsx';
import Virtualcounselling from './pages/Virtualcounselling.jsx';






function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isRootPath = location.pathname === '/';
 

  return (
    <div id="wrapper">
      {/* Conditionally render SideNavbar if not on root path */}
      {!isRootPath && (
        <div className="sideNavbar-box">
          <SideNavbar />
        </div>
      )}

      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          {/* Conditionally render TopNavbar if not on root path */}
          {!isRootPath && <TopNavbar />}

          <div className="container-fluids">
            {/* Main content area */}
            <div className="row p-2">
              <div className="col-xl-12 col-lg-7">
                <Routes>
                  {/* Define Routes */}
                  <Route path="/" element={<Home/>} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/package" element={<Package />} />
                  <Route path="/language" element={<Language />} />
                  <Route path="/instruction" element={<Instruction/>} />
                  <Route path="/setting" element={<Setting/>} />
                  <Route path="/report-session" element={<Report/>} />
                  <Route path="/summary" element={<Summary/>} />
                  <Route path="/book-session" element={<BookSession/>} />
                  <Route path="/session-management" element={<SessionManagement/>} />
                  <Route path="/virtualcounselling" element={<Virtualcounselling/>} />
               
                  
                 
                </Routes> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
