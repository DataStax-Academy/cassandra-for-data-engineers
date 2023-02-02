import { React, useState } from 'react';

/**
 * Home Page
 */
const PageRegister = () => {

	return (
		<div id="login_bg">
			<div id="login">
				<aside>
					<figure>
						<a href="/login">
							<img src="img/datastax-logo.svg" width="155" height="36" alt="" class="logo_sticky" />
						</a>
					</figure>
					<form autocomplete="off">
						<div class="form-group">
							<label>Your Name</label>
							<input class="form-control" type="text" />
							<i class="ti-user"></i>
						</div>
						<div class="form-group">
							<label>Your Last Name</label>
							<input class="form-control" type="text" />
							<i class="ti-user"></i>
						</div>
						<div class="form-group">
							<label>Your Email</label>
							<input class="form-control" type="email" />
							<i class="icon_mail_alt"></i>
						</div>
						<div class="form-group">
							<label>Your password</label>
							<input class="form-control" type="password" id="password1" />
							<i class="icon_lock_alt"></i>
						</div>
						<div class="form-group">
							<label>Confirm password</label>
							<input class="form-control" type="password" id="password2" />
							<i class="icon_lock_alt"></i>
						</div>
						<div id="pass-info" class="clearfix"></div>
						<a href="#0" class="btn_1 rounded full-width add_top_30">Register Now!</a>
						<div class="text-center add_top_10">Already have an acccount? <strong><a href="/login">Sign In</a></strong></div>
					</form>
					<div class="copy">© DataStax Developers</div>
				</aside>
			</div>
		</div>
	)
};

export default PageRegister;