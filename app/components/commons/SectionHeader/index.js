import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import { Feather } from '@expo/vector-icons'

class SectionHeader extends Component {

  constructor(props) {
    super(props);
  }

  onPressedHandler = () => {
    if (this.props.onPressed) {
      this.props.onPressed();
    }
  }

  render() {
    const { subtitle, title } = this.props
    return <TouchableOpacity onPress={() => this.onPressedHandler()}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.iconContainer}>
          <Text style={styles.subtitle}>{subtitle} </Text>
          <Feather name={'chevron-right'} size={22} color={'gray'} />
        </View>
      </View >
      {this.props.children}
    </TouchableOpacity>
  }
}

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  onPressed: PropTypes.func,
};

export default SectionHeader;