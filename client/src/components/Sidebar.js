import React from "react";
import Avatar from "../assets/img/avatar.png";

export default function Sidebar() {
	return (
		<aside>
			<h1>Online Users</h1>

			<div className="online__user__list">
				<div className="user">
					<img src={Avatar} alt="" />
					<div className="user__text">
						<h4>Shaan Alam</h4>
						<h6>Test Room</h6>
					</div>
				</div>
				<div className="user">
					<img src={Avatar} alt="" />
					<div className="user__text">
						<h4>Shaan Alam</h4>
						<h6>Test Room</h6>
					</div>
				</div>
				<div className="user">
					<img src={Avatar} alt="" />
					<div className="user__text">
						<h4>Shaan Alam</h4>
						<h6>Test Room</h6>
					</div>
				</div>
			</div>
		</aside>
	);
}
