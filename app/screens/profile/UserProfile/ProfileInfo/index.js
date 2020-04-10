import React from 'react'
import { Text, View, Animated } from 'react-native'
import styles from './styles'

class ProfileInfo extends React.Component {

    constructor(props) {
        super(props)
        this.tabTranslateY = this.props.screenProps.scroll.interpolate({
            inputRange: [0, 350],
            outputRange: [0, -350],
            extrapolate: 'clamp',
        })
    }

    render() {
        const { user } = this.props.screenProps
        return (
            <Animated.View
                style={[
                    styles.profileContainer,
                    {
                        transform: [
                            {
                                translateY: this.tabTranslateY,
                            },
                        ],
                    },
                ]}>
                <View style={styles.profileSectionContainer}>
                    <Text style={styles.profileTitleText}>ชื่อ</Text>
                    <Text style={styles.profileValueText}>{user.displayName}</Text>
                </View>
                <View style={styles.profileSectionContainer}>
                    <Text style={styles.profileTitleText}>สถานะ</Text>
                    <Text style={styles.profileValueText}>{user.bio}</Text>
                </View>
                <View style={styles.profileSectionContainer}>
                    <Text style={styles.profileTitleText}>หมวดหมู่</Text>
                    <Text style={styles.profileValueText}>{user.tags}</Text>
                </View>
            </Animated.View>
        )
    }
}

export default ProfileInfo