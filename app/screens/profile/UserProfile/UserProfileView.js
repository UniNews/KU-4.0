import React from 'react'
import { View, Animated, SafeAreaView } from 'react-native'
import styles from './styles'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import userService from '../../../services/user'
import tabBarComponent from './TabBarComponent'
import NewsList from './NewsList'
import ProfileInfo from './ProfileInfo'
import Spinner from '../../../components/commons/Spinner'

const Navigator = createAppContainer(createMaterialTopTabNavigator({
    'รายละเอียด': ProfileInfo,
    'โพสต์ทั้งหมด': NewsList
}, {
    tabBarComponent,
}))

class UserProfileView extends React.Component {

    constructor(props) {
        super(props)
        this.scroll = new Animated.Value(0)
        this.offset = 0
        this.state = {
            user: {},
            error: false,
            loading: true
        }
    }

    handleScroll = (event) => {
        this.offset = event.nativeEvent.contentOffset.y
    }

    async componentDidMount() {
        this.fetchUser()
    }

    async fetchUser() {
        try {
            const { userId } = this.props.navigation.state.params
            const res = await userService.getUserById(userId)
            this.setState({
                user: res.data,
                error: false,
                loading: false,
            })
        }
        catch (err) {
            this.setState({
                error: true,
                loading: false,
            })
        }
    }


    render() {
        const { user, loading } = this.state
        const { navigation } = this.props
        const scroll = this.scroll
        return (
            <SafeAreaView style={styles.containter}>
                {
                    !loading ?
                        <Navigator screenProps={{ handleScroll: this.handleScroll, scroll, navigation, user }}
                            onNavigationStateChange={(prevState, currentState) => {
                                if (currentState.index === 0) {
                                    Animated.timing(scroll, {
                                        toValue: 0,
                                        duration: 1000,
                                        useNativeDriver: true
                                    }).start()
                                }
                                else {
                                    Animated.timing(scroll, {
                                        toValue: this.offset,
                                        duration: 1000,
                                        useNativeDriver: true
                                    }).start()
                                }
                            }} />
                        :
                        <Spinner />
                }
            </SafeAreaView>
        )
    }
}

export default UserProfileView