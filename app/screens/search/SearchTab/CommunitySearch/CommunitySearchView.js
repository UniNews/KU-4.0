import React from 'react'
import { View, ActivityIndicator, FlatList } from 'react-native'
import styles from './styles'
import Thread from '../../../../components/community/Thread'
import searchService from '../../../../services/search'
import Spinner from '../../../../components/commons/Spinner'
import { PRIMARY_COLOR } from '../../../../assets/css/color'

class CommunitySearchView extends React.Component {

    constructor(props) {
        super(props)
        this.page = 1
        this.onEndReachedCalledDuringMomentum = false
        this.state = {
            communities: [],
            error: false,
            loading: false,
            fetching: false,
            refreshing: false
        }
    }

    async fetchCommunities() {
        try {
            const { query } = this.props
            const res = await searchService.getCommunitiesByDescription(query, this.page)
            this.setState({
                communities: this.page === 1 ? res.data.articles : [...this.state.communities, ...res.data.articles],
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

    componentDidUpdate(prevProps) {
        const { query } = this.props
        if (query && prevProps.query != query) {
            this.page = 1
            this.setState({
                loading: true
            })
            this.fetchCommunities()
        }
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
        this.page = 1
        this.fetchCommunities()
    }

    onEndReached = () => {
        if (!this.onEndReachedCalledDuringMomentum) {
            this.setState({ fetching: true })
            this.page += 1
            this.fetchCommunities()
            this.onEndReachedCalledDuringMomentum = true
        }
    }

    onThreadPressed = (newsId) => {
        this.props.navigation.push('CommunityDetail', { newsId })
    }

    goPostCommunity = () => {
        this.props.navigation.navigate('PostCommunity')
    }

    render() {
        const { communities, refreshing, loading } = this.state
        return (
            <View style={styles.containter}>
                {
                    loading
                        ?
                        <Spinner />
                        :
                        <FlatList
                            refreshing={refreshing}
                            onRefresh={this.onRefresh}
                            keyExtractor={(community) => community._id}
                            data={communities}
                            initialNumToRender={10}
                            renderItem={this.renderItem}
                            ListFooterComponent={this.renderFooter}
                            onEndReachedThreshold={0.5}
                            onEndReached={this.onEndReached}
                            onMomentumScrollBegin={() => {
                                this.onEndReachedCalledDuringMomentum = false
                            }}
                        />
                }
            </View>
        )
    }
}

export default CommunitySearchView