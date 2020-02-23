import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import styles from './styles'
import Button from '../../../components/commons/Button'
import { FontAwesome } from '@expo/vector-icons'
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
                <ScrollView contentContainerStyle={styles.threadContainer}>
                    {communities.map((thread) => {
                        return (
                            <Thread key={thread._id} data={thread} onThreadPressed={this.onThreadPressed} />
                        )
                    })}
                </ScrollView>
            </View>
        )
    }
}

export default LatestView