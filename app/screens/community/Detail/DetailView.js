import React from 'react'
import { View, TouchableWithoutFeedback, KeyboardAvoidingView, Image, Text, TouchableOpacity, TextInput, ActivityIndicator, TouchableNativeFeedback, FlatList } from 'react-native'
import styles from './styles'
import Header from '../../../components/commons/Header'
import { FontAwesome, Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import Button from '../../../components/commons/Button'
import { convertTimestamptoDate } from '../../../assets/javascripts/date'
import communityService from '../../../services/news'
import { PRIMARY_COLOR } from '../../../assets/css/color'
import Comment from '../../../components/commons/Comment'
import Spinner from '../../../components/commons/Spinner'

class DetailView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            community: {},
            comments: [],
            myComment: '',
            posting: false,
            refreshing: false,
            loading: true,
            error: false,
        }
    }

    componentDidMount() {
        this.fetchCommunity()
        this.fetchComments()
    }

    async fetchCommunity() {
        try {
            const newsId = this.props.navigation.state.params.newsId
            const article = await communityService.getNewsById(newsId)
            this.setState({
                community: article.data,
                error: false,
                loading: false,
                fetching: false,
                posting: false,
            })
        }
        catch (err) {
            this.setState({
                error: true,
                loading: false,
                fetching: false,
                posting: false,
            })
            this.props.showModal()
        }
    }

    async fetchComments() {
        try {
            const newsId = this.props.navigation.state.params.newsId
            const comments = await communityService.getComments(newsId)
            this.setState({
                comments: comments.data,
                error: false,
                loading: false,
                fetching: false,
                posting: false,
            })
        }
        catch (err) {
            this.setState({
                error: true,
                loading: false,
                fetching: false,
                posting: false,
            })
            this.props.showModal()
        }
    }

    likePost = () => {
        const { community } = this.state
        const { user } = this.props
        community.isLiked = !community.isLiked
        this.setState({ community: community })
        const newsId = this.props.navigation.state.params.newsId
        if (community.isLiked) {
            communityService.likeNews(newsId)
            community.likes.push(user._id)
        }
        else {
            communityService.unlikeNews(newsId)
            const indexToRemove = community.likes.indexOf(user._id)
            if (indexToRemove > -1)
                community.likes.splice(indexToRemove, 1)
        }
    }

    likeComment = (comment) => {
        const { user } = this.props
        comment.isLiked = !comment.isLiked
        this.setState({ comments: [...this.state.comments] })
        const newsId = this.props.navigation.state.params.newsId
        if (comment.isLiked) {
            communityService.likeComment(newsId, comment._id)
            comment.likes.push(user._id)
        }
        else {
            communityService.unlikeComment(newsId, comment._id)
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

    goBack = () => {
        const { navigation } = this.props
        navigation.goBack()
    }

    postComment = async () => {
        this.setState({ posting: true })
        const newsId = this.props.navigation.state.params.newsId
        const { myComment } = this.state
        await communityService.postComment(newsId, myComment)
        this.setState({ myComment: '' })
        this.fetchComments()
    }

    onRefresh = () => {
        this.setState({ refreshing: true })
        this.fetchCommunity()
        this.fetchComments()
        this.setState({ refreshing: false })
    }

    renderComment = ({ item }) => {
        return <Comment
            style={styles.commentContainer}
            liked={item.isLiked}
            onProfilePressed={this.goProfile}
            onLikePressed={() => this.likeComment(item)}
            data={item}
        />
    }

    renderHeader = () => {
        const { community, comments } = this.state
        return <View>
            <TouchableNativeFeedback>
                <View style={styles.headerContainer}>
                    <View style={styles.contentContainer}>
                        <View style={styles.profileContainer}>
                            <View style={styles.infoContainer}>
                                <TouchableWithoutFeedback onPress={() => this.goProfile(community.author?._id)}>
                                    <Image
                                        style={styles.imageAvatar}
                                        source={{ uri: community.author?.avatarURL }}
                                    />
                                </TouchableWithoutFeedback>
                                <View style={styles.infoGap}>
                                    <View style={styles.nameContainer}>
                                        <Text style={styles.userText}>
                                            {community.author?.displayName}
                                        </Text>
                                        <MaterialCommunityIcons style={styles.dotIcon} name='dots-vertical' size={15} color='black' />
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
                                <FontAwesome name={community.isLiked ? 'heart' : 'heart-o'} size={15} color={community.isLiked ? PRIMARY_COLOR : 'grey'} />
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
                                        {`${comments.length || 0} `}
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
        </View>
    }

    render() {
        const { myComment, loading, posting, comments, refreshing } = this.state
        return (
            <View style={styles.containter}>
                <Header title={'ชุมชน'} leftIconComponent={
                    <Feather color='white' onPress={this.goBack} size={28} name={'chevron-left'} />
                }
                />
                <KeyboardAvoidingView style={styles.keyboard} behavior='height'>
                    {
                        !loading ?
                            <View style={styles.commentsContainer}>
                                <FlatList
                                    refreshing={refreshing}
                                    onRefresh={this.onRefresh}
                                    ListHeaderComponent={this.renderHeader}
                                    keyExtractor={(comments) => comments._id}
                                    data={comments}
                                    renderItem={this.renderComment}
                                />
                            </View>
                            :
                            <Spinner />
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