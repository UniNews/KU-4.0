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
    const { subtitle, title, style } = this.props
    return <TouchableOpacity style={style} onPress={() => this.onPressedHandler()}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        {
          subtitle ?
            <View style={styles.iconContainer}>
              <Text style={styles.subtitle}>{subtitle} </Text>
              <Feather name={'chevron-right'} size={22} color={'gray'} />
            </View>
            : null
        }
      </View >
      {this.props.children}
    </TouchableOpacity>
  }
}

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  onPressed: PropTypes.func,
};

export default SectionHeader;