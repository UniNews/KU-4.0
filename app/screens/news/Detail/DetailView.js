import React from 'react'
import { Text, View, ImageBackground, Image, Linking, ScrollView, TouchableOpacity, TouchableWithoutFeedback, RefreshControl } from 'react-native'
import styles from './styles'
import Hyperlink from 'react-native-hyperlink'
import { FontAwesome, Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import Hr from '../../../components/commons/Hr'
import Header from '../../../components/commons/Header'
import newsService from '../../../services/news'
import { convertTimestamptoDate } from '../../../assets/javascripts/date'
import Spinner from '../../../components/commons/Spinner'
import PostPopupModal from '../../../components/modals/PostPopupModal'
import { PRIMARY_COLOR } from '../../../assets/css/color'

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
    }

    goBack = () => {
        const { navigation } = this.props
        navigation.goBack()
    }

    goProfile = () => {
        const { navigation } = this.props
        const { news } = this.state
        navigation.push('ProfileDetail', {
            userId: news.author._id
        })
    }

    goReport = (post) => {
        this.props.navigation.push('PostReport', { report: post._id, type: 'article' })
    }

    goDelete = (post) => {
      newsService.deleteArticle(post._id)
        .then(res => this.props.navigation.goBack())
        .catch(err => console.log(err.response))
    }

    onRefresh = () => {
        this.setState({ refreshing: true })
        this.fetchNews()
    }

    goComments = () => {
        const newsId = this.props.navigation.state.params.newsId
        this.props.navigation.push('Comment', { newsId: newsId })
    }

    showPopupModal = () => {
        const { news } = this.state
        this.popupRef.show(news)
    }

    likePost = () => {
        const { user } = this.props
        const { news } = this.state
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

    render() {
        const { news, loading, refreshing, } = this.state
        return (
            <View style={styles.container}>
                <Header title={this.newsType()}
                    leftIconComponent={
                        <Feather color='white' onPress={this.goBack} size={28} name={'chevron-left'} />
                    }
                    rightIconComponent={
                        <MaterialCommunityIcons style={styles.dotIcon} onPress={this.showPopupModal} color='white' name='dots-vertical' size={25} />
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
                            <ImageBackground style={styles.newsImage}
                                source={{ uri: news.imageURL }} >
                            </ImageBackground>
                            <View style={styles.topContainer}>
                                <View style={styles.titleContainer}>
                                    <TouchableWithoutFeedback onPress={this.goProfile}>
                                        <Image
                                            style={styles.imageAvatar}
                                            source={{ uri: news.author.avatarURL }}
                                        />
                                    </TouchableWithoutFeedback>
                                    <View style={styles.innerTitleContainer}>
                                        <Text style={styles.posterText}>
                                            {news.author.displayName}
                                        </Text>

                                        <Text style={styles.titleText}>
                                            {news.title}
                                        </Text>
                                        <View style={[styles.textIconContainer, styles.iconContainerDate]}>
                                            <FontAwesome name='calendar' size={15} color='grey' />
                                            <View style={styles.iconTextContainer}>
                                                <Text style={styles.dateText}>
                                                    {convertTimestamptoDate(news.createdAt)}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>

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
                                <View>
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
                <PostPopupModal childRef={(c) => this.popupRef = c} onReportPressed={this.goReport} onDeletePressed={this.goDelete}/>
            </View>
        )
    }
}

export default DetailView