import {React, useContext} from "react"
import { SelectedLocationContext } from "../../contexts/SelectedLocationContext";

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
     * Render the Card for 1 location
     */
    return (
        <li style={liStyle} onClick={updateSeletedLocation}>
            <img src={'img/home/' + location.city + '.jpeg'} alt="" />
            <div className="caption">
              <h3>{location.city} <span>{location.country}</span></h3>
              <small>{location.hotel_count} hotel(s)</small>
            </div>
        </li>
    )
}

export default SliderLocationCard