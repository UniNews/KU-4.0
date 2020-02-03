import constants from '../configs/constants';
import axios from 'axios';

export default {
    getNewsRecommendation: (id) => {
        return axios.get(`${constants.API_URL}/news/${id}`)
            .then(response => response.data)
            .catch(error => error)
    },
    getUniversityNews: () => {
        return axios.get(`${constants.API_URL}/news/universities`)
    },
    getPromotionsNews: () => {
        return axios.get(`${constants.API_URL}/news/promotions`)
    },
    getClubNews: () => {
        return axios.get(`${constants.API_URL}/news/club`)
    }
}