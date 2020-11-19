import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";


export interface SignUpInterface {
	setUserName?: Function;
	setEmailAddress?: Function;
	setPassword?: Function;
	signUpType?: String;
}

const SignUp = ({
	setEmailAddress,
	setUserName,
	setPassword,
	signUpType,
}: SignUpInterface) => {
	const history = useHistory();
	const userNameRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);

	const submitHandler = (e: any) => {
		e.preventDefault();
		//@ts-ignore
		setUserName(userNameRef.current?.value);
		// @ts-ignore
		setEmailAddress(emailRef.current?.value);
		//@ts-ignore
		setPassword(passwordRef.current?.value);
		history.push(`/success`);
	};

	let topText;
	let Name;
	if (signUpType === "facebook-button") {
		topText = (
			<div className="Information-btn-facebook">
				<FaFacebookF size={50} fill={"#fff"} />
			</div>
		);
		Name = "Facebook User Name";
	} else if (signUpType === "gmail-button") {
		topText = (
			<div className="Information-btn-google">
				<FaGoogle size={50} fill={"#fff"} />
			</div>
		);
		Name = "Google User Name";
	} else if (signUpType === "twitter-button") {
		topText = (
			<div className="Information-btn-twitter">
				<FaTwitter size={50} fill={"#fff"} />
			</div>
		);
		Name = "Twitter User Name";
	} else {
		topText = (
			<h1 className="Information-text">
				Yey,fill the details & we are getting closer.
			</h1>
		);
		Name = "User Name";
	}

	return (
		<div className="Information">
			<div className="Information-title">{topText}</div>
			<form className="Information-form" onSubmit={submitHandler}>
				<div className="Information-form-group">
					<label htmlFor="fullName">{Name}</label>
					<input
						type="text"
						name="fullName"
						className="Information-form-input"
						autoComplete="off"
						ref={userNameRef}
					/>
				</div>
				<div className="Information-form-group">
					<label htmlFor="address">Email Address</label>
					<input
						type="email"
						name="address"
						className="Information-form-input"
						autoComplete="off"
						ref={emailRef}
					/>
				</div>
				<div className="Information-form-group">
					<label htmlFor="password">New password</label>
					<input
						type="password"
						name="password"
						className="Information-form-input"
						autoComplete="off"
					/>
				</div>
				<div className="Information-form-group">
					<label htmlFor="password">Confirm Password</label>
					<input
						type="password"
						name="password"
						className="Information-form-input"
						autoComplete="off"
						ref={passwordRef}
					/>
				</div>
				<button type="submit" className="Information-form-btn">
					Continue
				</button>
				<p className="Information-login">
					Already have an account?{" "}
					<Link to="/">
						<span>Login Here</span>
					</Link>
				</p>
			</form>
		</div>
	);
};

export default SignUp;
