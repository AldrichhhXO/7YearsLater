import axios from 'axios'


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