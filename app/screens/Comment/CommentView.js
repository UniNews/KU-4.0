import React from 'react'
import { View, ScrollView, ActivityIndicator } from 'react-native'
import styles from './styles'
import Header from '../../components/commons/Header'
import Comment from '../../components/news/Comment'
import StatusBar from '../../components/commons/StatusBar'
import newsService from '../../services/news'
import { PRIMARY_COLOR } from '../../assets/css/color'
import { Feather } from '@expo/vector-icons'

class CommentView extends React.Component {

    likeComment = (commentId) => {
        console.log(commentId)
    }

    goBack = () => {
        const { navigation } = this.props
        navigation.goBack()
    }

    constructor(props) {
        super(props)
        this.state = {
            comments: [],
            isLoading: true
        }
    }

    componentDidMount() {
        newsService.getNewsById(this.props.navigation.state.params.newsId).then(
            (result) => {
                this.setState({
                    comments: result.comments,
                    isLoading: false
                })
            }
        )
    }

    getProfile = (profileId) => {
        console.log(profileId)
    }

    render() {
        const { comments, isLoading } = this.state
        return (
            <View>
                <StatusBar />
                <Header title={'ความคิดเห็น'} leftIconComponent={
                    <Feather color='white' onPress={this.goBack} size={28} name={'chevron-left'} />
                } />
                {
                    !isLoading ?
                        <ScrollView style={styles.container} >
                            <View style={styles.innerCommentContainer}>
                                {comments.map((comment) => {
                                    return (
                                        <Comment key={comment._id} onProfilePressed={this.getProfile} onLikePressed={this.likeComment} data={comment} />
                                    )
                                })}
                            </View>
                        </ScrollView>
                        :
                        <View style={styles.loader}>
                            <ActivityIndicator color={PRIMARY_COLOR} size='large' />
                        </View>
                }
            </View>
        )
    }
}

export default CommentView;