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
        const { followUserById } = this.props
        followUserById(id)
    }

    goProfile = (id) => {
        const { navigation } = this.props
        navigation.push('ProfileDetail', {
            userId: id
        })
    }

    goBack = () => {
        const { navigation } = this.props
        navigation.goBack()
    }

    render() {
        const { following, title } = this.props.navigation.state.params
        return (
            <View style={styles.containter}>
                <StatusBar />
                <Header title={title} leftIconComponent={
                    <TouchableWithoutFeedback onPress={this.goBack}>
                        <Feather color='white' size={28} name={'chevron-left'} />
                    </TouchableWithoutFeedback>}
                />
                {following.map((profile) => {
                    return (
                        <ProfileThread key={profile._id} onFollowPressed={this.follow} onProfilePressed={this.goProfile} data={profile} />
                    )
                })}
            </View>
        )
    }
}

export default FollowingView