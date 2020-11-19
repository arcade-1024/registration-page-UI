import React, { useState } from "react";
import "./styles/css/index.css";
// import Button from "@material-ui/core/Button";
import { Route, BrowserRouter } from "react-router-dom";

//pages
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import SuccessPage from "./pages/SuccessPage";

function App() {
	const [username, setUsername] = useState("admin");
	const [Email, setEmailAddress] = useState("admin@gmail.com");
	const [password, setPassword] = useState("12345");
	const [phone, SetPhone] = useState("9999887766");
	const [sigupType, setSignUpType] = useState("");
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
					component={() => <HomePage name={username} email={Email} phoneNumber={phone} />}
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
