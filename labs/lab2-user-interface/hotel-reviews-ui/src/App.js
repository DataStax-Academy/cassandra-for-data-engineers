import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import PageHotelDetails from './pages/PageHotelDetails';
import PageHome from './pages/PageHome';
import Header from './components/ui/Header';

/**
 * Main Application
 */
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
         <Route path="/" element={<PageHome />} />
         <Route path="/hotel-details" element={<PageHotelDetails />} />
      </Routes>
    </Router>  
  ) 
};

export default App;


