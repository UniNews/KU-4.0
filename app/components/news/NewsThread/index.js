import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types';
import { convertTimestamptoDate } from '../../../assets/javascripts/date'
import { FontAwesome, MaterialCommunityIcons, } from '@expo/vector-icons'

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
            onCommentPressed(data.user._id)
    }

    onProfilePressedHandler = (profileId) => {
        const { onProfilePressed } = this.props
        if (onProfilePressed)
            onProfilePressed(profileId)
    }

    render() {
        const { style, data, onNewsPressed, ...restProps } = this.props
        let inlineStyle = []
        if (style)
            inlineStyle = style
        else
            inlineStyle = styles.container
        return (
            <TouchableWithoutFeedback
                activeOpacity={1}
                onPress={() =>
                    this.onNewsPressedHandler(data.newsId)
                }
                {...restProps}
            >
                <View style={inlineStyle}>
                    <View style={styles.topContainer}>
                        <View style={styles.leftContainer}>
                            <Text style={styles.nameText}>
                                {data.user}
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
                                    source={{ uri: data.imgUrl }}
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
                                {` ${convertTimestamptoDate(data.date)}`}
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
            </TouchableWithoutFeedback>
        )
    }
}

NewsCard.propTypes = {
    data: PropTypes.shape({
        newsId: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        imgUrl: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        profileId: PropTypes.string.isRequired,
    }).isRequired,
    onNewsPressed: PropTypes.func,
    onProfilePressed: PropTypes.func,
    onLikePressed: PropTypes.func,
    onCommentPressed: PropTypes.func,
};

NewsCard.defaultProps = {
    data: {
        newsId: null,
        profileId: null,
        title: '',
        imgUrl: '',
        user: '',
        date: '',
    },
}

export default NewsCard;