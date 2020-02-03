import React from 'react'
import { Text, View, TextInput, ScrollView } from 'react-native'
import styles from './styles'
import Header from '../../components/commons/Header'
import Comment from '../../components/news/Comment'

class CommentView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            text:''
        }
    }

    render() {
        var comments = [];
        for (let i = 0; i < 2; i++) {
            comments.push(
                <View key={i} style={styles.innerCommentContainer}>
                    <Comment key={i} user={'Jimmy'} date={'23 July'} message={'kuy'} />
                </View>
            )
        }
        return (
            <View>
                <Header title={'ความคิดเห็น'} />
                <ScrollView style={styles.container} >
                    <View style={styles.pd_20}>
                        <View style={styles.commentContainer}>
                            {comments}
                        </View>
                    </View>
                </ScrollView>
                <TextInput
                    style={styles.pd_20}
                    placeholder='input'
                    placeholderTextColor='black'
                    onChangeText={(text) => this.setState({ text: text })}
                    value={this.state.text}>
                </TextInput>
            </View>
        );
    }
}

export default CommentView;