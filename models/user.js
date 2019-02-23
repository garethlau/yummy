const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
	googleId: String,
	firstName: String
});

module.exports = mongoose.model('users', userSchema);