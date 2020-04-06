import constants from '../configs/constants';
import axios from 'axios';

export default {
    getAllNews: () => {
        return axios.get(`${constants.API_URL}/articles/`)
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
    postComment: async (newsId, msg) => {
        const json = {
            description: msg
        }
        try {
            const result = await axios.post(`${constants.API_URL}/articles/${newsId}/comments`, json)

            return result
        }
        catch (err) {
            console.log(err.response)
        }
    },
    likeComment: (newsId, commentId) => {
        return axios.post(`${constants.API_URL}/articles/${newsId}/comments/${commentId}/like`)
    },
    getComments: (communityId) => {
        return axios.get(`${constants.API_URL}/articles/${communityId}/comments`)
    },
    unlikeComment: (newsId, commentId) => {
        return axios.delete(`${constants.API_URL}/articles/${newsId}/comments/${commentId}/like`)
    },
    likeNews: (newsId) => {
        return axios.post(`${constants.API_URL}/articles/${newsId}/like`)
    },
    getLatestCommunities: () => {
        return axios.get(`${constants.API_URL}/articles/communities`)
    },
    getHottestCommunities: () => {
        return axios.get(`${constants.API_URL}/articles/communities`)
    },
}