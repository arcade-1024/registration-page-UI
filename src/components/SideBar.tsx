import React from "react";
import { useHistory } from "react-router-dom";
import {
	FiX,
	FiMail,
	FiPhone,
	FiMessageSquare,
	FiLogOut,
} from "react-icons/fi";

export interface SideBarComponent {
	classname?: String;
	toggleSideBar: any;
	name: String;
	email: String;
	phone: String;
}
const SideBar = ({
	classname,
	toggleSideBar,
	name,
	email,
	phone,
}: SideBarComponent) => {
	const history = useHistory();
	const buttonClickHandler = () => {
		history.push(`/`);
	};
	return (
		<div className={`sidebar ${classname}`}>
			<div className="sidebar-crossbtn" onClick={toggleSideBar}>
				<FiX size={25} className={"pointer-events-none"} />
			</div>
			<div className="sidebar-main">
				<div className="sidebar-main-profile-pic">{name.slice(0, 1)}</div>
				<p className="sidebar-main-name">{name}</p>
				<div className="sidebar-main-info">
					<div className="sidebar-main-info-bubble">
						<FiMail stroke={"#fff"} />
					</div>
					<div>
						<h4>Email</h4>
						{email}
					</div>
				</div>
				<div className="sidebar-main-info">
					<div className="sidebar-main-info-bubble">
						<FiPhone stroke={"#fff"} />
					</div>
					<div>
						<h4>Phone</h4>
						+91 {phone}
					</div>
				</div>
				<div className="sidebar-main-info">
					<div className="sidebar-main-info-bubble">
						<FiMessageSquare stroke={"#fff"} />
					</div>
					<div>
						<h4>About</h4>
						Lorem ipsum dolor sit amet.
					</div>
				</div>

				<button className="sidebar-main-logout" onClick={buttonClickHandler}>
					<FiLogOut stroke={"#fff"} className={"p-r-10"} size={20} />
					Logout
				</button>
			</div>
		</div>
	);
};

export default SideBar;
