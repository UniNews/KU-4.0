import React, { Component } from 'react'
import { View, ActivityIndicator } from 'react-native'
import styles from './styles'
import { PRIMARY_COLOR } from '../../../assets/css/color'

class Spinner extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator color={PRIMARY_COLOR} size='large' />
            </View>
        )
    }
}

export default Spinner