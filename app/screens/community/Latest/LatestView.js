import React from 'react'
import { View, ScrollView } from 'react-native'
import styles from './styles'
import Thread from '../../../components/community/Thread'
import communityService from '../../../services/communities'
import Hr from '../../../components/commons/Hr'

class LatestView extends React.Component {

    componentDidMount() {
        communityService.getLatestCommunities()
            .then((res) => {
                const newsData = res.data
                console.log(newsData)
                this.setState({
                    communities: newsData.articles,
                    error: false,
                    commentPropNumber: -1
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

    onChange = data => {
        this.setState(data);
    }

    onThreadPressed = (newsId) => {
        this.props.navigation.push('CommunityDetail', { newsId ,onChange: this.onChange })
    }

    render() {
        const { communities } = this.state
        console.log(this.state.commentPropNumber,'test')
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

export default LatestView