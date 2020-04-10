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
import newsService from '../../../services/news'
import { PRIMARY_COLOR } from '../../../assets/css/color'
import { Feather } from '@expo/vector-icons'
import Button from '../../../components/commons/Button'
import Spinner from '../../../components/commons/Spinner'

class CommentView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: [],
      loading: true,
      msg: '',
      refreshing: false,
      posting: false,
      error: false
    }
  }

  componentDidMount() {
    this.fetchComments()
  }

  async fetchComments() {
    const newsId = this.props.navigation.state.params.newsId
    try {
      const result = await newsService.getComments(newsId)
      this.setState({
        comments: result.data,
        loading: false,
        refreshing: false,
        error: false,
        posting: false
      })
    }
    catch (err) {
      this.setState({
        comments: [],
        loading: false,
        refreshing: false,
        error: false,
        posting: false
      })
    }
  }

  goBack = () => {
    const { navigation } = this.props
    navigation.goBack()
  }

  postComment = async () => {
    this.setState({ posting: true })
    const newsId = this.props.navigation.state.params.newsId
    const { msg } = this.state
    await newsService.postComment(newsId, msg)
    this.setState({ msg: '' })
    this.fetchComments()
  }

  onRefresh = () => {
    this.setState({ refreshing: true })
    this.fetchComments()
  }

  likeComment = (comment) => {
    const { user } = this.props
    comment.isLiked = !comment.isLiked
    this.setState({ comments: [...this.state.comments] })
    const newsId = this.props.navigation.state.params.newsId
    if (comment.isLiked) {
      newsService.likeComment(newsId, comment._id)
      comment.likes.push(user._id)
    }
    else {
      newsService.unlikeComment(newsId, comment._id)
      const indexToRemove = comment.likes.indexOf(user._id)
      if (indexToRemove > -1)
        comment.likes.splice(indexToRemove, 1)
    }
  }

  goProfile = (id) => {
    const { navigation } = this.props
    navigation.push('ProfileDetail', {
      userId: id
    })
  }

  render() {
    const { comments, loading, refreshing, posting, msg } = this.state
    return (
      <View style={styles.container}>
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
          {!loading ? (
            <ScrollView
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={this.onRefresh}
                />
              }
            >
              {comments.map((comment) => {
                return (
                  <Comment
                    key={comment._id}
                    style={styles.commentContainer}
                    liked={comment.isLiked}
                    onProfilePressed={this.goProfile}
                    onLikePressed={() => this.likeComment(comment)}
                    data={comment}
                  />
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
