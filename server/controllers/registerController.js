const express = require('express')
const User = require('../models/Users')

const registerController = {}

registerController.createNewUser = async (req, res) => {
  const { email, password, firstName, lastName } = req.body.data

  const response = await User.createNewUser({
    email, 
    password, 
    firstName, 
    lastName,
  })  

  if(response.status === 200) res.status(200).json(response.newUser)
  else res.status(500).json(response.err)
  // if(response.message === 'Success') res.json()
}

module.exports = registerController