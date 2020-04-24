import React from 'react'
import { View, FlatList, TouchableWithoutFeedback } from 'react-native'
import styles from './styles'
import Thread from '../../../components/community/Thread'
import userService from '../../../services/user'
import Spinner from '../../../components/commons/Spinner'
import { Feather } from '@expo/vector-icons'
import Header from '../../../components/commons/Header'

class MyPostsView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            communities: [],
            error: false,
            loading: true,
            fetching: false,
            refreshing: false
        }
    }

    goBack = () => {
        const { navigation } = this.props
        navigation.goBack()
    }

    async fetchCommunities() {
        try {
            const { user } = this.props
            const res = await userService.getUserNewsById(user._id)
            this.setState({
                communities: res.data.articles,
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

    componentDidMount() {
        this.fetchCommunities()
    }

    renderItem = ({ item }) => {
        return <Thread style={styles.threadContainer} key={item._id} data={item} navigation={this.props.navigation} />
    }

    onRefresh = () => {
        this.setState({ refreshing: true })
        this.fetchCommunities()
    }

    render() {
        const { communities, refreshing, loading } = this.state
        return (
            <View style={styles.containter}>
                <Header title={'โพสต์ของฉัน'} leftIconComponent={
                    <TouchableWithoutFeedback onPress={this.goBack}>
                        <Feather color='white' size={28} name={'chevron-left'} />
                    </TouchableWithoutFeedback>}
                />
                {
                    loading
                        ?
                        <Spinner />
                        :
                        <View>
                            <FlatList
                                refreshing={refreshing}
                                onRefresh={this.onRefresh}
                                keyExtractor={(community) => community._id}
                                data={communities}
                                renderItem={this.renderItem}
                            />
                        </View>
                }
            </View>
        )
    }
}

export default MyPostsView