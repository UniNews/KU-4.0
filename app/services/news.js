import constants from '../configs/constants'
import axios from 'axios'

const ARTICLES_PER_PAGE = 10

export default {
    getAllNews: () => {
        return axios.get(`${constants.API_URL}/articles/`)
    },
    getUniversityNews: (page) => {
        const offset = (page - 1) * ARTICLES_PER_PAGE
        return axios.get(`${constants.API_URL}/articles/news/university?offset=${offset}&limit=${ARTICLES_PER_PAGE}`)
    },
    getPromotionsNews: (page) => {
        const offset = (page - 1) * ARTICLES_PER_PAGE
        return axios.get(`${constants.API_URL}/articles/news/promotion?offset=${offset}&limit=${ARTICLES_PER_PAGE}`)
    },
    getClubNews: (page) => {
        const offset = (page - 1) * ARTICLES_PER_PAGE
        return axios.get(`${constants.API_URL}/articles/news/club?offset=${offset}&limit=${ARTICLES_PER_PAGE}`)
    },
    getNewsById: (id) => {
        return axios.get(`${constants.API_URL}/articles/${id}`)
    },
    postComment: (newsId, msg) => {
        const json = {
            description: msg
        }
        return axios.post(`${constants.API_URL}/articles/${newsId}/comments`, json, {
            headers: { 'Content-Type': 'application/json' }
        })
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
    unlikeNews: (newsId) => {
        return axios.delete(`${constants.API_URL}/articles/${newsId}/like`)
    },
    getLatestCommunities: (page) => {
        const offset = (page - 1) * ARTICLES_PER_PAGE
        return axios.get(`${constants.API_URL}/articles/communities?offset=${offset}&limit=${ARTICLES_PER_PAGE}`)
    },
    getHottestCommunities: (page) => {
        const offset = (page - 1) * ARTICLES_PER_PAGE
        return axios.get(`${constants.API_URL}/articles/communities/trending?offset=${offset}&limit=${ARTICLES_PER_PAGE}`)
    },
    postCommunity: (description, tag) => {
        const json = {
            description,
            tags: [tag],
            articleType: 'community',
        }
        return axios.post(`${constants.API_URL}/articles/`, json, {
            headers: { 'Content-Type': 'application/json' }
        })
    },
    getNewsByTag: (tag, page) => {
        const offset = (page - 1) * ARTICLES_PER_PAGE
        return axios.get(`${constants.API_URL}/articles/news/?offset=${offset}&limit=${ARTICLES_PER_PAGE}&tag=${tag}`)
    }
}