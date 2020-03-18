import React from 'react'
import { View, ScrollView } from 'react-native'
import styles from './styles'
import Thread from '../../../components/community/Thread'
import communityService from '../../../services/communities'

class LatestView extends React.Component {

    componentDidMount() {
        communityService.getLatestCommunities()
            .then((res) => {
                console.log(res.data)
                const newsData = res.data
                this.setState({
                    communities: newsData,
                    error: false
                })
            }).catch((err) => {
                this.setState({ error: true })
            })
    }

    constructor(props) {
        super(props)
        this.state = {
            communities: [],
            error: false
        }
    }

    onThreadPressed = (newsId) => {
        this.props.navigation.navigate('Detail', { newsId })
    }

    render() {
        const { communities } = this.state
        return (
            <View style={styles.containter}>
                <ScrollView>
                    {communities.map((thread, index, array) => {
                        return (
                            <View key={thread._id} style={styles.threadContainer}>
                                <Thread data={thread} onThreadPressed={this.onThreadPressed} />
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
        )
    }
}

export default LatestView