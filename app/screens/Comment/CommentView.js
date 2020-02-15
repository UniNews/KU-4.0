import React from 'react'
import { View, ScrollView, ActivityIndicator, KeyboardAvoidingView, TextInput, RefreshControl } from 'react-native'
import styles from './styles'
import Header from '../../components/commons/Header'
import Comment from '../../components/news/Comment'
import StatusBar from '../../components/commons/StatusBar'
import newsService from '../../services/news'
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../assets/css/color'
import { Feather, FontAwesome } from '@expo/vector-icons'

class CommentView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            comments: [],
            fetching: true,
            msg: '',
            refreshing: false,
            posting: false
        }
    }

    componentDidMount() {
        const newsId = this.props.navigation.state.params.newsId
        newsService.getNewsById(newsId).then(
            (result) => {
                this.setState({
                    comments: result.data.comments,
                    fetching: false,
                })
            }
        )
    }

    likeComment = (commentId) => {
        console.log(commentId)
    }

    goBack = () => {
        const { navigation } = this.props
        navigation.goBack()
    }

    postComment = () => {
        this.setState({ posting: true })
        const newsId = this.props.navigation.state.params.newsId
        const { msg } = this.state
        newsService.postComment(newsId, msg).then(
            (result) => {
                newsService.getNewsById(newsId).then(
                    (result) => {
                        this.setState({
                            comments: result.data.comments,
                            posting: false,
                            msg: ''
                        })
                    }
                )
            }
        )
    }

    onRefresh = () => {
        this.setState({ refreshing: true })
        const newsId = this.props.navigation.state.params.newsId
        newsService.getNewsById(newsId).then(
            (result) => {
                this.setState({
                    comments: result.data.comments,
                    refreshing: false,
                })
            }
        )
    }

    getProfile = (profileId) => {
        console.log(profileId)
    }

    render() {
        const { comments, fetching, refreshing, posting, msg } = this.state
        return (
            <View style={styles.container}>
                <StatusBar />
                <Header title={'ความคิดเห็น'} leftIconComponent={
                    <Feather color='white' onPress={this.goBack} size={28} name={'chevron-left'} />
                } />
                <KeyboardAvoidingView style={styles.keyboardAvoidContainer} behavior='height'>
                    {
                        !fetching ?
                            <ScrollView
                                refreshControl={
                                    <RefreshControl
                                        refreshing={refreshing}
                                        onRefresh={this.onRefresh}
                                    />
                                }
                                style={styles.commentContainer}>
                                {comments.map((comment) => {
                                    return (
                                        <Comment key={comment._id} onProfilePressed={this.getProfile} onLikePressed={this.likeComment} data={comment} />
                                    )
                                })}
                            </ScrollView>
                            :
                            <View style={styles.loader}>
                                <ActivityIndicator color={PRIMARY_COLOR} size='large' />
                            </View>
                    }
                    <View style={styles.inputContainer}>
                        <TextInput editable={!posting} onChangeText={text => this.setState({ msg: text })} value={msg}
                            placeholderTextColor={'grey'} style={styles.textInputField} placeholder={'เขียนความคิดเห็น...'} />
                        {
                            posting ? <ActivityIndicator color={PRIMARY_COLOR} size={25} />
                                : <FontAwesome style={this.state.msg === '' ? styles.disableIcon : null} color={PRIMARY_COLOR} size={25} name={'send'} onPress={this.postComment} />
                        }
                    </View>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

export default CommentView