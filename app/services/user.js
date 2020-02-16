import constants from '../configs/constants';
import axios from 'axios';
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';

export default {
    login: (username, password) => {
        const json = {
            grant_type: 'password',
            username: username,
            password: password
        }
        return axios.post(`${constants.API_URL}/token`, json, {
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.data)
            .catch(error => error)
    },
    getProfile: ()=>{
        return axios.get(`${constants.API_URL}/profile`)
    },
    getUserById: (id)=>{
        return axios.get(`${constants.API_URL}/users/${id}`).then(response => response.data)
        .catch(error => error)
    },
    loginByFacebook: async () => {
        const appId = constants.APP_ID;
        const permissions = ['public_profile', 'email'];
        await Facebook.initializeAsync(appId);
        const {
            type,
            token,
        } = await Facebook.logInWithReadPermissionsAsync(
            appId,
            { permissions }
        );
        switch (type) {
            case 'success': {
                const response = await axios.get(`https://graph.facebook.com/me?access_token=${token}`);
                console.log('Logged in!', `Hi ${(response.data.name)}!`);
                return response.data
            }
            case 'cancel': {
                return Promise.reject('Cancel by user');
            }
        }
    },
    loginByGoogle: async () => {

        const result = await Google.logInAsync({
            androidClientId: '319434606205-n3k9ijd91al3h7bcropp4e17rf8j1klk.apps.googleusercontent.com',
            iosClientId: '319434606205-c5ooi2joi9d4un5pi227aitkpls5ku10.apps.googleusercontent.com',
            scopes: ['profile', 'email'],
            // iosStandaloneAppClientId: `319434606205-c5ooi2joi9d4un5pi227aitkpls5ku10.apps.googleusercontent.com`,
            // androidStandaloneAppClientId: `319434606205-n3k9ijd91al3h7bcropp4e17rf8j1klk.apps.googleusercontent.com`,
        }
        );

        if (result.type === 'success') {
            return result.user
        }
        else {
            return Promise.reject('Cancel by user');
        }
    }

}