import React from "react";
import { Link, useHistory } from "react-router-dom";
import { BiCheck } from "react-icons/bi";
const SuccessPage = () => {
	const history = useHistory();
	const RedirectToHome = () => {
		setTimeout(() => {
			history.push(`/`);
		}, 5000);
	};
	return (
		<div className="Success">
			<div className="Success-div">
				<BiCheck size={200} fill={"#fff"} />
			</div>
			<h1 className="Success-text">Congrats! all done</h1>
			<Link to="/">
				<button className="Success-continue">Continue</button>
			</Link>
			{RedirectToHome()}
		</div>
	);
};

export default SuccessPage;
