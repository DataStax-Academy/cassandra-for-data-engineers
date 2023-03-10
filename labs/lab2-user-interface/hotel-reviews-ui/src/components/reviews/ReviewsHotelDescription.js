import { React, useEffect, useState } from "react"
import axios from 'axios'

const ReviewsHotelDescription = (uid) => {

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
        <section id="description">
            <h2>{!isLoading && hotel.name}</h2>
            <p>Per consequat adolescens ex, cu nibh commune <strong>temporibus vim</strong>, ad sumo viris eloquentiam sed. Mea appareat omittantur eloquentiam ad, nam ei quas oportere democritum. Prima causae admodum id est, ei timeam inimicus sed. Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis, tamquam vulputate pertinacia eum at.</p>
            <p>Cum et probo menandri. Officiis consulatu pro et, ne sea sale invidunt, sed ut sint <strong>blandit</strong> efficiendi. Atomorum explicari eu qui, est enim quaerendum te. Quo harum viris id. Per ne quando dolore evertitur, pro ad cibo commune.</p>
            <div className="row">
                <div className="col-lg-6">
                    <ul className="bullets">
                        <li>Dolorem mediocritatem</li>
                        <li>Mea appareat</li>
                        <li>Prima causae</li>
                        <li>Singulis indoctum</li>
                    </ul>
                </div>
                <div className="col-lg-6">
                    <ul className="bullets">
                        <li>Timeam inimicus</li>
                        <li>Oportere democritum</li>
                        <li>Cetero inermis</li>
                        <li>Pertinacia eum</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ReviewsHotelDescription;