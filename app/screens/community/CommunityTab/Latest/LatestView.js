import React from 'react'
import { View, ActivityIndicator, FlatList } from 'react-native'
import styles from './styles'
import Thread from '../../../../components/community/Thread'
import Spinner from '../../../../components/commons/Spinner'
import { PRIMARY_COLOR } from '../../../../assets/css/color'
import Button from '../../../../components/commons/Button'
import { FontAwesome } from '@expo/vector-icons'

class LatestView extends React.Component {

    constructor(props) {
        super(props)
        this.onEndReachedCalledDuringMomentum = false
        this.state = {
            loading: true,
        }
    }

    async componentDidMount() {
        const { refreshCommunities } = this.props
        await refreshCommunities()
        this.setState({
            loading: false
        })
    }

    componentDidUpdate(prevProps) {
        const { error, showModal } = this.props
        if (error && prevProps.error != error)
            showModal()
    }

    renderItem = ({ item }) => {
        return <Thread style={styles.threadContainer} key={item._id} data={item} navigation={this.props.navigation} />
    }

    renderFooter = () => {
        if (!this.props.fetching)
            return null
        return (
            <ActivityIndicator
                color={PRIMARY_COLOR}
            />
        )
    }

    onRefresh = () => {
        const { refreshCommunities } = this.props
        refreshCommunities()
    }

    onEndReached = () => {
        if (!this.onEndReachedCalledDuringMomentum) {
            const { fetchCommunities } = this.props
            fetchCommunities()
            this.onEndReachedCalledDuringMomentum = true
        }
    }

    goPostCommunity = () => {
        this.props.navigation.navigate('PostCommunity')
    }

    render() {
        const { loading } = this.state
        const { communities, refreshing } = this.props
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
                        </View>
                }
                <Button onPress={this.goPostCommunity} activeOpacity={0.7} style={styles.floatingButtonContainer} >
                    <FontAwesome name='pencil' size={25} color='white' />
                </Button>
            </View>
        )
    }
}

export default LatestView