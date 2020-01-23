import React from 'react'
import { Text, View, ImageBackground, Image, Linking, ScrollView } from 'react-native'
import styles from './styles'
import Hyperlink from 'react-native-hyperlink'
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import Hr from '../../components/commons/Hr'
import SectionHeader from '../../components/commons/SectionHeader'
import Comment from '../../components/news/Comment'

class DetailView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            isHide: true
        }
    }

    render() {
        console.log(this.props.navigation.state.params.id)

        var comments = [];
        for (let i = 0; i < 2; i++) {
            comments.push(
                <View key={i} style={styles.innerCommentContainer}>
                    <Comment key={i} user={'Jimmy'} date={'23 July'} message={'kuy'} />
                </View>
            )
        }
        return (
            <ScrollView style={styles.container} >
                <ImageBackground style={styles.newsImage}
                    source={require('../../assets/imgs/testdetail.png')} >
                    <View style={styles.topIconContainer}>
                        <FontAwesome name='ellipsis-v' size={23} color='white' />
                        <Ionicons name='md-heart-empty' size={25} style={styles.heartIcon} color='white' />
                    </View>
                </ImageBackground>
                <View style={{ padding: 20 }}>
                    <View style={styles.titleContainer}>
                        <View style={styles.innerTitleContainer}>
                            <Text style={styles.posterText}>
                                สำนักคอมฯ
                        </Text>
                            <Text style={styles.titleText}>
                                CPSK SPORT WEEK 2019
                        </Text>
                            <View style={styles.dateIconContainer}>
                                <FontAwesome name='calendar' size={15} color='grey' />
                                <Text style={styles.dateText}>
                                    5 นาทีที่แล้ว
                        </Text>
                            </View>
                        </View>
                    </View>
                    <Hr style={styles.hr} />
                    <Hyperlink linkStyle={{ textDecorationLine: 'underline', color: 'green', fontFamily: 'Kanit-Regular' }} onPress={(url, text) => Linking.openURL(url)}>
                        <Text style={styles.newsInfoText}>
                            CPSK E-SPORT WEEK 2019
                            การแข่งขันเพื่อหาตัวแทนภาควิชาไปแข่งในงาน ENIAC #16
                            โดยในปีนี้เราจัดการแข่งขันด้วยกันถึง 5 เกม
                            https://www.facebook.com/groups/753581421377564/?ref=share
                    </Text>
                    </Hyperlink>
                    <Hr style={styles.hr} />
                    <SectionHeader title={'ความคิดเห็นล่าสุด'} subtitle={'เพิ่มเติม'} onPressed={
                        () => console.log('CLICKED')
                    } />
                    <View style={styles.commentContainer}>
                        {comments}
                    </View>
                </View>

            </ScrollView>
        );
    }
}

export default DetailView;