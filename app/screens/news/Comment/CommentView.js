import React from 'react'
import {
  View,
  ScrollView,
  ActivityIndicator,
  KeyboardAvoidingView,
  TextInput,
  RefreshControl,
  Text
} from 'react-native'
import styles from './styles'
import Header from '../../../components/commons/Header'
import Comment from '../../../components/commons/Comment'
import StatusBar from '../../../components/commons/StatusBar'
import newsService from '../../../services/news'
import { PRIMARY_COLOR } from '../../../assets/css/color'
import { Feather } from '@expo/vector-icons'
import Button from '../../../components/commons/Button'
import Hr from '../../../components/commons/Hr'
import Spinner from '../../../components/commons/Spinner'

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
    newsService.getNewsById(newsId).then(result => {
      this.setState({
        comments: result.data.comments,
        fetching: false
      })
    })
  }

  goBack = () => {
    const { navigation } = this.props
    navigation.goBack()
  }

  postComment = () => {
    this.setState({ posting: true })
    const newsId = this.props.navigation.state.params.newsId
    const { msg } = this.state
    newsService.postComment(newsId, msg).then(result => {
      newsService.getNewsById(newsId).then(result => {
        this.setState({
          comments: result.data.comments,
          posting: false,
          msg: ''
        })
      })
    })
  }

  isCommentLiked = (comment) => {
    const userId = this.props.user._id
    return comment.like.indexOf(userId) > -1
  }

  onRefresh = () => {
    this.setState({ refreshing: true })
    const newsId = this.props.navigation.state.params.newsId
    newsService.getNewsById(newsId).then(result => {
      this.setState({
        comments: result.data.comments,
        refreshing: false
      })
    })
  }

  likeComment = (id) => {
    const userId = this.props.user._id
    const updatedComments = [...this.state.comments]
    const comment = updatedComments.find(comment => comment._id == id)
    if (comment) {
      const index = comment.like.indexOf(userId)
      if (index > -1)
        comment.like.splice(index, 1)
      else
        comment.like.push(userId)
      this.setState({ comments: updatedComments })
      newsService.likeComment(id)
    }
  }

  goProfile = (id) => {
    const { navigation } = this.props
    navigation.push('ProfileDetail', {
      userId: id
    })
  }

  render() {
    const { comments, fetching, refreshing, posting, msg } = this.state
    return (
      <View style={styles.container}>
        <StatusBar />
        <Header
          title={'ความคิดเห็น'}
          leftIconComponent={
            <Feather
              color={'white'}
              onPress={this.goBack}
              size={28}
              name={'chevron-left'}
            />
          }
        />
        <KeyboardAvoidingView
          style={styles.keyboardAvoidContainer}
          behavior={'height'}
        >
          {!fetching ? (
            <ScrollView
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={this.onRefresh}
                />
              }
            >
              {comments.map((comment, index, commentArray) => {
                return (
                  <View style={styles.commentContainer} key={comment._id}>
                    <Comment
                      liked={this.isCommentLiked(comment)}
                      onProfilePressed={this.goProfile}
                      onLikePressed={this.likeComment}
                      data={comment}
                    />
                    {
                      index != commentArray.length - 1
                        ?
                        <Hr />
                        :
                        null
                    }
                  </View>
                )
              })}
            </ScrollView>
          ) : (
              <Spinner />
            )}
          <View style={styles.inputContainer}>
            <TextInput
              editable={!posting}
              onChangeText={text => this.setState({ msg: text })}
              value={msg}
              placeholderTextColor={'grey'}
              style={styles.textInputField}
              placeholder={'เขียนความคิดเห็น...'}
            />
            {posting ? (
              <ActivityIndicator color={PRIMARY_COLOR} size={25} />
            ) : (
                <Button onPress={this.postComment} style={{ backgroundColor: 'transparent' }}>
                  <Text style={msg === '' ? styles.idleText : styles.postText}>
                    โพสต์
                  </Text>
                </Button>
              )}
          </View>
        </KeyboardAvoidingView>
      </View>
    )
  }
}

export default CommentView
