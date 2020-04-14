import React from 'react'
import { Text, View, ScrollView, ActivityIndicator, FlatList } from 'react-native'
import styles from './styles'
import Header from '../../../components/commons/Header'
import { Feather, FontAwesome } from '@expo/vector-icons'
import Button from '../../../components/commons/Button'
import constants from '../../../configs/constants'
import Spinner from '../../../components/commons/Spinner'
import { PRIMARY_COLOR } from '../../../assets/css/color'
import NewsCard from '../../../components/news/NewsThread'
import newsService from '../../../services/news'

class NewsTagSearchView extends React.Component {

    constructor(props) {
        super(props)
        this.page = 1
        this.onEndReachedCalledDuringMomentum = false
        this.state = {
            selectedTag: constants.TAGS[0].text,
            news: [],
            error: false,
            fetching: false,
            refreshing: false,
            loading: true
        }
    }

    onTagPressed = (tag) => {
        this.page = 1
        this.onEndReachedCalledDuringMomentum = false
        this.setState({
            selectedTag: tag,
            loading: true,
        })
        this.fetchNews()
    }

    goSearch = () => {
        const { navigation } = this.props
        navigation.navigate('ค้นหา')
    }

    goBack = () => {
        const { navigation } = this.props
        navigation.goBack()
    }

    componentDidMount() {
        this.fetchNews()
    }

    renderItem = ({ item }) => {
        return <View key={item._id} style={styles.newsContainer}>
            <NewsCard onNewsPressed={this.goNews} data={item} />
        </View>
    }

    renderFooter = () => {
        if (!this.state.fetching)
            return null
        return (
            <ActivityIndicator
                color={PRIMARY_COLOR}
            />
        )
    }

    onRefresh = () => {
        this.setState({ refreshing: true })
        this.page = 1
        this.fetchNews()
    }

    onEndReached = () => {
        if (!this.onEndReachedCalledDuringMomentum) {
            this.setState({ fetching: true })
            this.page += 1
            this.fetchNews()
            this.onEndReachedCalledDuringMomentum = true
        }
    }

    goNews = (newsId) => {
        this.props.navigation.push('NewsDetail', { newsId })
    }

    async fetchNews() {
        try {
            const { selectedTag } = this.state
            const res = await newsService.getNewsByTag(selectedTag, this.page)
            this.setState({
                news: this.page === 1 ? res.data.articles : [...this.state.news, ...res.data.articles],
                error: false,
                loading: false,
                fetching: false,
                refreshing: false
            })
        }
        catch (err) {
            this.setState({
                error: true,
                loading: false,
                fetching: false,
                refreshing: false
            })
            this.props.showModal()
        }
    }

    render() {
        const { selectedTag, news, loading, refreshing } = this.state
        return (
            <View style={styles.containter}>
                <Header
                    title={'สำรวจ'}
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
                        <Button onPress={this.goSearch} activeOpacity={1} style={styles.textInputField}>
                            <Text style={styles.searchText}>
                                ค้นหาข่าว, ชุมชน, ชื่อผู้ใช้...
                            </Text>
                        </Button>
                    </View>
                    <ScrollView style={styles.tagContainer} showsHorizontalScrollIndicator={false} horizontal={true}>
                        {constants.TAGS.map((tag, index) => {
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
                {
                    loading
                        ?
                        <Spinner />
                        :
                        <FlatList
                            refreshing={refreshing}
                            onRefresh={this.onRefresh}
                            keyExtractor={(news) => news._id}
                            data={news}
                            renderItem={this.renderItem}
                            ListFooterComponent={this.renderFooter}
                            onEndReachedThreshold={0.5}
                            onEndReached={this.onEndReached}
                            onMomentumScrollBegin={() => {
                                this.onEndReachedCalledDuringMomentum = false
                            }}
                        />
                }
            </View>
        )
    }
}

export default NewsTagSearchView