import React, { useState, useEffect } from "react";
import "./styles/css/index.css";

import { Route, BrowserRouter } from "react-router-dom";
import axios from "axios";
//pages
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import SuccessPage from "./pages/SuccessPage";

function App() {
	const [username, setUsername] = useState(["John", "MICKY"]);
	const [Email, setEmailAddress] = useState("admin@gmail.com");
	const [password, setPassword] = useState(["12345", "98765"]);
	// eslint-disable-next-line
	const [phone, SetPhone] = useState("9999887766");
	const [sigupType, setSignUpType] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios(
				`https://api.github.com/repositories/19438/issues`
			);
			console.log(result.data[0]);
		};
		fetchData();
	}, []);
	return (
		<div className="App">
			<BrowserRouter>
				<Route
					exact={true}
					path="/"
					component={() => (
						<LoginPage
							name={username}
							password={password}
							setSignup={setSignUpType}
						/>
					)}
				/>
				<Route
					exact={true}
					path="/home"
					component={() => (
						<HomePage name={username} email={Email} phoneNumber={phone} />
					)}
				/>
				<Route
					exact={true}
					path="/signup"
					component={() => (
						<SignUp
							setEmailAddress={setEmailAddress}
							setUserName={setUsername}
							setPassword={setPassword}
							signUpType={sigupType}
						/>
					)}
				/>
				<Route exact path="/success" component={() => <SuccessPage />} />
			</BrowserRouter>
		</div>
	);
}

export default App;
