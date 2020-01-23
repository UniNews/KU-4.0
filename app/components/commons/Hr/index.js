import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

class Hr extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { style } = this.props
    return <View style={[styles.hr, style]} />
  }
}

Hr.propTypes = {
  style: PropTypes.object
};

export default Hr;