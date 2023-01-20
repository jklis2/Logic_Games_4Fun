const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.json({message: 'Login test.'})
})

router.post('/', (req, res) => {

})

module.exports = router;