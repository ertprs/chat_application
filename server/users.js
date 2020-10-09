// this users array will store the users in the room
let users = [];

const addUser = (user) => {
	users = [...users, user];

	return user;
};

const removeUser = (id) => {
	const index = users.findIndex((user) => user.id === id);

	if (index !== -1) return users.splice(index, 1)[0];
};

const getUser = (id) => {
	const index = users.findIndex((user) => user.id === id);

	return users[index];
};

module.exports = { users, addUser, removeUser, getUser };
