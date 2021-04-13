const LocalStrategy = require('passport-local').Strategy
const User = require('../models/Users')

module.exports = (passport) => {
  console.log('passport intialized')
  passport.use(new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'passwd'
  }, 
  (username, password, done) => {
    const email = username
    // Static method available on User model
    User.verifyLogin(email, password, done)
  }
  ))


  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
}

