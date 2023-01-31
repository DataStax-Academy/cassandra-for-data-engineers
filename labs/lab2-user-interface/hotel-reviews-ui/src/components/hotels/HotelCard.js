import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import RatingStars from "../ui/RatingStars"

/**
 * Render one hotel in the hotel list.
 */
const HotelCard = ({ hotel }) => {
 
  /**
   * Accessing thumbnail or default
   */
  const hotel_thumbnail= (hotel.thumbnail === null) ? 'img/home/' + hotel.city + '_big.jpeg' : hotel.thumbnail;
  
  /**
   * Render an hotel
   */
  return (
    <div className="box_list isotope-item popular">
    <div className="row g-0">
        <div className="col-lg-5">
            <figure>
                <small>{hotel.city}</small>
                <Link to={{ pathname: '/hotel-details', search: "?" + new URLSearchParams({uid: hotel.uid}).toString() }}>
                
                    <img src={hotel_thumbnail} className="img-fluid" alt="" width="800" height="533" />
                      <div className="read_more"><span>Read more</span>
                      </div>
                </Link>
            </figure>
        </div>
        <div className="col-lg-7">
            <div className="wrapper">
                <div className="cat_star">
                  <RatingStars rating={hotel.avg_rate}/>
                </div>
                <h3><a href="hotel-detail.html">{hotel.name}</a></h3>
                <p>{hotel.address}</p>
                <span className="price">From <strong>$ {hotel.price}</strong> /per person</span>
            </div>
            <ul>
                <li><i className="ti-eye"></i> {hotel.days_since_review} day(s) since last review</li>
                <li>
                    <div className="score">
                        <span>{hotel.review_count} review(s)</span><strong>{hotel.avg_rate}</strong>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
  )
}

export default HotelCard