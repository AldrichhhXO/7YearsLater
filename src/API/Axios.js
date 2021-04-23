import axios from 'axios'

const instance = axios.create({
    headers: {
        'Content-Type': 'Application/json', 
    } 
})

export default instance