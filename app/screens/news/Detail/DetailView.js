import React from 'react'
import { Text, View, Image, Linking, ScrollView, TouchableOpacity, TouchableWithoutFeedback, RefreshControl } from 'react-native'
import styles from './styles'
import Hyperlink from 'react-native-hyperlink'
import { FontAwesome, Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import Hr from '../../../components/commons/Hr'
import Header from '../../../components/commons/Header'
import newsService from '../../../services/news'
import { convertTimestamptoDate } from '../../../assets/javascripts/date'
import Spinner from '../../../components/commons/Spinner'
import PostPopupModal from '../../../components/modals/PostPopupModal'
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../../assets/css/color'
import ImageModal from '../../../components/modals/ImageModal'

class DetailView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            news: {},
            loading: true,
            refreshing: false,
            error: false,
        }
    }

    componentDidMount() {
        this.fetchNews()
    }

    async fetchNews() {
        const newsId = this.props.navigation.state.params.newsId
        try {
            const result = await newsService.getNewsById(newsId)
            this.setState({
                news: result.data,
                loading: false,
                refreshing: false,
                error: false
            })
        }
        catch (err) {
            this.setState({
                news: {},
                loading: false,
                refreshing: false,
                error: true
            })
            this.props.showModal()
        }
        finally {
            const { news } = this.state
            const { setNewsThreadLikes, setNewsThreadComments } = this.props.navigation.state.params
            if (setNewsThreadLikes)
                setNewsThreadLikes(news.likes)
            if (setNewsThreadComments)
                setNewsThreadComments(news.comments)
        }
    }

    /* for sync comments between detail and comment page */
    setDetailComments = (comments) => {
        const { news } = this.state
        news.comments = comments
        this.setState({ news })
        /* also send comments data to news thread */
        const { setNewsThreadComments } = this.props.navigation.state.params
        if (setNewsThreadComments)
            setNewsThreadComments(comments)
    }

    goBack = () => {
        const { navigation } = this.props
        navigation.goBack()
    }

    goProfile = () => {
        const { navigation, user } = this.props
        const { news } = this.state
        if (user._id === news.author._id)
            navigation.navigate('MyProfile')
        else
            navigation.push('ProfileDetail', {
                userId: news.author._id,
            })
    }

    goReport = (post) => {
        if (post)
            this.props.navigation.push('PostReport', { report: post._id, type: 'article' })
    }

    goDelete = async (post) => {
        if (post)
            try {
                await newsService.deleteArticle(post._id)
                this.props.navigation.goBack()
            }
            catch (err) {
                this.props.showModal()
            }
    }

    onRefresh = () => {
        this.setState({ refreshing: true })
        this.fetchNews()
    }

    goComments = () => {
        const newsId = this.props.navigation.state.params.newsId
        this.props.navigation.push('Comment', {
            newsId: newsId,
            setDetailComments: this.setDetailComments
        })
    }

    showPopupModal = () => {
        const { news } = this.state
        if (news)
            this.popupRef.show(news)
    }

    likePost = () => {
        const setNewsThreadLikes = this.props.navigation.state.params.setNewsThreadLikes
        const { user } = this.props
        const { news } = this.state
        if (typeof news.isLiked !== 'undefined') {
            news.isLiked = !news.isLiked
            if (news.isLiked) {
                newsService.likeNews(news._id)
                news.likes.push(user._id)
            } else {
                newsService.unlikeNews(news._id)
                const indexToRemove = news.likes.indexOf(user._id)
                if (indexToRemove > -1)
                    news.likes.splice(indexToRemove, 1)
            }
            this.setState({ news })
            if (setNewsThreadLikes)
                setNewsThreadLikes(news.likes)
        }
    }

    newsType = () => {
        const { news } = this.state
        if (news.newsType === 'club')
            return 'ข่าวชมรม'
        else if (news.newsType === 'promotion')
            return 'ข่าวโปรโมชั่น'
        else if (news.newsType === 'lost-found')
            return 'ข่าวของหาย'
        else if (news.newsType === 'university')
            return 'ข่าวมหาลัย'
    }

    goTag = (tag) => {
        const { navigation } = this.props
        navigation.navigate(tag + 'TagNews')
    }

    render() {
        const { news, loading, refreshing, } = this.state
        return (
            <View style={styles.container}>
                <Header title={this.newsType()}
                    leftIconComponent={
                        <Feather color='white' onPress={this.goBack} size={28} name={'chevron-left'} />
                    }
                    rightIconComponent={
                        !loading
                            ?
                            <MaterialCommunityIcons style={styles.dotIcon} onPress={this.showPopupModal} color='white' name='dots-vertical' size={25} />
                            :
                            null
                    }
                />
                {
                    !loading ?
                        <ScrollView refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={this.onRefresh}
                            />
                        }>
                            <ImageModal
                                style={styles.newsImage}
                                source={{ uri: news.imageURL }} >
                            </ImageModal>
                            <View style={styles.topContainer}>
                                <View style={styles.titleContainer}>
                                    <TouchableWithoutFeedback onPress={this.goProfile}>
                                        <Image
                                            style={styles.imageAvatar}
                                            source={{ uri: news.author?.avatarURL }}
                                        />
                                    </TouchableWithoutFeedback>
                                    <View style={styles.innerTitleContainer}>
                                        <Text style={styles.posterText}>
                                            {news.author?.displayName}
                                        </Text>
                                        <Text style={styles.titleText}>
                                            {news.title}
                                        </Text>
                                        <View style={styles.dateIconContainer}>
                                            <FontAwesome name='calendar' size={15} color='grey' />
                                            <View style={styles.iconTextContainer}>
                                                <Text style={styles.dateText}>
                                                    {convertTimestamptoDate(news.createdAt)}
                                                </Text>
                                            </View>
                                        </View>

                                    </View>
                                </View>
                                {
                                    news.tags && news.tags.length > 0
                                        ?

                                        <View style={styles.tagIconContainer}>
                                            <FontAwesome name='tag' size={15} color={SECONDARY_COLOR} />
                                            {
                                                news.tags.map((tag, index, tagArray) => {
                                                    return <TouchableOpacity key={index} onPress={() => this.goTag(tag)} style={styles.tagButton}>
                                                        <Text style={styles.tagText}>
                                                            {` ${tag}`}{`${tagArray.length - 1 !== index ? ',' : ''}`}
                                                        </Text>
                                                    </TouchableOpacity>
                                                })
                                            }
                                        </View>
                                        :
                                        null
                                }
                                <Hr style={styles.hr} />
                                <View style={styles.descriptionHeaderContainer}>
                                    <Text style={styles.descriptionHeaderText}>
                                        รายละเอียด
                                    </Text>
                                    <View style={styles.iconContainer}>
                                        <TouchableOpacity style={styles.textIconContainer} onPress={this.likePost}>
                                            <FontAwesome name={news.isLiked ? 'heart' : 'heart-o'} size={15} color={news.isLiked ? PRIMARY_COLOR : 'grey'} />
                                            <View style={styles.iconTextContainer}>
                                                <Text style={styles.numberText}>
                                                    {`${news.likes ? news.likes.length : 0} `}
                                                </Text>
                                                <Text style={styles.indicatorText}>
                                                    ถูกใจ
                                            </Text>
                                            </View>
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            onPress={this.goComments}
                                            style={styles.textIconContainer}>
                                            <FontAwesome name='commenting-o' size={18} color='grey' />
                                            <View style={styles.iconTextContainer}>
                                                <Text style={styles.numberText}>
                                                    {`${news.comments ? news.comments.length : 0} `}
                                                </Text>
                                                <Text style={styles.indicatorText}>
                                                    ความเห็น
                                            </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.descriptionContainer}>
                                    <Hyperlink linkStyle={{ textDecorationLine: 'underline', color: 'green', fontFamily: 'Kanit-Regular' }} onPress={(url, text) => Linking.openURL(url)}>
                                        <Text style={styles.newsInfoText}>
                                            {news.description}
                                        </Text>
                                    </Hyperlink>
                                </View>
                            </View>
                        </ScrollView>
                        :
                        <Spinner />
                }
                <PostPopupModal childRef={(c) => this.popupRef = c} onReportPressed={this.goReport} onDeletePressed={this.goDelete} />
            </View >
        )
    }
}

export default DetailView