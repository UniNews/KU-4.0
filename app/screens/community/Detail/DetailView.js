import React from 'react'
import { View, ScrollView, TouchableWithoutFeedback, KeyboardAvoidingView, Image, Text, TouchableOpacity, TextInput, RefreshControl, ActivityIndicator } from 'react-native'
import styles from './styles'
import StatusBar from '../../../components/commons/StatusBar'
import Header from '../../../components/commons/Header'
import Hr from '../../../components/commons/Hr'
import { FontAwesome, Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import Button from '../../../components/commons/Button'
import { convertTimestamptoDate } from '../../../assets/javascripts/date'
import communityService from '../../../services/communities'
import { PRIMARY_COLOR } from '../../../assets/css/color'

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
                const newsData = res.data
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
        if (this.state.community.comments !== undefined)
            return this.state.community.comments.map((data, i) =>
                <View key={i} style={styles.commentContainer}>
                    <View style={styles.commentTitleContainer}>
                        <View style={styles.commentInfoContainer}>
                            <View>
                                <TouchableWithoutFeedback>
                                    <Image
                                        style={styles.imageAvatar}
                                        source={{ uri: data.user ? data.user.avatarURL : null }}
                                    />
                                </TouchableWithoutFeedback>
                            </View>
                            <View style={styles.gapTitleText}>
                                <Text style={styles.userText}>
                                    {data.user ? data.user.displayName : null}
                                </Text>
                                <Text style={styles.dateText}>
                                    {convertTimestamptoDate(data.createdAt)}
                                </Text>
                                <Text style={styles.commentText}>
                                    {data.text}
                                </Text>
                                <View style={styles.commentIconContainer}>
                                    <TouchableOpacity onPress={() => {
                                        const index = data.like.map(data => data._id).indexOf(this.props.user._id)
                                        if (index > -1) {
                                            data.like.splice(index, 1)
                                        }
                                        else {
                                            data.like.push(this.props.user)
                                        }
                                        this.state.community.comments[i] = data
                                        this.setState({
                                            community: {
                                                ...this.state.community,
                                                comments: [
                                                    ...this.state.community.comments
                                                ]
                                            }
                                        })
                                        communityService.likeComment(data._id)
                                    }} style={styles.textIconContainer}>
                                        <FontAwesome name='heart-o' size={15} color='grey' />
                                        <View style={styles.iconTextContainer}>
                                            <Text style={styles.numberText}>
                                                {`${data.like ? data.like.length : 0}`}
                                            </Text>
                                            <Text style={styles.indicatorText}>
                                                ถูกใจ
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <MaterialCommunityIcons style={styles.icon} name='dots-vertical' size={15} color='black' />
                    </View>
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
                <KeyboardAvoidingView style={{ flex: 1 }} behavior='height'>
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
                                <View style={styles.contentContainer}>
                                    <View style={styles.titleContainer}>
                                        <View style={styles.infoContainer}>
                                            <TouchableWithoutFeedback>
                                                <Image
                                                    style={styles.imageAvatar}
                                                    source={{ uri: community.user ? community.user.avatarURL : null }}
                                                />
                                            </TouchableWithoutFeedback>
                                            <View style={styles.gapTitleText}>
                                                <Text style={styles.userText}>
                                                    {community.user ? community.user.displayName : null}
                                                </Text>
                                                <Text style={styles.dateText}>
                                                    {convertTimestamptoDate(community.createdAt)}
                                                </Text>
                                            </View>
                                        </View>
                                        <MaterialCommunityIcons style={styles.icon} name='dots-vertical' size={15} color='black' />
                                    </View>
                                </View>
                                <View style={styles.descriptionContainer}>
                                    <Text style={styles.descriptionText}>
                                        {community.description}
                                    </Text>
                                </View>
                                <View style={styles.iconContainer}>
                                    <TouchableOpacity style={styles.textIconContainer}>
                                        <FontAwesome name='heart-o' size={15} color='grey' />
                                        <View style={styles.iconTextContainer}>
                                            <Text style={styles.numberText}>
                                                {`${community.like ? community.like.length : 0} `}
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
                                <Hr />
                                <Text style={styles.descriptionHeaderText}>
                                    {`ความคิดเห็น (${community.comment ? community.comment.length : 0})`}
                                </Text>
                                {this.communityComments()}
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