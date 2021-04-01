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
    connection.connect((err) => {
        if (err) {
            console.error('Error connecting: ', err)
            return;
        }
        console.log(connection.threadId)
    })
}

/**
 * RetrieveGuestList query
 * 1. This will be responsible for getting the guestlist.
 * 2. result returns the data, similar to JSON
 * 3. result[0] Isolates the first one
 * 4. result[0].FirstName Gets the first name of the first data entry
 */
function retrieveGuestlist() {
    let guestlistQuery = "SELECT * from GuestList;"
    connection.query(guestlistQuery, (err, result, fields) =>{
        console.log(result[0]);
    })
}

function checkRsvp(req) {
    let checkQuery = "SELECT * FROM GuestList WHERE FirstName = '*' AND LastName = '*' AND Email = '*';"
    connection.query(checkQuery, (err, result, fields) => {
        // Handle the after math here.
    })
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
    connectDatabase,
    retrieveGuestlist
}