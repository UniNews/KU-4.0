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

    goCommunity = (newsId) => {
        this.props.screenProps.navigation.push('CommunityDetail', { newsId })
    }

    renderNews = ({ item }) => {
        return <View key={item._id} >
            {
                item.articleType === 'news'
                    ?
                    <NewsCard navigation={this.props.screenProps.navigation} style={styles.newsContainer} data={item} />
                    :
                    <Thread data={item} style={styles.newsContainer} onThreadPressed={this.goCommunity} />
            }
        </View>
    }

    render() {
        const { news } = this.state
        const { scroll, handleNewsScroll } = this.props.screenProps
        return (
            <View style={styles.containter}>
                {
                    <AnimatedFlatList
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.contentGap}
                        data={news}
                        renderItem={this.renderNews}
                        keyExtractor={(news, i) => news._id}
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { y: scroll } } }],
                            { listener: (event) => handleNewsScroll(event) },
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