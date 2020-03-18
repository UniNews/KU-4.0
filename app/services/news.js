import constants from '../configs/constants';
import axios from 'axios';

export default {
    getAllNews: () => {
        return axios.get(`${constants.API_URL}/news/`)
    },
    getNewsRecommendation: (id) => {
        return axios.get(`${constants.API_URL}/news/${id}`)
    },
    getUniversityNews: () => {
        return axios.get(`${constants.API_URL}/news/universities`)
    },
    getPromotionsNews: () => {
        return axios.get(`${constants.API_URL}/news/promotions`)
    },
    getClubNews: () => {
        return axios.get(`${constants.API_URL}/news/club`)
    },
    getNewsById: (id) => {
        return axios.get(`${constants.API_URL}/news/${id}`)
    },
    postComment: (newsId, msg) => {
        const json = {
            text: msg
        }
        return axios.post(`${constants.API_URL}/news/${newsId}/comments`, json, {
            headers: { 'Content-Type': 'application/json' }
        })
    },
    likeComment: (commentId) => {
        return axios.post(`${constants.API_URL}/news/${commentId}/like`, {
            headers: { 'Content-Type': 'application/json' }
        })
    }
}