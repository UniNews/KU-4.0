import React from 'react'
import { View, ScrollView } from 'react-native'
import styles from './styles'
import Header from '../../components/commons/Header'
import Comment from '../../components/news/Comment'

const comments = [
    {
        profileName: 'Jimmy',
        date: '23 July',
        message: 'สวย!',
        imgUrl: 'https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-1/66686017_1125283600997160_4542151837934944256_n.jpg?_nc_cat=110&_nc_oc=AQl1i71AeZzg18p2f7lW0rqgQSyyz6Y6zZyOXocid2DdwqTzEdOGUXI-QgEKR7MKINo&_nc_ht=scontent.fbkk10-1.fna&oh=8fafec244b8e66f0682a9bf95b2afeca&oe=5EDB98FB',
        likeCount: 2,
        profileId: '',
        commentId: '',
    }
]

class CommentView extends React.Component {

    likeComment = (commentId) => {
        console.log(commentId)
    }

    getProfile = (profileId) => {
        console.log(profileId)
    }

    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    render() {
        return (
            <View>
                <Header title={'ความคิดเห็น'} />
                <ScrollView style={styles.container} >
                    <View style={styles.innerCommentContainer}>
                        {comments.map((comment) => {
                            return (
                                <Comment key={comment.commentId} onProfilePressed={this.getProfile} onLikePressed={this.likeComment} data={comment} />
                            )
                        })}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default CommentView;