const express = require('express');
const router = express.Router();
let mysql = require('../db/MySQL');
let bcrypt = require('bcrypt');

/**
 * GET Guestlist route
 *  1. This will be the route responsible for reading all the guests in the DB.
 */
router.get('/dashboard', (req, res) => {
    return mysql.retrieveGuestlist(res);
});


router.post('/admin', (req, res) => {
    let { UserName, Password } = req.body;

    let user = ""

    if (UserName == "Mel.Reboja") user = "Melissa"
    else if (UserName == "Ant.Dorsey") user = "Anthony"

    bcrypt.compare(Password, process.env.hash, (err, result) => {
        if (err) return res.status(500).json({Error: 'Invalid Credentials'})
        else {
            if (result) return res.status(200).json({user: user})
        }
    })
    
})


router.get('/guestlist', (req, res) => {
    return mysql.retrieveGuestlist(res);

})


router.get('/results', (req, res) => {
    return mysql.getPollResults(res)
})

module.exports = router;