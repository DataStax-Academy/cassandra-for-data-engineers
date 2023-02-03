import {React, useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

// Pages
import PageRegister from './pages/PageRegister';
import PageLogin from './pages/PageLogin';
import PageHome from './pages/PageHome';
import PageHotelDetails from './pages/PageHotelDetails';

// Shared Components
import { UserContext } from './contexts/UserContext';

/**
 * Main Application
 */
const App = () => {

  /**
   * Selected Location to pick hotel.
   * We also defined the default value at load
   */
  const [authenticatedUser, setAuthenticatedUser] = useState(null);

  return (
    <UserContext.Provider value={{authenticatedUser, setAuthenticatedUser}} >
      <Router>
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/login" element={<PageLogin />} />
          <Route path="/register" element={<PageRegister />} />
          <Route path="/hotel-details" element={<PageHotelDetails />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>  
    </UserContext.Provider>
  ) 
};

export default App;


