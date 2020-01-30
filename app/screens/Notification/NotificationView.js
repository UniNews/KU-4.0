import React from 'react'
import { View } from 'react-native'
import styles from './styles'
import Header from '../../components/commons/Header'
import NotificationItem from '../../components/notification/NotificationItem'

const notifications = [
    {
        profileId: 1,
        profileName: 'ป้าๆราดหน้าจาน',
        profileImg: 'https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-9/82746272_174492433957631_140276767213486080_o.jpg?_nc_cat=105&_nc_oc=AQki0Mg8YwI7iCmHRxjbDjtwgC14JRnLUs2IadUKMBbTyOT2rQC8VHdENMNwTBrMu3E&_nc_ht=scontent.fbkk10-1.fna&oh=8f5fcd20276afee7246331f3a16d2d47&oe=5EDB774B',
        description: 'HOT ที่สุดเเล้วในเชียงใหม่ สาวแอร์โฮสเตส รับงานค่ะ ไลน์-glam1010',
        newsId: 2,
        date: '20 นาทีที่แล้ว'
    },
    {
        profileId: 3,
        profileName: 'KU Potential Club',
        profileImg: 'https://scontent.fbkk2-5.fna.fbcdn.net/v/t1.0-1/c0.0.820.820a/66686017_1125283600997160_4542151837934944256_n.jpg?_nc_cat=110&_nc_oc=AQmNpBihC6kLplVjqVJTIrCFMMm59mZi4qLk9VaYlJEaVjaWaGnRNVpvjGEXBl3tINA&_nc_ht=scontent.fbkk2-5.fna&oh=326e11cf10014a155dd953be098951f0&oe=5E90FC5F',
        description: 'ช่วงสอบแล้ววววว อย่าลืมหาอะไรแก้เครียดกันนะ 🏎🌈',
        newsId: 4,
        date: '20 นาทีที่แล้ว'
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