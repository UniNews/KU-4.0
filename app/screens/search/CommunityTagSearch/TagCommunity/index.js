import React from 'react'
import { FlatList, View, ActivityIndicator } from 'react-native'
import styles from './styles'
import Thread from '../../../../components/community/Thread'
import newsService from '../../../../services/news'
import Spinner from '../../../../components/commons/Spinner'
import { PRIMARY_COLOR } from '../../../../assets/css/color'

class TagCommunityView extends React.Component {

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
        return <Thread key={item._id} style={styles.newsContainer} onNewsPressed={this.goNews} data={item} />
    }

    async fetchNews() {
        try {
            const tag = this.props.navigation.state.routeName
            const res = await newsService.getCommunitiesByTags([tag], this.page)
            this.setState({
                news: this.page === 1 ? res.data.articles : [
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

    goBack = () => {
        const { navigation } = this.props
        navigation.goBack()
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

export default TagCommunityView