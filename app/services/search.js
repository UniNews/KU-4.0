import constants from '../configs/constants';
import axios from 'axios';

export default {
    getAllNews: () => {
        return axios.get(`${constants.API_URL}/news/`)
    },
    getAllUsers: () => {
        return axios.get(`${constants.API_URL}/users/`)
    },
}