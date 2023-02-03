import { React, useState,useContext,useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import axios from 'axios'
import { UserContext } from '../contexts/UserContext';

import bcrypt from "bcryptjs-react";


/**
 * Home Page
 */
const PageLogin = () => {

    const {authenticatedUser, setAuthenticatedUser} = useContext(UserContext);

    const [errorMessage, setErrorMessage] = useState(null);
	const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        if (event.target.email.value === "") {
			event.target.email.style.backgroundColor = "#f1cacc";
			setErrorMessage("Email is mandatory")
		} else if (event.target.password.value === "") {
			event.target.password.style.backgroundColor = "#f1cacc";
			setErrorMessage("Password is mandatory")
		} 
		axios.get('/.netlify/functions/getUser?email=' + event.target.email.value)
             .then((response) => {
                // User exist, checking password
                let password= bcrypt.hashSync(event.target.password.value, 10);
                console.log('brypt:' + password);
                console.log('db:'+response.data.password);
                //if (password !== response.data.password) {
                if (false) {
                    setErrorMessage("Invalid Password")
                    event.target.password.style.backgroundColor = "#f1cacc";
                } else {
                    setAuthenticatedUser(response.data);
                    navigate('/',{state:{}});
                }
             })
             .catch((error) => {
                setErrorMessage("Unknown user")
                event.target.email.style.backgroundColor = "#f1cacc";
            });
    }

    /**
     * Load Hotel list on initialization and update of the context.
     */
  useEffect(() => {
    console.log(authenticatedUser);
  }, [])

    return (
        <div id="login_bg">
            <div id="login">
                <aside>
                    <figure>
                        <img src="img/datastax-logo.svg" width="255" height="60" alt="" 
                        className="logo_sticky" />
                    </figure>
                    
                    {!authenticatedUser && 
                    <form autoComplete="off" method="post" onSubmit={handleSubmit}  >
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" name="email" id="email" />
                            <i className="icon_mail_alt"></i>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" name="password" id="password" />
                            <i className="icon_lock_alt"></i>
                        </div>
                        {errorMessage && <div id="error_message_ds">{errorMessage}</div>}
                        <div id="pass-info" className="clearfix">
                            <button type="submit" className="btn_1 rounded full-width add_top_30">Login to StaxHotels</button>
                        </div>
                        <div className="text-center add_top_10">New to StaxHotels? <strong><a href="/register">Sign up!</a></strong></div>
                    </form>
                    }
                    {authenticatedUser && <div><p>You are authenticated</p></div>}
                    <div className="copy">© DataStax Developers</div>
                </aside>
            </div>
        </div>
    )

};

export default PageLogin;