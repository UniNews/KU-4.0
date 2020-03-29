import React from 'react'
import { ScrollView, View } from 'react-native'
import styles from './styles'
import NewsCard from '../../../components/news/NewsThread'
import Hr from '../../../components/commons/Hr'
import StatusBar from '../../../components/commons/StatusBar'
import Header from '../../../components/commons/Header'
import { Feather } from '@expo/vector-icons'
import userService from '../../../services/user'
import Spinner from '../../../components/commons/Spinner'

class ClubView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            news: [],
            loading: true,
            error: false
        }
    }

    async componentDidMount() {
        const { userId } = this.props.navigation.state.params
        try {
            const response = await userService.getUserById(userId)
            this.setState({
                loading: false,
                error: false,
                news: response.data.news
            })
        }
        catch (err) {
            this.setState({
                loading: false,
                error: true
            })
        }
    }

    goNews = (newsId) => {
        const { navigation } = this.props
        navigation.push('NewsDetail', { newsId })
    }

    goBack = () => {
        const { navigation } = this.props
        navigation.goBack()
    }

    render() {
        const { news, loading } = this.state
        return (
            <View style={styles.containter}>
                <StatusBar />
                <Header
                    title={'โพสต์ทั้งหมด'}
                    leftIconComponent={
                        <Feather
                            color='white'
                            onPress={this.goBack}
                            size={28}
                            name={'chevron-left'}
                        />
                    }
                />
                {
                    !loading
                        ?
                        <ScrollView>
                            {news?.map((news, index, newsArray) => {
                                return (
                                    <View key={news._id} style={styles.newsContainer}>
                                        <NewsCard onNewsPressed={this.goNews} data={news} />
                                        {
                                            index == newsArray.length - 1
                                                ?
                                                null
                                                :
                                                <Hr />
                                        }
                                    </View>
                                )
                            })}
                        </ScrollView>
                        :
                        <Spinner />
                }
            </View>
        )
    }
}

export default ClubView