import React from 'react';
import { ScrollView, View } from 'react-native';
import styles from './styles';
import NewsCard from '../../../components/news/NewsThread'
import newsService from '../../../services/news'
import Hr from '../../../components/commons/Hr'

class UniversityView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            news: [],
            error: false
        }
    }

    componentDidMount() {
        newsService.getUniversityNews()
            .then((res) => {
                const newsData = res.data.articles
                this.setState({
                    news: newsData,
                    error: false
                })
            }).catch((err) => {
                this.setState({ error: true })
            })
    }

    goNews = (newsId) => {
        this.props.navigation.push('NewsDetail', { newsId })
    }

    render() {
        const { news } = this.state
        return (
            <View style={styles.containter}>
                <ScrollView>
                    {news.map((news, index, newsArray) => {
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
            </View>
        );
    }
}

export default UniversityView;