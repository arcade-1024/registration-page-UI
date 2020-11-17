import React from "react";
import "./styles/css/index.css";
// import Button from "@material-ui/core/Button";
import { Route, BrowserRouter } from "react-router-dom";

//pages
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Route exact={true} path="/" component={() => <LoginPage />} />
				<Route exact={true} path="/home" component={() => <HomePage />} />
				<Route exact={true} path="/signup" component={() => <SignUp />} />
			</BrowserRouter>
		</div>
	);
}

export default App;
