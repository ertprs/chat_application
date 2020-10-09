import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import Messages from "./Messages";
import Header from "./Header";
import Input from "./Input";

import Sidebar from "./Sidebar";

let socket;

export default function Chat({ location }) {
	const ENDPOINT = "localhost:8080";
	const [name, setName] = useState("");
	const [room, setRoom] = useState("");
	const [message, setMessage] = useState("");
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		const { name, room } = queryString.parse(location.search);

		setName(name);
		setRoom(room);

		socket = io(ENDPOINT);

		socket.emit("join", { name, room });
	}, [location.search, ENDPOINT]);

	useEffect(() => {
		// admin alert message
		socket.on("alert", (message) => {
			setMessages([...messages, message]);
		});

		// message sent by the user
		socket.on("message", (message) => {
			setMessages([...messages, message]);
		});

		socket.on("newMessage", (data) => {
			setMessages([...messages, data]);
		});
	}, [messages]);

	const sendMessage = (e) => {
		// prevent the default action
		e.preventDefault();

		if (message !== "") {
			console.log(message);
			socket.emit("message", message, () => setMessage(""));
		}
	};

	return (
		<div className="wrapper">
			<Sidebar />
			<main className="chat">
				<div className="container">
					<Header />
					<Messages user={name} messages={messages} />
					<Input
						message={message}
						setMessage={setMessage}
						sendMessage={sendMessage}
					/>
				</div>
			</main>
		</div>
	);
}
