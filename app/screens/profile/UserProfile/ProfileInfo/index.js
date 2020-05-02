import React from 'react'
import { Text, View, Animated, FlatList } from 'react-native'
import styles from './styles'

class ProfileInfo extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { user, scroll, handleProfileScroll } = this.props.screenProps
        return (
            <Animated.ScrollView
                contentContainerStyle={styles.profileContainer}
                showsVerticalScrollIndicator={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scroll } } }],
                    { listener: (event) => handleProfileScroll(event) },
                    { useNativeDriver: true }
                )}
                scrollEventThrottle={0}
            >
                <View style={styles.profileSectionContainer}>
                    <Text style={styles.profileTitleText}>ชื่อ</Text>
                    <Text style={styles.profileValueText}>{user.displayName}</Text>
                </View>
                <View style={styles.profileSectionContainer}>
                    <Text style={styles.profileTitleText}>สถานะ</Text>
                    <Text style={styles.profileValueText}>{user.bio}</Text>
                </View>
            </Animated.ScrollView>
        )
    }
}

export default ProfileInfo