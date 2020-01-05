import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { FontAwesome } from '@expo/vector-icons';
import NewsScreen from '../screens/News/'
import NotificationScreen from '../screens/Notification/'
import ScheduleScreen from '../screens/Schedule/'
import ProfileScreen from '../screens/Profile/'
import Constants from '../configs/constants';

const TabNavigator = createBottomTabNavigator({
  'หน้าหลัก': NewsScreen,
  'ปฏิทิน': ScheduleScreen,
  'แจ้งเตือน': NotificationScreen,
  'โปรไฟล์': ProfileScreen
},
  {
    initialRouteName: 'หน้าหลัก',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = FontAwesome;
        let iconName, size;
        if (routeName === 'หน้าหลัก') {
          iconName = 'home'
          size = 28
        } else if (routeName === 'ปฏิทิน') {
          iconName = 'calendar'
          size = 23
        }
        else if (routeName === 'แจ้งเตือน') {
          iconName = 'bell'
          size = 23
        }
        else if (routeName === 'โปรไฟล์') {
          iconName = 'user'
          size = 27
        }
        return <IconComponent name={iconName} size={size} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: Constants.PRIMARY_COLOR,
      inactiveTintColor: Constants.SECONDARY_COLOR,
      labelStyle: {
        fontFamily: Constants.BOLD_FONT
      },
      style: {
        height: 52,
      }
    },
  }
);

export default createAppContainer(TabNavigator);