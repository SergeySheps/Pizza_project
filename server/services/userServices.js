const config = require('../config.json')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const db = require('../helpers/dbHelpers')
const {saltRounds} = require('../constants/constants')
const mongoose = require('mongoose')
const User = db.User

module.exports = {
  createAccount,
  login,
  checkEqualEmail
}

async function createAccount(userParam) {
  mongoose.connect(
    config.connectionDBString,
    {useNewUrlParser: true}
  )
  
  const user = new User(userParam)

  if (userParam.password) {
    user.hashPassword = bcrypt.hashSync(userParam.password, saltRounds)
  }

  return await user.save().then(res => {
    mongoose.connection.close()
    return res
  })
}

async function checkEqualEmail(userParam) {
  mongoose.connect(
    config.connectionDBString,
    {useNewUrlParser: true}
  )

  return (await User.findOne({email: userParam.email}).then(res => {
    mongoose.connection.close()
    return res
  }))
    ? {equal: true}
    : {equal: false}
}

async function login({email, password}) {
  mongoose.connect(
    config.connectionDBString,
    {useNewUrlParser: true}
  )

  const user = await User.findOne({email}).then(res => {
    mongoose.connection.close()
    return res
  })

  if (user && bcrypt.compareSync(password, user.hashPassword)) {
    const {hashPassword, ...userData} = user.toObject()
    const token = jwt.sign({sub: user.id}, config.secretWord)

    return {
      ...userData,
      token
    }
  }
}
