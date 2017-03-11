const express = require('express');
const passport = require('passport');
const router = new express.Router();
const findUser = require('../controllers/findUser.server.js');

// Get the database from the request with a middleware
let db;
const setDb = (req, res, next) => {
  console.log('asigna la base de datos');
  db = req.app.db;
  next();
};

// Serialize and deserialize
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});

// Strategies
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;

// Common user handling function
const userHandlerFunction = (accessToken, refreshToken, profile, done) => {
  // console.log(profile);
  if (!profile.hasOwnProperty('emails')) {
    profile.emails = [];
  }
  if (!profile.hasOwnProperty('photos')) {
    profile.photos = [{value: ''}];
  }
  findUser(db, profile)
  .then((user) => {
    if (!user) {
      // we have to construct a new user
      user = {
        name: profile.displayName,
        username: '',
        ids: [
          {provider: profile.provider, id: profile.id},
        ],
        emails: profile.emails,
        gender: profile.gender,
        photo: profile.photos[0].value,
      };
      done(null, user);
    } else {
      done(null, user);
    }
  })
  .catch((err) => {
    done(err, null);
  });
};

// Middleware to redirect users after login
const userRedirect = (req, res) => {
  // TODO here I should check if that's the first time and send the user to its
  // profile to fill everything
  res.redirect('/');
};

// Google Login
passport.use(new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/google/callback',
  },
  userHandlerFunction
));
router.get('/auth/google', setDb,
  passport.authenticate('google', {scope: ['profile', 'email']})
);
router.get('/auth/google/callback',
  passport.authenticate('google'),
  userRedirect
);

// Facebook Login
passport.use(new FacebookStrategy(
  {
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: 'http://localhost:3000/auth/facebook/callback',
  },
  userHandlerFunction
));
router.get('/auth/facebook', setDb, passport.authenticate('facebook'));
router.get('/auth/facebook/callback',
  passport.authenticate('facebook'),
  userRedirect
);

// GitHub Login
passport.use(new GitHubStrategy(
  {
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/github/callback',
  },
  userHandlerFunction
));
router.get('/auth/github', setDb,
  passport.authenticate('github', {scope: ['user:email']}));
router.get('/auth/github/callback',
  passport.authenticate('github'),
  userRedirect
);

// Twitter Login
passport.use(new TwitterStrategy(
  {
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    callbackURL: 'http://localhost:3000/auth/twitter/callback',
  },
  userHandlerFunction
));
router.get('/auth/twitter', setDb, passport.authenticate('twitter'));
router.get('/auth/twitter/callback',
  passport.authenticate('twitter'),
  userRedirect
);

// Logout
router.get('/logout', (req, res) => {
  // req.session is undefined here. Check what is going on with express-session
  // maybe I need a store??
  console.log('Logging out');
  req.session.destroy((err) => {
    res.redirect('/');
  });
});

module.exports = router;
