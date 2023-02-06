import { React, useContext } from "react"
import { UserContext } from "../../contexts/UserContext";
import { ReviewsContext } from "../../contexts/ReviewsContext";
import axios from 'axios'


const CreateReviewForm = ({uid}) => {

	const {authenticatedUser} = useContext(UserContext);
	const {setHotelReviews}   = useContext(ReviewsContext);

	const handleSubmit = event => {
        event.preventDefault();
		var body = {}
		body.hotel_uid=uid;
		body.negative_review=event.target.negative_review.value;
		body.positive_review=event.target.positive_review.value;
		body.reviewer_nationality=authenticatedUser.nationality;
		body.reviewer_score=parseInt(event.target.score.value, 10);
		axios.post('/.netlify/functions/createReview', body);

        // Update review list context
		axios.get('/.netlify/functions/getHotelReviews?uid=' + uid)
		     .then((reviews)=>{ setHotelReviews(reviews.data) });

		event.target.negative_review.value='';
		event.target.positive_review.value='';
		event.target.score.value=1;
	}

	return (
		<div className="add-review">
			<h5>Leave a Review</h5>
			<form autoComplete="off" method="post" onSubmit={handleSubmit}  >
				<div className="row">
					<div className="form-group col-md-6">
						<label>Name and Lastname *</label>
						<p><span style={{color:'blue'}}>{authenticatedUser.firstname + ' ' + authenticatedUser.lastname}</span></p>
					</div>
					<div className="form-group col-md-6">
						<label>Nationality</label>
						<p><span style={{color:'blue'}}>{authenticatedUser.nationality}</span></p>
					</div>
					<div className="form-group col-md-6">
						<label>Score </label>
						<select className="form-control" id="score">
							 <option value="1">1</option>
							 <option value="2">2</option>
							 <option value="3">3</option>
							 <option value="4">4</option>
							 <option value="5">5</option>
							 <option value="6">6</option>
							 <option value="7">7</option>
							 <option value="8">8</option>
							 <option value="9">9</option>
							 <option value="10">10</option>
							</select>
					</div>
					<div className="form-group col-md-12">
						<label>Your positive Review</label>
						<textarea name="positive_review" id="positive_review" className="form-control" style={{height: '130px'}}></textarea>
					</div>
					<div className="form-group col-md-12">
						<label>Your negative Review</label>
						<textarea name="negative_review" id="negative_review" className="form-control" style={{height: '130px'}}></textarea>
					</div>
					<div className="form-group col-md-12 add_top_20">
						<input type="submit" value="Submit" className="btn_1" id="submit-review"/>
					</div>
				</div>
			</form>
		</div>
	)
}

export default CreateReviewForm;