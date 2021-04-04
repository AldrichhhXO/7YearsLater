const express = require('express');
const router = express.Router();

/**
 * GET Guestlist routes
 *  1. This will be the route responsible for reading all the guests in the DB.
 */
router.get('/guestliist', (req, res, next) => {

});

/**
 * POST Guestlist Route
 *  1. This will allow the admin user to add a user
 */
router.post('/guestlist', (req, res, next) => {

});


router.post('/admin', (req, res, next) => {
    let [ userName, password ] = req.body; //
})



router.get('/admin', (req, res) => {
    res.json({message: "hello" })

})


module.exports = router;