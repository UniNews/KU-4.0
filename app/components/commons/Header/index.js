import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient'
import { Feather } from '@expo/vector-icons'

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { leftIconComponent, rightIconComponent, title } = this.props
    return <LinearGradient style={styles.linearGradient} start={{ x: 0, y: 0 }} end={{ x: 0.8, y: 0 }} colors={['#465859', '#588E57']}>
      <View style={styles.left}>
        {leftIconComponent}
      </View>
      <Text style={styles.title}>
        {title}
      </Text>
      <View style={styles.right}>
        {rightIconComponent}
      </View>
    </LinearGradient>
  }
}

Header.propTypes = {
  title: PropTypes.string,
  leftIconComponent: PropTypes.object,
  rightIconComponent: PropTypes.object,
};

export default Header;