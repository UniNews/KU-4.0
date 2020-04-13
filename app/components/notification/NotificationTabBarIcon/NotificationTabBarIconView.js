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
    const { data , notifications } = this.props
    return (
      <View style={styles.container}>
        <FontAwesome name={ data.name } size={ data.size } color={ data.color } />
        <Text style={[styles.badge,styles.text]}>
          { 
            notifications!==null?(
              <Text>{notifications.length>0?notifications.length:0}</Text>
            ):null
          }
        </Text>
      </View>
    );
  }
}

IconWithBadge.propTypes = {
  data: PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      size: PropTypes.number.isRequired
  }).isRequired
}

export default IconWithBadge