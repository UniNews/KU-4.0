import React, { Component } from 'react'
import { View, Text, Image, TouchableNativeFeedback } from 'react-native'
import styles from './styles'
import { convertTimestamptoDate } from '../../../assets/javascripts/date'
import { FontAwesome, } from '@expo/vector-icons'

class NewsCard extends Component {

    constructor(props) {
        super(props)
    }

    onNewsPressedHandler = () => {
        const { onNewsPressed, data } = this.props
        if (onNewsPressed)
            onNewsPressed(data._id)
    }

    render() {
        const { style, data, onNewsPressed, ...restProps } = this.props
        let inlineStyle = []
        if (style)
            inlineStyle = style
        else
            inlineStyle = styles.cardContainer
        return (
            <TouchableNativeFeedback
                onPress={this.onNewsPressedHandler}
            // {...restProps}
            >
                <View style={[inlineStyle, styles.border]}>
                    <View style={[styles.imageContainer]}>
                        <Image
                            source={{ uri: data.imageURL }}
                            style={styles.image}
                        />
                    </View>
                    <View style={[styles.textContainer]}>

                        <Text
                            style={[styles.nameText]}
                            numberOfLines={1}
                        >
                            {data.author?.displayName}
                        </Text>

                        <Text
                            style={[styles.title]}
                            numberOfLines={2}
                        >
                            {data.title}
                        </Text>
                        <View style={styles.iconContainer}>
                            <FontAwesome name='clock-o' size={13} color='grey' />
                            <Text style={styles.date}>
                                {` ${convertTimestamptoDate(data.createdAt)}`}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableNativeFeedback>
        )
    }
}

export default NewsCard