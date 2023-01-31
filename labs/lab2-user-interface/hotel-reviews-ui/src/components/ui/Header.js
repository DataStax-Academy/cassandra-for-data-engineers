import React from "react";

const Header = () => {
    return (
        <header className="header menu_fixed">
		<div id="preloader"><div data-loader="circle-side"></div></div>
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
				<li><span><a href="/">Home</a></span>
					<ul>
						<li><a href="index.html">Schedule</a></li>
						<li>
							<span><a href="#0">Pick a module</a></span>
							<ul>
								<li><a href="#">System of Record</a></li>
								<li><a href="#">Data Exploration</a></li>
								<li><a href="#">Data Cleansing</a></li>
								<li><a href="#">Event Streaming</a></li>
                                <li><a href="#">Machine Learning</a></li>
								<li><a href="#">Training</a></li>
								<li><a href="#">Api Deployment</a></li>
								<li><a href="#">Production</a></li>
							</ul>
						</li>
						<li><a href="index-19.html">Beverage <strong className="badge text-bg-danger">Hot !</strong></a></li>
						<li><a href="index-17.html">HouseKeeeping</a></li>
					</ul>
				</li>
				<li><span><a href="#0">Track 1</a></span>
				</li>
				<li><span><a href="#0">Track 2</a></span>
				</li>
				<li><span><a href="#0">Main Event</a></span>
				</li>
                <li><span><a href="#0">DataStax Developers</a></span>
				</li>
			</ul>
		</nav>
	</header>
   )
}

export default Header