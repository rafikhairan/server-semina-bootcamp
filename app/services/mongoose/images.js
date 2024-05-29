const Images = require("../../api/v1/images/model");
const { NotFoundError } = require("../../errors/index");

const createImages = async (req) => {
	const result = await Images.create({
		name: req.file ? `uploads/${req.file.filename}` : `uploads/avatar/default.jpg`,
	});

	return result;
};

const checkingImages = async (id) => {
	const result = await Images.findOne({ _id: id });

	if (!result) throw new NotFoundError(`Tidak ada gambar dengan id: ${id}`);

	return result;
};

module.exports = { createImages, checkingImages };
