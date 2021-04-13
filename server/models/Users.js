const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = mongoose.Schema({
  firstName: {
    type: String, 
    required: true, 
    maxLength: 100,
  },
  lastName: {
    type: String, 
    required: true, 
    maxLength: 100,
  },
  email: {
    type: String, 
    required: true, 
    maxLength: 100,
    unique: true,
  },
  password: {
    type: String, 
    required: true, 
    maxLength: 100,
  }
}, { timestamp: true})

// Method to get full user's name
UserSchema.virtual('fullName').get(() => {
  return this.firstName + ' ' + this.lastName
})

// Verify user login (find user and compare password with hash)
UserSchema.statics.verifyLogin = async function (email, plainTextPassword, done) {
  try {
    const user = await this.model('User').findOne({ email })
    const { password } = user
    const hashedPassword = await bcrypt.hash(password, 10)
    // Check for: Error / User found / No user found
    if(user) {
      await bcrypt.compare(password, hashedPassword, (err, match) => {
        if(err) throw err
        if(match) return done(null, user)
        else return done(null, false, { message: 'Login Unsuccessful. Please try again' })
      })
    }
    
  }catch(err) {
    return done(err)
  }
}



// Add a new user to the databse
UserSchema.statics.createNewUser = async function (userObj) {
  const {email, password, firstName, lastName} = userObj

  console.log('plainTextPassword', password)
  try {
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = await this.model('User').create({
      email, 
      firstName, 
      lastName,
      password: hashedPassword, 
    })
    return { status: 200, newUser }
  }catch(err) {
    console.log('error creating user', err)
    return { status: 500, err }
  }
}



module.exports =  mongoose.model('User', UserSchema)