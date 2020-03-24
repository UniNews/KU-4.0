import React from 'react'
import { View, TouchableWithoutFeedback } from 'react-native'
import { Feather } from '@expo/vector-icons'
import styles from './styles'
import Header from '../../../components/commons/Header'
import ProfileThread from '../../../components/profile/ProfileThread'
import StatusBar from '../../../components/commons/StatusBar'

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
        return (
            <View style={styles.containter}>
                <StatusBar />
                <Header title={'ติดตามอยู่'} leftIconComponent={
                    <TouchableWithoutFeedback onPress={this.goBack}>
                        <Feather color='white' size={28} name={'chevron-left'} />
                    </TouchableWithoutFeedback>}
                />
                {this.props.user.following.map((profile) => {
                    return (
                        <ProfileThread key={profile._id} onFollowPressed={this.follow} onProfilePressed={this.getProfile} data={profile} />
                    )
                })}
            </View>
        )
    }
}

export default FollowingView