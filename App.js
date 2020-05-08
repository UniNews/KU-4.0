import React from 'react'
import AppNavigator from './app/configs/navigation'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './app/reducers/index'
import { StyleSheet } from 'react-native'
import DropdownAlert from 'react-native-dropdownalert'
import { AlertHelper } from './app/configs/alertHelper'
import { BOLD_FONT, REGULAR_FONT } from './app/assets/css/typography'
import SafeAreaView from './app/components/commons/SafeAreaView'
import ErrorModal from './app/components/modals/ErrorModal'

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  alertContainer: {
    paddingBottom: 10
  },
  alertTitle: {
    fontSize: 16,
    fontFamily: BOLD_FONT,
    color: 'white'
  },
  alertMessage: {
    fontSize: 14,
    fontFamily: REGULAR_FONT,
    color: 'white'
  }
})

export default class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <SafeAreaView>
        <Provider store={store}>
          <AppNavigator />
          <ErrorModal />
        </Provider>
        <DropdownAlert
          defaultContainer={styles.alertContainer}
          ref={ref => AlertHelper.setDropDown(ref)}
          titleStyle={styles.alertTitle}
          messageStyle={styles.alertMessage}
        />
      </SafeAreaView>
    )
  }
}