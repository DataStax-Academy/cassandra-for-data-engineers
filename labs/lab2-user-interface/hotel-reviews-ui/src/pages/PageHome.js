import {React, useState} from 'react';
// Contexts
import { SelectedLocationContext } from '../contexts/SelectedLocationContext';
// Components
import LocationsSlider from '../components/locations/LocationsSlider';
import HotelCardsList from '../components/hotels/HotelCardsList';

/**
 * Main Application
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
        <SelectedLocationContext.Provider value={{selectedLocation, setSelectedLocation}} >
            <LocationsSlider />
            <HotelCardsList />
        </SelectedLocationContext.Provider>
    </>
  ) 
};

export default PageHome;


