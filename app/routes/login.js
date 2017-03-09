const express = require('express');
const passport = require('passport');
const router = new express.Router();
const findUser = require('../controllers/findUser.server.js');

let db;

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
passport.use(new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/google/callback',
  },
  function(accessToken, refreshToken, profile, done) {
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
  }
));
router.get('/auth/google',
  (req, res, next) => {
    console.log('asigna la base de datos');
    db = req.app.db;
    next();
  },
  passport.authenticate('google', {scope: ['profile', 'email']})
);
router.get('/auth/google/callback',
  passport.authenticate('google'),
  function(req, res) {
    // here I should check if that's the first time and send the user to its
    // profile to fill everything
    res.redirect('/');
  }
);

module.exports = router;
