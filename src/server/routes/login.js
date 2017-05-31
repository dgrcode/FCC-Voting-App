const express = require('express');
const passport = require('passport');
const router = new express.Router();
const findUser = require('../controllers/findUser.server.js');
const saveUser = require('../controllers/saveUser.server.js');
const userActions = require('../actions/userActions.js');
const cache = require('../cache/cache.js');

// Get the database from the request with a middleware
let db;
const setDb = (req, res, next) => {
  //console.log('asigna la base de datos');
  db = req.app.db;
  next();
};

// Saves the original url to be able to go back to the same url when autheticated
const saveOriginalUrl = (req, res, next) => {
  let previousUrl = req.get('Referrer');
  cache.set(req.session.id, previousUrl);
  next();
};

// Middleware to redirect users after login
const userRedirect = (req, res) => {
  // TODO here I should check if that's the first time and send the user to its
  // profile to fill everything
  res.redirect(cache.get(req.session.id));
};

// Serialize and deserialize
passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});

// Strategies
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;

// Common user handling function
const userHandlerFunction = (accessToken, refreshToken, profile, done) => {
  if (!profile.hasOwnProperty('emails')) {
    profile.emails = [];
  }
  if (!profile.hasOwnProperty('photos')) {
    profile.photos = [{ value: '' }];
  }
  findUser(db, profile)
  .then((user) => {
    if (!user) {
      // we have to construct a new user
      user = {
        name: profile.displayName,
        username: '',
        provIds: [
          { provider: profile.provider, id: profile.id }
        ],
        emails: [profile.emails[0].value],
        gender: profile.gender,
        photo: profile.photos[0].value
      };
      saveUser(db, user)
      .then((user) => {
        console.log('Saved new user');
        console.log(user);
        done(null, user);
      })
      .catch((err) => {
        done(err, null);
      });
    } else {
      // user existed already.
      // TODO Check if the provider is new to add new info
      done(null, user);
    }
  })
  .catch((err) => {
    done(err, null);
  });
};

// Google Login
passport.use(new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/google/callback'
  },
  userHandlerFunction
));
router.get('/auth/google', setDb, saveOriginalUrl,
  passport.authenticate('google', { scope: ['profile', 'email'] })
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
    callbackURL: 'http://localhost:3000/auth/facebook/callback'
  },
  userHandlerFunction
));
router.get('/auth/facebook', setDb, saveOriginalUrl,
  passport.authenticate('facebook'));
router.get('/auth/facebook/callback',
  passport.authenticate('facebook'),
  userRedirect
);

// GitHub Login
passport.use(new GitHubStrategy(
  {
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/github/callback'
  },
  userHandlerFunction
));
router.get('/auth/github', setDb, saveOriginalUrl,
  passport.authenticate('github', { scope: ['user:email'] }));
router.get('/auth/github/callback',
  passport.authenticate('github'),
  userRedirect
);

// Twitter Login
passport.use(new TwitterStrategy(
  {
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    callbackURL: 'http://localhost:3000/auth/twitter/callback'
  },
  userHandlerFunction
));
router.get('/auth/twitter', setDb, saveOriginalUrl,
  passport.authenticate('twitter'));
router.get('/auth/twitter/callback',
  passport.authenticate('twitter'),
  userRedirect
);

router.get('/auth/whoami', (req, res) => {
  if (req.user) {
    const clientSafeUserData = {
      name: req.user.name,
      photo: req.user.photo,
      username: req.user.username || false,
      _id: req.user._id
    };
    const userData = userActions.communicateUserData(clientSafeUserData);
    res.json(userData);
  }
  res.end();
});

// Logout
router.post('/auth/logout', (req, res) => {
  console.log('Logging out');
  req.session.destroy(() => {
    res.end();
  });
});

module.exports = router;
