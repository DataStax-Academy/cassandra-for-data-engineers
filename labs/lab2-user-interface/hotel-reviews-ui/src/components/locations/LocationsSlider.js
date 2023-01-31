import { React, useEffect, useState } from "react"
import axios from 'axios'
import LocationBanner from "./LocationBanner"
import LocationCard from "./LocationCard"

/**
 * Render top part of home screen with:
 *  - slider of cards
 *  - banner on selected card
 */
const SliderLocations = () => {

    /**
     * Hook to store locations coming from DB
     */
    const [locations, setLocations] = useState(null)

    /**
     * DB access to populate the state
     */
    const fetchLocations = async () => {
        const resLocations = await axios.get('/.netlify/functions/getLocations')
        setLocations(resLocations.data)
    }

    /**
     * Look for location at initialization and will not change
     */
    useEffect(() => {
        fetchLocations()
    }, [])

    /**
     * Render top page
     */
    return (
        <section className="slider">
            <div id="slider" className="flexslider">
                <ul className="slides">
                    {locations && locations.map((location, index) => <LocationBanner key={index} location={location}/>)}
                </ul>
            </div>
            <div id="carousel_slider_wp">
                <div id="carousel_slider" className="flexslider">
                  <div className="flex-viewport" style={{overflow: "hidden", position: "relative"}}>
                    <ul className="slides"  style={{width: "1000%",transitionDuration: "0s",transform: "translate3d(0px, 0px, 0px)"}} >
                        {locations && locations.map((location, index) => <LocationCard key={index} location={location} />)}
                    </ul>
                  </div>
                    
                </div>
                
            </div>
        </section>
    )
}

export default SliderLocations;