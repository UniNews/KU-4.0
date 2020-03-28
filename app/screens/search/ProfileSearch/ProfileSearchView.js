import React from 'react'
import { Text, View, ActivityIndicator, ScrollView, Keyboard } from 'react-native'
import styles from './styles'
import { PRIMARY_COLOR } from '../../../assets/css/color'
import ProfileThread from '../../../components/profile/ProfileThread'
import Hr from '../../../components/commons/Hr'

class ProfileSearchView extends React.Component {

    constructor(props) {
        super(props)
    }

    getNews = (newsId) => {
        this.props.navigation.navigate('Detail', { newsId })
    }

    isFollowing = (profile) => {
        const { user } = this.props
        return user.following.indexOf(profile._id) > -1
    }

    follow = (id) => {
        const { followUserById } = this.props
        followUserById(id)
    }

    goProfile = (id) => {
        const { navigation } = this.props
        navigation.push('ProfileDetail', {
            userId: id
        })
    }

    render() {
        const { loading, user, error, query, result } = this.props
        return (
            <View style={styles.container}>
                <ScrollView onScroll={() => Keyboard.dismiss()}>
                    {
                        loading ?
                            <View style={styles.indicatorContainer}>
                                <Text style={styles.indicatorText}>
                                    กำลังค้นหา...
                            </Text>
                                <View style={styles.spinner}>
                                    <ActivityIndicator color={PRIMARY_COLOR} size={17} />
                                </View>
                            </View>
                            :
                            result ?
                                result.length > 0 ?
                                    result.map((profile) => {
                                        return (
                                            <View style={styles.newsContainer} key={profile._id} >
                                                <Hr />
                                                <ProfileThread following={this.isFollowing(profile)} onFollowPressed={this.follow} onProfilePressed={this.goProfile} data={profile} />
                                            </View>
                                        )
                                    })
                                    :
                                    <View style={styles.indicatorContainer}>
                                        <Text style={styles.indicatorText}>
                                            {'ไม่พบผลลัพธ์สำหรับ '}
                                        </Text>
                                        <Text style={styles.queryText}>
                                            {query}
                                        </Text>
                                    </View>
                                :
                                null
                    }
                </ScrollView>
            </View >
        )
    }
}

export default ProfileSearchView