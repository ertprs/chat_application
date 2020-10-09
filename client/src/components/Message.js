import React from "react";
import Avatar from "../assets/img/avatar.png";

export default function Message({ user, message }) {
	const messageClassName = message.user === user ? "right" : "left";

	return (
		<div className={`message ${messageClassName}`}>
			<div className="message__content">
				<img src={Avatar} alt="User" />
				<p className="text">{message.text}</p>
			</div>
		</div>
	);
}
