import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Package from './pages/Package.jsx';
import SideNavbar from './pages/sideNavbar.jsx';
import TopNavbar from './pages/topNavbar.jsx';
import Dashboard from './pages/dashboard.jsx';
import Home from './pages/home/home.jsx';



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
