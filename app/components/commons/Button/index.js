import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, rounded, outlined, style, ...restProps } = this.props
    let inlineStyle = []
    if (rounded)
      inlineStyle = inlineStyle.concat(styles.roundBorder)
    if (outlined)
      inlineStyle = inlineStyle.concat(styles.outlined)
    if (style)
      inlineStyle = inlineStyle.concat(style)
    else
      inlineStyle = inlineStyle.concat(styles.defaultStyle)

    return (
      <TouchableOpacity style={inlineStyle} {...restProps}>
        {children}
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