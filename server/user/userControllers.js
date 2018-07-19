const express = require("express");
const db = require("../helpers/db");
const userServices = require("./userServices");
const router = express.Router();


module.exports = router;
router.post("/registration", register);
router.post("/login", login);


function register(req, res, next) {
    console.log(req.body);
    userServices.createAccount(req.body).then(
        (user) => {
            res.json({})
        },
        (error) => { 
            res.status(500).json({message: error.message})
         }
    )
}
function login(req, res, next) {
    console.log(req.body);
    userServices.login(req.body).then(
        (user) => {
            console.log(user);
            user ? res.json(user) : res.status(400).json({ message: "Incorrect Email or password" })
        },
        (error) => { res.status(500).json({message: error.message}) }
    )
}