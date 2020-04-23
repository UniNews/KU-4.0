import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, TouchableNativeFeedback } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'
import { convertTimestamptoDate } from '../../../assets/javascripts/date'
import { FontAwesome } from '@expo/vector-icons'
import newsService from '../../../services/news'
import { PRIMARY_COLOR } from '../../../assets/css/color'

class NewsCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            news: this.props.data
        }
    }

    onNewsPressedHandler = () => {
        const { navigation } = this.props
        const { news } = this.state
        navigation.push('NewsDetail', {
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

    // onCommentPressedHandler = () => {
    //     const { navigation } = this.props
    //     const { news } = this.state
    //     navigation.push('Comment', { newsId: news._id })
    // }

    render() {
        const { style, onNewsPressed, ...restProps } = this.props
        const { news } = this.state
        return (
            <TouchableNativeFeedback
                onPress={this.onNewsPressedHandler}
                {...restProps}
            >
                <View style={[style, styles.container]}>
                    <View style={styles.topContainer}>
                        <View style={styles.leftContainer}>
                            <Text style={styles.nameText}>
                                {news.author?.displayName}
                            </Text>
                            <View style={styles.icon}>
                                <FontAwesome name='clock-o' size={15} color='grey' />
                                <Text style={styles.date}>
                                    {` ${convertTimestamptoDate(news.createdAt)}`}
                                </Text>
                            </View>
                            <View style={styles.descriptionContainer}>
                                <Text numberOfLines={2} style={styles.title}>
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
                        <View style={styles.rightContainer}>
                            <View style={[styles.imageContainer]}>
                                <Image
                                    source={{ uri: news.imageURL }}
                                    style={styles.image}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableNativeFeedback>
        )
    }
}

NewsCard.propTypes = {
    data: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        imageURL: PropTypes.string.isRequired,
        author: PropTypes.shape({
            _id: PropTypes.string.isRequired,
            displayName: PropTypes.string.isRequired
        }),
        createdAt: PropTypes.string.isRequired,
    }).isRequired,
    navigation: PropTypes.object.isRequired,
    // onNewsPressed: PropTypes.func,
    // onProfilePressed: PropTypes.func,
    // onLikePressed: PropTypes.func,
    // onCommentPressed: PropTypes.func,
}

export default NewsCard