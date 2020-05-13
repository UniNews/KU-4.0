import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import { convertTimestamptoDate } from '../../../assets/javascripts/date'
import { FontAwesome, } from '@expo/vector-icons'
import { PRIMARY_COLOR } from '../../../assets/css/color'
import newsService from '../../../services/news'
import PlatformTouchable from '../../commons/PlatformTouchable'

class NewsCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            news: this.props.data
        }
    }

    onNewsPressedHandler = () => {
        const { news } = this.state
        this.props.navigation.push('NewsDetail', {
            newsId: news._id,
            setNewsThreadLikes: this.setNewsThreadLikes,
            setNewsThreadComments: this.setNewsThreadComments
        })
    }


    /* for sync likes between navigations */
    setNewsThreadLikes = (likes) => {
        const { news } = this.state
        const { user } = this.props
        news.likes = likes
        if (news.likes?.indexOf(user._id) > -1)
            news.isLiked = true
        else
            news.isLiked = false
        this.setState({ news })
    }

    /* for sync comments between navigations */
    setNewsThreadComments = (comments) => {
        const { news } = this.state
        news.comments = comments
        this.setState({ news })
    }

    onLikePressedHandler = () => {
        const { user } = this.props
        const { news } = this.state
        news.isLiked = !news.isLiked
        if (news.isLiked) {
            newsService.likeNews(news._id)
            news.likes.push(user._id)
        }
        else {
            newsService.unlikeNews(news._id)
            const indexToRemove = news.likes.indexOf(user._id)
            if (indexToRemove > -1)
                news.likes.splice(indexToRemove, 1)
        }
        this.setState({ news })
    }

    render() {
        const { style } = this.props
        const { news } = this.state
        let inlineStyle = []
        if (style)
            inlineStyle = style
        else
            inlineStyle = styles.cardContainer
        return (
            <PlatformTouchable
                onPress={this.onNewsPressedHandler}
            >
                <View style={[inlineStyle, styles.border]}>
                    <View style={[styles.imageContainer]}>
                        <Image
                            source={{ uri: news.imageURL }}
                            style={styles.image}
                        />
                    </View>
                    <View style={[styles.textContainer]}>

                        <Text
                            style={[styles.nameText]}
                            numberOfLines={1}
                        >
                            {news.author?.displayName}
                        </Text>
                        <View style={styles.dateIconContainer}>
                            <FontAwesome name='clock-o' size={13} color='grey' />
                            <Text style={styles.date}>
                                {` ${convertTimestamptoDate(news.createdAt)}`}
                            </Text>
                        </View>

                        <View style={styles.titleContainer}>
                            <Text
                                style={[styles.title]}
                                numberOfLines={2}
                            >
                                {news.title}
                            </Text>
                        </View>


                        <View style={styles.iconContainer}>
                            <TouchableOpacity onPress={this.onLikePressedHandler}>
                                <View style={styles.icon}>
                                    <FontAwesome name={news.isLiked ? 'heart' : 'heart-o'} size={15} color={news.isLiked ? PRIMARY_COLOR : 'grey'} />
                                    <Text style={styles.numberText}>
                                        {news.likes ? news.likes.length : 0}
                                    </Text>
                                    <Text style={styles.indicatorText}>
                                        {` ถูกใจ`}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <View style={styles.icon}>
                                <FontAwesome name='commenting-o' size={15} color='grey' />
                                <Text style={styles.numberText}>
                                    {news.comments ? news.comments.length : 0}
                                </Text>
                                <Text style={styles.indicatorText}>
                                    {` ความเห็น`}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </PlatformTouchable>
        )
    }
}

export default NewsCard