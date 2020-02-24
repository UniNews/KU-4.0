import React from 'react';
import { ScrollView } from 'react-native';
import styles from './styles';
import NewsCard from '../../../components/news/NewsCard'
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
                {news.map((news) => {
                    return (
                        <NewsCard key={news.newsId} onNewsPressed={this.getNews} onProfilePressed={this.getProfile} data={news} />
                    )
                })}
            </ScrollView>
        );
    }
}

export default ClubView;