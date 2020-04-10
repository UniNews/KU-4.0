import React from 'react'
import { View, ScrollView } from 'react-native'
import styles from './styles'
import Thread from '../../../components/community/Thread'
import userService from '../../../services/user'
import Hr from '../../../components/commons/Hr'
import Header from '../../../components/commons/Header';
import { Feather } from '@expo/vector-icons';
import Spinner from '../../../components/commons/Spinner'

class AnyCommunityView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            communities: [],
            loading: true,
            error: false
        }
    }

    async componentDidMount() {
        const { userId } = this.props.navigation.state.params
        try {
            const response = await userService.getUserById(userId)
            this.setState({
                loading: false,
                error: false,
                communities: response.data.communities
            })
        }
        catch (err) {
            this.setState({
                loading: false,
                error: true
            })
        }
    }

    goBack = () => {
        const { navigation } = this.props;
        navigation.goBack();
    }

    onThreadPressed = (newsId) => {
        this.props.navigation.push('CommunityDetail', { newsId })
    }

    render() {
        const { communities, loading } = this.state
        return (
            <View style={styles.containter}>
                <Header
                    title={'โพสต์ทั้งหมด'}
                    leftIconComponent={
                        <Feather
                            color='white'
                            onPress={this.goBack}
                            size={28}
                            name={'chevron-left'}
                        />
                    }
                />
                {
                    !loading
                        ?
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
                        :
                        <Spinner />

                }

            </View>
        )
    }
}

export default AnyCommunityView