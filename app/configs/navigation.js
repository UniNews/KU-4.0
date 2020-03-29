import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import { FontAwesome } from '@expo/vector-icons'
import NewsTab from '../components/news/NewsTab'
import SearchTab from '../components/search/SearchTab'
import CommunityTab from '../components/community/CommunityTab'
import NotificationScreen from '../screens/notification/Notification'
import MyProfileScreen from '../screens/profile/MyProfile'
import UserProfileScreen from '../screens/profile/UserProfile'
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
import FollowingScreen from '../screens/profile/Following'
import FollowerScreen from '../screens/profile/Follower'
import CommentScreen from '../screens/news/Comment'
import LatestCommunity from '../screens/community/Latest'
import HottestComminity from '../screens/community/Hottest'
import MainSearchScreen from '../screens/search/MainSearch'
import NewsSearchScreen from '../screens/search/NewsSearch'
import ProfileSearchScreen from '../screens/search/ProfileSearch'
import AnyNewsScreen from '../screens/news/AnyNews'
import AnyCommunityScreen from '../screens/community/AnyCommunity'

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
  NewsDetail: NewsDetailScreen,
  CommunityDetail: CommunityDetailScreen,
  Comment: CommentScreen,
  AnyNews: AnyNewsScreen,
  Following: FollowingScreen,
  Follower: FollowerScreen,
  ProfileDetail: UserProfileScreen,
  AnyCommunity: AnyCommunityScreen,
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
  let currentRoute = navigation.state.routes[navigation.state.routes.length - 1].routeName
  if (currentRoute == 'Comment')
    tabBarVisible = false
  return {
    tabBarVisible
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
  CommunityDetail: CommunityDetailScreen,
  Following: FollowingScreen,
  Follower: FollowerScreen,
  ProfileDetail: UserProfileScreen,
  AnyCommunity: AnyCommunityScreen,
  AnyNews: AnyNewsScreen,
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
  MyProfile: MyProfileScreen,
  ProfileSetting: ProfileSetting,
  ProfileDetail: UserProfileScreen,
  Following: FollowingScreen,
  Follower: FollowerScreen,
  AnyCommunity: AnyCommunityScreen,
  AnyNews: AnyNewsScreen,
},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
)

const searchTab = createMaterialTopTabNavigator({
  'ข่าว': NewsSearchScreen,
  'โปรไฟล์': ProfileSearchScreen,
}, {
  tabBarComponent: SearchTab,
  swipeEnabled: true,
  tabBarOptions: {
    scrollEnabled: true,
  },
})

const searchStack = createStackNavigator({
  MainSearch: MainSearchScreen,
  SearchTab: searchTab,
  Following: FollowingScreen,
  Follower: FollowerScreen,
  AnyCommunity: AnyCommunityScreen,
  AnyNews: AnyNewsScreen,
  ProfileDetail: UserProfileScreen,
  CommunityDetail: CommunityDetailScreen,
  NewsDetail: NewsDetailScreen
},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
)


const tabNavigator = createBottomTabNavigator({
  'หน้าหลัก': newsStack,
  'พูดคุย': communityStack,
  'แจ้งเตือน': NotificationScreen,
  'โปรไฟล์': profileStack,
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


const tabStack = createStackNavigator({
  Tabs: tabNavigator,
  Search: searchStack
},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
)

const authStack = createStackNavigator({
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
      screen: authStack
    },
    Main: {
      screen: tabStack
    },
  }
))