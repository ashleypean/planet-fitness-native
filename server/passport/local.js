const LocalStrategy = require('passport-local').Strategy

const local = new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'passwd'
  }, 
  (username, password, done) => {
    const email = username
    // Static method available on User model
    User.verifyLogin(email, password, done)
  }
)

module.exports = local