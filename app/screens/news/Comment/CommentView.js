import React from 'react'
import {
  View,
  ActivityIndicator,
  TextInput,
  Text,
  FlatList,
  KeyboardAvoidingView,
  Platform
} from 'react-native'
import styles from './styles'
import Header from '../../../components/commons/Header'
import Comment from '../../../components/commons/Comment'
import newsService from '../../../services/news'
import { PRIMARY_COLOR } from '../../../assets/css/color'
import { Feather } from '@expo/vector-icons'
import Button from '../../../components/commons/Button'
import Spinner from '../../../components/commons/Spinner'
import PostPopupModal from '../../../components/modals/PostPopupModal'

class CommentView extends React.Component {

  constructor(props) {
    super(props)
    this.initial = true // for preventing scroll to bottom at the first time
    this.state = {
      comments: [],
      loading: true,
      msg: '',
      refreshing: false,
      posting: false,
      error: false,
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
      })
    }
    catch (err) {
      this.setState({
        comments: [],
        loading: false,
        refreshing: false,
        error: false,
      })
      this.props.showModal()
    }
    finally {
      const { comments } = this.state
      const { setDetailComments } = this.props.navigation.state.params
      if (setDetailComments)
        setDetailComments(comments)
    }
  }

  goBack = () => {
    const { navigation } = this.props
    navigation.goBack()
  }

  postComment = async () => {
    const { msg } = this.state
    if (msg !== '') {
      this.setState({ posting: true })
      const newsId = this.props.navigation.state.params.newsId
      await newsService.postComment(newsId, msg)
      this.setState({ msg: '' })
      await this.fetchComments()
    }
  }

  onRefresh = () => {
    this.setState({ refreshing: true })
    this.fetchComments()
  }

  likeComment = (comment) => {
    const { user } = this.props
    comment.isLiked = !comment.isLiked
    this.setState({ comments: [...this.state.comments] })
    if (comment.isLiked) {
      newsService.likeComment(comment._id)
      comment.likes.push(user._id)
    }
    else {
      newsService.unlikeComment(comment._id)
      const indexToRemove = comment.likes.indexOf(user._id)
      if (indexToRemove > -1)
        comment.likes.splice(indexToRemove, 1)
    }
  }

  goProfile = (id) => {
    const { navigation, user } = this.props
    if (user._id === id)
      navigation.navigate('MyProfile')
    else
      navigation.push('ProfileDetail', {
        userId: id
      })
  }

  showPopupModal = (comment) => {
    this.popupRef.show(comment)
  }

  goReport = (post) => {
    this.props.navigation.push('PostReport', { report: post._id, type: 'comment' })
  }

  goDelete = async (post) => {
    try {
      await newsService.deleteComment(post._id)
      this.onRefresh()
    }
    catch (err) {
      this.props.showModal()
    }
  }

  onLayoutScroll = () => {
    if (this.initial)
      this.initial = false
    else
      this.flatList.scrollToEnd({ animated: true })
  }

  onContentSizeChangeScroll = () => {
    const { posting } = this.state
    if (posting) {
      this.flatList.scrollToEnd({ animated: true })
      this.setState({
        posting: false
      })
    }
  }

  renderComment = ({ item }) => {
    return <Comment
      key={item._id}
      style={styles.commentContainer}
      liked={item.isLiked}
      onProfilePressed={this.goProfile}
      onLikePressed={() => this.likeComment(item)}
      data={item}
      onReportPressed={this.showPopupModal}
    />
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
        {!loading ? (
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            style={styles.contentContainer}>
            <FlatList
              ref={ref => this.flatList = ref}
              onContentSizeChange={this.onContentSizeChangeScroll}
              refreshing={refreshing}
              onRefresh={this.onRefresh}
              onLayout={this.onLayoutScroll}
              keyExtractor={(comments) => comments._id}
              data={comments}
              renderItem={this.renderComment}
            />
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

        ) :
          <Spinner />
        }
        <PostPopupModal childRef={(c) => this.popupRef = c} onReportPressed={this.goReport} onDeletePressed={this.goDelete} />
      </View >
    )
  }
}

export default CommentView
