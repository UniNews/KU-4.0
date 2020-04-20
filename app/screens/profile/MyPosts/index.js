import React from 'react'
import { View, ActivityIndicator, FlatList, TouchableWithoutFeedback } from 'react-native'
import styles from './styles'
import Thread from '../../../components/community/Thread'
import userService from '../../../services/user'
import Spinner from '../../../components/commons/Spinner'
import { PRIMARY_COLOR } from '../../../assets/css/color'
import Button from '../../../components/commons/Button'
import { FontAwesome ,Feather } from '@expo/vector-icons'
import { connect } from 'react-redux'
import Header from '../../../components/commons/Header'
import { showModal } from '../../../reducers/ErrorModalReducer/actions'

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

    async fetchCommunities() {
        try {
            const { userId } = this.props.navigation.state.params
            const res = await userService.getUserNewsById(userId)
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
        return <Thread style={styles.threadContainer} key={item._id} data={item} onThreadPressed={this.onThreadPressed} />
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

    onRefresh = () => {
        this.setState({ refreshing: true })
        this.fetchCommunities()
    }

    onThreadPressed = (newsId) => {
        this.props.navigation.push('CommunityDetail', { newsId })
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
                                contentContainerStyle={styles.contentContainer}
                                refreshing={refreshing}
                                onRefresh={this.onRefresh}
                                keyExtractor={(community) => community._id}
                                data={communities}
                                renderItem={this.renderItem}
                                ListFooterComponent={this.renderFooter}
                            />
                        </View>
                }
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showModal
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPostsView)