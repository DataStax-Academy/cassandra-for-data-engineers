import React from "react";

const CreateReviewForm = () => {
	return (
		<div className="add-review">
			<h5>Leave a Review</h5>
			<form>
				<div className="row">
					<div className="form-group col-md-6">
						<label>Name and Lastname *</label>
						<input type="text" name="name_review" id="name_review" 
						  placeholder="John Doe" className="form-control" />
					</div>
					<div className="form-group col-md-6">
						<label>Nationality</label>
						<input type="text" name="nationality" id="nationality" 
						className="form-control" placeholder="French"/>
					</div>
					<div className="form-group col-md-6">
						<label>Score </label>
						<div className="custom-select-form">
						  <input type="input" name="score" id="score" 
						    className="form-control" placeholder="7.0"/>
						</div>
					</div>
					<div className="form-group col-md-12">
						<label>Your Review</label>
						<textarea name="review_text" id="review_text" className="form-control" style={{height: '130px'}}></textarea>
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