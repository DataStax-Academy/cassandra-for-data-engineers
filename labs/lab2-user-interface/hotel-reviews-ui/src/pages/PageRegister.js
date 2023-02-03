import { React, useState } from 'react';
import { useNavigate} from 'react-router-dom';


/**
 * Home Page
 */
const PageRegister = () => {

	// Something goes wrong with reg
	const [errorMessage, setErrorMessage] = useState(null);
	const navigate = useNavigate();

	const handleSubmit = event => {
        event.preventDefault();
		console.log(event.target.lastname.value);

		navigate('/Login',{state:{}});
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
					<div className="errorMessage">Something Wrong</div>
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
							<label>Your password</label>
							<input className="form-control" type="password" id="password1" />
							<i className="icon_lock_alt"></i>
						</div>
						<div className="form-group">
							<label>Confirm Password</label>
							<input className="form-control" type="password" id="password2" />
							<i className="icon_lock_alt"></i>
						</div>
						<div id="pass-info" className="clearfix">
							<button type="submit" className="btn_1 rounded full-width add_top_30">Register Now!</button>
						</div>
						<div className="text-center add_top_10">Already have an acccount? <strong>
							<a href="/login">Sign In</a>
						</strong></div>
					</form>
					<div className="copy">© DataStax Developers</div>
				</aside>
			</div>
		</div>
	)
};

export default PageRegister;