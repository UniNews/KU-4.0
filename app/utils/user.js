import constants from '../configs/constants';
import axios from 'axios';

export default {
    login: async (information) => {
        return await axios.post(`${constants.API_URL}/token`,information,{
        headers:
            {
                'Content-Type':'application/json'
            }}
        )
            .then(response => response.data)
            .catch(error => 
                error
            )
    }
}