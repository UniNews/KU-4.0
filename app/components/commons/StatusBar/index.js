import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'

class CustomStatusBar extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { backgroundColor } = this.props
        return (
            <View style={[styles.container, { backgroundColor: backgroundColor || '#465859' }]}>
                <StatusBar backgroundColor={backgroundColor} />
            </View>
        )
    }
}

CustomStatusBar.propTypes = {
    backgroundColor: PropTypes.string,
}

export default CustomStatusBar