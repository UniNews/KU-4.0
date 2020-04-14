import React from 'react'
import { View, ActivityIndicator, FlatList } from 'react-native'
import styles from './styles'
import Thread from '../../../../components/community/Thread'
import communityService from '../../../../services/news'
import Spinner from '../../../../components/commons/Spinner'
import { PRIMARY_COLOR } from '../../../../assets/css/color'
import Button from '../../../../components/commons/Button'
import { Entypo } from '@expo/vector-icons'
import { connect } from 'react-redux';
import { showModal } from '../../../../reducers/ErrorModalReducer/actions';

class LatestView extends React.Component {

    constructor(props) {
        super(props)
        this.page = 1
        this.onEndReachedCalledDuringMomentum = false
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
            const res = await communityService.getLatestCommunities(this.page)
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
                        <View>
                            <FlatList
                                contentContainerStyle={styles.contentContainer}
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
                            <Button onPress={this.goPostCommunity} activeOpacity={0.7} style={styles.floatingButtonContainer} >
                                <Entypo name='new-message' size={20} color='white' />
                            </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(LatestView)