const Users = require("../../api/v1/users/model");
const Organizers = require("../../api/v1/organizers/model");
const { BadRequestError } = require("../../errors/index");

const createOrganizer = async (req) => {
	const { organizer, role, email, password, confirmPassword, name } = req.body;

	if (password !== confirmPassword) {
		throw new BadRequestError("Konfirmasi password tidak sesuai");
	}

	const result = await Organizers.create({ organizer });

	const users = await Users.create({
		email,
		name,
		password,
		organizer: result._id,
		role,
	});

	delete users._doc.password;

	return users;
};

const createUser = async (req) => {
	const { name, password, confirmPassword, role, email } = req.body;

	if (password !== confirmPassword) {
		throw new BadRequestError("Konfirmasi password tidak sesuai");
	}

	const result = await Users.create({
		name,
		email,
		password,
		organizer: req.user.organizer,
		role,
	});

	delete result._doc.password;

	return result;
};

const getAllUsers = async (req) => {
	const result = await Users.find();

	return result;
};

module.exports = { createOrganizer, createUser, getAllUsers };
