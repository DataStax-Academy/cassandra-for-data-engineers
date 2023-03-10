import {React, useState } from 'react';
// Contexts
import { SelectedLocationContext } from '../contexts/SelectedLocationContext';
import { UserContext } from '../contexts/UserContext';
// Components
import LocationsSlider from '../components/locations/LocationsSlider';
import HotelCardsList from '../components/hotels/HotelCardsList';
import Header from '../components/ui/Header';

/**
 * Home Page
 */
const PageHome = () => {

  /**
   * Selected Location to pick hotel.
   * We also defined the default value at load
   */
  const [selectedLocation, setSelectedLocation] = useState(
    {city:"Vienna", country:"Austria", size: 10}
  );
  
  /**
   * Render homepage with shared location
   */
  return (
     <>
        <Header />
        <SelectedLocationContext.Provider value={{selectedLocation, setSelectedLocation}} >
            <LocationsSlider />
            <HotelCardsList />
        </SelectedLocationContext.Provider>
    </>
  ) 
};

export default PageHome;


