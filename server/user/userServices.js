const config = require('../config.json')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const db = require('../helpers/db')
const User = db.User

module.exports = {
  createAccount,
  login,
}

async function createAccount(userParam) {
  const user = new User(userParam)

  if (userParam.password) {
    user.hashPassword = bcrypt.hashSync(userParam.password, 10)
  }

  return await user.save()
}

async function login({ email, password }) {
  const user = await User.findOne({ email })

  if (user && bcrypt.compareSync(password, user.hashPassword)) {
    const { hashPassword, ...userData } = user.toObject()
    const token = jwt.sign({ sub: user.id }, config.secretWord)

    return {
      ...userData,
      token,
    }
  }
}
