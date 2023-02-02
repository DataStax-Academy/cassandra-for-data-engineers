import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

// Pages
import PageRegister from './pages/PageRegister';
import PageLogin from './pages/PageLogin';
import PageHome from './pages/PageHome';
import PageHotelDetails from './pages/PageHotelDetails';

// Shared Components
import Header from './components/ui/Header';

/**
 * Main Application
 */
const App = () => {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<PageHome />} />
         <Route path="/login" element={<PageLogin />} />
         <Route path="/register" element={<PageRegister />} />
         <Route path="/hotel-details" element={<PageHotelDetails />} />
      </Routes>
    </Router>  
  ) 
};

export default App;


