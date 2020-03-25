import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

class Vr extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { style } = this.props
    return <View style={[styles.vr, style]} />
  }
}

Vr.propTypes = {
  style: PropTypes.object
};

export default Vr;