let users = [
	{ id: 1, name: "Shaan Alam" },
	{ id: 1, name: "Lavi Alam" },
	{ id: 1, name: "John doe" },
	{ id: 1, name: "Steve Jobs" },
	{ id: 1, name: "Bill Gates" },
	{ id: 1, name: "Elon Musk" },
];

const removeUser = (name) => {
	const user = users.filter((user) => user.name === name)[0];
	users = users.filter((user) => user.name !== name);

	return user ;
};

const user = removeUser("Elon Musk");
console.log(user);
console.log(users);
