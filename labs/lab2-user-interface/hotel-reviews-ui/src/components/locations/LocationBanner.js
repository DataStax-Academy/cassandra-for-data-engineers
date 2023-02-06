import React from "react"

/**
 * Render the banner (big image) when you select a Card.
 */
const LocationBanner = ({ location }) => {
    
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
                <p>{location.hotel_count} hotel(s) in {location.city}</p>
                </div>
            </div>
        </li>
    )
}

export default LocationBanner