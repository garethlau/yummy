const mongoose = require('mongoose');
const {Schema} = mongoose;

const recipeSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	time: {
		type: Number,
		required: true
	},
	serves: {
		type: Number,
		required: true
	},
	ingredients: {
		seasonings: {
			type: Array,
			required: false,
		},
		mainIngredients: {
			type: Array,
			required: true,
		},
		garnishes: {
			type: Array,
			required: false,
		}
	},
	requiredKitchenware: {
		type: Array,
		required: false,
	},
	directions: {
		type: Array,
		required: true
	},
	favourite: {
		type: Boolean,
		required: false
	},
	public: {
		type: Boolean,
		required: true
	},
	author: {
		name: {
			type: String,
			required: true
		},
		id: {
			type: String,
			required: true
		}
	},
	images: {
		data: Buffer,
		contentType: String
	}
});

module.exports = mongoose.model('Recipes', recipeSchema);