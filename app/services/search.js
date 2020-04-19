import constants from '../configs/constants'
import axios from 'axios'

const ARTICLES_PER_PAGE = 10
const USER_PER_PAGE = 10

export default {
    getNewsByTitle: (title, page) => {
        const offset = (page - 1) * ARTICLES_PER_PAGE
        return axios.get(`${constants.API_URL}/articles/news?title=${title}&offset=${offset}&limit=${ARTICLES_PER_PAGE}`)
    },
    getNewsByDescription: (description, page) => {
        const offset = (page - 1) * ARTICLES_PER_PAGE
        return axios.get(`${constants.API_URL}/articles/news?description=${description}&offset=${offset}&limit=${ARTICLES_PER_PAGE}`)
    },
    getCommunitiesByDescription: (description, page) => {
        const offset = (page - 1) * ARTICLES_PER_PAGE
        return axios.get(`${constants.API_URL}/articles/communities?description=${description}&offset=${offset}&limit=${ARTICLES_PER_PAGE}`)
    },
    getUsersByName: (name, page) => {
        const offset = (page - 1) * USER_PER_PAGE
        return axios.get(`${constants.API_URL}/users?name=${name}&offset=${offset}&limit=${ARTICLES_PER_PAGE}`)
    },
}