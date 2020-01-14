import React from 'react';
import AppNavigator from './app/configs/navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './app/reducers/index';
import * as Font from 'expo-font';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1
  },
});

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
      <Provider store={store}>
        <View style={styles.container}>
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}