const mongoose = require('mongoose');
const { Schema } = mongoose;

const plantSchema = new Schema({
	user: String,
	name: String,
	watered: Boolean,
	info: String
});

const Plant = mongoose.model('plant', plantSchema);

module.exports = Plant;
