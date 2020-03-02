import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import { FontAwesome } from '@expo/vector-icons'
import NewsTab from '../components/news/NewsTab'
import CommunityTab from '../components/community/CommunityTab'
import NotificationScreen from '../screens/notification/Notification'
import UserProfileScreen from '../screens/profile/User'
import StoreProfileScreen from '../screens/profile/Store'
import ClubScreen from '../screens/news/Club'
import UniversityScreen from '../screens/news/University'
import RecommendationScreen from '../screens/news/Recommendation'
import PromotionScreen from '../screens/news/Promotion'
import LoginScreen from '../screens/auth/Login/'
import RegisterScreen from '../screens/auth/Register/'
import NewsDetailScreen from '../screens/news/Detail'
import CommunityDetailScreen from '../screens/community/Detail'
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../assets/css/color'
import { BOLD_FONT } from '../assets/css/typography'
import ProfileSetting from '../screens/settings/Profile'
import FollowingSetting from '../screens/settings/Following'
import CommentScreen from '../screens/news/Comment'
import LatestCommunity from '../screens/community/Latest'
import HottestComminity from '../screens/community/Hottest'

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
  tabBarComponent: CommunityTab,
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
          iconName = 'comments'
          size = 27
        }
        else if (routeName === 'แจ้งเตือน') {
          iconName = 'bell'
          size = 22
        }
        else if (routeName === 'โปรไฟล์') {
          iconName = 'user'
          size = 26
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
  Register: {
    screen: RegisterScreen
  }
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