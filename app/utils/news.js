import constants from '../configs/constants';
import axios from 'axios';

export default {
    getNewsRecommendation: async (id) => {
        return await axios.get(`${constants.API_URL}/news/${id}`)
            .then(response => response.data)
            .catch(error => error)
    },
}