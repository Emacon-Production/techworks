import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import ContactUs from './pages/contact page/ContactUs';
import Home from './pages/home-page/Home';
import Services from './pages/services/Services';
import WhatWeDo from './pages/what-we-do/WhatWeDo';
import Works from './pages/works/Works';
import { useEffect } from 'react';
import SoftwareSolutions from './pages/Software-solutions/SoftwareSolutions';
import CreativeSolutions from './pages/creative-solutions/CreativeSolutions';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/about' element={<WhatWeDo />} />

          <Route path='/services' element={<Services />} />
          <Route path='/services/software-solutions' element={<SoftwareSolutions />} />
          <Route path='/services/creative-solutions' element={<CreativeSolutions />} />

          <Route path='/software-solutions' element={<SoftwareSolutions />} />
          <Route path='/creative-solutions' element={<CreativeSolutions />} />

          <Route path='/works' element={<Works />} />

          <Route path='/contact-us' element={<ContactUs />} />

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
