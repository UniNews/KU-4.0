import React from 'react'
import { Text, View, ImageBackground, Image, Linking, ScrollView, TouchableOpacity, TouchableWithoutFeedback, RefreshControl } from 'react-native'
import styles from './styles'
import Hyperlink from 'react-native-hyperlink'
import { FontAwesome, Feather } from '@expo/vector-icons'
import Hr from '../../../components/commons/Hr'
import Header from '../../../components/commons/Header'
import newsService from '../../../services/news'
import { convertTimestamptoDate } from '../../../assets/javascripts/date'
import Spinner from '../../../components/commons/Spinner'

class DetailView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            news: {},
            loading: true,
            refreshing: false,
            error: false
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

    onRefresh = () => {
        this.setState({ refreshing: true })
        this.fetchNews()
    }

    goComments = () => {
        const newsId = this.props.navigation.state.params.newsId
        this.props.navigation.push('Comment', { newsId: newsId })
    }

    render() {
        const { news, loading, refreshing } = this.state
        return (
            <View style={styles.container}>
                <Header title={'ข่าวมหาลัย'} leftIconComponent={
                    <Feather color='white' onPress={this.goBack} size={28} name={'chevron-left'} />
                } />
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
                                        <View style={styles.iconContainer}>
                                            <View style={styles.textIconContainer}>
                                                <FontAwesome name='calendar' size={15} color='grey' />
                                                <Text style={styles.iconText}>
                                                    {convertTimestamptoDate(news.createdAt)}
                                                </Text>
                                            </View>
                                            {
                                                <TouchableOpacity
                                                    onPress={this.goComments}
                                                    style={styles.textIconContainer}>
                                                    <FontAwesome name='commenting-o' size={18} color='grey' />
                                                    <Text style={styles.iconText}>
                                                        {this.state.news.comments.length} ความเห็น
                                                        </Text>
                                                </TouchableOpacity>
                                            }
                                        </View>
                                    </View>
                                </View>
                                <Hr style={styles.hr} />
                                <View>
                                    <Text style={styles.descriptionHeaderText}>
                                        รายละเอียด
                                    </Text>
                                    <Hyperlink style={{ paddingBottom: 100 }} linkStyle={{ textDecorationLine: 'underline', color: 'green', fontFamily: 'Kanit-Regular' }} onPress={(url, text) => Linking.openURL(url)}>
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
            </View>
        );
    }
}

export default DetailView;