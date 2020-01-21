import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import { FontAwesome } from '@expo/vector-icons'
import NewsTab from '../components/news/NewsTab'
import NotificationScreen from '../screens/Notification/'
import ScheduleScreen from '../screens/Schedule/'
import ProfileScreen from '../screens/Profile/'
import ClubScreen from '../screens/News/Club/'
import LoginScreen from '../screens/Login'
import UniversityScreen from '../screens/News/University/'
import RecommendationScreen from '../screens/News/Recommendation/'
import PromotionScreen from '../screens/News/Promotion/'
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../assets/css/color'
import { BOLD_FONT } from '../assets/css/typography'

const newsTab = createMaterialTopTabNavigator({
  'สำหรับคุณ': RecommendationScreen,
  'มหาลัย': UniversityScreen,
  'โปรโมชั่น': PromotionScreen,
  'ชมรม': ClubScreen
}, {
  tabBarComponent: NewsTab,
  swipeEnabled: false,
  tabBarOptions: {
    scrollEnabled: true,
  },
})

const newsStack = createStackNavigator({
  Home: newsTab
},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
)

const TabNavigator = createBottomTabNavigator({
  'หน้าหลัก': newsStack,
  'ปฏิทิน': ScheduleScreen,
  'แจ้งเตือน': NotificationScreen,
  'โปรไฟล์': ProfileScreen
},
  {
    initialRouteName: 'หน้าหลัก',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        let IconComponent = FontAwesome
        let iconName, size
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
        return <IconComponent name={iconName} size={size} color={tintColor} />
      },
    }),
    tabBarOptions: {
      activeTintColor: PRIMARY_COLOR,
      inactiveTintColor: SECONDARY_COLOR,
      labelStyle: {
        fontFamily: BOLD_FONT
      },
      style: {
        height: 52,
      }
    },
  }
)

const AuthStack = createStackNavigator({
  Login: {
    screen: LoginScreen
  },
  // Policy: {
  //   screen: PolicyScreen
  // }
}, {
  initialRouteName: 'Login',
  headerMode: 'none',
}
);

export default createAppContainer(createSwitchNavigator(
  {
    Auth: {
      screen: AuthStack
    },
    Main: {
      screen: TabNavigator
    },
  }
));