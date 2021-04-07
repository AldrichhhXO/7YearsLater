const mysql = require('mysql');

function connectDatabase() {
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
    return connection
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
        
    })
}

function checkRsvp(req, res) {
    let connection = connectDatabase();
    let checkQuery = "SELECT * FROM GuestList WHERE FirstName = ? AND LastName = ? AND Email = ?;"

    connection.query(checkQuery, [req.firstName, req.lastName, req.email], (error, result, fields) => {
        if (error) console.group(error.message);
        else {
            if (result.length === 0) {
                res.status(308).json({message: "Invalid Credentials"});
            }
            else {
                res.status(201).json(result)
                
            }
            connection.end()
        }
    }) 
}



function retrieveSurveyQuestions(res) {
    let connection = connectDatabase();

    let questionsQuery = "SELECT * FROM Question"

    connection.query(questionsQuery, (err, result) => {
        if (err) return 0
        else {
            return 1
        }
    })
}

async function retreivePollQuestions(res) {
    let connection = connectDatabase();
    
    pollContainer = []

    // Retrieve all of the questions
    let questionsQuery = "SELECT * FROM Question"

    // Multiple queries
    let firstQuery = connection.query(questionsQuery, (err, result) => {
        let questionContainer = []
        console.log(result)
        
        for (let i = 0; i < result.length; i++) {
            let poll = []
            let question = {
                questionID: result[i].QuestionID,
                Question: result[i].Question,
            }
            
        }
    });

    /*
    firstQuery.on('result', (row) => {
        let secondQuery = "SELECT * FROM Answer WHERE QuestionID = ?"
        connection.query(secondQuery,[row.QuestionID], (err, result) => {

            if (result.length > 0) {
                let poll = []
                for (let i = 0; i < result.length; i++) {

                    let answer = {
                        questionID: result[i].QuestionID,
                        answer: result[i].ANSWER,
                        answerID: result[i].answerID
                    }

                    poll.push(answer)
                    console.log(poll)
                }
                
            }
        })
    })
    firstQuery.on('end', (res) => {
        
        connection.end()
    })
    */
    // connection.end()
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
    retrieveGuestlist,
    checkRsvp,
    retreivePollQuestions,
    retrieveSurveyQuestions
}