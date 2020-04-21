import React from 'react'
import { View, Animated, TouchableWithoutFeedback, BackHandler } from 'react-native'
import styles from './styles'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import userService from '../../../services/user'
import tabBarComponent from './TabBarComponent'
import NewsList from './NewsList'
import ProfileInfo from './ProfileInfo'
import Spinner from '../../../components/commons/Spinner'
import { Feather } from '@expo/vector-icons'
import Header from '../../../components/commons/Header'

const Navigator = createAppContainer(createMaterialTopTabNavigator({
    'รายละเอียด': ProfileInfo,
    'โพสต์ทั้งหมด': NewsList
}, {
    tabBarComponent,
    backBehavior: 'none'
}))

class UserProfileView extends React.Component {

    constructor(props) {
        super(props)
        this.scroll = new Animated.Value(0)
        this.newsOffset = 0
        this.profileOffset = 0
        this.state = {
            user: {},
            news: [],
            error: false,
            loading: true,
        }
    }

    handleNewsScroll = (event) => {
        this.newsOffset = event.nativeEvent.contentOffset.y
    }

    handleProfileScroll = (event) => {
        this.profileOffset = event.nativeEvent.contentOffset.y
    }

    onRefresh = () => {
        this.setState({ loading: true })
        this.fetchUser()
    }

    async componentDidMount() {
        this.fetchUser()
    }

    async fetchUser() {
        try {
            const { userId } = this.props.navigation.state.params
            const info = await userService.getUserById(userId)
            const news = await userService.getUserNewsById(userId)
            this.setState({
                user: info.data,
                news: news.data.articles,
                error: false,
                loading: false,
            })
        }
        catch (err) {
            this.setState({
                error: true,
                loading: false,
            })
            this.props.showModal()
        }
    }

    render() {
        const { user, loading, news } = this.state
        const { navigation } = this.props
        const scroll = this.scroll
        return (
            <View style={styles.containter}>
                {
                    !loading ?
                        <Navigator screenProps={{ handleNewsScroll: this.handleNewsScroll, handleProfileScroll: this.handleProfileScroll, scroll, navigation, user, news, onRefresh: this.onRefresh }}
                            onNavigationStateChange={(prevState, currentState) => {
                                if (currentState.index === 0) {
                                    Animated.timing(scroll, {
                                        toValue: this.profileOffset,
                                        duration: 500,
                                        useNativeDriver: true
                                    }).start()
                                }
                                else {
                                    Animated.timing(scroll, {
                                        toValue: this.newsOffset,
                                        duration: 500,
                                        useNativeDriver: true
                                    }).start()
                                }
                            }} />
                        :
                        <View style={styles.containter}>
                            <Header title={'โปรไฟล์'} leftIconComponent={
                                <TouchableWithoutFeedback onPress={this.goBack}>
                                    <Feather color='white' size={28} name={'chevron-left'} />
                                </TouchableWithoutFeedback>
                            } />
                            <Spinner />
                        </View>
                }
            </View>
        )
    }
}

export default UserProfileView