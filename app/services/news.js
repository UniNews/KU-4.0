import constants from '../configs/constants';
import axios from 'axios';

export default {
    getAllNews: () => {
        return axios.get(`${constants.API_URL}/articles/news/`)
    },
    getNewsRecommendation: (id) => {
        return axios.get(`${constants.API_URL}/articles/${id}`)
    },
    getUniversityNews: () => {
        return axios.get(`${constants.API_URL}/articles/news/universities`)
    },
    getPromotionsNews: () => {
        return axios.get(`${constants.API_URL}/articles/news/promotions`)
    },
    getClubNews: () => {
        return axios.get(`${constants.API_URL}/articles/news/club`)
    },
    getNewsById: (id) => {
        return axios.get(`${constants.API_URL}/articles/${id}`)
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