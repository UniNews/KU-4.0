import React from 'react'
import { View, Animated } from 'react-native'
import styles from './styles'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation';
import userService from '../../../services/user'

import tabBarComponent from './TabBarComponent'
import NewsList from './NewsList'
import ProfileInfo from './ProfileInfo'
import Spinner from '../../../components/commons/Spinner';
const scroll = new Animated.Value(0)

const Navigator = createAppContainer(createMaterialTopTabNavigator({
    'รายละเอียด': ProfileInfo,
    'โพสต์ทั้งหมด': NewsList
}, {
    tabBarComponent,
}))

class UserProfileView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {},
            error: false,
            loading: true
        }
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
        return (
            <View style={styles.containter}>
                {
                    !loading ?
                        <Navigator screenProps={{ scroll, navigation, user }} />
                        :
                        <Spinner />
                }
            </View>
        )
    }
}

export default UserProfileView
