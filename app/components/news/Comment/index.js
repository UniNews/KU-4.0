import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons'

class Comment extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { user, date, message } = this.props
        return (
            <View style={styles.commentContainer}>
                <View style={styles.commentInfoContainer}>
                    <Image
                        style={styles.imageAvatar}
                        source={{ uri: 'https://scontent.fbkk22-3.fna.fbcdn.net/v/t1.0-1/c0.0.820.820a/66686017_1125283600997160_4542151837934944256_n.jpg?_nc_cat=110&_nc_ohc=X4ovrI8YYLcAX9k8MI_&_nc_ht=scontent.fbkk22-3.fna&_nc_tp=1003&oh=a1f840ed4a1c6371eeb21242ffd1ea41&oe=5E90FC5F' }}
                    />
                    <View style={styles.gapComment}>
                        <View style={styles.head}>
                            <Text style={styles.avatarName}>
                                {user}
                            </Text>
                            <FontAwesome style={styles.iconE} name='ellipsis-v' size={15} color='black' />
                        </View>
                        <Text style={styles.commentDate}>
                            {date}
                        </Text>
                        <Text style={styles.commentMessage}>
                            {message}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

Comment.propTypes = {
    user: PropTypes.string,
    date: PropTypes.string,
    message: PropTypes.string
};

export default Comment;