import { React, useState } from 'react';

import { UserContext } from '../contexts/UserContext';

/**
 * Home Page
 */
const PageLogin = () => {

    /**
   * Selected Location to pick hotel.
   * We also defined the default value at load
   */
    const [authenticatedUser, setAuthenticatedUser] = useState(null);

    return (
        <div id="login_bg">
            <div id="login">
                <aside>
                    <figure>
                        <img src="img/datastax-logo.svg" width="255" height="60" alt="" className="logo_sticky" />
                    </figure>
                    <form>
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
                        <div className="clearfix add_bottom_30">
                            <div className="checkboxes float-start">
                                <label className="container_check">Remember me
                                    <input type="checkbox"></input>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div className="float-end mt-1">
                                <a id="forgot" href="javascript:void(0);">Forgot Password?</a></div>
                        </div>
                        <a href="#0" className="btn_1 rounded full-width">Login to StaxHotels</a>
                        <div className="text-center add_top_10">New to StaxHotels? <strong><a href="register.html">Sign up!</a></strong></div>
                    </form>
                    <div className="copy">© DataStax Developers</div>
                </aside>
            </div>
        </div>
    )

};

export default PageLogin;