import React from 'react'
import { SectionList, FlatList, TouchableNativeFeedback, View } from 'react-native'
import styles from './styles'
import SliderBox from '../../../components/news/PaginationSlider'
import SectionHeader from '../../../components/commons/SectionHeader'
import NewsCard from '../../../components/news/NewsCard'
import newsService from '../../../services/news'

class RecommendationView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            sections: [],
            error: false,
            refreshing: false,
            loading: true
        }
    }

    componentDidMount() {
        this.fetchNews()
    }

    async fetchNews() {
        try {
            const res = await newsService.getRecommendations()
            const sections = []
            for (const recommendation of res.data) {
                let section = {}
                if (recommendation.type === 'feed')
                    section.title = `ข่าวล่าสุด`
                else if (recommendation.type === 'tags') {
                    section.title = `ข่าวที่คุณน่าสนใจ (${recommendation.tags?.join(', ')})`
                    section.tags = recommendation.tags
                }
                else if (recommendation.type === 'popular')
                    section.title = `ข่าวที่กำลังฮิตตอนนี้`
                else if (recommendation.type === 'ads')
                    section.title = `แนะนำ`
                section.data = [recommendation.articles]
                section.type = recommendation.type
                sections.push(section)
            }
            this.setState({
                sections,
                error: false,
                loading: false,
                refreshing: false
            })
        }
        catch (err) {
            this.setState({
                sections: [],
                error: true,
                loading: false,
                refreshing: false
            })
            this.props.showModal()
        }
    }

    goSectionHeader = (section) => {
        this.props.navigation.push('AnyNews', { recommendation: section })
    }

    goNews = (newsId) => {
        this.props.navigation.push('NewsDetail', { newsId })
    }

    render() {
        const { sections } = this.state
        return (
            <SectionList
                contentContainerStyle={styles.sectionList}
                sections={sections}
                renderSectionHeader={({ section }) => (
                    <TouchableNativeFeedback onPress={() => {
                        this.goSectionHeader(section)
                    }}>
                        <View style={styles.section}>
                            <SectionHeader title={section.title} subtitle={'เพิ่มเติม'} />
                        </View>
                    </TouchableNativeFeedback>
                )}
                renderItem={(news) =>
                    news.section.title === 'แนะนำ' ?
                        <SliderBox
                            sliderBoxHeight={175}
                            data={news.item}
                            onPressed={this.goNews}
                        />
                        :
                        <FlatList
                            contentContainerStyle={styles.flatList}
                            showsHorizontalScrollIndicator={false}
                            data={news.item}
                            horizontal
                            keyExtractor={(item) => item._id}
                            renderItem={({ item, index }) =>
                                <NewsCard style={index != news.item?.length - 1 ? styles.newsCardContainer : styles.lastNewsCardContainer} onNewsPressed={this.goNews} data={item} />
                            }
                        />
                }
                keyExtractor={(item) => item._id}
            />
        )
    }
}

export default RecommendationView