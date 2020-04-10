import React from 'react'
import { View, FlatList, Animated } from 'react-native'
import styles from './styles'
import NewsCard from '../../../../components/news/NewsThread'
import Thread from '../../../../components/community/Thread'

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

class NewsList extends React.Component {

    constructor(props) {
        super(props)
        this.onEndReachedCalledDuringMomentum = false
        super(props)
        this.state = {
            news: this.props.screenProps.news,
        }
    }

    goNews = (newsId) => {
        this.props.screenProps.navigation.push('NewsDetail', { newsId })
    }

    goCommunity = (communityId) => {
        this.props.screenProps.navigation.push('CommunityDetail', { communityId })
    }

    renderNews = ({ item }) => {
        return <View key={item._id} style={styles.newsContainer}>
            <NewsCard onNewsPressed={this.goNews} data={item} />
        </View>
    }

    renderCommunities = ({ item }) => {
        return <View key={item._id} style={styles.newsContainer}>
            <Thread data={item} onThreadPressed={this.goCommunity} />
        </View>
    }

    render() {
        const { news } = this.state
        const { scroll, handleScroll, user } = this.props.screenProps
        return (
            <View style={styles.containter}>
                {
                    <AnimatedFlatList
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.contentGap}
                        data={news}
                        renderItem={user.role === 'user' ? this.renderCommunities : this.renderNews}
                        keyExtractor={(news, i) => news._id}
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { y: scroll } } }],
                            { listener: (event) => handleScroll(event) },
                            { useNativeDriver: true }
                        )}
                        scrollEventThrottle={0}
                    />
                }
            </View>
        )
    }
}

export default NewsList