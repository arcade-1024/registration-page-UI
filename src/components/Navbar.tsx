import React, { useState } from "react";
import { Link } from "react-router-dom";

//img
import Logo from "../assets/bold.svg";
import SideBar from "../components/SideBar";
export interface NavbarComponent {
	name: String;
	email: String;
	phone: String
}
const Navbar = ({ name, email,phone }: NavbarComponent) => {
	const [showSideBar, setShowSideBar] = useState(false);

	const toggleSideBar = () => {
		setShowSideBar(!showSideBar);
	};
	return (
		<div>
			<nav className="navbar">
				<div className="navbar-logo">
					<img src={Logo} className="navbar-logo-img" alt="" />
				</div>
				<ul className="navbar-link">
					<li className="navbar-link-items">
						<Link className="navbar-link-items-tag" to="/lib">
							Home
						</Link>
					</li>
					<li className="navbar-link-items">
						<Link className="navbar-link-items-tag" to="/discover">
							Discover
						</Link>
					</li>
					<li className="navbar-link-items">
						<Link className="navbar-link-items-tag" to="/collection">
							My Collections
						</Link>
					</li>
				</ul>
				<div className="navbar-user">
					<p className="navbar-user-name">{name}</p>
					<div className="navbar-user-profile" onClick={toggleSideBar}>
						<div className="navbar-user-profile-img">{name.slice(0, 1)}</div>
					</div>
				</div>
			</nav>
			<SideBar
				classname={showSideBar ? "" : "transition-x-400"}
				toggleSideBar={toggleSideBar}
				name={name}
				email={email}
				phone={phone}
			/>
		</div>
	);
};

export default Navbar;
