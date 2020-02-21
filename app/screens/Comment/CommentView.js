import React from 'react';
import {
  View,
  ScrollView,
  ActivityIndicator,
  KeyboardAvoidingView,
  TextInput,
  RefreshControl
} from 'react-native';
import styles from './styles';
import Header from '../../components/commons/Header';
import Comment from '../../components/news/Comment';
import StatusBar from '../../components/commons/StatusBar';
import newsService from '../../services/news';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../assets/css/color';
import { Feather, FontAwesome } from '@expo/vector-icons';

class CommentView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      fetching: true,
      msg: '',
      refreshing: false,
      posting: false
    };
  }

  componentWillUnmount() { }

  componentDidMount() {
    const newsId = this.props.navigation.state.params.newsId;
    newsService.getNewsById(newsId).then(result => {
      this.setState({
        comments: result.data.comments,
        fetching: false
      });
    });
  }

  likeComment = commentId => {
    newsService.likeComment(commentId).then(result => {
      const currentuser = this.props.user;
      let updatedComments = [...this.state.comments];
      for (let i in updatedComments) {
        if (updatedComments[i]._id === commentId) {
          let foundLike = false;
          for (let j in updatedComments[i].like) {
            if (updatedComments[i].like[j].username === currentuser.username) {
              foundLike = true;
              break;
            }
          }
          if (foundLike)
            updatedComments[i].like = updatedComments[i].like.filter(
              el => el.username !== currentuser.username
            );
          else updatedComments[i].like.push(currentuser);
        }
      }
      this.setState({ comments: updatedComments });
    });
  };

  goBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  postComment = () => {
    this.setState({ posting: true });
    const newsId = this.props.navigation.state.params.newsId;
    const { msg } = this.state;
    newsService.postComment(newsId, msg).then(result => {
      newsService.getNewsById(newsId).then(result => {
        this.setState({
          comments: result.data.comments,
          posting: false,
          msg: ''
        });
      });
    });
  };

  checkLiked = like => {
    const currentuser = this.props.user;
    return like.filter(element => {
      return element.username === currentuser.username;
    }).length;
  };

  onRefresh = () => {
    this.setState({ refreshing: true });
    const newsId = this.props.navigation.state.params.newsId;
    newsService.getNewsById(newsId).then(result => {
      this.setState({
        comments: result.data.comments,
        refreshing: false
      });
    });
  };

  getProfile = profileId => {
    console.log(profileId);
  };

  render() {
    const { comments, fetching, refreshing, posting, msg } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar />
        <Header
          title={'ความคิดเห็น'}
          leftIconComponent={
            <Feather
              color='white'
              onPress={this.goBack}
              size={28}
              name={'chevron-left'}
            />
          }
        />
        <KeyboardAvoidingView
          style={styles.keyboardAvoidContainer}
          behavior='height'
        >
          {!fetching ? (
            <ScrollView
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={this.onRefresh}
                />
              }
              style={styles.commentContainer}
            >
              {comments.map(comment => {
                return (
                  <Comment
                    liked={this.checkLiked(comment.like)}
                    key={comment._id}
                    onProfilePressed={this.getProfile}
                    onLikePressed={this.likeComment}
                    data={comment}
                  />
                );
              })}
            </ScrollView>
          ) : (
              <View style={styles.loader}>
                <ActivityIndicator color={PRIMARY_COLOR} size='large' />
              </View>
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
                <FontAwesome
                  style={this.state.msg === '' ? styles.disableIcon : null}
                  color={PRIMARY_COLOR}
                  size={25}
                  name={'send'}
                  onPress={this.postComment}
                />
              )}
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default CommentView;
