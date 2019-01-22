const passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

const User = require('./models/user');

// set up passport configs
passport.use(new GoogleStrategy({
  clientID: '502171594694-0e50g1ou5sg4s9fmvonpl4iueqq11m3v.apps.googleusercontent.com',
  clientSecret: 'w9M5BMsgNRVCzxsFEHeZoySF',
  callbackURL: '/auth/google/callback'
}, function (accessToken, refreshToken, profile, done) {
  User.findOne({
    'googleid': profile.id
  }, function (err, user) {
    if (err) return done(err);

    if (!user) {
      user = new User({
        name: profile.displayName,
        googleid: profile.id
      });

      user.save(function (err) {
        if (err) console.log(err);

        return done(err, user);
      });
    } else {
      return done(err, user);
    }
  });
}));

passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

module.exports = passport;
