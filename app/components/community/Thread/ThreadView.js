import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TouchableNativeFeedback } from 'react-native'
import { FontAwesome, MaterialCommunityIcons, } from '@expo/vector-icons'
import styles from './styles'
import PropTypes from 'prop-types';
import { convertTimestamptoDate } from '../../../assets/javascripts/date'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import newsService from './../../../services/news';
import { PRIMARY_COLOR } from '../../../assets/css/color';

class Thread extends Component {

    constructor(props) {
        super(props)
        this.state = {
          likes: [...props.data.likes]
        }
    }

    onThreadPressedHandler = () => {
        const { onThreadPressed, data } = this.props
        if (onThreadPressed)
            onThreadPressed(data._id)
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

    onReportPressHandler = () => {
        const { onReportPressed, data } = this.props
        if (onReportPressed)
            onReportPressed(data._id)
    }

    render() {
        const { data, style } = this.props
        const { likes } = this.state
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
                                {data.author?.displayName}
                            </Text>
                            {/* <TouchableWithoutFeedback onPress={this.onReportPressHandler} >
                                <MaterialCommunityIcons style={styles.dotIcon} name='dots-vertical' size={20} color='black' />
                            </TouchableWithoutFeedback> */}
                        </View>
                        <View style={styles.iconContainer}>
                            <FontAwesome name='clock-o' size={15} color='grey' />
                            <Text style={styles.dateText}>
                                {` ${convertTimestamptoDate(data.createdAt)}`}
                            </Text>
                        </View>
                        <Text style={styles.descriptionText}>
                            {data.description}
                        </Text>
                        <View style={styles.bottomContainer}>
                            <View style={styles.iconContainer}>
                                <TouchableOpacity onPress={
                                    this.onLikePressedHandler
                                }>
                                  <FontAwesome name={data.isLiked ? 'heart' : 'heart-o'} size={15} color={data.isLiked ? PRIMARY_COLOR : 'grey'} />
                                </TouchableOpacity>
                                <Text style={styles.numberText}>
                                    {likes ? likes.length : 0}
                                </Text>
                                <Text style={styles.indicatorText}>
                                    {` ถูกใจ`}
                                </Text>
                            </View>
                            <View style={styles.iconContainer}>
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