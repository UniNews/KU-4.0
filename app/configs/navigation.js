import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import RecommendationScreen from '../screens/HomeScreen/RecommendationScreen'

const TabNavigator = createBottomTabNavigator({
  Home: RecommendationScreen,
});

export default createAppContainer(TabNavigator);