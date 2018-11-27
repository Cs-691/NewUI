import axios from 'axios';
export default {
    baseURL: 'http://127.0.0.1:5000' ,
    request: async (options) => {
        const response = await axios(options)

        return response
    }
}