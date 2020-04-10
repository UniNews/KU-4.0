import React from 'react'
import { View, FlatList, Animated } from 'react-native'
import styles from './styles'
import NewsCard from '../../../../components/news/NewsThread'

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

    renderItem = ({ item }) => {
        return <View key={item._id} style={styles.newsContainer}>
            <NewsCard onNewsPressed={this.goNews} data={item} />
        </View>
    }

    render() {
        const { news } = this.state
        const { scroll, handleScroll } = this.props.screenProps
        return (
            <View style={styles.containter}>
                {
                    <AnimatedFlatList
                        showsVerticalScrollIndicator={false}
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
                    />
                }
            </View>
        )
    }
}

export default NewsList