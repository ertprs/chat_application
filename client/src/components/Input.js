import React from "react";

export default function Input({ message, setMessage, sendMessage }) {
	const handleMessage = (e) => {
		e.preventDefault();

		if (e.which !== 13) {
			console.log("not enter key");
			setMessage(e.target.value);
		} else {
			console.log("enter key");
			sendMessage();
		}
	};

	return (
		<div className="input__message">
			<div className="input__bg">
				<input
					type="text"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					onKeyPress={(e) => (e.key == "Enter" ? sendMessage(e) : null)}
					placeholder="Type Somehing...."
					className="input__message__bar"
				/>
				<button onClick={sendMessage} className="send__button">
					➡
				</button>
			</div>
		</div>
	);
}
