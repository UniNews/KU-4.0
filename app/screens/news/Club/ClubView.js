import React from 'react';
import { ScrollView, View } from 'react-native';
import styles from './styles';
import NewsCard from '../../../components/news/NewsThread'
import newsService from '../../../services/news'

class ClubView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            news: [],
            error: false
        }
    }

    componentDidMount() {
        newsService.getClubNews()
            .then((res) => {
                const newsData = res.data
                let newsArray = []
                for (const news of newsData) {
                    const newsObject = {
                        title: news.title,
                        date: news.createdAt,
                        user: news.user.displayName,
                        imgUrl: news.imageURL[0],
                        newsId: news._id,
                        profileId: news.user._id,
                    }
                    newsArray.push(newsObject)
                }
                this.setState({
                    news: newsArray,
                    error: false
                })
            }).catch((err) => {
                this.setState({ error: true })
            })
    }

    getNews = (newsId) => {
        this.props.navigation.navigate('Detail', { newsId })
    }

    getProfile = (profileId) => {
        console.log(profileId)
    }

    render() {
        const { news } = this.state
        return (
            <ScrollView contentContainerStyle={styles.containter}>
                {news.map((news, index, newsArray) => {
                    return (
                        <View key={news.newsId} style={index != 0 ? { marginTop: 10, backgroundColor: 'white' } : { backgroundColor: 'white' }}>
                            <NewsCard onNewsPressed={this.getNews} onProfilePressed={this.getProfile} data={news} />
                        </View>
                    )
                })}
            </ScrollView>
        );
    }
}

export default ClubView;