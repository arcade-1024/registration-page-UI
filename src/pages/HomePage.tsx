import React from "react";
import Navbar from "../components/Navbar";
export interface HomePageInterface {
	name: String;
	email: String;
	phoneNumber: String;
}
const HomePage = ({ name, email, phoneNumber }: HomePageInterface) => {
	return (
		<div className="homepage">
			<Navbar name={name} email={email} phone={phoneNumber} />
		</div>
	);
};

export default HomePage;
