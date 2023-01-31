import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import RatingStars from "../ui/RatingStars"

/**
 * Render one hotel in the hotel list.
 */
const ReviewCard = ({ review }) => {

    return (
        <div className="review-box clearfix">
            <figure className="rev-thumb" style={{marginTop: '20px'}}>
                <img src="img/avatar.jpg" alt="" />
            </figure>
            <div className="rev-content">
                <div className="rating">
                    {review.reviewer_score}&nbsp; 
                    <RatingStars rating={review.reviewer_score}/>
                </div>
                <div className="rev-info">
                    <ul>
                      <li> Review: {review.review_uid} </li>
                      <li> Nationality: {review.reviewer_nationality} </li>
                      <li> Review_count: {review.reviewer_reviews_count} </li>
                    </ul>
                </div>
                <div className="rev-text">
                      <b>Positive Feedback ({review.positive_review_words} words)</b>
                      <br/> {review.positive_review}
                      <p/><b>Negative Feedback ({review.negative_review_words} words)</b>
                      <br/> {review.negative_review}
                      <p/>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard
