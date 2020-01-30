import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, rounded, outlined, customStyle, ...restProps } = this.props
    let inlineStyle = []
    if (rounded)
      inlineStyle = inlineStyle.concat(styles.roundBorder)
    if (outlined)
      inlineStyle = inlineStyle.concat(styles.outlined)
    if (customStyle)
      inlineStyle = inlineStyle.concat(customStyle)
    else
      inlineStyle = inlineStyle.concat(styles.defaultStyle)

    return (
      <TouchableOpacity style={inlineStyle} {...restProps}>
        <View>
          {children}
        </View>
      </TouchableOpacity>
    )
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  customStyle: PropTypes.object,
  rounded: PropTypes.bool,
  outlined: PropTypes.bool
};

export default Button;