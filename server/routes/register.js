const express = require('express')
const { route } = require('./login')
const router = express.Router()
const controller = require('../controllers/registerController')

router.post('/', controller.createNewUser)

module.exports = router