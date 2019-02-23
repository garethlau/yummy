const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const passport = require('passport');
const cookieSession = require('cookie-session');

const app = express();

const bodyParser = require('body-parser');

require('./models/user');
require('./models/recipe');
require('./passport.js');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(keys.mongoURI, {
	auth: {
		user: keys.mongoUser,
		password: keys.mongoPassword
	},
	useNewUrlParser: true
}).then(() => console.log("mongo connection successful")).catch((err) => console.log("err connecting to mongo", err));

require('./routes/authRoutes')(app);
require('./routes/apiRoutes')(app);
app.listen(5000);