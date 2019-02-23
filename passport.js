const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
const mongoose = require('mongoose');
const User = mongoose.model('users');

// turn user to id
passport.serializeUser((user, done) => {
	done(null, user.id);
	console.log("user serialized")
});

// turn an id into a user
passport.deserializeUser((id, done) => {
	User.findById(id).then(user => done(null, user));
});

passport.use(
	new GoogleStrategy({
		clientID: keys.googleClientID,
		clientSecret: keys.googleClientSecret,
		callbackURL: '/auth/google/callback'
	}, (accessToken, refreshToken, profile, done) => {
			// the user returned from google oauth
			User.findOne({googleId: profile.id}).then((existingUser) => {
				if (existingUser) {
					// the user already exists
					done(null, existingUser);
				}
				else {
					// create new user and save to mongo
					new User({googleId: profile.id, firstName: profile.name.givenName}).save().then((user) => done(null, user));
				}
			});
			console.log("access token is", accessToken);
			console.log("refresh token is", refreshToken);
			console.log("profile is", profile);
		}
	)
);