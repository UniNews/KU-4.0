import React from 'react'
import { Text, View, ActivityIndicator, TextInput, ScrollView, TouchableWithoutFeedback } from 'react-native'
import StatusBar from '../../../components/commons/StatusBar'
import styles from './styles'
import Header from '../../../components/commons/Header'
import { Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import { PRIMARY_COLOR } from '../../../assets/css/color'
import newsService from '../../../services/news'
import NewsCard from '../../../components/news/NewsThread'
import Button from '../../../components/commons/Button'

class NewsSearchNews extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            news: [],
            searching: false,
            query: '',
            selectedTag: '',
            error: false
        }
    }

    search = () => {

    }


    getNews = (newsId) => {
        this.props.navigation.navigate('Detail', { newsId })
    }

    getProfile = (profileId) => {
        console.log(profileId)
    }

    render() {
        const { } = this.state
        return (
            <View style={styles.containter}>

            </View >
        )
    }
}

export default NewsSearchNews