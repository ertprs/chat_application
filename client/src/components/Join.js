import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Join({ location }) {
	// const { name, room } = queryStrings.parse(location.search);

	const [name, setName] = useState("");
	const [room, setRoom] = useState("");

	return (
		<section className="form__area">
			<h1 className="form__heading">Join A Room!!</h1>
			<form action="">
				<div className="form__group">
					<input
						type="text"
						placeholder="Your name"
						className="form-control"
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="form__group">
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
					<button className="primary__btn">Join</button>
				</Link>
			</form>
		</section>
	);
}
