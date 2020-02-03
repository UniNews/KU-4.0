import React from 'react'
import { View, TouchableWithoutFeedback } from 'react-native'
import { Feather } from '@expo/vector-icons'
import styles from './styles'
import Header from '../../../components/commons/Header'
import FollowingItem from '../../../components/following/FollowingItem'

// const followings = [
//     {
//         id: 1, name: 'ป้าๆราดหน้าจาน', followed: true
//     },
//     {
//         id: 2, name: 'Potential Club', followed: false
//     },
//     {
//         id: 3, name: 'อิอิซ่าห้าห้าคลับ', followed: true
//     }
// ]

class FollowingView extends React.Component {

    constructor(props) {
        super(props)
    }

    follow = (id) => {
    };

    getProfile = (id) => {
    }

    goBack = () => {
        const { navigation } = this.props
        navigation.goBack()
    }

    render() {
        console.log(this.props.user.following)
        return (
            <View style={styles.containter}>
                <Header title={'ติดตามอยู่'} leftIconComponent={
                    <TouchableWithoutFeedback onPress={this.goBack}>
                        <Feather color='white' size={28} name={'chevron-left'} />
                    </TouchableWithoutFeedback>}
                />
                {this.props.user.following.map((profile) => {
                    return (
                        <FollowingItem key={profile._id} onFollowPressed={this.follow} onProfilePressed={this.getProfile} profile={profile} />
                    )
                })}
            </View>
        )
    }
}

export default FollowingView