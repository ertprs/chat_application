import React from "react";
import { Route } from "react-router-dom";

import Join from "./components/Join";
import Chat from "./components/Chat";

// CSS
import "./assets/css/styles.css";

export default function App() {
	return (
		<>
			<Route path="/" component={Join} exact />
			<Route path="/chat" component={Chat} />
		</>
	);
}
