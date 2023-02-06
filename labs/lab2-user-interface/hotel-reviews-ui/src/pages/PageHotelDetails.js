import { React, useEffect, useState, useContext } from "react"
import axios from 'axios'

import ReviewsBanner from "../components/reviews/ReviewsBanner";
import ReviewsHotelDescription from "../components/reviews/ReviewsHotelDescription";
import ReviewsSummary from "../components/reviews/ReviewsSummary";
import ReviewsCardList from "../components/reviews/ReviewsCardList";
import ReviewCreateForm from "../components/reviews/ReviewCreateForm";

import { ReviewsContext } from "../contexts/ReviewsContext";
import { UserContext } from "../contexts/UserContext";

import Header from "../components/ui/Header";

/**
 * Details for an Hotels
 */
const PageHotelDetails = () => {

  const {authenticatedUser, setAuthenticatedUser} = useContext(UserContext);
  const [hotelReviews, setHotelReviews] = useState(null)

  const queryParameters = new URLSearchParams(window.location.search)
  const uid = queryParameters.get("uid")
  
  /**
    * Populating Hotel list from DB
   **/
  const fetchHotelsInformation = async () => {
    const reviews = await axios.get('/.netlify/functions/getHotelReviews?uid=' + uid);
    setHotelReviews(reviews.data)
  }

  /**
     * Load Hotel list on initialization and update of the context.
     */
  useEffect(() => {
    fetchHotelsInformation()
  }, [])

  return (
    <>
      <Header />
      <ReviewsBanner uid={uid} />

      <div className="bg_color_1">
        <nav className="secondary_nav sticky_horizontal">
          <div className="container">
            <ul className="clearfix">
              <li><a href="#description" className="active">Description</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#booking">Booking</a></li>
            </ul>
          </div>
        </nav>

        <div className="container margin_60_35">
				<div className="row">
					<div className="col-lg-8">
            <ReviewsHotelDescription uid={uid} />
            <ReviewsContext.Provider value={{hotelReviews, setHotelReviews}} >
              <section id="reviews">
                <h2>Reviews</h2>
                <ReviewsSummary />
                <ReviewsCardList />
                {authenticatedUser && <ReviewCreateForm uid={uid}/>}
                {!authenticatedUser && <div><p style={{color:'blue'}}>Please authenticate to add reviews</p></div>}
              </section>
            </ReviewsContext.Provider>
          </div>
          </div>
          </div>
      </div>
      </>
  ) 
};

export default PageHotelDetails;
