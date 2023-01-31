import { React, useContext, useEffect } from "react";
import ReviewCard from "./ReviewCard";
import { ReviewsContext } from "../../contexts/ReviewsContext";

/**
 * Get the list of reviews
 */
const ReviewsCardList = () => {

    /**
     * Shared selected location among multiple
     * components.
     */
    const {hotelReviews} = useContext(ReviewsContext);

    useEffect(() => {
    }, [])

    return (
        <div className="reviews-container">
            {hotelReviews && hotelReviews.map((review, index) => <ReviewCard key={index} review={review} />)}
        </div>
    )
};

export default ReviewsCardList;