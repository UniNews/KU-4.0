import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TouchableNativeFeedback } from 'react-native'
import { FontAwesome, MaterialCommunityIcons, } from '@expo/vector-icons'
import styles from './styles'
import PropTypes from 'prop-types';
import { convertTimestamptoDate } from '../../../assets/javascripts/date'

class Thread extends Component {

    constructor(props) {
        super(props)
    }

    onThreadPressedHandler = () => {
        const { onThreadPressed, data } = this.props
        if (onThreadPressed)
            onThreadPressed(data._id)
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

    render() {
        const { data } = this.props
        return (
            <View style={styles.container}>
                <TouchableNativeFeedback onPress={this.onThreadPressedHandler}>
                    <View style={styles.innerContainer}>
                        <View style={styles.nameContainer}>
                            <Text style={styles.nameText}>
                                {data.user.displayName}
                            </Text>
                            <MaterialCommunityIcons style={styles.icon} name='dots-vertical' size={15} color='black' />
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
                                    <FontAwesome name='heart-o' size={15} color='grey' />
                                </TouchableOpacity>
                                <Text style={styles.numberText}>
                                    {data.like ? data.like.length : 0}
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
                </TouchableNativeFeedback>
            </View>
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