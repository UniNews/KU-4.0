import React, { Component } from 'react'
import { View, Switch } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'

class SwitchNotification extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { toggleSwitch, switchValue } = this.props
        return (
            <View style={styles.container}>
                <Switch
                    onValueChange={toggleSwitch}
                    value={switchValue} />
            </View>
        )
    }
}

SwitchNotification.propTypes = {
    toggleSwitch: PropTypes.func,
    switchValue: PropTypes.bool
}

export default SwitchNotification