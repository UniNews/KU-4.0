import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import { FontAwesome } from '@expo/vector-icons'
import NewsTab from '../components/news/NewsTab'
import NotificationScreen from '../screens/Notification/'
import UserProfileScreen from '../screens/Profile/User'
import StoreProfileScreen from '../screens/Profile/Store'
import ClubScreen from '../screens/News/Club/'
import UniversityScreen from '../screens/News/University/'
import RecommendationScreen from '../screens/News/Recommendation/'
import PromotionScreen from '../screens/News/Promotion/'
import LoginScreen from '../screens/Login/'
import NewsDetailScreen from '../screens/Detail'
import CommunityDetailScreen from '../screens/Community/Detail'
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../assets/css/color'
import { BOLD_FONT } from '../assets/css/typography'
import ProfileSetting from '../screens/Setting/Profile'
import FollowingSetting from '../screens/Setting/Following'
import CommentScreen from '../screens/Comment'
import LatestCommunity from '../screens/Community/Latest'
import HottestComminity from '../screens/Community/Hottest'

const newsTab = createMaterialTopTabNavigator({
  'สำหรับคุณ': RecommendationScreen,
  'มหาลัย': UniversityScreen,
  'โปรโมชั่น': PromotionScreen,
  'ชมรม': ClubScreen
}, {
  tabBarComponent: NewsTab,
  swipeEnabled: true,
  tabBarOptions: {
    scrollEnabled: true,
  },
})

const newsStack = createStackNavigator({
  Home: newsTab,
  Detail: NewsDetailScreen,
  Comment: CommentScreen,
  ProfileDetail: StoreProfileScreen
},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
)

newsStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true
  if (navigation.state.index == 2) // check if the route is Comment
    tabBarVisible = false
  return {
    tabBarVisible,
  }
}

const communityTab = createMaterialTopTabNavigator({
  'ล่าสุด': LatestCommunity,
  'กำลังฮิต': HottestComminity,
}, {
  tabBarComponent: NewsTab,
  swipeEnabled: true,
  tabBarOptions: {
    scrollEnabled: true,
  },
})

const communityStack = createStackNavigator({
  Home: communityTab,
  Detail: CommunityDetailScreen,
},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
)

communityStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true
  if (navigation.state.index == 1) // check if the route is Detail
    tabBarVisible = false
  return {
    tabBarVisible,
  }
}

const profileStack = createStackNavigator({
  Main: UserProfileScreen,
  ProfileSetting: ProfileSetting,
  FollowingSetting: FollowingSetting,
  ProfileDetail: StoreProfileScreen
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
  'พูดคุย': communityStack,
  'แจ้งเตือน': NotificationScreen,
  'โปรไฟล์': profileStack
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
        } else if (routeName === 'พูดคุย') {
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
)

export default createAppContainer(createSwitchNavigator(
  {
    Auth: {
      screen: AuthStack
    },
    Main: {
      screen: TabNavigator
    },
  }
))