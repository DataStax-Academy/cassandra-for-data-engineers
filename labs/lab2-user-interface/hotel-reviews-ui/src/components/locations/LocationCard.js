import React from "react"

/**
 * Render a location card
 */
const SliderLocationCard = ({ location }) => {

    /**
     * Easier to read and edit on its variable
     */
    const liStyle = {
        width: "280px",
        marginRight: "25px",
        float: "left",
        display: "block"
    };

    /**
     * Render the Card for 1 location
     */
    return (
        <li style={liStyle} >
            <img src={'img/home/' + location.city + '.jpeg'} alt="" />
            <div className="caption">
              <h3>{location.city} <span>{location.country}</span></h3>
              <small>{location.hotel_count} hotel(s)</small>
            </div>
        </li>
    )
}

export default SliderLocationCard