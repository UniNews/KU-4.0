import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles'
import { FontAwesome } from '@expo/vector-icons'
import PropTypes from 'prop-types'

class IconWithBadge extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { name, color, size, notifications } = this.props
    return (
      <View style={styles.container}>
        <FontAwesome name={name} size={size} color={color} />
        {
          notifications !== null && notifications.length > 0 ? (
            <View style={styles.badge}>
              <Text style={styles.text}>{notifications.length}</Text>
            </View>
          ) : null
        }
      </View>
    );
  }
}

IconWithBadge.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired
}

export default IconWithBadge