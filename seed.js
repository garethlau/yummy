const mongoose = require('mongoose');
const Recipe = mongoose.model('Recipes');

module.exports = {seed};

function seed() {

	const recipes = [
		new Recipe({
			title: "Fried Rice",
			time: 10,
			serves: 1,
			ingredients: {
				seasonings: [["salt", "to taste"], ["pepper", "to taste"]],
				mainIngredients: [["rice", 1], ["peas", 0.5], ["corn", 0.5], ["water", 0.5]],
			},
			requiredKitchenware: [["chopsticks", 1]],
			directions: ["Saute the carrots for a bit", 'cook the rice', 'scramble the egg once its done'],
			favourite: false,
			public: true,
			author: {
				name: "Gareth",
				id: "5c70c27384120c0fcc332d78"
			},
		}),
		new Recipe({
			title: "chickpea rice",
			time: 20,
			serves: 1,
			ingredients: {
				seasonings: [["salt", "to taste"], ["pepper", "to taste"],["garlic powder", "small teaspoon"]],
				mainIngredients: [["rice", 1], ["peas", 0.5], ["corn", 0.5], ["water", 0.5], ["tomatores", 1], ["chickpeas", 1]],
			},
			requiredKitchenware: [["copsticks", 1]],
			directions: ["Cook the tomatoes a bit", 'cook everyting'],
			favourite: true,
			public: true,
			author: {
				name: "not gareth",
				id: "rh21egwhwhefwe"
			},
		}),
		new Recipe({
			title: "recipe 3",
			time: 3,
			serves: 1,
			ingredients: {
				seasonings: [["salt", "to taste"], ["pepper", "to taste"],["garlic powder", "small teaspoon"]],
				mainIngredients: [["rice", 1], ["peas", 0.5], ["corn", 0.5], ["water", 0.5], ["tomatores", 1], ["chickpeas", 1]],
				garnishes: [["leafs or sometihng", "a lot"]]
			},
			requiredKitchenware: [["copsticks", 1]],
			directions: ["Cook the tomatoes a bit", 'cook everyting'],
			favourite: true,
			public: false,
			author: {
				name: "Gareth",
				id: "5c70c27384120c0fcc332d78"
			},
		}),
	];

	Recipe.deleteMany({}, () => {
		// cycle through all the recipes and add to the collection
		for (let i = 0; i < recipes.length; i++) {
			recipes[i].save(() => {
				console.log(recipes[i].title + "saved to mongo");
			});
		}
	})

}
