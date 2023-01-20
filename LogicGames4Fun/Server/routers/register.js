// import { User } from "../models/user";
const User = require( "../models/user")
const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.json({message: 'Register test.'})
})

router.post('/', (req, res) => {
    const newUser = new User({
        login: req.body.login,
        password: req.body.password,
        email: req.body.email
    })
    res.json(newUser);
    
})

module.exports = router;