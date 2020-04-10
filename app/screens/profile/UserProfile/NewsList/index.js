import React from 'react'
import { View, FlatList, Animated, ActivityIndicator } from 'react-native'
import styles from './styles'
import Spinner from '../../../../components/commons/Spinner'
import userService from '../../../../services/user'
import NewsCard from '../../../../components/news/NewsThread'
import { PRIMARY_COLOR } from '../../../../assets/css/color'

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

class NewsList extends React.Component {

    constructor(props) {
        super(props)
        this.page = 1
        this.onEndReachedCalledDuringMomentum = false
        super(props)
        this.state = {
            news: [],
            error: false,
            fetching: false,
            loading: true
        }
    }

    goBack = () => {
        const { navigation } = this.props
        navigation.goBack()
    }

    async componentDidMount() {
        this.fetchNews()
    }

    async fetchNews() {
        try {
            const userId = this.props.screenProps.user._id
            const res = await userService.getUserNewsById(userId, this.page)
            this.setState({
                news: this.page === 1 ? res.data.articles : [...this.state.news, ...res.data.articles],
                error: false,
                loading: false,
                fetching: false,
            })
        }
        catch (err) {
            this.setState({
                error: true,
                loading: false,
                fetching: false,
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

    onEndReached = () => {
        if (!this.onEndReachedCalledDuringMomentum) {
            this.setState({ fetching: true })
            this.page += 1
            this.fetchNews()
            this.onEndReachedCalledDuringMomentum = true
        }
    }

    goNews = (newsId) => {
        this.props.screenProps.navigation.push('NewsDetail', { newsId })
    }

    renderItem = ({ item }) => {
        return <View key={item._id} style={styles.newsContainer}>
            <NewsCard onNewsPressed={this.goNews} data={item} />
        </View>
    }

    render() {
        const { news, loading } = this.state
        const { scroll, handleScroll } = this.props.screenProps
        return (
            <View style={styles.containter}>
                {
                    !loading ?
                        <AnimatedFlatList
                            contentContainerStyle={styles.contentGap}
                            data={news}
                            renderItem={this.renderItem}
                            keyExtractor={(news, i) => news._id}
                            onScroll={Animated.event(
                                [{ nativeEvent: { contentOffset: { y: scroll } } }],
                                { listener: (event) => handleScroll(event) },
                                { useNativeDriver: true }
                            )}
                            scrollEventThrottle={0}
                            ListFooterComponent={this.renderFooter}
                            onEndReachedThreshold={0.5}
                            onEndReached={this.onEndReached}
                            onMomentumScrollBegin={() => {
                                this.onEndReachedCalledDuringMomentum = false
                            }}
                        />
                        :
                        <Spinner />
                }
            </View>
        )
    }
}

export default NewsList