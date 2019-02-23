const passport = require("passport");

module.exports = app => {
	console.log("auth routes exported");

	app.get("/", (req, res) => {
		res.send("localhost5000home");
	});

	app.get("/auth/google", passport.authenticate('google', {
			scope: ["profile", "email"],
			immediate: true
	}));

	app.get("/auth/google/callback",
		passport.authenticate('google'), (req, res) => {
			res.redirect('/explore');
		}
	);



};