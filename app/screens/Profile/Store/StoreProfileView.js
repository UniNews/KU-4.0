import React from 'react'
import { Text, View, ImageBackground, Image, TouchableWithoutFeedback } from 'react-native'
import { Feather } from '@expo/vector-icons'
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import Hr from '../../../components/commons/Hr'
import Header from '../../../components/commons/Header'
import Button from '../../../components/commons/Button'
import StatusBar from '../../../components/commons/StatusBar'
import userService from '../../../services/user'

class StoreProfileView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            following: true,
            user: null
        }
    }

    goBack = () => {
        const { navigation } = this.props
        navigation.goBack()
    }

    async componentDidMount() {
        const result = await userService.getUserById(this.props.navigation.state.params.profileId)
        this.setState(
            {
                user: result
            }
        )
    }

    render() {
        const { following } = this.state
        return (
            <View style={styles.containter}>
                <StatusBar />
                <Header title={this.state.user ? this.state.user.displayName : ""} leftIconComponent={
                    <TouchableWithoutFeedback onPress={this.goBack}>
                        <Feather color='white' size={28} name={'chevron-left'} />
                    </TouchableWithoutFeedback>}
                />
                <ImageBackground style={styles.coverImg}
                    resizeMode='cover'
                    source={{ uri: 'https://lh4.googleusercontent.com/proxy/ZYuIbIo6tgvt8h5IS-gX4wHFOYfIruWTkJKjvRflWKXFlVP5t4Vk0ofvYmimYlxfUG2sVSzOeIcwwfc61i8HlS2vug-R-sewwgdbqpI1zao0lDYC-LDeJNojlFFL' }}>
                    <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.4)']} style={styles.profileInfoContainer}>
                        <Image
                            source={{ uri: this.state.user ? this.state.user.avatarURL : 'https://scontent.fbkk22-2.fna.fbcdn.net/v/t1.0-9/11914947_628986903870394_7886924598746503503_n.jpg?_nc_cat=109&_nc_oc=AQkdDLwzEglbB6WwJS7sOgMFIkLoiHO8Ge4xBiFU5-vqrwuktU5koS9bC4UVGnzNApM&_nc_ht=scontent.fbkk22-2.fna&oh=25eeb22f8a3da030c7aad542c3c8ef0e&oe=5ED92CF1' }}
                            style={styles.avatar}
                        />
                        <Button customStyle={following ? styles.followingButtonContainer : styles.notFollowingButtonContainer} rounded onPress={() => this.setState({ following: !following })}>
                            <Text style={following ? styles.followingTextButton : styles.notFollowingTextButton}>{following ? 'ติดตามอยู่' : 'ติดตาม'}</Text>
                        </Button>
                        <View style={styles.followContainer}>
                            <View style={styles.amount1Container}>
                                <Text style={styles.numberText}>
                                    5
                                </Text>
                                <Text style={styles.indicatorText}>
                                    โพสต์
                                </Text>
                            </View>
                            <View style={styles.amount2Container}>
                                <Text style={styles.numberText}>
                                    3
                                </Text>
                                <Text style={styles.indicatorText}>
                                    ผู้ติดตาม
                                </Text>
                            </View>
                        </View>
                    </LinearGradient>
                </ImageBackground>
                <View style={styles.settingContainer}>
                    <View>
                        <Text style={styles.settingTitleText}>ชื่อชมรม</Text>
                        <Text style={styles.settingValueText}>{this.state.user ? this.state.user.displayName : ""}</Text>
                    </View>
                </View>
                <Hr />
                <View style={styles.settingContainer}>
                    <View>
                        <Text style={styles.settingTitleText}>คำอธิบาย</Text>
                        <Text style={styles.settingValueText}>{this.state.user ? this.state.user.description : ""}</Text>
                    </View>
                </View>
                <Hr />
                <View style={styles.settingContainer}>
                    <View>
                        <Text style={styles.settingTitleText}>แท็ก</Text>
                        <Text style={styles.settingValueText}>{this.state.user ? this.state.user.category : ""}</Text>
                    </View>
                </View>
                <Hr />
            </View >
        )
    }
}

export default StoreProfileView