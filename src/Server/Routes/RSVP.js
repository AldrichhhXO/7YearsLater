const express = require('express');
const Router = express.Router();
const mysql = require('../db/MySQL');



Router.post('/rsvp', (req, res, next) => {
    
    let { firstName, lastName, email } = req.body

    let body = {
        firstName,
        lastName,
        email
    }
    
    return mysql.checkRsvp(body, res);
   
    /*
    if (mysql.checkRsvp(body)) {
        // Replace JSON with user data
        return res.status(200).json("Validated.");
    }
    else {
        return res.status(500).json('Database Error')
    }

    */
})



module.exports = Router;