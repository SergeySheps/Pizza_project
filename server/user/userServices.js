const config = require('../config.json');
// const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../helpers/db');
const User = db.User;

module.exports = {
    createAccount,
    login
}

async function createAccount(userParam) {
    const user = new User(userParam);
    if (userParam.password) {
        user.hashPassword = bcrypt.hashSync(userParam.password, 10);
    }
    return await user.save();
}

async function login({ email, password }) {
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.hashPassword))) {
        //TODO add jwt token
        const { hashPassword, ...userData } = user.toObject();
        return userData;
    }
}