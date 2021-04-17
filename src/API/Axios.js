import axios from 'axios'
import dotenv from 'dotenv'



/**
 * Dev Instance
 */
const instance = axios.create({
    baseURL: 'http://localhost:3005',
    headers: {
        
        'Content-Type': 'Application/json', 
    } 
})

export default instance