import React from 'react';
import AppNavigator from './app/configs/navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './app/reducers/index';
import * as Font from 'expo-font';
import { View, StyleSheet } from 'react-native'
import Constants from 'expo-constants';
import DropdownAlert from 'react-native-dropdownalert'
import { AlertHelper } from './app/configs/alertHelper';
import { BOLD_FONT, REGULAR_FONT } from './app/assets/css/typography'

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  alertContainer: {
    paddingTop: Constants.statusBarHeight,
    padding: 10
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
    this.state = {
      fontLoaded: false
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Kanit-Regular': require('./app/assets/fonts/Kanit-Medium.ttf'),
      'Kanit-Light': require('./app/assets/fonts/Kanit-Light.ttf'),
    });
    this.setState({ fontLoaded: true })
  }

  render() {
    if (!this.state.fontLoaded) {
      return null
    }
    return (
      <View style={styles.appContainer}>
        <Provider store={store}>
          <AppNavigator />
        </Provider>
        <DropdownAlert
          defaultContainer={styles.alertContainer}
          ref={ref => AlertHelper.setDropDown(ref)}
          titleStyle={styles.alertTitle}
          messageStyle={styles.alertMessage}
        />
      </View>
    );
  }
}