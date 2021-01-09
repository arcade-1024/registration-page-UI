import React from "react";
import Navbar from "../components/Navbar";

export interface HomePageInterface {
	name: any;
	email: any;
	phoneNumber: String;
}

const HomePage = ({ name, email, phoneNumber }: HomePageInterface) => {
	return (
		<div className="homepage">
			<Navbar name={name[0]} email={email} phone={phoneNumber} />
		</div>
	);
};

export default HomePage;
