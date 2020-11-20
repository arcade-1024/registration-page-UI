import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

//icons
import { BiUserCircle, BiLockOpenAlt } from "react-icons/bi";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { FaArrowRight, FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";

//components
import Message from "../components/Message";

export interface LoginPageInterface {
	name?: string;
	password?: string;
	setSignup?: Function;
}

const LoginPage = ({ name, password, setSignup }: LoginPageInterface) => {
	const history = useHistory();

	const passwordRef = useRef<HTMLInputElement>(null);

	const usernameRef = useRef<HTMLInputElement>(null);

	const [passVisible, setPassVisible] = useState(false);

	const [messageShow, setMessageShow] = useState(false);

	const messageDisappear = () => {
		setTimeout(() => {
			setMessageShow(false);
		}, 3000);
	};

	const formSubmitHandler = (e: any) => {
		e.preventDefault();
		// setName(e.target.username.value);
		if (
			usernameRef.current?.value === name &&
			passwordRef.current?.value === password
		) {
			history.push(`/home`);
		} else {
			setMessageShow(true);
			messageDisappear();
		}
	};
	const setSignUpType = (e: any) => {
		//@ts-ignore
		const classNameSting = e.target.classList[0];
		// @ts-ignore
		setSignup(classNameSting);
		history.push(`/signup`);
	};
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
						ref={usernameRef}
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

			<div className="LoginPage-Link" onClick={setSignUpType}>
				<p>Sign up</p>
			</div>
			{messageShow ? (
				<Message
					message="wrong credential"
					type={"error"}
				
				/>
			) : (
				""
			)}
			<p className="LoginPage-seperator-signup">
				<span>with</span>
			</p>
			<div className="LoginPage-signup-social">
				<div
					className="facebook-button LoginPage-signup-social-icons LoginPage-signup-social-icon-facebook"
					onClick={setSignUpType}
				>
					<FaFacebookF className="facebook" size={20} />
				</div>
				<div
					className="gmail-button LoginPage-signup-social-icons LoginPage-signup-social-icon-google"
					onClick={setSignUpType}
				>
					<FaGoogle className="google" size={20} />
				</div>
				<div
					className="twitter-button LoginPage-signup-social-icons LoginPage-signup-social-icon-twitter"
					onClick={setSignUpType}
				>
					<FaTwitter className="twitter" size={20} />
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
