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
function retrieveGuestlist(res) {
    let guestlistQuery = "SELECT * from GuestList;"
    let connection = connectDatabase();
    connection.query(guestlistQuery, (err, result, fields) =>{
        if (err) {
            res.status(500).json({error: err})
            connection.end()
        }
        else {
            console.log('GuestList: ', result)
            res.status(200).json({guestlist: result})
            connection.end()
        }
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

    let test = "SELECT * FROM Question, Answer"

    connection.query(test, (err, result) => {
        if (err) {
            //callback(err, null)
            connection.end()
        }
        else {
            //callback(null, result)
            console.log(result)
            connection.end()
        }
    })
}

function retreivePollQuestions(res) {
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

function retrieveQuestions(req, res) {
    let connection = connectDatabase();
    let questionsQuery = "SELECT * from Question;"

    connection.query(questionsQuery, (err, result) => {
        if (err) res.status(500).json({error: err})
        else {
        let questionsArray = []
        for (let i = 0; i < result.length; i++) {
            let question = {
                questionID: result[i].QuestionID,
                question: result[i].Question
            }
            questionsArray.push(question)
        }
        res.send(questionsArray)
        connection.end()
        }
        
    })
}




function retrieveAnswers(req, res) {
    let connection = connectDatabase();
    let answersQuery = "SELECT * from Answer WHERE QuestionID = ?;"

    connection.query(answersQuery, [14], (err, result) => {
        if (err) resi.status(500).json({error: err})
        else {
        let answersArray = []
        for (let i = 0; i < result.length; i++) {
            let answer = {
                answerID: result[i].AnswerID,
                answer: result[i].ANSWER
            }
            answersArray.push(answer)
            
            res.status(200).send(answersArray)
        }
        
        connection.end()
        }
    })
}


/**
 * Posts the poll results onto the DB.
 * @param {} req 
 * @param {*} res 
 */
function postPollResults (req, res) {
    res.status(200).send('Yeet')
}

module.exports = {
    connectDatabase,
    retrieveGuestlist,
    checkRsvp,
    retreivePollQuestions,
    retrieveSurveyQuestions,
    retrieveAnswers,
    retrieveQuestions,
    postPollResults
}