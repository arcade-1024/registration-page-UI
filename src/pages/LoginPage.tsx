import React, { useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";

//icons
import { BiUserCircle, BiLockOpenAlt } from "react-icons/bi";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { FaArrowRight, FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";

export interface LoginComponet {
	name?: string;
	password?: string;
}

const LoginPage = ({ name, password }: LoginComponet) => {
	const history = useHistory();

	const formSubmitHandler = (e: any) => {
		e.preventDefault();
		// setName(e.target.username.value);
		history.push(`/home`);
	};
	const passwordRef = useRef<HTMLInputElement>(null);
	const [passVisible, setPassVisible] = useState(false);
	const togglePasswordVisibility = () => {
		setPassVisible(!passVisible);
		if (passwordRef.current?.type === "password") {
			passwordRef.current.type = "text";
		} else {
			// @ts-ignore
			passwordRef.current.type = "password";
		}
	};
	return (
		<div className="LoginPage">
			<h1 className="LoginPage-greet">Hello</h1>
			<p>Sign in to Continue</p>
			<form className="LoginPage-form" onSubmit={formSubmitHandler}>
				<div className="LoginPage-icons">
					<BiUserCircle size={30} fill={"#888"} />
					<input
						type="text"
						name="username"
						placeholder="Name"
						className="LoginPage-icons-input"
					/>
				</div>
				<div className="LoginPage-icons">
					<BiLockOpenAlt size={30} fill={"#888"} />
					<input
						type="password"
						name="password"
						placeholder="Password"
						className="LoginPage-icons-input"
						ref={passwordRef}
					/>
					{passVisible ? (
						<BsEyeSlashFill
							className="LoginPage-icons-see-icon"
							onClick={togglePasswordVisibility}
							fill={"#888"}
						/>
					) : (
						<BsEyeFill
							className="LoginPage-icons-see-icon"
							onClick={togglePasswordVisibility}
							fill={"#888"}
						/>
					)}
				</div>
				<button type="submit" className="LoginPage-btn">
					<FaArrowRight size={20} />
				</button>
			</form>

			<Link className="LoginPage-Link" to="/signup">
				<p>Sign up</p>
			</Link>
			<p className="LoginPage-seperator-signup">
				<span>with</span>
			</p>
			<div className="LoginPage-signup-social">
				<div className="LoginPage-signup-social-icons LoginPage-signup-social-icon-facebook">
					<FaFacebookF className="facebook" size={20} />
				</div>
				<div className="LoginPage-signup-social-icons LoginPage-signup-social-icon-google">
					<FaGoogle className="google" size={20} />
				</div>
				<div className="LoginPage-signup-social-icons LoginPage-signup-social-icon-twitter">
					<FaTwitter className="twitter" size={20} />
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
