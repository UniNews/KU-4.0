import constants from '../configs/constants';
import axios from 'axios';

export default {
    getCommunitiesById: (id) => {
        return axios.get(`${constants.API_URL}/communities/${id}`)
    },
    getLatestCommunities: () => {
        return axios.get(`${constants.API_URL}/communities/latest`)
    },
    getHottestCommunities: () => {
        return axios.get(`${constants.API_URL}/communities/hottest`)
    },
    postComment: (newsId, msg) => {
        const json = {
            text: msg
        }
        return axios.post(`${constants.API_URL}/communities/${newsId}/comments`, json, {
            headers: { 'Content-Type': 'application/json' }
        })
    },
    likeComment: (commentId) => {
        return axios.post(`${constants.API_URL}/communities/${commentId}/like`, {
            headers: { 'Content-Type': 'application/json' }
        })
    },
    likeCommunity: (communityId) => {
        return axios.post(`${constants.API_URL}/communities/${communityId}/like-community`, {
            headers: { 'Content-Type': 'application/json' }
        })
    }
}