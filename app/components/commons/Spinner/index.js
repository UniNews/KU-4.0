import React, { Component } from 'react'
import { View, ActivityIndicator } from 'react-native'
import styles from './styles'
import { PRIMARY_COLOR } from '../../../assets/css/color'
import PropTypes from 'prop-types';

class Spinner extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size={this.props.size} color={PRIMARY_COLOR} size='large' />
            </View>
        )
    }
}

Spinner.propTypes = {
    size: PropTypes.string,
}

Spinner.defaultType = {
    size: 'large'
}

export default Spinner