import { React, useEffect,useState, useContext } from "react";
import { ReviewsContext } from "../../contexts/ReviewsContext";

const ReviewsSummary = () => {
  
  const [avgScore, setAvgScore] = useState(0);
  const [scoreMap, setScoreMap] = useState(
    {'lessThanTwo':0, '2andMore':0, '4andMore':0, '6andMore':0, '8andMore':0});

   /**
     * Shared selected location among multiple
     * components.
     */
  const {hotelReviews} = useContext(ReviewsContext);

  /**
    * Populating Hotel list from DB
   **/
  const computeSummary = async () => {
    let total_score = 0;
    let reviewMap = { 0:0, 2:0, 4:0, 6:0, 8:0 };
    // Hotel reviews may not be totally compute
    if (hotelReviews !== null) {
        const newNumbers = hotelReviews.map(function(review){
            total_score = total_score + review.reviewer_score;
            if (review.reviewer_score < 2) {
                reviewMap[0] = reviewMap[0] + 1;
            } else if (review.reviewer_score < 4 ) {
                reviewMap[2] = reviewMap[2] + 1;
            } else if (review.reviewer_score < 6 ) {
                reviewMap[4] = reviewMap[4] + 1;
            } else if (review.reviewer_score < 8 ) {
                reviewMap[6] = reviewMap[6] + 1;
            } else {
                reviewMap[8] = reviewMap[8] + 1;
            }
        });
        setScoreMap({
            'lessThanTwo':parseInt((100*reviewMap[0])/hotelReviews.length, 10), 
            '2andMore':parseInt((100*reviewMap[2])/hotelReviews.length, 10), 
            '4andMore':parseInt((100*reviewMap[4])/hotelReviews.length, 10), 
            '6andMore':parseInt((100*reviewMap[6])/hotelReviews.length, 10), 
            '8andMore':parseInt((100*reviewMap[8])/hotelReviews.length, 10)});
        setAvgScore(Math.round(10 * total_score / hotelReviews.length)/10);
  }
 }

  /**
    * Load Hotel list on initialization and update of the context.
    */
  useEffect(() => {
    computeSummary()
  }, [hotelReviews])

    return (
        <div className="reviews-container">
                <div className="row">
                    <div className="col-lg-3">
                        <div id="review_summary">
                            <strong>{avgScore}</strong>
                            <small>Average score</small>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="row">
                            <div className="col-lg-10 col-9">
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" 
                                    style={{width:scoreMap['8andMore'] + '%'}} aria-valuenow="90" 
                                    aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-3"><small><strong>8 or more</strong></small></div>
                        </div>

                        <div className="row">
                            <div className="col-lg-10 col-9">
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" 
                                    style={{width:scoreMap['6andMore'] + '%'}}
                                    aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-3"><small><strong>6 or more</strong></small></div>
                        </div>

                        <div className="row">
                            <div className="col-lg-10 col-9">
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" 
                                    style={{width:scoreMap['4andMore'] + '%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-3"><small><strong>4 or more</strong></small></div>
                        </div>

                        <div className="row">
                            <div className="col-lg-10 col-9">
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" 
                                    style={{width:scoreMap['2andMore'] + '%'}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-3"><small><strong>2 or more</strong></small></div>
                        </div>

                        <div className="row">
                            <div className="col-lg-10 col-9">
                                <div className="progress">
                                    <div className="progress-bar" 
                                    role="progressbar" style={{width: scoreMap['lessThanTwo'] + '%' }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-3"><small><strong>Less than 2</strong></small></div>
                        </div>
                    </div>
                </div>
            </div>
    )
};

export default ReviewsSummary;