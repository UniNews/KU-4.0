import React from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import styles from './styles';
import PropTypes from 'prop-types';

class CustomTab extends React.Component {

    render() {
        const { focused, routeName } = this.props
        return (
            <TouchableWithoutFeedback
                onPress={this.onSelect}
            >
                <View style={styles.tab}>
                    <Text style={[styles.textStyle, focused ? styles.textFocus : styles.textNormal]}>{routeName}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }

    onSelect = () => {
        const { onPress } = this.props
        onPress(this.props.index);
    }
}

CustomTab.propTypes = {
    routeName: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    focused: PropTypes.bool.isRequired,
};

export default CustomTab