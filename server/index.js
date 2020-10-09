// importing express module and initialising it
const express = require("express");
const app = express();
const http = require("http");
const socket = require("socket.io");
const server = http.createServer(app);
const io = socket(server);
const cors = require("cors");
const router = require("./router");

app.use(cors());
app.use(router);

const { users, addUser, removeUser, getUser } = require("./users");

io.on("connection", (socket) => {
	socket.on("join", (newUser) => {
		const user = addUser({
			id: socket.id,
			name: newUser.name,
			room: newUser.room,
		});

		socket.join(newUser.room);

		// sending the newly joined user the welcome message
		socket.emit("alert", {
			user: "admin",
			text: `Welcome to the room ${user.room}, ${user.name}`,
		});

		// informing other users about the newly joined user
		socket.broadcast
			.to(newUser.room)
			.emit("alert", { user: "admin", text: `${user.name} has joined!!` });
	});

	// when a user sends a new message
	socket.on("message", (message, clearInput) => {
		// get the user who sent the message
		const user = getUser(socket.id);

		// message data
		const data = { user: user.name, text: message };

		// send the message to the room
		io.emit("newMessage", data);

		clearInput();
	});

	// disconnect a user
	// socket.on("disconnect", () => {
	// 	const user = removeUser(socket.id);

	// 	console.log(user);

	// 	// sending alert to the user that someone has left
	// 	io.to(user.room).emit("alert", {
	// 		user: "admin",
	// 		text: `${user.name} has left the room`,
	// 	});
	// });
});

server.listen(8080, () =>
	console.log("The server is up and running on port 8080")
);
