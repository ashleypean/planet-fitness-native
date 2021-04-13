const express = require('express')
const router = express.Router()
const passport = require('passport')

router.post('/local', passport.authenticate('local'))

// router.post('/google', passport.authenticate('google'))

// router.post('/twitter', passport.authenticate('twitter'))

// router.post('/facebook', passport.authenticate('facebook'))

module.exports = router