import React from 'react'
import { Text, View, ActivityIndicator, TextInput, ScrollView, TouchableWithoutFeedback } from 'react-native'
import StatusBar from '../../../components/commons/StatusBar'
import styles from './styles'
import Header from '../../../components/commons/Header'
import { Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import { PRIMARY_COLOR } from '../../../assets/css/color'
import newsService from '../../../services/news'
import NewsCard from '../../../components/news/NewsThread'
import Button from '../../../components/commons/Button'

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
            selectedTag: '',
            error: false
        }
    }

    clearQuery = () => {
        this.setState({
            query: '',
            news: [],
            searching: false,
        })
    }

    updateSearch = text => {
        if (this.typingTimeout)
            clearTimeout(this.typingTimeout)
        if (text != '') {
            this.setState({
                query: text,
                news: [],
                searching: true,
            })
            this.typingTimeout = setTimeout((event) => this.search(), 1000)
        }
        else
            this.setState({
                query: text,
                news: [],
                searching: false,
            })
    }

    search = () => {
        const { query } = this.state
        newsService.getAllNews()
            .then((res) => {
                const newsData = res.data.filter(item => {
                    const stringData = `${item.title?.toUpperCase()}   
                    ${item.user?.displayName.toUpperCase()}`
                    const queryData = query.toUpperCase()
                    return stringData.indexOf(queryData) > -1
                    // && item.tags?.join('\n').toUpperCase().indexOf(selectedTag) > -1
                })
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
                    error: false,
                    searching: false,
                })
            }).catch((err) => {
                this.setState({
                    error: true,
                    searching: false
                })
            })
    }

    onTagPressed = (tag) => {
        const { selectedTag } = this.state
        this.setState({
            selectedTag: selectedTag == tag ? '' : tag
        })
    }

    goBack = () => {
        const { navigation } = this.props
        navigation.goBack()
    }

    getNews = (newsId) => {
        this.props.navigation.navigate('Detail', { newsId })
    }

    getProfile = (profileId) => {
        console.log(profileId)
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
                        <View style={styles.searchIconContainer}>
                            <FontAwesome name='search' color='grey' size={16} />
                        </View>
                        <TextInput
                            value={query}
                            onChangeText={this.updateSearch}
                            placeholderTextColor={'grey'}
                            style={styles.textInputField}
                            placeholder={'ค้นหาข่าว...'}
                        />
                        {query
                            ?
                            <TouchableWithoutFeedback onPress={this.clearQuery}>
                                <View style={styles.clearIconContainer}>
                                    <MaterialCommunityIcons name='close' color={'grey'} size={20} />
                                </View>
                            </TouchableWithoutFeedback>
                            :
                            null
                        }
                    </View>
                    <ScrollView style={styles.tagContainer} showsHorizontalScrollIndicator={false} horizontal={true}>
                        {tags.map((tag, index) => {
                            const IconComponent = tag.iconComponent
                            const isPressed = selectedTag == tag.text
                            return (
                                <Button onPress={() => this.onTagPressed(tag.text)} key={index} style={[styles.tagButton, isPressed ? styles.focusTagButton : styles.notFocusTagButton]} rounded >
                                    <IconComponent name={isPressed ? tag.iconName : tag.outlineIconName} size={20} color={isPressed ? 'white' : 'grey'} />
                                    <Text style={[styles.tagText, isPressed ? styles.focusTagText : styles.notFocusTagText]}>{tag.text}</Text>
                                </Button>
                            )
                        })}
                    </ScrollView>
                </View>
                <View style={styles.newsContainer}>
                    <ScrollView>
                        {
                            query ? // check if the input text is not empty
                                searching ?
                                    <View style={styles.indicatorContainer}>
                                        <Text style={styles.indicatorText}>
                                            กำลังค้นหา...
                                    </Text>
                                        <ActivityIndicator color={PRIMARY_COLOR} size={17} />
                                    </View>
                                    :
                                    news.map((news, index, newsArray) => {
                                        return (
                                            <View key={news.newsId} style={{ marginTop: 10, backgroundColor: 'white' }}>
                                                <NewsCard onNewsPressed={this.getNews} onProfilePressed={this.getProfile} data={news} />
                                            </View>
                                        )
                                    })
                                :
                                null // display nothing if it is empty to prevent coming news state when fetching news
                        }
                    </ScrollView>
                </View>
            </View >
        )
    }
}

export default SearchNewsView