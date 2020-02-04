import constants from '../configs/constants';
import axios from 'axios';

export default {
    login: (username, password) => {
        const json = {
            grant_type: 'password',
            username: username,
            password: password
        }
        return axios.post(`${constants.API_URL}/token`, json, {
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.data)
            .catch(error => error)
    },
    getProfile: ()=>{
        return axios.get(`${constants.API_URL}/profile`)
    },
    getUserById: (id)=>{
        return axios.get(`${constants.API_URL}/users/${id}`).then(response => response.data)
        .catch(error => error)
    }
}