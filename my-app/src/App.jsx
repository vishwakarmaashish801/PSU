import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header/header.jsx";
import Home from "./pages/home/home.jsx";
import Footer from "./components/footer/footer.jsx";
function App() {

  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App
