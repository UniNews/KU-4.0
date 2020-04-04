import constants from '../configs/constants';
import axios from 'axios';

export default {
    getCommunitiesById: (id) => {
        return axios.get(`${constants.API_URL}/articles/${id}`)
    },
    getLatestCommunities: () => {
        return axios.get(`${constants.API_URL}/articles/communities`)
    },
    getHottestCommunities: () => {
        return axios.get(`${constants.API_URL}/articles/communities`)
    },
    postComment: (communityId, msg) => {
        const json = {
            description: msg
        }
        return axios.post(`${constants.API_URL}/articles/${communityId}/comments`, json, {
            headers: { 'Content-Type': 'application/json' }
        })
    },
    likeComment: (communityId, commentId) => {
        return axios.post(`${constants.API_URL}/articles/${communityId}/comments/${commentId}/like`)
    },
    likeCommunity: (communityId) => {
        return axios.post(`${constants.API_URL}/articles/${communityId}/like`)
    },
    getComments: (communityId) => {
        return axios.get(`${constants.API_URL}/articles/${communityId}/comments`)
    },
    unlikeComment: (communityId, commentId) => {
        return axios.delete(`${constants.API_URL}/articles/${communityId}/comments/${commentId}/like`)
    }
}