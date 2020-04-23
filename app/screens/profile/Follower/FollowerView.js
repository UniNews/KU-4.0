import React from 'react'
import { View, TouchableWithoutFeedback, FlatList, ActivityIndicator } from 'react-native'
import { Feather } from '@expo/vector-icons'
import styles from './styles'
import Header from '../../../components/commons/Header'
import ProfileThread from '../../../components/profile/ProfileThread'
import userService from '../../../services/user'
import Spinner from '../../../components/commons/Spinner'
import { PRIMARY_COLOR } from '../../../assets/css/color'

class FollowerView extends React.Component {

    constructor(props) {
        super(props)
        this.page = 1
        this.onEndReachedCalledDuringMomentum = false
        this.state = {
            followers: [],
            loading: true,
            error: false,
            fetching: false,
            refreshing: false,
        }
    }

    goBack = () => {
        const { navigation } = this.props
        navigation.goBack()
    }

    componentDidMount() {
        this.fetchFollowers()
    }

    async fetchFollowers() {
        try {
            const { userId } = this.props.navigation.state.params
            const res = await userService.getUserFollowers(userId, this.page)
            this.setState({
                followers: this.page === 1 ? res.data.followers :
                    [
                        ...this.state.followers,
                        ...res.data.followers.filter(n => !this.state.followers.some(p => p._id === n._id))
                    ],
                error: false,
                loading: false,
                fetching: false,
                refreshing: false
            })
        }
        catch (err) {
            this.setState({
                error: true,
                loading: false,
                fetching: false,
                refreshing: false
            })
            this.props.showModal()
        }
    }

    onEndReached = () => {
        if (!this.onEndReachedCalledDuringMomentum) {
            this.setState({ fetching: true })
            this.page += 1
            this.fetchFollowers()
            this.onEndReachedCalledDuringMomentum = true
        }
    }

    renderFooter = () => {
        if (!this.state.fetching)
            return null
        return (
            <ActivityIndicator
                color={PRIMARY_COLOR}
            />
        )
    }

    renderItem = ({ item }) => {
        return <View style={styles.profileThreadContainer} key={item._id}>
            <ProfileThread navigation={this.props.navigation} data={item} />
        </View>
    }

    onRefresh = () => {
        this.setState({ refreshing: true, followers: [] })
        this.page = 1
        this.fetchFollowers()
    }

    render() {
        const { followers, loading, refreshing } = this.state
        return (
            <View style={styles.containter}>
                <Header title={'ผู้ติดตาม'} leftIconComponent={
                    <TouchableWithoutFeedback onPress={this.goBack}>
                        <Feather color='white' size={28} name={'chevron-left'} />
                    </TouchableWithoutFeedback>}
                />
                {
                    !loading
                        ?
                        <FlatList
                            refreshing={refreshing}
                            onRefresh={this.onRefresh}
                            keyExtractor={(news) => news._id}
                            data={followers}
                            initialNumToRender={12}
                            renderItem={this.renderItem}
                            ListFooterComponent={this.renderFooter}
                            onEndReachedThreshold={0.5}
                            onEndReached={this.onEndReached}
                            onMomentumScrollBegin={() => {
                                this.onEndReachedCalledDuringMomentum = false
                            }}
                        />
                        :
                        <Spinner />
                }
            </View>
        )
    }
}

export default FollowerView