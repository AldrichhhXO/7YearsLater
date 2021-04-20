import axios from 'axios'
import dotenv from 'dotenv'



/**
 * Dev Instance
 */
const instance = axios.create({
    headers: {
        'Content-Type': 'Application/json', 
    } 
})

export default instance