import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header/header.jsx";
import Home from "./pages/home/home.jsx";
import Footer from "./components/footer/footer.jsx";
import MainContent from './pages/content.jsx';

import NotFound from './pages/NotFound';


function App() {

  return (
    <>
      <Router>

   
    
      

      {/* Define Routes */}
      <Routes>
      
        <Route path="/" element={
           <>
          <Header />
          <Home />
          <Footer />
          </>
          } />

          
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/dashboard" element={<MainContent />} />

         {/* 404 Route */}
         <Route path="*" element={
          <><Header/> <NotFound /> <Footer/> </>} />
      
        </Routes>

   
     </Router>
    </>
  );
}

export default App
