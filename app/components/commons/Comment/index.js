import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native'
import styles from './styles'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import { convertTimestamptoDate } from '../../../assets/javascripts/date'
import { PRIMARY_COLOR } from '../../../assets/css/color'

class Comment extends Component {
  constructor(props) {
    super(props)
  }

  onLikePressedHandler = () => {
    const { onLikePressed, data } = this.props
    if (onLikePressed) onLikePressed(data._id)
  }

  onProfilePressedHandler = () => {
    const { onProfilePressed, data } = this.props
    if (onProfilePressed) onProfilePressed(data.user._id)
  }

  render() {
    const { data, liked } = this.props
    return (
      <View style={styles.profileContainer}>
        <View style={styles.infoContainer}>
          <TouchableWithoutFeedback onPress={this.onProfilePressedHandler}>
            <Image
              style={styles.imageAvatar}
              source={{ uri: data.user ? data.user.avatarURL : null }}
            />
          </TouchableWithoutFeedback>
          <View style={styles.infoGap}>
            <View style={styles.nameContainer}>
              <Text style={styles.userText}>
                {data.user ? data.user.displayName : null}
              </Text>
              <MaterialCommunityIcons name='dots-vertical' size={15} color='black' />
            </View>
            <View style={styles.clockIconContainer}>
              <FontAwesome name='clock-o' size={15} color='grey' />
              <Text style={styles.dateText}>
                {` ${convertTimestamptoDate(data.createdAt)}`}
              </Text>
            </View>
            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionText}>
                {data.text}
              </Text>
            </View>
            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={this.onLikePressedHandler} style={styles.textIconContainer}>
                <FontAwesome name={liked ? 'heart' : 'heart-o'} size={15} color={liked ? PRIMARY_COLOR : 'grey'} />
                <View style={styles.iconTextContainer}>
                  <Text style={styles.numberText}>
                    {`${data.like ? data.like.length : 0} `}
                  </Text>
                  <Text style={styles.indicatorText}>
                    ถูกใจ
                    </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Comment
