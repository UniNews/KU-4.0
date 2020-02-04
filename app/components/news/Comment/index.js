import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons'
import { convertTimestamptoDate } from '../../../assets/javascripts/date'

class Comment extends Component {

    constructor(props) {
        super(props)
    }

    onLikePressedHandler = () => {
        const { onLikePressed, data } = this.props
        if (onLikePressed)
            onLikePressed(data.commentId)
    }

    onProfilePressedHandler = () => {
        const { onProfilePressed, data } = this.props
        if (onProfilePressed)
            onProfilePressed(data.profileId)
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
                        source={{ uri: data.imgUrl }}
                    />
                </TouchableWithoutFeedback>
                <View style={styles.gapComment}>
                    <View style={styles.head}>
                        <Text style={styles.avatarName}>
                            {data.profileName}
                            <Text style={styles.commentDate}>
                                {' • ' + convertTimestamptoDate(data.date)}
                            </Text>
                        </Text>
                        <FontAwesome style={styles.icon} name='ellipsis-v' size={15} color='black' />
                    </View>
                    <Text style={styles.commentMessage}>
                        {data.message}
                    </Text>
                    <View style={styles.likeContainer}>
                        <TouchableOpacity onPress={
                            this.onLikePressedHandler
                        }>
                            <FontAwesome name='heart-o' size={15} color='grey' />
                        </TouchableOpacity>
                        <Text style={styles.likeIconText}>
                            {data.likeCount + ' ถูกใจ'}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

Comment.propTypes = {
    data: PropTypes.shape({
        profileName: PropTypes.string,
        date: PropTypes.string,
        message: PropTypes.string,
        likeCount: PropTypes.number,
        imgUrl: PropTypes.string,
        commentId: PropTypes.string,
        profileId: PropTypes.string
    }).isRequired,
    onProfilePressed: PropTypes.func,
    onLikePressed: PropTypes.func
};

Comment.defaultProps = {
    data: {
        profileName: '',
        date: '',
        message: '',
        likeCount: 0,
        imgUrl: '',
        commentId: '',
        profileId: ''
    },
}

export default Comment;