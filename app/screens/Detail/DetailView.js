import React from 'react'
import { Text, View, ImageBackground, Image, Linking, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import styles from './styles'
import Hyperlink from 'react-native-hyperlink'
import { FontAwesome, Feather } from '@expo/vector-icons'
import Hr from '../../components/commons/Hr'
import Header from '../../components/commons/Header'
import StatusBar from '../../components/commons/StatusBar'

class DetailView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            isHide: true
        }
    }

    goBack = () => {
        const { navigation } = this.props
        navigation.goBack()
    }

    likeNews = (id) => {
        console.log(id)
    }

    render() {
        console.log(this.props.navigation.state.params.id)
        return (
            <View>
                <StatusBar />
                <Header title={'ข่าวมหาลัย'} leftIconComponent={
                    <TouchableWithoutFeedback onPress={this.goBack}>
                        <Feather color='white' size={28} name={'chevron-left'} />
                    </TouchableWithoutFeedback>}
                />
                <ScrollView style={styles.container} >
                    <ImageBackground style={styles.newsImage}
                        source={require('../../assets/imgs/testdetail.png')} >
                    </ImageBackground>
                    <View style={{ padding: 15 }}>
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
                                    <View style={styles.iconContainer}>
                                        <View style={styles.textIconContainer}>
                                            <FontAwesome name='calendar' size={15} color='grey' />
                                            <Text style={styles.iconText}>
                                                5 นาทีที่แล้ว
                                        </Text>
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => this.props.navigation.navigate('Comment')}
                                            style={styles.textIconContainer}>
                                            <FontAwesome name='commenting-o' size={18} color='grey' />
                                            <Text style={styles.iconText}>
                                                5 ความคิดเห็น
                                        </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => this.likeNews('id')}
                                            style={styles.textIconContainer}>
                                            <FontAwesome name='heart-o' size={18} color='grey' />
                                            <Text style={styles.iconText}>
                                                5 ถูกใจ
                                        </Text>
                                        </TouchableOpacity>

                                    </View>
                                </View>
                            </View>
                        </View>
                        <Hr style={styles.hr} />
                        <View>
                            <Text style={styles.descriptionHeaderText}>
                                รายละเอียด
                    </Text>
                            <Hyperlink linkStyle={{ textDecorationLine: 'underline', color: 'green', fontFamily: 'Kanit-Regular' }} onPress={(url, text) => Linking.openURL(url)}>
                                <Text style={styles.newsInfoText}>
                                    🌈หาร้านอร่อยๆทานกับครอบครัว ทานกับเพื่อน หรือเปิดโต๊ะแชร์ ก็ควรมาที่นี่น้า ที่บุญตงกี่ เพราะตอนนี้เค้ามีแบบบุฟเฟ่ต์ กินกันให้เต็มอิ่มไปเลยจ้า

            🎈ราคาก็ดีงาม จันทร์-พฤหัส 499 บาท
            ศุกร์-อาทิตย์ 599 บาท

            👉กดจองโปรพิเศษของ Hungry Hub ผ่านลิ้งค์นี้เท่าน้านนน
            Link: http://bit.ly/2CzlJbO

            🥰เมนูที่แนะนำเลยนะจ้ะ มาแล้วต้องสั่งน้า

            🌟ไก่บุญตงกี่ เนื้อนุ่มหอม น้ำซอสที่ราด ทานคู่กับข้าวมันรสดี กินแล้วพริ้มมาก
                        </Text>
                            </Hyperlink>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default DetailView;