import React from 'react'
import { Text, View, Image, TouchableNativeFeedback, TouchableWithoutFeedback, Animated, ScrollView, RefreshControl } from 'react-native'
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import { KU_PRIMARY_COLOR, KU_SECONDARY_COLOR, } from '../../../../assets/css/color'
import { MaterialTopTabBar } from 'react-navigation-tabs'
import Button from '../../../../components/commons/Button'
import Vr from '../../../../components/commons/Vr'
import userService from '../../../../services/user'
import { Feather } from '@expo/vector-icons'
import ImageModal from '../../../../components/modals/ImageModal'

class tabBarComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user: this.props.screenProps.user,
        }
        this.tabTranslateY = this.props.screenProps.scroll.interpolate({
            inputRange: [0, 350],
            outputRange: [0, - 350],
            extrapolate: 'clamp',
        })
    }

    follow = () => {
        const { setProfileThreadIsFollowing } = this.props.screenProps
        const { user } = this.state
        user.isFollowing = !user.isFollowing
        this.setState({ user })
        if (user.isFollowing) {
            userService.followUserById(user._id)
            user.followers.push('')
        }
        else {
            userService.unfollowUserById(user._id)
            user.followers.pop()
        }
        if (setProfileThreadIsFollowing)
            setProfileThreadIsFollowing(user.isFollowing)
    }

    goBack = () => {
        const { navigation } = this.props.screenProps
        navigation.goBack()
    }

    goFollowing = () => {
        const { navigation } = this.props.screenProps
        const { user } = this.state
        navigation.push('Following', {
            userId: user._id
        })
    }

    goFollower = () => {
        const { navigation } = this.props.screenProps
        const { user } = this.state
        navigation.push('Follower', {
            userId: user._id
        })
    }

    onRefresh = () => {
        const { onRefresh } = this.props.screenProps
        onRefresh()
    }

    render() {
        const { user } = this.state
        const isFollowing = user.isFollowing
        return (
            <View>
                <Animated.View
                    style={[
                        styles.tabWrapper,
                        {
                            transform: [
                                {
                                    translateY: this.tabTranslateY,
                                },
                            ],
                        },
                    ]}>

                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={[KU_PRIMARY_COLOR, KU_SECONDARY_COLOR]} style={styles.profileInfoContainer}>
                        <View style={{ alignItems: 'center' }}>
                            <View style={styles.backButton}>
                                <Feather
                                    color='white'
                                    onPress={this.goBack}
                                    size={28}
                                    name={'chevron-left'}
                                />
                            </View>
                            <View>
                                <ImageModal
                                    animation={false}
                                    width={250}
                                    height={250}
                                    source={user ? { uri: user.avatarURL } : require('../../../../assets/imgs/avatar-default.png')}
                                    style={styles.avatar}
                                />
                            </View>
                            <Text numberOfLines={1} style={styles.nameText}>
                                {user.displayName}
                            </Text>
                            <View style={styles.buttonContainer}>
                                <Button style={isFollowing ? styles.followingButton : styles.notFollowingButton} rounded onPress={this.follow}>
                                    <Text style={isFollowing ? styles.followingButtonText : styles.notFollowingButtonText}>{isFollowing ? 'ติดตามอยู่' : 'ติดตาม'}</Text>
                                </Button>
                            </View>

                            {
                                user && user.role === 'user' ?
                                    <View style={styles.infoContainer}>
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
                                        <Vr style={styles.verticalLine} />
                                        <TouchableNativeFeedback onPress={this.goFollowing}>
                                            <View style={styles.indicatorContainer}>
                                                <Text style={styles.numberText}>
                                                    {user.followings ? user.followings.length : 0}
                                                </Text>
                                                <Text style={styles.indicatorText}>
                                                    กำลังติดตาม
                                        </Text>
                                            </View>
                                        </TouchableNativeFeedback>
                                    </View>
                                    :
                                    <View>
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
                            }
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
            </View>
        )
    }
}

export default tabBarComponent