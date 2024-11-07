import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Header  from './components/header/header.jsx'
import Home  from './pages/home/home.jsx'
import Footer  from './components/footer/footer.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Home />
    <Footer />
    </StrictMode>,
)
