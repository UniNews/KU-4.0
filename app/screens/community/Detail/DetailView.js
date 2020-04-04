import React from 'react'
import { View, ScrollView, TouchableWithoutFeedback, KeyboardAvoidingView, Image, Text, TouchableOpacity, TextInput, RefreshControl, ActivityIndicator, TouchableNativeFeedback } from 'react-native'
import styles from './styles'
import StatusBar from '../../../components/commons/StatusBar'
import Header from '../../../components/commons/Header'
import Hr from '../../../components/commons/Hr'
import { FontAwesome, Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import Button from '../../../components/commons/Button'
import { convertTimestamptoDate } from '../../../assets/javascripts/date'
import communityService from '../../../services/communities'
import { PRIMARY_COLOR } from '../../../assets/css/color'
import Comment from '../../../components/commons/Comment'

class DetailView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            community: {},
            myComment: '',
            posting: false,
            refreshing: false,
            fetching: true,
            error: false,
        }
    }

    componentDidMount() {
        const newsId = this.props.navigation.state.params.newsId
        communityService.getCommunitiesById(newsId)
            .then((res) => {
                console.log('sssd')
                const newsData = res.data
                console.log(newsData,'sss')
                this.setState({
                    community: newsData,
                    error: false,
                    fetching: false,
                })
            }).catch((err) => {
                this.setState({
                    error: true,
                    fetching: false,
                })
            })
    }

    likePost = () => {
        const userId = this.props.user._id
        const updatedCommunity = { ...this.state.community }
        const index = updatedCommunity.likes.indexOf(userId)
        if (index > -1)
            updatedCommunity.likes.splice(index, 1)
        else
            updatedCommunity.likes.push(userId)
        this.setState({ community: updatedCommunity })
        communityService.likeCommunity(updatedCommunity._id)
    }

    isPostLiked = () => {
        const { community } = this.state
        const userId = this.props.user._id
        return community.likes.indexOf(userId) > -1
    }

    likeComment = (id) => {
        const userId = this.props.user._id
        const updatedCommunity = { ...this.state.community }
        const comment = updatedCommunity.comments.find(comment => comment._id == id)
        if (comment) {
            const index = comment.like.indexOf(userId)
            if (index > -1)
                comment.like.splice(index, 1)
            else
                comment.like.push(userId)
            this.setState({ community: updatedCommunity })
            communityService.likeComment(id)
        }
    }

    isCommentLiked = (comment) => {
        const userId = this.props.user._id
        return comment.like.indexOf(userId) > -1
    }

    goProfile = (id) => {
        const { navigation } = this.props
        navigation.push('ProfileDetail', {
            userId: id
        })
    }

    goBack = () => {
        const { navigation } = this.props
        navigation.goBack()
    }

    postComment = () => {
        this.setState({ posting: true })
        const newsId = this.props.navigation.state.params.newsId
        const { myComment } = this.state
        communityService.postComment(newsId, myComment).then(result => {
            communityService.getCommunitiesById(newsId)
                .then((res) => {
                    const newsData = res.data
                    this.setState({
                        community: newsData,
                        error: false,
                        posting: false,
                        myComment: ''
                    })
                }).catch((err) => {
                    this.setState({
                        community: newsData,
                        error: true,
                        posting: false,
                    })
                })
        })
    }

    onRefresh = () => {
        this.setState({ refreshing: true })
        const newsId = this.props.navigation.state.params.newsId
        communityService.getCommunitiesById(newsId)
            .then((res) => {
                const newsData = res.data
                this.setState({
                    community: newsData,
                    refreshing: false,
                    error: false
                })
            }).catch((err) => {
                this.setState({
                    error: true,
                    refreshing: false,
                })
            })
    }

    communityComments() {
        const { community } = this.state
        return community.comments?.map((comment, index, commentArray) =>
            <View key={index}>
                <Comment
                    style={styles.commentContainer}
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
    }

    render() {
        const { community, myComment, refreshing, fetching, posting } = this.state
        return (
            <View style={styles.containter}>
                <StatusBar />
                <Header title={'ชุมชน'} leftIconComponent={
                    <Feather color='white' onPress={this.goBack} size={28} name={'chevron-left'} />
                }
                />
                <KeyboardAvoidingView style={styles.keyboard} behavior='height'>
                    {
                        !fetching ?
                            <ScrollView
                                refreshControl={
                                    <RefreshControl
                                        refreshing={refreshing}
                                        onRefresh={this.onRefresh}
                                    />
                                }
                            >
                                <TouchableNativeFeedback>
                                    <View style={styles.whiteBackground}>
                                        <View style={styles.contentContainer}>
                                            <View style={styles.profileContainer}>
                                                <View style={styles.infoContainer}>
                                                    <TouchableWithoutFeedback onPress={() => this.goProfile(community.user?._id)}>
                                                        <Image
                                                            style={styles.imageAvatar}
                                                            source={{ uri: community.author.avatarURL }}
                                                        />
                                                    </TouchableWithoutFeedback>
                                                    <View style={styles.infoGap}>
                                                        <View style={styles.nameContainer}>
                                                            <Text style={styles.userText}>
                                                                { community.author.displayName }
                                                            </Text>
                                                            <MaterialCommunityIcons style={styles.icon} name='dots-vertical' size={15} color='black' />
                                                        </View>
                                                        <View style={styles.clockIconContainer}>
                                                            <FontAwesome name='clock-o' size={15} color='grey' />
                                                            <Text style={styles.dateText}>
                                                                {` ${convertTimestamptoDate(community.createdAt)}`}
                                                            </Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                            <View style={styles.descriptionContainer}>
                                                <Text style={styles.descriptionText}>
                                                    {community.description}
                                                </Text>
                                            </View>
                                            <View style={styles.iconContainer}>
                                                <TouchableOpacity style={styles.textIconContainer} onPress={this.likePost}>
                                                    <FontAwesome name={this.isPostLiked() ? 'heart' : 'heart-o'} size={15} color={this.isPostLiked() ? PRIMARY_COLOR : 'grey'} />
                                                    <View style={styles.iconTextContainer}>
                                                        <Text style={styles.numberText}>
                                                            {`${community.likes ? community.likes.length : 0} `}
                                                        </Text>
                                                        <Text style={styles.indicatorText}>
                                                            ถูกใจ
                                                </Text>
                                                    </View>
                                                </TouchableOpacity>
                                                <TouchableOpacity
                                                    style={styles.textIconContainer}>
                                                    <FontAwesome name='commenting-o' size={18} color='grey' />
                                                    <View style={styles.iconTextContainer}>
                                                        <Text style={styles.numberText}>
                                                            {`${community.comments ? community.comments.length : 0} `}
                                                        </Text>
                                                        <Text style={styles.indicatorText}>
                                                            ความเห็น
                                                    </Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableNativeFeedback>
                                <View style={styles.commentHeaderContainer}>
                                    <Text style={styles.commentHeaderText}>
                                        {`ความคิดเห็น (${community.comment ? community.comment.length : 0})`}
                                    </Text>
                                </View>
                                <View style={styles.whiteBackground}>
                                    {this.communityComments()}
                                </View>
                            </ScrollView>
                            :
                            <View style={styles.loader}>
                                <ActivityIndicator color={PRIMARY_COLOR} size='large' />
                            </View>
                    }
                    <View style={styles.inputContainer}>
                        <TextInput
                            editable={!posting}
                            value={myComment}
                            onChangeText={text => this.setState({ myComment: text })}
                            placeholderTextColor={'grey'}
                            style={styles.textInputField}
                            placeholder={'เขียนความคิดเห็น...'}
                        />
                        {posting
                            ?
                            <ActivityIndicator color={PRIMARY_COLOR} size={20} />
                            :
                            <Button onPress={this.postComment} style={{ backgroundColor: 'transparent' }}>
                                <Text style={myComment === '' ? styles.idleText : styles.postText}>
                                    โพสต์
                                </Text>
                            </Button>
                        }
                    </View>
                </KeyboardAvoidingView>

            </View>
        )
    }
}

export default DetailView