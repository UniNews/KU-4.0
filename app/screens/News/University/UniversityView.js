import React from 'react';
import { Text, ScrollView, View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import NewsCard from '../../../components/news/NewsCard'

const ENTRIES1 = [
    {
        title: 'งานเกษตรแฟร์ ไปรษณีย์ไทย แคร์สิ่งแวดล้อม เพียงโหลดapp Kaset Fair',
        date: '10 นาทีที่แล้ว',
        user: 'Kasetsart University',
        imgUrl: 'https://scontent.fbkk22-3.fna.fbcdn.net/v/t1.0-9/83776261_10158088881237451_5791383985540038656_o.jpg?_nc_cat=110&_nc_oc=AQmBfiDFxm6E8mCzgZiujlOEqOdZ_GAiXNn7hu8nXoo337EBHC00x0_Y_ACZZ8HbcRU&_nc_ht=scontent.fbkk22-3.fna&oh=787dc7dda65e57add44477cd89967a20&oe=5EDC0ACB',
        newsId: 1,
        profileId: 1,
    },
    {
        title: 'งานเกษตรแฟร์ ไปรษณีย์ไทย แคร์สิ่งแวดล้อม เพียงโหลดapp Kaset Fair',
        date: '10 นาทีที่แล้ว',
        user: 'Kasetsart University',
        imgUrl: 'https://scontent.fbkk22-3.fna.fbcdn.net/v/t1.0-9/83776261_10158088881237451_5791383985540038656_o.jpg?_nc_cat=110&_nc_oc=AQmBfiDFxm6E8mCzgZiujlOEqOdZ_GAiXNn7hu8nXoo337EBHC00x0_Y_ACZZ8HbcRU&_nc_ht=scontent.fbkk22-3.fna&oh=787dc7dda65e57add44477cd89967a20&oe=5EDC0ACB',
        newsId: 2,
        profileId: 2,
    },
];


class UniversityView extends React.Component {

    constructor(props) {
        super(props);
    }


    getNews = (newsId) => {
        this.props.navigation.navigate('Detail', { newsId })
    }

    getProfile = (profileId) => {
        console.log(profileId)
    }

    render() {
        return (
            <ScrollView style={styles.containter}>
                {ENTRIES1.map((news) => {
                    return (
                        <NewsCard style={styles.newsCardContainer} key={news.newsId} onNewsPressed={this.getNews} onProfilePressed={this.getProfile} data={news} />
                    )
                })}
            </ScrollView>
        );
    }
}

export default UniversityView;