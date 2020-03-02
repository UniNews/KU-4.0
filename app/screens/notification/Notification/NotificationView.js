import React from 'react'
import { View } from 'react-native'
import styles from './styles'
import Header from '../../../components/commons/Header'
import NotificationItem from '../../../components/notification/NotificationItem'
import StatusBar from '../../../components/commons/StatusBar'

const notifications = [
    {
        profileId: 1,
        profileName: 'KU CUTE DOG',
        profileImg: 'https://scontent.fbkk22-3.fna.fbcdn.net/v/t1.0-9/82471934_2618412038207423_3192883670008463360_n.jpg?_nc_cat=102&_nc_oc=AQlhJBNtn6K9Gb5bq1Sz3hMbodjoShei3HcHsdI_UGY07LyAnjKfsjicC93Xp0griPU&_nc_ht=scontent.fbkk22-3.fna&oh=c064fc8eafb57aa5c1be38a88b1306f6&oe=5EBD146C',
        description: 'จีนแดง ไปสบายแล้ว ขอบคุณที่อยู่เป็นเพื่อนเล่นเด็กเกษตรนะ 💕',
        newsId: 2,
        date: '20 นาทีที่แล้ว'
    },
    {
        profileId: 3,
        profileName: 'KU Potential Club',
        profileImg: 'https://scontent.fbkk2-5.fna.fbcdn.net/v/t1.0-1/c0.0.820.820a/66686017_1125283600997160_4542151837934944256_n.jpg?_nc_cat=110&_nc_oc=AQmNpBihC6kLplVjqVJTIrCFMMm59mZi4qLk9VaYlJEaVjaWaGnRNVpvjGEXBl3tINA&_nc_ht=scontent.fbkk2-5.fna&oh=326e11cf10014a155dd953be098951f0&oe=5E90FC5F',
        description: 'ช่วงสอบแล้ววววว อย่าลืมหาอะไรแก้เครียดกันนะ 🏎🌈',
        newsId: 4,
        date: '30 นาทีที่แล้ว'
    },
]

class NotificationView extends React.Component {

    constructor(props) {
        super(props)
    }

    getNews = (newsId) => {
        console.log(newsId)
    }

    getProfile = (profileId) => {
        console.log(profileId)
    }

    render() {
        return (
            <View style={styles.containter}>
                <StatusBar />
                <Header title={'การแจ้งเตือน'} />
                {notifications.map((notification) => {
                    return (
                        <NotificationItem key={notification.newsId} onNewsPressed={this.getNews} onProfilePressed={this.getProfile} data={notification} />
                    )
                })}
            </View>
        )
    }
}

export default NotificationView