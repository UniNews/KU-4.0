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
                    <ImageBackground style={styles.newsImage}
                        source={{ uri: this.state.news ? this.state.news.imageURL[0] : '' }} >
                    </ImageBackground>
                    <View style={{ padding: 15 }}>
                        <View style={styles.titleContainer}>
                            <TouchableWithoutFeedback onPress={this.getProfile}>
                                <Image
                                    style={styles.imageAvatar}
                                    source={{ uri: this.state.news ? this.state.news.user.avatarURl : '' }}
                                />
                            </TouchableWithoutFeedback>
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
                        <Hr style={styles.hr} />
                        <View>
                            <Text style={styles.descriptionHeaderText}>
                                รายละเอียด
                    </Text>
                            <Hyperlink style={{ paddingBottom: 100 }} linkStyle={{ textDecorationLine: 'underline', color: 'green', fontFamily: 'Kanit-Regular' }} onPress={(url, text) => Linking.openURL(url)}>
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