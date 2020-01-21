import React from 'react';
import { ScrollView, View } from 'react-native';
import styles from './styles';
import SliderBox from '../../../components/news/PaginationSlider';
import SilderNews from '../../../components/news/Slider';
import SectionHeader from '../../../components/commons/SectionHeader'
import Hr from '../../../components/commons/Hr'

class RecommendationView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const images = [
            'https://source.unsplash.com/1024x768/?nature',
            'https://source.unsplash.com/1024x768/?water',
            'https://source.unsplash.com/1024x768/?girl',
            'https://source.unsplash.com/1024x768/?tree',
        ]
        const ENTRIES2 = [
            {
                title: 'Favourites landscapes 1',
                subtitle: 'Lorem ipsum dolor sit amet',
                illustration: 'https://i.imgur.com/SsJmZ9jl.jpg'
            },
            {
                title: 'Favourites landscapes 2',
                subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
                illustration: 'https://i.imgur.com/5tj6S7Ol.jpg'
            },
            {
                title: 'Favourites landscapes 3',
                subtitle: 'Lorem ipsum dolor sit amet et nuncat',
                illustration: 'https://i.imgur.com/pmSqIFZl.jpg'
            },
            {
                title: 'Favourites landscapes 4',
                subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
                illustration: 'https://i.imgur.com/cA8zoGel.jpg'
            },
            {
                title: 'Favourites landscapes 5',
                subtitle: 'Lorem ipsum dolor sit amet',
                illustration: 'https://i.imgur.com/pewusMzl.jpg'
            },
            {
                title: 'Favourites landscapes 6',
                subtitle: 'Lorem ipsum dolor sit amet et nuncat',
                illustration: 'https://i.imgur.com/l49aYS3l.jpg'
            }
        ];

        return (
            <ScrollView style={styles.containter}>
                <SliderBox
                    sliderBoxHeight={200}
                    data={images}
                    onPressed={index =>
                        console.warn(`image ${index} pressed`)
                    }
                />
                <View style={styles.sectionContainer}>
                    <SectionHeader title={'ข่าวใกล้ๆคุณ'} subtitle={'เพิ่มเติม'} onPressed={
                        () => console.log('CLICKED')
                    } />
                    <SilderNews data={ENTRIES2} onPressed={
                        id => console.log(id)
                    } />
                    <Hr />
                </View >
                <View style={styles.sectionContainer}>
                    <SectionHeader title={'โปรโมชั่นสำหรับคุณ'} subtitle={'เพิ่มเติม'} />
                    <SilderNews data={ENTRIES2} onPressed={
                        id => console.log(id)
                    } />
                </View>
            </ScrollView>
        );
    }
}

export default RecommendationView;