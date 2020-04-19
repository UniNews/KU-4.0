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
          likes: [...props.data.likes]
        }
    }

    onNewsPressedHandler = (newsId) => {
        const { onNewsPressed } = this.props
        if (onNewsPressed)
            onNewsPressed(newsId)
    } 

    onLikePressedHandler = () => {
        const { data, user } = this.props
        data.isLiked = !data.isLiked
        if (data.isLiked) {
          newsService.likeNews(data._id)
          data.likes.push(user._id)
        }
        else {
          newsService.unlikeNews(data._id)
          const indexToRemove = data.likes.indexOf(user._id)
          if (indexToRemove > -1)
            data.likes.splice(indexToRemove, 1)
        }
        this.setState({ likes: [...data.likes] })
    }

    onCommentPressedHandler = () => {
        const { onCommentPressed, data } = this.props
        if (onCommentPressed)
            onCommentPressed(data.author?._id)
    }

    onProfilePressedHandler = (profileId) => {
        const { onProfilePressed } = this.props
        if (onProfilePressed)
            onProfilePressed(profileId)
    }

    onReportPressHandler = () => {
        const { onReportPressed, data } = this.props
        if (onReportPressed)
            onReportPressed(data._id)
    }

    render() {
        const { style, data, onNewsPressed, ...restProps } = this.props
        const { likes } = this.state
        return (
            <TouchableNativeFeedback
                onLongPress={this.onReportPressHandler}
                onPress={() =>
                    this.onNewsPressedHandler(data._id)
                }
                {...restProps}
            >
                <View style={[style, styles.container]}>
                    <View style={styles.topContainer}>
                        <View style={styles.leftContainer}>
                            <Text style={styles.nameText}>
                                {data.author?.displayName}
                            </Text>
                            <View style={styles.icon}>
                                <FontAwesome name='clock-o' size={15} color='grey' />
                                <Text style={styles.date}>
                                    {` ${convertTimestamptoDate(data.createdAt)}`}
                                </Text>
                            </View>
                            <View style={styles.descriptionContainer}>
                                <Text numberOfLines={2} style={styles.title}>
                                    {data.title}
                                </Text>
                            </View>
                            <View style={styles.iconContainer}>
                                <TouchableOpacity onPress={
                                    this.onLikePressedHandler
                                }>
                                    <View style={styles.icon}>
                                        <FontAwesome name={data.isLiked ? 'heart' : 'heart-o'} size={15} color={data.isLiked ? PRIMARY_COLOR : 'grey'} />
                                        <Text style={styles.numberText}>
                                            {likes ? likes.length : 0}
                                        </Text>
                                        <Text style={styles.indicatorText}>
                                            {` ถูกใจ`}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={
                                    this.onCommentPressedHandler
                                }>
                                    <View style={styles.icon}>

                                        <FontAwesome name='commenting-o' size={15} color='grey' />
                                        <Text style={styles.numberText}>
                                            {data.comments ? data.comments.length : 0}
                                        </Text>
                                        <Text style={styles.indicatorText}>
                                            {` ความเห็น`}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.rightContainer}>
                            <View style={[styles.imageContainer]}>
                                <Image
                                    source={{ uri: data.imageURL }}
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
    onNewsPressed: PropTypes.func,
    onProfilePressed: PropTypes.func,
    onLikePressed: PropTypes.func,
    onCommentPressed: PropTypes.func,
    onReportPressed: PropTypes.func
}

export default NewsCard