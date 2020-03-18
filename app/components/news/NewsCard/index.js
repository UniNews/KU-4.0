import React, { Component } from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
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
            inlineStyle = styles.cardContainer
        return (
            <TouchableWithoutFeedback
                activeOpacity={1}
                onPress={() =>
                    this.onNewsPressedHandler(data.newsId)
                }
                {...restProps}
            >
                <View style={[inlineStyle, styles.border]}>
                    <View style={[styles.imageContainer]}>
                        <Image
                            source={{ uri: data.imgUrl }}
                            style={styles.image}
                        />
                    </View>

                    <View style={[styles.textContainer]}>
                        <TouchableWithoutFeedback
                            underlayColor='white'
                            onPress={() => {
                                this.onProfilePressedHandler(data.profileId)
                            }
                            }>
                            <Text
                                style={[styles.nameText]}
                                numberOfLines={1}
                            >
                                {data.user}
                            </Text>

                        </TouchableWithoutFeedback>
                        <Text
                            style={[styles.title]}
                            numberOfLines={2}
                        >
                            {data.title}
                        </Text>
                        <View style={styles.iconContainer}>
                            <FontAwesome name='clock-o' size={13} color='grey' />
                            <Text style={styles.date}>
                                {` ${convertTimestamptoDate(data.date)}`}
                            </Text>
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