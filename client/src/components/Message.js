import React from "react";
import Avatar from "../assets/img/avatar.png";

export default function Message({ user, message }) {
	let messageClassName;

	if (message.user === "admin") {
		messageClassName = "admin__alert";
	} else if (message.user === user) {
		messageClassName = "right";
	} else if (message.user !== user) {
		messageClassName = "left";
	}

	console.log(user, messageClassName);

	return (
		<div className={`message ${messageClassName}`}>
			<div className="message__content">
				{messageClassName !== "admin__alert" && <img src={Avatar} alt="User" />}
				<p className="text">{message.text}</p>
			</div>
		</div>
	);
}
