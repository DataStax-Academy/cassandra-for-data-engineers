import React, { useContext } from "react"

import { SelectedLocationContext } from '../../contexts/SelectedLocationContext';

/**
 * Render the banner (big image) when you select a Card.
 */
const LocationBanner = ({ location }) => {
    
    /**
     * Accessing Shared context
     */
    const {setSelectedLocation} = useContext(SelectedLocationContext);
 
    /**
     * Updating the shared context for bottom page to refresh
     */
    const updateSeletedLocation = () => {
        setSelectedLocation(location);
        console.log('Location updated with: ' + location.city);
    }

    /**
     * Easier to read and edit on its variable
     */
    const liStyle = {
        width: "100%",
        float: "left",
        marginRight: "-100%",
        position: "relative",
        opacity: "1",
        display: "block",
        zIndex: "2"
    }

    /**
     * Render banner for 1 location
     */
    return (
        <li style={liStyle} > 
            <img src={"img/home/" + location.city + "_big.jpeg"} alt=""/>
            <div className="meta">
                <h3>{location.city} {location.pitch}</h3>
                <div className="info">
                    <p>{location.hotel_count} hotel(s) </p>
                </div>
                <a onClick={updateSeletedLocation} className="btn_1">Show Hotels in {location.city}</a>
            </div>
        </li>
    )
}

export default LocationBanner