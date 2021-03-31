const mysql = require('mysql');

/**
 * MySQL connection params
 */
let connection = mysql.createConnection({
    host: process.env.PROD_HOST || process.env.DEV_HOST,
    user: process.env.PROD_USER || process.env.DEV_USER,
    password: process.env.PROD_PW || process.env.DEV_PW,
    port: process.env.PROD_PORT || process.env.DEV_PORT,
    database: process.env.PROD_DB || process.env.DEV_DB,
    insecureAuth: true
})


function connectDatabase() {
    connection.connect((err) = {
        if (err) {
            throw err;
        }
    })
    console.log('Connected')
}

/**
 * RetrieveGuestList query
 * 1. This will be responsible for getting the guestlist.
 */
function retrieveGuestlist() {
    connection.connect((err) => {
        if (err) {
            throw err;
            
        }
    });

    let guestListQuery = "SELECT * from GuestList"
    connection.query(guestListQuery, () => {

    });
    connection.end();
}

/**
 * addGuest query
 * 1. This will add a user to the guestlist
 */
function addGuest() {
    connection.connect((err) => {
        if (err) {
            throw err;
        }
    });

    let insertQuery = "INSERT INTO T "

    connection.end();
}


module.exports = {
    connectDatabase
}