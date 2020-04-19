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
        const { onThreadPressed, data } = this.props
        if (onThreadPressed)
            onThreadPressed(data._id)
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

    onCommentPressedHandler = () => {
        const { onCommentPressed, data } = this.props
        if (onCommentPressed)
            onCommentPressed(data.author?._id)
    }

    onReportPressHandler = () => {
        const { onReportPressed, data } = this.props
        if (onReportPressed)
            onReportPressed(data._id)
    }

    render() {
        const { data, style } = this.props
        const { news } = this.state
        let container = {}
        if (style)
            container = style
        else
            container = styles.container
        return (
            <TouchableNativeFeedback
                onLongPress={this.onReportPressHandler}
                onPress={this.onThreadPressedHandler}>
                <View style={container}>
                    <View style={styles.innerContainer}>
                        <View style={styles.nameContainer}>
                            <Text style={styles.nameText}>
                                {news.author?.displayName}
                            </Text>
                            {/* <TouchableWithoutFeedback onPress={this.onReportPressHandler} >
                                <MaterialCommunityIcons style={styles.dotIcon} name='dots-vertical' size={20} color='black' />
                            </TouchableWithoutFeedback> */}
                        </View>
                        <View style={styles.iconContainer}>
                            <FontAwesome name='clock-o' size={15} color='grey' />
                            <Text style={styles.dateText}>
                                {` ${convertTimestamptoDate(news.createdAt)}`}
                            </Text>
                        </View>
                        <Text style={styles.descriptionText}>
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
                                <TouchableOpacity onPress={
                                    this.onCommentPressedHandler
                                }>
                                    <FontAwesome name='commenting-o' size={15} color='grey' />
                                </TouchableOpacity>
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
        user: PropTypes.shape({
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
    onLikePressed: PropTypes.func,
    onCommentPressed: PropTypes.func,
    onReportPressed: PropTypes.func
}

Thread.defaultProps = {
    data: {
        user: {
            avatarURl: null,
            displayName: '',
            _id: null
        },
        createdAt: '',
        description: '',
        likes: [],
        comments: [],
        _id: null,
    },
}

export default Thread