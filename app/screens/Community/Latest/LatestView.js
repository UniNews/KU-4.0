import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import styles from './styles'
import Button from '../../../components/commons/Button'
import { FontAwesome } from '@expo/vector-icons'
import Thread from '../../../components/community/Thread'

const DATA = [
    {
        _id: '0',
        user: {
            avatarURL: '',
            displayName: 'Jamie',
            _id: '0'
        },
        description: 'จบแล๊ว~',
        createdAt: '23 June',
        likes: [],
        comments: []
    },
    {
        _id: '1',
        user: {
            avatarURL: '',
            displayName: 'Jamie',
            _id: '0'
        },
        description: 'จบแล้ว',
        createdAt: '23 June',
        likes: [],
        comments: []
    },
    {
        _id: '2',
        user: {
            avatarURL: '',
            displayName: 'Jamie',
            _id: '0'
        },
        description: 'จบแล้ว',
        createdAt: '23 June',
        likes: [],
        comments: []
    },
]

class LatestView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            tags: [
                {
                    onFocusIconName: 'comments',
                    iconName: 'comments-o',
                    isPressed: false,
                    text: 'ทั่วไป'
                },
                {
                    onFocusIconName: 'heart',
                    iconName: 'heart-o',
                    isPressed: false,
                    text: 'ความรัก'
                },
                {
                    onFocusIconName: 'heart',
                    iconName: 'heart-o',
                    isPressed: false,
                    text: 'ความรัก'
                },
                {
                    onFocusIconName: 'heart',
                    iconName: 'heart-o',
                    isPressed: false,
                    text: 'ความรัก'
                },
            ]
        }
    }

    onIconPressed = (index) => {
        const tags = [...this.state.tags]
        tags[index] = { ...tags[index], isPressed: !tags[index].isPressed }
        this.setState({ tags })
    }

    onThreadPressed = (newsId) => {
        this.props.navigation.navigate('Detail', { newsId })
    }

    render() {
        const { tags } = this.state
        return (
            <View style={styles.containter}>
                <ScrollView style={styles.tagContainer} showsHorizontalScrollIndicator={false} horizontal={true}>
                    {tags.map((tag, index) => {
                        return (
                            <Button onPress={() => this.onIconPressed(index)} key={index} style={[styles.tagButton, tag.isPressed ? styles.focusTagButton : styles.notFocusTagButton]} rounded >
                                <FontAwesome name={tag.isPressed ? tag.onFocusIconName : tag.iconName} size={20} color={tag.isPressed ? 'white' : 'grey'} />
                                <Text style={[styles.tagText, tag.isPressed ? styles.focusTagText : styles.notFocusTagText]}>{tag.text}</Text>
                            </Button>
                        )
                    })}
                </ScrollView>
                <ScrollView contentContainerStyle={styles.threadContainer}>
                    {DATA.map((thread) => {
                        return (
                            <Thread key={thread._id} data={thread} onThreadPressed={this.onThreadPressed} />
                        )
                    })}
                </ScrollView>
            </View>
        )
    }
}

export default LatestView