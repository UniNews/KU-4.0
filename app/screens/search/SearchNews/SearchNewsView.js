import React from 'react'
import { Text, View, ActivityIndicator, TextInput, ScrollView } from 'react-native'
import StatusBar from '../../../components/commons/StatusBar'
import styles from './styles'
import Header from '../../../components/commons/Header';
import { Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { PRIMARY_COLOR } from '../../../assets/css/color';
import newsService from '../../../services/news'
import NewsCard from '../../../components/news/NewsThread'
import Button from '../../../components/commons/Button'
import Hr from '../../../components/commons/Hr'

const tags = [
    {
        outlineIconName: 'commenting-o',
        iconName: 'commenting',
        text: 'ทั่วไป',
        iconComponent: FontAwesome
    },
    {
        outlineIconName: 'heart-o',
        iconName: 'heart',
        text: 'ความรัก',
        iconComponent: FontAwesome
    },
    {
        outlineIconName: 'lightbulb-o',
        iconName: 'lightbulb-o',
        text: 'การเรียน',
        iconComponent: FontAwesome
    },
    {
        outlineIconName: 'futbol-o',
        iconName: 'futbol-o',
        text: 'กีฬา',
        iconComponent: FontAwesome
    },
    {
        outlineIconName: 'alert-circle-outline',
        iconName: 'alert-circle',
        text: 'เตือนภัย',
        iconComponent: MaterialCommunityIcons
    },
]

class SearchNewsView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            news: [],
            searching: false,
            query: '',
            selectedTag: ''
        }
    }

    onIconPressed = (tag) => {
        const { selectedTag } = this.state
        this.setState({
            selectedTag: selectedTag == tag ? '' : tag
        })
    }

    goBack = () => {
        const { navigation } = this.props
        navigation.goBack()
    }

    postComment = () => {

    }

    getNews = (newsId) => {
        this.props.navigation.navigate('Detail', { newsId })
    }

    getProfile = (profileId) => {
        console.log(profileId)
    }

    componentDidMount() {
        newsService.getClubNews()
            .then((res) => {
                const newsData = res.data
                let newsArray = []
                for (const news of newsData) {
                    const newsObject = {
                        title: news.title,
                        date: news.createdAt,
                        user: news.user.displayName,
                        imgUrl: news.imageURL[0],
                        newsId: news._id,
                        profileId: news.user._id,
                    }
                    newsArray.push(newsObject)
                }
                this.setState({
                    news: newsArray,
                    error: false
                })
            }).catch((err) => {
                this.setState({ error: true })
            })
    }

    render() {
        const { searching, query, news, selectedTag } = this.state
        return (
            <View style={styles.containter}>
                <StatusBar />
                <Header
                    title={'ค้นหา'}
                    leftIconComponent={
                        <Feather
                            color='white'
                            onPress={this.goBack}
                            size={28}
                            name={'chevron-left'}
                        />
                    }
                />
                <View style={styles.searchContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            value={query}
                            onChangeText={text => this.setState({ query: text })}
                            placeholderTextColor={'grey'}
                            style={styles.textInputField}
                            placeholder={'ค้นหาข่าว...'}
                        />
                        {searching
                            ?
                            <ActivityIndicator color={PRIMARY_COLOR} size={20} />
                            :
                            null
                        }
                    </View>
                    <ScrollView style={styles.tagContainer} showsHorizontalScrollIndicator={false} horizontal={true}>
                        {tags.map((tag, index) => {
                            const IconComponent = tag.iconComponent
                            const isPressed = selectedTag == tag.text
                            return (
                                <Button onPress={() => this.onIconPressed(tag.text)} key={index} style={[styles.tagButton, isPressed ? styles.focusTagButton : styles.notFocusTagButton]} rounded >
                                    <IconComponent name={isPressed ? tag.iconName : tag.outlineIconName} size={20} color={isPressed ? 'white' : 'grey'} />
                                    <Text style={[styles.tagText, isPressed ? styles.focusTagText : styles.notFocusTagText]}>{tag.text}</Text>
                                </Button>
                            )
                        })}
                    </ScrollView>
                </View>
                <View style={styles.newsContainer}>
                    <View style={styles.indicatorContainer}>
                        <Text style={styles.indicatorText}>
                            ผลลัพธ์ (2 รายการ)
                    </Text>
                    </View>
                    <ScrollView style={{}} contentContainerStyle={{}}>
                        {news.map((news, index, newsArray) => {
                            return (
                                <View key={news.newsId} style={index != 0 ? { backgroundColor: 'white' } : { backgroundColor: 'white' }}>
                                    <NewsCard onNewsPressed={this.getNews} onProfilePressed={this.getProfile} data={news} />
                                    {
                                        index != newsArray.length - 1
                                            ?
                                            <Hr />
                                            :
                                            null
                                    }
                                </View>
                            )
                        })}
                    </ScrollView>
                </View>
            </View>
        )
    }
}

export default SearchNewsView