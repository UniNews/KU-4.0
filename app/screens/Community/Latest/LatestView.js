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
    }

    onThreadPressed = (newsId) => {
        this.props.navigation.navigate('Detail', { newsId })
    }

    render() {
        return (
            <View style={styles.containter}>
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