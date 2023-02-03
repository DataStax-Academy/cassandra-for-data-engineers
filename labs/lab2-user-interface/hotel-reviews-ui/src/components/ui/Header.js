import { React, useContext } from "react"
import { UserContext } from "../../contexts/UserContext";
import { useNavigate} from 'react-router-dom';

const Header = () => {

	const {authenticatedUser, setAuthenticatedUser} = useContext(UserContext);
	const navigate = useNavigate();

	const logout = () => {
		setAuthenticatedUser(null);
		navigate('/login',{state:{}});
    };

    return (
        <header className="header menu_fixed">
		<div id="logo">
			<a href="index.html">
				<img src="img/cassandra_summit_logo.svg" width="350" height="100" alt="" className="logo_normal" />
			</a>
		</div>
		<a href="#menu" className="btn_mobile">
			<div className="hamburger hamburger--spin" id="hamburger">
				<div className="hamburger-box">
					<div className="hamburger-inner"></div>
				</div>
			</div>
		</a>
		<nav id="menu" className="main-menu">
			<ul>
				<li><span><a href="/">Home</a></span></li>
				{!authenticatedUser && <li><span><a href="/login">Login</a></span></li>}
				{!authenticatedUser && <li><span><a href="/register">Register</a></span></li>}
				{authenticatedUser && <li><span><a href="logout">Logout</a></span></li>}
			</ul>
		</nav>
	</header>
   )
}

export default Header