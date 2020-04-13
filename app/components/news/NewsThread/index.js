import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, TouchableNativeFeedback } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types';
import { convertTimestamptoDate } from '../../../assets/javascripts/date'
import { FontAwesome, } from '@expo/vector-icons'

class NewsCard extends Component {

    constructor(props) {
        super(props)
    }

    onNewsPressedHandler = (newsId) => {
        const { onNewsPressed } = this.props
        if (onNewsPressed)
            onNewsPressed(newsId)
    }

    onLikePressedHandler = () => {
        const { onLikePressed, data } = this.props
        if (onLikePressed)
            onLikePressed(data._id)
    }

    onCommentPressedHandler = () => {
        const { onCommentPressed, data } = this.props
        if (onCommentPressed)
            onCommentPressed(data.author._id)
    }

    onProfilePressedHandler = (profileId) => {
        const { onProfilePressed } = this.props
        if (onProfilePressed)
            onProfilePressed(profileId)
    }

    render() {
        const { style, data, onNewsPressed, ...restProps } = this.props
        return (
            <TouchableNativeFeedback
                activeOpacity={1}
                onPress={() =>
                    this.onNewsPressedHandler(data._id)
                }
                {...restProps}
            >
                <View style={[style, styles.container]}>
                    <View style={styles.topContainer}>
                        <View style={styles.leftContainer}>
                            <Text style={styles.nameText}>
                                {data.author.displayName}
                            </Text>
                            <View style={{ paddingTop: 5 }}>
                                <Text numberOfLines={2} style={styles.title}>
                                    {data.title}
                                </Text>
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
                    <View style={styles.bottomContainer}>
                        <View style={styles.icon}>
                            <TouchableOpacity onPress={
                                this.onLikePressedHandler
                            }>
                                <FontAwesome name='clock-o' size={15} color='grey' />
                            </TouchableOpacity>
                            <Text style={styles.date}>
                                {` ${convertTimestamptoDate(data.createdAt)}`}
                            </Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <View style={styles.icon}>
                                <TouchableOpacity onPress={
                                    this.onCommentPressedHandler
                                }>
                                    <FontAwesome name='commenting-o' size={15} color='grey' />
                                </TouchableOpacity>
                                <Text style={styles.numberText}>
                                    {data.comments ? data.comments.length : 0}
                                </Text>
                                <Text style={styles.indicatorText}>
                                    {` ความเห็น`}
                                </Text>
                            </View>
                            <View style={styles.icon}>
                                <TouchableOpacity onPress={
                                    this.onLikePressedHandler
                                }>
                                    <FontAwesome name='heart-o' size={15} color='grey' />
                                </TouchableOpacity>
                                <Text style={styles.numberText}>
                                    {data.like ? data.like.length : 0}
                                </Text>
                                <Text style={styles.indicatorText}>
                                    {` ถูกใจ`}
                                </Text>
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
};

export default NewsCard;