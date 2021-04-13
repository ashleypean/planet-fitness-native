const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')
const passport = require('passport')
require('dotenv').config()

const app = express()
const PORT = 8080

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.SECRET_KEY,
  store: MongoStore.create({
    ttl: 14 * 24 * 60 * 60 ,// 14 days 
    autoRemove: 'native',
    autoRemoveInterval: 10,
    collectionName: 'sessions',
    mongoUrl: process.env.DB_CONECTION_STRING
  })
}));

app.use(passport.initialize())
app.use(passport.session())

// Initialize passport
require('./passport/passport')(passport)

app.use('/api', require('./routes/api'))



mongoose.connect(process.env.DB_CONECTION_STRING, 
  {useNewUrlParser: true, useUnifiedTopology: true},
  (err) => {
    if(err) console.log('Error connection to DB ', err)
    else console.log('Connected to DB')
  }
)



app.listen(PORT, () => {
  console.log('Server is listening on port', PORT)
})
