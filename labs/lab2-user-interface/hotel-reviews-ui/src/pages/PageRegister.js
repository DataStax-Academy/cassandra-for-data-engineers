import { React, useState, useContext } from 'react';
import { useNavigate} from 'react-router-dom';
import axios from 'axios'

import { UserContext } from '../contexts/UserContext';

/**
 * Home Page
 */
const PageRegister = () => {

	const {authenticatedUser, setAuthenticatedUser} = useContext(UserContext);

	const [errorMessage, setErrorMessage] = useState(null);
	const navigate = useNavigate();

	const createUser = (event) => {
		var body = {}
		body.email = event.target.email.value;
		body.lastname = event.target.lastname.value;
		body.firstname = event.target.firstname.value;
		body.password = event.target.password1.value;
		body.nationality=event.target.nationality.value;
		console.log(body);
		axios.post('/.netlify/functions/createUser', body);
		navigate('/Login',{state:{}});
	}

	const handleSubmit = event => {
        event.preventDefault();
		if (event.target.email.value === "") {
			event.target.email.style.backgroundColor = "#f1cacc";
			setErrorMessage("Email is mandatory")
		} else if (event.target.password1.value === "") {
			event.target.password1.style.backgroundColor = "#f1cacc";
			setErrorMessage("Password is mandatory")
		} else if (event.target.password2.value === "") {
			event.target.password2.style.backgroundColor = "#f1cacc";
			setErrorMessage("Password is mandatory")
		} else if (event.target.password1.value !== event.target.password2.value) {
			event.target.password2.style.backgroundColor = "#f1cacc";
			event.target.password1.style.backgroundColor = "#f1cacc";
			setErrorMessage("Passwords do not match")
		} else {
			// Check if the user already exist
			axios.get('/.netlify/functions/getUser?email=' + event.target.email.value)
			     .then((response) => {
				     setErrorMessage("Email already exist")
					 event.target.email.style.backgroundColor = "#f1cacc";
			      })
			     .catch((error) => {
					// User was not existing we can now create it
					createUser(event);
				 });
		}
    }

	return (
		<div id="login_bg">
			<div id="login">
				<aside>
					<figure>
						<a href="/login">
							<img src="img/datastax-logo.svg" width="155" 
								height="36" alt="" className="logo_sticky" />
						</a>
					</figure>

					{!authenticatedUser && 
					<form autoComplete="off" method="post" onSubmit={handleSubmit}  >
						<div className="form-group">
							<label>Your Name</label>
							<input className="form-control" type="text"  id="firstname"/>
							<i className="ti-user"></i>
						</div>
						<div className="form-group">
							<label>Your Last Name</label>
							<input className="form-control" type="text"  id="lastname"/>
							<i className="ti-user"></i>
						</div>
						<div className="form-group">
							<label>Your Email</label>
							<input className="form-control" type="email"  id="email"/>
							<i className="icon_mail_alt"></i>
						</div>
						<div className="form-group">
							<label>Your Nationality</label>
							<select className="form-control" id="nationality">
							 <option value="French">French</option>
							 <option value="English">English</option>
							 <option value="Deustch">Deustch</option>
							 <option value="Italian">Italian</option>
							 <option value="American">American</option>
							</select>
						</div>
						<div className="form-group">
							<label>Your password</label>
							<input className="form-control" type="password" id="password1" />
							<i className="icon_lock_alt"></i>
						</div>
						<div className="form-group">
							<label>Confirm Password</label>
							<input className="form-control" type="password" id="password2" />
							<i className="icon_lock_alt"></i>
						</div>
						{errorMessage && <div id="error_message_ds">{errorMessage}</div>}
						<div id="pass-info" className="clearfix">
							<button type="submit" className="btn_1 rounded full-width add_top_30">Register Now!</button>
						</div>
						<div className="text-center add_top_10">Already have an acccount? <strong>
							<a href="/login">Sign In</a>
						</strong></div>
					</form>
					}
					{authenticatedUser && <div><p>You are authenticated</p></div>}
					<div className="copy">© DataStax Developers</div>
				</aside>
			</div>
		</div>
	)
};

export default PageRegister;