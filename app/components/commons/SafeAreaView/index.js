import React, { Component } from 'react'
import { SafeAreaView, View } from 'react-native'
import styles from './styles'

class CustomSafeAreaView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <View style={{
      flex: 1
    }}>
      <SafeAreaView style={styles.topContainer} />
      <SafeAreaView style={styles.bottomContainer}>
        {this.props.children}
      </SafeAreaView>
    </View>

  }
}

export default CustomSafeAreaView