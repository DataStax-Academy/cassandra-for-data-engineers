import React from "react";
import { useEffect, useState } from "react"
import axios from 'axios'

const ReviewsBanner = (uid) => {
    const [hotel, setHotel] = useState(null)
    const [isLoading, setLoading] = useState(true);

    /**
     * Populating Hotel list from DB
    **/
    const fetchHotelsInformation = async () => {
        const details = await axios.get('/.netlify/functions/getHotelDetails?uid=' + uid.uid);
        setHotel(details.data);
        setLoading(false);
    }

    /**
     * Load Hotel list on initialization and update of the context.
     */
    useEffect(() => {
        fetchHotelsInformation()
    }, [])

    return (
        <div>     
            {
                (() => {
                    if(isLoading) {
                            return (
                                <p>Loading</p>
                            )
                        } else {
                            return (
                                <section className="hero_in hotels_detail">
                                    <div className="wrapper">
                                        <div className="container">
                                            <h1 className="fadeInUp"><span></span>{hotel.name}</h1>
                                        </div>
                                    </div>
                                </section>
                            )
                        }
                })()  
            }  
        </div> 
    )
};

export default ReviewsBanner