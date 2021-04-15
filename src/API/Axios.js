import axios from 'axios'
import dotenv from 'dotenv'



/**
 * Dev Instance
 */
const instance = axios.create({
    baseURL: "http://reboja-dorsey.herokuapp.com/",
    headers: {
        'Content-Type': 'Application/json', 
    } 
})

export default instance