import React from 'react';
import { ScrollView, View } from 'react-native';
import styles from './styles';
import NewsCard from '../../../components/news/NewsThread'
import newsService from '../../../services/news'
import SliderBox from '../../../components/news/PaginationSlider';
import SectionHeader from '../../../components/commons/SectionHeader'

const images = [
    'https://cdn.majorcineplex.com/uploads/content/12694/cover_12694.jpg',
    'https://www.ku.ac.th/web2012/resources/upload/content/images/symbol_KU62.png',
    'https://www.mannaturecoconutmilk.com/uploads/110862coconutmilktabletforcowsmilkallergy.jpg',
    'https://i.ebayimg.com/images/g/vuoAAOSw~M5cWv1Y/s-l1600.jpg',
]

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
                <SectionHeader style={{ margin: 10 }} title={'กำลังฮิต'} subtitle={'เพิ่มเติม'} />
                <SliderBox
                    sliderBoxHeight={200}
                    data={images}
                    onPressed={id =>
                        this.props.navigation.navigate('Detail', { id })
                    }
                />
                <SectionHeader style={{ margin: 10 }} title={'ข่าวล่าสุด'} subtitle={'เพิ่มเติม'} />
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

export default UniversityView;