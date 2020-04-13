import React from 'react'
import { FlatList, View, ActivityIndicator } from 'react-native'
import styles from './styles'
import NewsCard from '../../../components/news/NewsThread'
import Header from '../../../components/commons/Header'
import { Feather } from '@expo/vector-icons'
import newsService from '../../../services/news'
import Spinner from '../../../components/commons/Spinner'
import { PRIMARY_COLOR } from '../../../assets/css/color'

class TagNewsView extends React.Component {

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
            const { tag } = this.props.navigation.state.params
            const res = await newsService.getNewsByTag(tag, this.page)
            this.setState({
                news: this.page === 1 ? res.data.articles : [...this.state.news, ...res.data.articles],
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
        this.setState({ refreshing: true })
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

    goBack = () => {
        const { navigation } = this.props
        navigation.goBack()
    }

    render() {
        const { news, loading, refreshing } = this.state
        return (
            <View style={styles.containter}>
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

export default TagNewsView