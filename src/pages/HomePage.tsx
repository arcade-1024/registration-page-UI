import React, { useState } from "react";
import Navbar from "../components/Navbar";
import MyBook from "../components/MyBook";

import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";

export interface HomePageInterface {
	name: String;
	email: String;
	phoneNumber: String;
}

const HomePage = ({ name, email, phoneNumber }: HomePageInterface) => {
	const [myBooks, setMyBooks] = useState([
		{
			id: 1,
			name: "Educated",
			author: "Tara Westover",
			photo: img1,
			progress: 70,
		},
		{
			id: 2,
			name: "The Neighbourhood",
			author: "Mario vargas Llosa",
			photo: img2,
			progress: 60,
		},
		{
			id: 3,
			name: "The Afterlives",
			author: "Thomas pierce",
			photo: img3,
			progress: 50,
		},
		{
			id: 4,
			name: "The Blue Flower",
			author: "Raymond Queneau",
			photo: img4,
			progress: 50,
		},
		{
			id: 5,
			name: "Heart spring mountain",
			author: "Robin Mac Aurthur",
			photo: img5,
			progress: 100,
		},
	]);

	return (
		<div className="homepage">
			<Navbar name={name} email={email} phone={phoneNumber} />
			<MyBook bookData={myBooks} />
		</div>
	);
};

export default HomePage;
