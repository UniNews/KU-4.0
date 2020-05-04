import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TouchableNativeFeedback } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import styles from './styles'
import PropTypes from 'prop-types'
import { convertTimestamptoDate } from '../../../assets/javascripts/date'
import newsService from './../../../services/news'
import { PRIMARY_COLOR } from '../../../assets/css/color'

class Thread extends Component {

    constructor(props) {
        super(props)
        this.state = {
            news: this.props.data
        }
    }

    onThreadPressedHandler = () => {
        const { navigation } = this.props
        const { news } = this.state
        if (navigation)
            navigation.push('CommunityDetail', {
                newsId: news._id,
                setCommunityThreadLikes: this.setCommunityThreadLikes,
                setCommunityThreadComments: this.setCommunityThreadComments
            })
    }


    /* for sync likes between navigations */
    setCommunityThreadLikes = (likes) => {
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
    setCommunityThreadComments = (comments) => {
        const { news } = this.state
        news.comments = comments
        this.setState({ news })
    }

    onLikePressedHandler = () => {
        const { user } = this.props
        const { news } = this.state
        if (typeof news.isLiked !== 'undefined') {
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
    }

    render() {
        const { style } = this.props
        const { news } = this.state
        let container = {}
        if (style)
            container = style
        else
            container = styles.container
        return (
            <TouchableNativeFeedback
                onPress={this.onThreadPressedHandler}>
                <View style={container}>
                    <View style={styles.innerContainer}>
                        <View style={styles.nameContainer}>
                            <Text style={styles.nameText}>
                                {news.author?.displayName}
                            </Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <FontAwesome name='clock-o' size={15} color='grey' />
                            <Text style={styles.dateText}>
                                {` ${convertTimestamptoDate(news.createdAt)}`}
                            </Text>
                        </View>
                        <Text numberOfLines={3} style={styles.descriptionText}>
                            {news.description}
                        </Text>
                        <View style={styles.bottomContainer}>
                            <TouchableOpacity onPress={
                                this.onLikePressedHandler
                            }>
                                <View style={styles.iconContainer}>

                                    <FontAwesome name={news.isLiked ? 'heart' : 'heart-o'} size={15} color={news.isLiked ? PRIMARY_COLOR : 'grey'} />
                                    <Text style={styles.numberText}>
                                        {news.likes ? news.likes.length : 0}
                                    </Text>
                                    <Text style={styles.indicatorText}>
                                        {` ถูกใจ`}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <View style={styles.iconContainer}>
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
            </TouchableNativeFeedback>
        )
    }
}

Thread.propTypes = {
    data: PropTypes.shape({
        author: PropTypes.shape({
            avatarURL: PropTypes.string,
            displayName: PropTypes.string,
            _id: PropTypes.string
        }),
        createdAt: PropTypes.string,
        description: PropTypes.string,
        likes: PropTypes.array,
        comments: PropTypes.array,
        _id: PropTypes.string
    }
    ).isRequired,
    navigation: PropTypes.object.isRequired,
}

export default Thread