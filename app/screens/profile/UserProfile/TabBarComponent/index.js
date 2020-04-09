import React from 'react'
import { Text, View, Image, TouchableNativeFeedback, Animated } from 'react-native'
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import { KU_PRIMARY_COLOR, KU_SECONDARY_COLOR, SECONDARY_COLOR, PRIMARY_COLOR } from '../../../../assets/css/color'
import { MaterialTopTabBar } from 'react-navigation-tabs'
import { Feather } from '@expo/vector-icons'
import Button from '../../../../components/commons/Button'
import Vr from '../../../../components/commons/Vr'
import userService from '../../../../services/user'
// this.props.screenProps.scroll

class tabBarComponent extends React.Component {

    constructor(props) {
        super(props)
        this.tabTranslateY = this.props.screenProps.scroll.interpolate({
            inputRange: [0, 300],
            outputRange: [0, -300],
            extrapolate: 'clamp',
        });
    }

    goBack = () => {
        const { navigation } = this.props
        navigation.goBack()
    }

    render() {
        const { user } = this.props.screenProps
        const isFollowing = false

        return (
            <Animated.View
                style={[
                    styles.tabWrapper,
                    {
                        // height: 500,
                        transform: [
                            {
                                translateY: this.tabTranslateY,
                            },
                        ],
                    },
                ]}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={[KU_PRIMARY_COLOR, KU_SECONDARY_COLOR]} style={styles.profileInfoContainer}>
                    <View style={styles.backButton}>
                        <Feather
                            color='white'
                            onPress={this.goBack}
                            size={28}
                            name={'chevron-left'}
                        />
                    </View>
                    <Image
                        source={user ? { uri: user.avatarURL } : require('../../../../assets/imgs/avatar-default.png')}
                        style={styles.avatar}
                    />
                    <Text numberOfLines={1} style={styles.nameText}>
                        {user.displayName}
                    </Text>
                    <View style={styles.buttonContainer}>
                        <Button style={isFollowing ? styles.followingButton : styles.notFollowingButton} rounded onPress={() => this.follow(user._id)}>
                            <Text style={isFollowing ? styles.followingButtonText : styles.notFollowingButtonText}>{isFollowing ? 'ติดตามอยู่' : 'ติดตาม'}</Text>
                        </Button>
                    </View>
                    <View style={styles.infoContainer}>
                        <TouchableNativeFeedback onPress={user.accessType ? this.goPostedNews : this.goPostedCommunities}>
                            <View style={styles.indicatorContainer}>
                                <Text style={styles.numberText}>
                                    {user.articles?.length}
                                </Text>
                                <Text style={styles.indicatorText}>
                                    โพสต์
                                </Text>
                            </View>
                        </TouchableNativeFeedback>
                        <Vr style={styles.verticalLine} />
                        <TouchableNativeFeedback onPress={this.goFollower}>
                            <View style={styles.indicatorContainer}>
                                <Text style={styles.numberText}>
                                    {user.followers ? user.followers.length : 0}
                                </Text>
                                <Text style={styles.indicatorText}>
                                    ผู้ติดตาม
                                </Text>
                            </View>
                        </TouchableNativeFeedback>

                    </View>
                </LinearGradient>
                <MaterialTopTabBar
                    {...this.props}
                    activeTintColor={KU_SECONDARY_COLOR}
                    inactiveTintColor={'rgba(0, 0, 0, 0.4)'}
                    scrollEnabled={false}
                    labelStyle={styles.labelStyle}
                    indicatorStyle={styles.indicatorStyle}
                    style={styles.tabStyle}
                />
            </Animated.View>
        )
    }
}

export default tabBarComponent