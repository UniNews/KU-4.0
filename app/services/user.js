import constants from '../configs/constants';
import axios from 'axios';

export default {
    login: async (username, password) => {
        const json = {
            grant_type: 'password',
            username: username,
            password: password
        }
        return await axios.post(`${constants.API_URL}/token`, json, {
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.data)
            .catch(error => error)
    }
}