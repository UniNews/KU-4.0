import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'
import { FontAwesome } from '@expo/vector-icons'
import PropTypes from 'prop-types'

class IconWithBadge extends React.Component {

  constructor(props) {
    super(props)
    // this.state = {
    //   notificationsCount: this.props.notifications ? this.props.notifications.length : 0
    // }
  }

  // componentDidUpdate(prevProps) {
  //   const { notifications } = this.props
  //   const { notificationsCount } = this.state
  //   if (notifications && notifications.length != notificationsCount)
  //     this.setState({
  //       notificationsCount: notifications.length
  //     })
  // }

  render() {
    const { name, color, size, notifications } = this.props
    const unread = notifications.filter(e => !e.isRead)
    // const { notificationsCount } = this.state
    return (
      <View style={styles.container}>
        <FontAwesome name={name} size={size} color={color} />
        {
          unread.length > 0 ? (
            <View style={styles.badge}>
              <Text style={styles.text}>{unread.length}</Text>
            </View>
          ) : null
        }
      </View>
    )
  }
}

IconWithBadge.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired
}

export default IconWithBadge