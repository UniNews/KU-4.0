import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import styles from './styles';

class Hr extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <View style={[styles.hr,]} />
  }
}

export default Hr;