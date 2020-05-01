import React from 'react'
import { View, ActivityIndicator, FlatList, Text } from 'react-native'
import styles from './styles'
import Thread from '../../../../components/community/Thread'
import searchService from '../../../../services/search'
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
        }
    }

    renderEmpty = () => {
        const { query } = this.props
        return (
            query !== '' ?
                <View style={styles.textContainer}>
                    <Text style={styles.indicatorText}>
                        ไม่พบชุมชนสำหรับ
                </Text>
                    <Text style={styles.queryText}>
                        {` ${query}`}
                    </Text>
                </View>
                :
                null
        )
    }

    async fetchCommunities() {
        try {
            const { query } = this.props
            const res = await searchService.getCommunitiesByDescription(query, this.page)
            this.setState({
                communities: this.page === 1 ? res.data.articles : [
                    ...this.state.communities,
                    ...res.data.articles.filter(n => !this.state.communities.some(p => p._id === n._id))
                ],
                error: false,
                loading: false,
                fetching: false,
            })
        }
        catch (err) {
            this.setState({
                error: true,
                loading: false,
                fetching: false,
            })
            const { showModal } = this.props
            showModal()
        }
    }

    componentDidUpdate(prevProps) {
        const { query } = this.props
        if (query !== '' && prevProps.query != query) {
            this.page = 1
            this.setState({
                loading: true
            })
            this.fetchCommunities()
        }
    }


    renderItem = ({ item }) => {
        return <Thread style={styles.threadContainer} navigation={this.props.navigation} key={item._id} data={item} />
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

    onEndReached = () => {
        if (!this.onEndReachedCalledDuringMomentum) {
            this.setState({ fetching: true })
            this.page += 1
            this.fetchCommunities()
            this.onEndReachedCalledDuringMomentum = true
        }
    }

    goPostCommunity = () => {
        this.props.navigation.navigate('PostCommunity')
    }

    render() {
        const { communities, loading } = this.state
        const { query } = this.props
        return (
            <View style={styles.containter}>
                {
                    loading
                        ?
                        <View style={styles.textContainer}>
                            <Text style={styles.indicatorText}>
                                {`กำลังค้นหา`}
                            </Text>
                            <Text style={styles.queryText}>
                                {` ${query} `}
                            </Text>
                            <View>
                                <ActivityIndicator color={PRIMARY_COLOR} />
                            </View>
                        </View>
                        :
                        <FlatList
                            ListEmptyComponent={this.renderEmpty}
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