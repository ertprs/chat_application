import React from "react";
import Message from "./Message";

export default function Messages({ user, messages }) {
	return (
		<div className="messages">
			{messages.map((message, index) => (
				<Message key={index} user={user} message={message} />
			))}
		</div>
	);
}
