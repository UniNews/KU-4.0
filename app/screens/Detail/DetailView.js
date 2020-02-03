import React from 'react'
import { Text, View, ImageBackground, Image, Linking, ScrollView , TouchableOpacity } from 'react-native'
import styles from './styles'
import Hyperlink from 'react-native-hyperlink'
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons'
import Hr from '../../components/commons/Hr'

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
                        <Image
                            style={styles.imageAvatar}
                            source={{ uri: 'https://scontent.fbkk22-3.fna.fbcdn.net/v/t1.0-1/c0.0.820.820a/66686017_1125283600997160_4542151837934944256_n.jpg?_nc_cat=110&_nc_ohc=X4ovrI8YYLcAX9k8MI_&_nc_ht=scontent.fbkk22-3.fna&_nc_tp=1003&oh=a1f840ed4a1c6371eeb21242ffd1ea41&oe=5E90FC5F' }}
                        />
                        <View>
                            <View style={styles.innerTitleContainer}>
                                <Text style={styles.posterText}>
                                    สำนักคอมฯ
                            </Text>
                                <Text style={styles.titleText}>
                                    CPSK SPORT WEEK 2019
                            </Text>
                                <View style={styles.dateIconContainer}>
                                    <View style={styles.dateFormat}>
                                        <FontAwesome name='calendar' size={15} color='grey' />
                                        <Text style={styles.dateText}>
                                            5 นาทีที่แล้ว
                                        </Text>
                                    </View>
                                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Comment')}>
                                        <MaterialIcons name='message' size={23} color='black' />
                                    </TouchableOpacity>
                                </View>
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
                </View>

            </ScrollView>
        );
    }
}

export default DetailView;