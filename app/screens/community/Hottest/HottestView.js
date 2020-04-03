import React from 'react'
import { View, ScrollView } from 'react-native'
import styles from './styles'
import Thread from '../../../components/community/Thread'
import communityService from '../../../services/communities'
import Hr from '../../../components/commons/Hr'

class HottestView extends React.Component {

    componentDidMount() {
        communityService.getHottestCommunities()
            .then((res) => {
                const newsData = res.data
                this.setState({
                    communities: newsData.articles,
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
        this.props.navigation.push('CommunityDetail', { newsId })
    }

    render() {
        const { communities } = this.state
        return (
            <View style={styles.containter}>
                <ScrollView>
                    {communities.map((thread, index, communitiesArray) => {
                        return (
                            <View key={thread._id}>
                                <Thread data={thread} onThreadPressed={this.onThreadPressed} />
                                {
                                    index != communitiesArray.length - 1
                                        ?
                                        <Hr />
                                        :
                                        null
                                }
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
        )
    }
}

export default HottestView;