import Axios from 'axios'

/**
 * Axios Api
 */
export default Api = Axios.create({
    baseURL: 'http://localhost:3000'
})