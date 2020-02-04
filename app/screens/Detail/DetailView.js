import React from 'react'
import { Text, View, ImageBackground, Image, Linking, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import styles from './styles'
import Hyperlink from 'react-native-hyperlink'
import { FontAwesome, Feather } from '@expo/vector-icons'
import Hr from '../../components/commons/Hr'
import Header from '../../components/commons/Header'
import StatusBar from '../../components/commons/StatusBar'
import newsService from '../../services/news'

class DetailView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            isHide: true,
            news: null
        }
    }

    componentDidMount() {
        newsService.getNewsById(this.props.navigation.state.params.newsId).then(
            (result) =>
                this.setState({ news: result })
        )
    }

    goBack = () => {
        const { navigation } = this.props
        navigation.goBack()
    }

    getProfile = () => {
        const { navigation } = this.props
        const profileId = this.props.navigation.state.params.newsId
        navigation.navigate('ProfileDetail', { profileId })
    }

    likeNews = (id) => {
        console.log(id)
    }

    renderImage() {
        if (this.state.news === null)
            return (
                <ImageBackground style={styles.newsImage}
                    source={require('../../assets/imgs/testdetail.png')} >
                </ImageBackground>
            )
        else {
            return (
                <ImageBackground style={styles.newsImage}
                    source={{ uri: this.state.news.imageURL[0] || "" }} >
                </ImageBackground>
            )
        }
    }

    renderImageAvartar() {
        if (this.state.news === null)
            return (
                <Image
                    style={styles.imageAvatar}
                    source={{ uri: 'https://scontent.fbkk22-3.fna.fbcdn.net/v/t1.0-1/c0.0.820.820a/66686017_1125283600997160_4542151837934944256_n.jpg?_nc_cat=110&_nc_ohc=X4ovrI8YYLcAX9k8MI_&_nc_ht=scontent.fbkk22-3.fna&_nc_tp=1003&oh=a1f840ed4a1c6371eeb21242ffd1ea41&oe=5E90FC5F' }}
                />
            )
        else {
            return (
                <TouchableWithoutFeedback onPress={this.getProfile}>
                    <Image
                        style={styles.imageAvatar}
                        source={{ uri: this.state.news.user.avatarURl }}
                    />
                </TouchableWithoutFeedback>
            )
        }
    }

    render() {
        return (
            <View>
                <StatusBar />
                <Header title={'ข่าวมหาลัย'} leftIconComponent={
                    <TouchableWithoutFeedback onPress={this.goBack}>
                        <Feather color='white' size={28} name={'chevron-left'} />
                    </TouchableWithoutFeedback>}
                />
                <ScrollView style={styles.container} >
                    {this.renderImage()}
                    <View style={{ padding: 15 }}>
                        <View style={styles.titleContainer}>
                            {this.renderImageAvartar()}
                            <View>
                                <View style={styles.innerTitleContainer}>
                                    <Text style={styles.posterText}>
                                        {this.state.news ? this.state.news.user.displayName : ""}
                                    </Text>
                                    <Text style={styles.titleText}>
                                        {this.state.news ? this.state.news.title : ""}
                                    </Text>
                                    <View style={styles.iconContainer}>
                                        <View style={styles.textIconContainer}>
                                            <FontAwesome name='calendar' size={15} color='grey' />
                                            <Text style={styles.iconText}>
                                                {this.state.news ? this.state.news.createdAt : ""}
                                            </Text>
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => this.props.navigation.navigate('Comment', { newsId: this.props.navigation.state.params.newsId })}
                                            style={styles.textIconContainer}>
                                            <FontAwesome name='commenting-o' size={18} color='grey' />
                                            <Text style={styles.iconText}>
                                                {this.state.news ? this.state.news.comments.length : ""} ความเห็น
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <Hr style={styles.hr} />
                        <View>
                            <Text style={styles.descriptionHeaderText}>
                                รายละเอียด
                    </Text>
                            <Hyperlink linkStyle={{ textDecorationLine: 'underline', color: 'green', fontFamily: 'Kanit-Regular' }} onPress={(url, text) => Linking.openURL(url)}>
                                <Text style={styles.newsInfoText}>
                                    {this.state.news ? this.state.news.description : ""}
                                </Text>
                            </Hyperlink>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default DetailView;