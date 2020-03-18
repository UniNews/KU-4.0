import React from 'react'
import { Text, View, ImageBackground, Image, Linking, ScrollView, TouchableOpacity, TouchableWithoutFeedback, ActivityIndicator } from 'react-native'
import styles from './styles'
import Hyperlink from 'react-native-hyperlink'
import { FontAwesome, Feather } from '@expo/vector-icons'
import Hr from '../../../components/commons/Hr'
import Header from '../../../components/commons/Header'
import StatusBar from '../../../components/commons/StatusBar'
import newsService from '../../../services/news'
import { convertTimestamptoDate } from '../../../assets/javascripts/date'
import { PRIMARY_COLOR } from '../../../assets/css/color'

class DetailView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            news: {
                imageURL: [],
                avatarURL: '',
                user: {
                    displayName: '',
                    avatarURL: null
                },
                title: '',
                createdAt: '',
                comments: [],
                description: '',
            },
            isLoading: true,
            updateComments:null
        }
    }

    componentDidMount() {
        const newsId = this.props.navigation.state.params.newsId
        newsService.getNewsById(newsId).then(
            (result) =>
                this.setState({
                    news: result.data,
                    isLoading: false
                })
        )
    }

    goBack = () => {
        const { navigation } = this.props
        navigation.goBack()
    }

    getProfile = () => {
        const { navigation } = this.props
        const { news } = this.state
        const profileId = news.user._id
        navigation.navigate('ProfileDetail', { profileId })
    }

    getComments = () => {
        const newsId = this.props.navigation.state.params.newsId
        this.props.navigation.navigate('Comment', { newsId: newsId,updateData: this.updateData })
    }

    updateData = (data) =>{
        this.setState({updateComments:data})
    }

    getCommentLength=()=>{
        if(this.state.updateComments==null)
            return <Text style={styles.iconText}>
                        {this.state.news.comments.length} ความเห็น
                    </Text>
        else
            return <Text style={styles.iconText}>
                        {this.state.updateComments.length} ความเห็น
                    </Text>
    }

    render() {
        const { news, isLoading } = this.state
        return (
            <View>
                <StatusBar />
                <Header title={'ข่าวมหาลัย'} leftIconComponent={
                    <Feather color='white' onPress={this.goBack} size={28} name={'chevron-left'} />
                }
                />
                {
                    !isLoading ?
                        <ScrollView style={styles.container} >
                            <ImageBackground style={styles.newsImage}
                                source={{ uri: news.imageURL.length > 0 ? news.imageURL[0] : null }} >
                            </ImageBackground>
                            <View style={{ padding: 15 }}>
                                <View style={styles.titleContainer}>
                                    <TouchableWithoutFeedback onPress={this.getProfile}>
                                        <Image
                                            style={styles.imageAvatar}
                                            source={{ uri: news.user.avatarURL }}
                                        />
                                    </TouchableWithoutFeedback>
                                    <View style={styles.innerTitleContainer}>
                                        <Text style={styles.posterText}>
                                            {news.user.displayName}
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
                                            <TouchableOpacity
                                                onPress={this.getComments}
                                                style={styles.textIconContainer}>
                                                <FontAwesome name='commenting-o' size={18} color='grey' />
                                                {this.getCommentLength()}
                                            </TouchableOpacity>
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
                        <View style={styles.loader}>
                            <ActivityIndicator color={PRIMARY_COLOR} size='large' />
                        </View>
                }
            </View>
        );
    }
}

export default DetailView;