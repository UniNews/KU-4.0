import React from 'react'
import { View, FlatList, ActivityIndicator, Text } from 'react-native'
import styles from './styles'
import ProfileThread from '../../../../components/profile/ProfileThread'
import userService from '../../../../services/user'
import { PRIMARY_COLOR } from '../../../../assets/css/color'
import searchService from '../../../../services/search'

class ProfileSearchView extends React.Component {

    constructor(props) {
        super(props)
        this.page = 1
        this.onEndReachedCalledDuringMomentum = false
        this.state = {
            users: [],
            loading: false,
            error: false,
            fetching: false,
            refreshing: false,
        }
    }

    follow = (profile) => {
        profile.isFollowing = !profile.isFollowing
        this.setState({ users: [...this.state.users] })
        if (profile.isFollowing)
            userService.followUserById(profile._id)
        else
            userService.unfollowUserById(profile._id)
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

    componentDidUpdate(prevProps) {
        const { query } = this.props
        if (query && prevProps.query != query) {
            this.page = 1
            this.setState({
                loading: true
            })
            this.fetchUsers()
        }
    }

    async fetchUsers() {
        try {
            const { query } = this.props
            const res = await searchService.getUsersByName(query, this.page)
            this.setState({
                users: this.page === 1 ? res.data.users : [
                    ...this.state.users,
                    ...res.data.users.filter(n => !this.state.users.some(p => p._id === n._id))
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
            const { showModal } = this.props
            showModal()
        }
    }

    onEndReached = () => {
        if (!this.onEndReachedCalledDuringMomentum) {
            this.setState({ fetching: true })
            this.page += 1
            this.fetchUsers()
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
            <ProfileThread following={item.isFollowing} onFollowPressed={this.follow} onProfilePressed={this.goProfile} data={item} />
        </View>
    }

    onRefresh = () => {
        this.setState({ refreshing: true, users: [] })
        this.page = 1
        this.fetchUsers()
    }

    renderEmpty = () => {
        const { query } = this.props
        return (
            query !== '' ?
                <View style={styles.textContainer}>
                    <Text style={styles.indicatorText}>
                        ไม่พบโปรไฟล์สำหรับ
                </Text>
                    <Text style={styles.queryText}>
                        {` ${query}`}
                    </Text>
                </View>
                :
                null
        )
    }

    render() {
        const { users, loading, refreshing } = this.state
        return (
            <View style={styles.containter}>
                {
                    !loading
                        ?
                        <FlatList
                            ListEmptyComponent={this.renderEmpty}
                            refreshing={refreshing}
                            onRefresh={this.onRefresh}
                            keyExtractor={(news) => news._id}
                            data={users}
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
                        <View style={styles.textContainer}>
                            <Text style={styles.indicatorText}>
                                {`กำลังค้นหาโปรไฟล์... `}
                            </Text>
                            <View>
                                <ActivityIndicator color={PRIMARY_COLOR} />
                            </View>
                        </View>
                }
            </View>
        )
    }
}

export default ProfileSearchView