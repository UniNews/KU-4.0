import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import { convertTimestamptoDate } from '../../../assets/javascripts/date'

class Comment extends Component {

    constructor(props) {
        super(props)
    }

    onLikePressedHandler = () => {
        const { onLikePressed, data } = this.props
        if (onLikePressed)
            onLikePressed(data._id)
    }

    onProfilePressedHandler = () => {
        const { onProfilePressed, data } = this.props
        if (onProfilePressed)
            onProfilePressed(data.user._id)
    }

    render() {
        const { data } = this.props
        return (
            <View style={styles.commentContainer}>
                <TouchableWithoutFeedback onPress={
                    this.onProfilePressedHandler
                }>
                    <Image
                        style={styles.imageAvatar}
                        source={{ uri: data.user.avatarURl }}
                    />
                </TouchableWithoutFeedback>
                <View style={styles.gapComment}>
                    <View style={styles.head}>
                        <Text style={styles.avatarName}>
                            {data.user.displayName}
                            <Text style={styles.commentDate}>
                                {' • ' + convertTimestamptoDate(data.createdAt)}
                            </Text>
                        </Text>
                        <MaterialCommunityIcons style={styles.icon} name='dots-vertical' size={15} color='black' />
                    </View>
                    <Text style={styles.commentMessage}>
                        {data.text}
                    </Text>
                    <View style={styles.likeContainer}>
                        <TouchableOpacity onPress={
                            this.onLikePressedHandler
                        }>
                            <FontAwesome name='heart-o' size={15} color='grey' />
                        </TouchableOpacity>
                        <Text style={styles.likeIconText}>
                            {data.like.length + ' ถูกใจ'}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

Comment.propTypes = {
    data: PropTypes.shape({
        user: PropTypes.shape({
            avatarURl: PropTypes.string,
            displayName: PropTypes.string,
            _id: PropTypes.string
        })
    }).isRequired,
    onProfilePressed: PropTypes.func,
    onLikePressed: PropTypes.func,
    createdAt: PropTypes.string,
    text: PropTypes.string,
    like: PropTypes.array,
    _id: PropTypes.string
};

Comment.defaultProps = {
    data: {
        user: {
            avatarURl: null,
            displayName: ''
        },
        createdAt: '',
        text: '',
        like: '',
        profileId: null,
        commentId: null,
    },
}

export default Comment;