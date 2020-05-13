import React, { Component } from 'react'
import {
    Platform,
    TouchableNativeFeedback,
    TouchableOpacity,
} from 'react-native'

let TouchableComponent

if (Platform.OS === 'android') {
    TouchableComponent =
        Platform.Version <= 20 ? TouchableOpacity : TouchableNativeFeedback
} else {
    TouchableComponent = TouchableOpacity
}

class PlatformTouchable extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { children, ...props } = this.props
        return <TouchableComponent {...props}>
            {children}
        </TouchableComponent>
    }
}

export default PlatformTouchable