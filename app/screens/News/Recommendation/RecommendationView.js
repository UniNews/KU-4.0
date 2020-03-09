import React from 'react';
import { ScrollView, View } from 'react-native';
import styles from './styles';
import SliderBox from '../../../components/news/PaginationSlider';
import SectionHeader from '../../../components/commons/SectionHeader'
import Hr from '../../../components/commons/Hr'
import NewsCard from '../../../components/news/NewsCard'

class RecommendationView extends React.Component {

    constructor(props) {
        super(props);
    }

    getNews = (newsId) => {
        this.props.navigation.navigate('Detail', { newsId })
    }

    getProfile = (profileId) => {
    }

    render() {
        const images = [
            'https://cdn.majorcineplex.com/uploads/content/12694/cover_12694.jpg',
            'https://www.ku.ac.th/web2012/resources/upload/content/images/symbol_KU62.png',
            'https://www.mannaturecoconutmilk.com/uploads/110862coconutmilktabletforcowsmilkallergy.jpg',
            'https://i.ebayimg.com/images/g/vuoAAOSw~M5cWv1Y/s-l1600.jpg',
        ]
        const ENTRIES1 = [
            {
                title: 'CPSK E-SPORT WEEK 2019 การแข่งขันเพื่อหาตัวแทนภาควิชาไปแข่งในงาน ENIAC #16 โดยในปีนี้เราจัดการแข่งขันด้วยกันถึง 5 เกม',
                date: '2020-01-30T09:38:20.898+00:00',
                user: 'CPE30 & SKE14',
                imgUrl: 'https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.0-9/80691891_1798624946938448_2257699926223880192_n.jpg?_nc_cat=102&_nc_oc=AQmJ0rHR0_BmC2QmIegAodJ2ja4ePEhY7bipbxurTuh-zUdy0r9eaCAqBAdVS3MdXHY&_nc_ht=scontent.fbkk11-1.fna&oh=77755394e7c6b88ceeeead47e843f4d9&oe=5ED0A121',
                newsId: '1',
                profileId: '1',
            },
            {
                title: 'ขอเชิญพี่ทุกท่านร่วมงาน CPSK Byenior 2020',
                date: '2020-01-30T09:38:20.898+00:00',
                user: 'CPE30 & SKE14',
                imgUrl: 'https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.0-9/82455162_2650962754951104_1823354414769897472_o.jpg?_nc_cat=100&_nc_oc=AQnbCb-nUl-v2ktZq6MktcrFTEtsIJeICaVnhAEJ3ZW28lWXMkfT6KdjmL_IA3my7DA&_nc_ht=scontent.fbkk11-1.fna&oh=dfcba49dfc3321aad780dac2f8f9ebc1&oe=5EC3E1FB',
                newsId: '2',
                profileId: '2',
            },
        ];

        const ENTRIES2 = [
            {
                title: 'แจกหน้ากากอนามัยสำหรับนิสิตมหาวิทยาลัยเกษตรศาสตร์',
                date: '2020-01-30T09:38:20.898+00:00',
                user: 'Kasetsart University',
                imgUrl: 'https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.0-9/83660591_3004694642894240_1009796547010887680_o.jpg?_nc_cat=102&_nc_oc=AQmFmXiA4FwodBhO10BsbxSi1SAsVXB9oHLzDGuZl21gGnM-JaqaPQJ5QeQNlqSR2tE&_nc_ht=scontent.fbkk11-1.fna&oh=441217e8ca2714b4713a83cbc99c4abf&oe=5EBF0F7D',
                newsId: '1',
                profileId: '1',
            },
            {
                title: 'หนุ่มหล่อ บอกต่อ งานเกษตรแฟร์ 2019 !!!!',
                date: '2020-01-30T09:38:20.898+00:00',
                user: 'Kasetsart University',
                imgUrl: 'https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.0-9/83803508_572276910169434_6315681337831325696_o.jpg?_nc_cat=106&_nc_oc=AQnC2lmRbDzc8ZD3YNHEL3nzmOIgTORsdOPcnC5RxZiKFFLk3VtK8xSCmMZo188D_GY&_nc_ht=scontent.fbkk11-1.fna&oh=603d3fe2cb8e226417543f92c5e939f4&oe=5EBA282A',
                newsId: '2',
                profileId: '2',
            },
        ];

        return (
            <ScrollView style={styles.containter}>
                <SectionHeader style={styles.sectionContainer} title={'โฆษณา'} subtitle={'เพิ่มเติม'} />
                <View style={{ paddingVertical: 15 }} >
                    <SliderBox
                        sliderBoxHeight={200}
                        data={images}
                        onPressed={id =>
                            this.props.navigation.navigate('Detail', { id })
                        }
                    />
                </View>
                <Hr />
                <View style={styles.sectionContainer}>
                    <SectionHeader title={'กิจกรรมใกล้ๆคุณ'} subtitle={'เพิ่มเติม'} />
                    <ScrollView style={styles.newsScrollView} showsHorizontalScrollIndicator={false} horizontal={true}>
                        {ENTRIES1.map((news) => {
                            return (
                                <NewsCard style={styles.newsCardContainer} key={news.newsId} onNewsPressed={this.getNews} onProfilePressed={this.getProfile} data={news} />
                            )
                        })}
                    </ScrollView>
                </View>
                <Hr />
                <View style={styles.sectionContainer}>
                    <SectionHeader title={'ข่าวยอดนิยม'} subtitle={'เพิ่มเติม'} />
                    <ScrollView style={styles.newsScrollView} showsHorizontalScrollIndicator={false} horizontal={true}>
                        {ENTRIES2.map((news) => {
                            return (
                                <NewsCard style={styles.newsCardContainer} key={news.newsId} onNewsPressed={this.getNews} onProfilePressed={this.getProfile} data={news} />
                            )
                        })}
                    </ScrollView>
                </View>
                <Hr />
                <View style={styles.sectionContainer}>
                    <SectionHeader title={'กิจกรรมใกล้ๆคุณ'} subtitle={'เพิ่มเติม'} />
                    <ScrollView style={styles.newsScrollView} showsHorizontalScrollIndicator={false} horizontal={true}>
                        {ENTRIES1.map((news) => {
                            return (
                                <NewsCard style={styles.newsCardContainer} key={news.newsId} onNewsPressed={this.getNews} onProfilePressed={this.getProfile} data={news} />
                            )
                        })}
                    </ScrollView>
                </View>
            </ScrollView>
        );
    }
}

export default RecommendationView;