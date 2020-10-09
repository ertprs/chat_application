import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Join({ location }) {
	// const { name, room } = queryStrings.parse(location.search);

	const [name, setName] = useState("");
	const [room, setRoom] = useState("");

	return (
		<form action="">
			<div className="form-group">
				<input
					type="text"
					placeholder="Your name"
					className="form-control"
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<div className="form-group">
				<input
					type="text"
					placeholder="Room name"
					className="form-control"
					onChange={(e) => setRoom(e.target.value)}
				/>
			</div>

			<Link
				to={`/chat?name=${name}&room=${room}`}
				onClick={(e) => (!name || !room ? e.preventDefault() : null)}
			>
				<button>Join</button>
			</Link>
		</form>
	);
}
