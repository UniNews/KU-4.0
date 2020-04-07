import constants from '../configs/constants';
import axios from 'axios';

export default {
    uploadImage: (uri) => {
        let uriParts = uri.split('.')
        let fileType = uriParts[uriParts.length - 1]
        let formData = new FormData()
        formData.append('image', {
            uri,
            name: `photo.${fileType}`,
            type: `image/${fileType}`
        })
        return axios({
            method: 'post',
            url: `${constants.API_URL}/images`,
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
}