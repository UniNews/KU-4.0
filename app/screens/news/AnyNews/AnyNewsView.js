import React from 'react'
import { View, FlatList, ActivityIndicator } from 'react-native'
import styles from './styles'
import NewsCard from '../../../components/news/NewsThread'
import newsService from '../../../services/news'
import Spinner from '../../../components/commons/Spinner'
import { PRIMARY_COLOR } from '../../../assets/css/color'
import Header from '../../../components/commons/Header'
import { Feather } from '@expo/vector-icons'

class AnyNewsView extends React.Component {

    constructor(props) {
        super(props)
        this.page = 1
        this.onEndReachedCalledDuringMomentum = false
        this.state = {
            news: [],
            error: false,
            fetching: false,
            refreshing: false,
            loading: true
        }
    }

    goBack = () => {
        const { navigation } = this.props
        navigation.goBack()
    }

    componentDidMount() {
        this.fetchNews()
    }

    renderItem = ({ item }) => {
        return <View key={item._id} style={styles.newsContainer}>
            <NewsCard onNewsPressed={this.goNews} data={item} />
        </View>
    }

    async fetchNews() {
        try {
            const { recommendation } = this.props.navigation.state.params
            let res
            if (recommendation.type === 'feed')
                res = await newsService.getLatestNews(this.page)
            else if (recommendation.type === 'tags')
                res = await newsService.getNewsByTags(recommendation.tags, this.page)
            else if (recommendation.type === 'popular')
                res = await newsService.getHottestNews(this.page)
            else if (recommendation.type === 'ads')
                res = await newsService.getAds(this.page)
            this.setState({
                news: this.page === 1 ? res.data.articles
                    : [
                        ...this.state.news,
                        ...res.data.articles.filter(n => !this.state.news.some(p => p._id === n._id))
                    ],
                error: false,
                loading: false,
                fetching: false,
                refreshing: false
            })
        }
        catch (err) {
            this.setState({
                error: true,
                loading: false,
                fetching: false,
                refreshing: false
            })
            this.props.showModal()
        }
    }

    renderFooter = () => {
        if (!this.state.fetching)
            return null
        return (
            <ActivityIndicator
                color={PRIMARY_COLOR}
            />
        )
    }

    onRefresh = () => {
        this.setState({ refreshing: true, news: [], })
        this.page = 1
        this.fetchNews()
    }

    onEndReached = () => {
        if (!this.onEndReachedCalledDuringMomentum) {
            this.setState({ fetching: true })
            this.page += 1
            this.fetchNews()
            this.onEndReachedCalledDuringMomentum = true
        }
    }

    goNews = (newsId) => {
        this.props.navigation.push('NewsDetail', { newsId })
    }

    render() {
        const { news, loading, refreshing } = this.state
        const { recommendation } = this.props.navigation.state.params

        return (
            <View style={styles.containter}>
                <Header
                    title={recommendation.title}
                    leftIconComponent={
                        <Feather
                            color={'white'}
                            onPress={this.goBack}
                            size={28}
                            name={'chevron-left'}
                        />
                    }
                />
                {
                    loading
                        ?
                        <Spinner />
                        :
                        <FlatList
                            refreshing={refreshing}
                            onRefresh={this.onRefresh}
                            keyExtractor={(news) => news._id}
                            data={news}
                            initialNumToRender={10}
                            renderItem={this.renderItem}
                            ListFooterComponent={this.renderFooter}
                            onEndReachedThreshold={0.5}
                            onEndReached={this.onEndReached}
                            onMomentumScrollBegin={() => {
                                this.onEndReachedCalledDuringMomentum = false
                            }}
                        />
                }
            </View>
        )
    }
}

export default AnyNewsView