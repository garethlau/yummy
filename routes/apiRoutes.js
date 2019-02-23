const mongoose = require('mongoose');
const Recipe = mongoose.model("Recipes");
const ObjectId = mongoose.Types.ObjectId;

// to reset the database
const seed = require('../seed');

module.exports = app => {

	app.get("/api/current_user", (req, res) => {
		console.log("Current user is:", req.user);
		res.send(req.user);
	});

	app.get("/api/logout", (req, res) => {
		req.logout();
		console.log("logged out");
		res.redirect("/");
	});

	// get the data necessary to load the explore page
	app.get("/api/explore", async (req, res) => {
		const recipes = await Recipe.find({"public": true}).select({
			id: true,
			title: true,
			time: true,
			author: true
		});
		res.send(recipes);
	});

	// get public recipes
	app.get("/api/recipes/public", async (req, res) => {
		const recipes = await Recipe.find({"public": true});
		res.send(recipes);
	});

	// get my recipes
	app.get("/api/my_recipes", async (req, res) => {
		console.log("the user is:", req.user);
		let userId;

		// check if the user is logged in
		if (req.user === undefined) {
			userId = null;
			res.send("you have to be signed in");
		}
		else {userId = req.user._id}
		console.log(userId);
		const recipes = await Recipe.find({"author.id": userId});
		res.send(recipes);
	});


	// get recipe by id
	app.get("/api/recipes/:recipeId", async (req, res) => {
		console.log("the user is:", req.params.recipeId);
		let recipeId = req.params.recipeId;

		const recipes = await Recipe.find({"_id": ObjectId(recipeId)});
		res.send(recipes);
	});





	// search by title
	app.get("/api/recipes/:title/", async (req, res) => {
		// get the title from the request
		const title = req.params.title;

		// create regular expression that is case insensitive
		let re = new RegExp(title, "i");
		console.log(re);

		Recipe.find({
			title: {$regex: re}
		}, (err, docs) => {
			console.log("we found", docs);
			res.send(docs);
		});

	});

	// add a recipe
	app.post('/api/recipes/add', (req, res) => {
		let data = req.body;
		data.author.name = req.user.firstName;
		data.author.id = req.user.id;

		let recipe = new Recipe(data);
		recipe.save().then(() => res.status(201).send(recipe));
	});

	// update a recipe
	app.put("/api/recipes/update/:recipeId", (req, res) => {

		let uId = ObjectId(req.params.recipeId);

		// find the recipe
		Recipe.findOne({
			"_id": uId
		}, (err, recipe) => {
			if (err) {console.log(err)}
			else {
				// change the recipe parameters
				// assume no values will be undefined
				console.log(recipe);
				recipe.title = req.body.title;
				recipe.time = req.body.time;
				recipe.save().then(() => res.send(recipe)).catch(err => console.log(err));
			}
		});
	});

	// seed the database
	app.get('/api/seed', (req, res) => {
		seed.seed();
		res.send("seeded");
	});

};