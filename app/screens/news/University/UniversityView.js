import React from 'react'
import { View, FlatList, ActivityIndicator } from 'react-native'
import styles from './styles'
import NewsCard from '../../../components/news/NewsThread'
import newsService from '../../../services/news'
import Spinner from '../../../components/commons/Spinner'
import { PRIMARY_COLOR } from '../../../assets/css/color'

class UniversityView extends React.Component {

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
            const res = await newsService.getUniversityNews(this.page)
            this.setState({
                news: this.page === 1 ? res.data.articles :
                    [
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
        return (
            <View style={styles.containter}>
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

export default UniversityView