import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator ,createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import { FontAwesome } from '@expo/vector-icons'
import NewsScreen from '../screens/News/'
import NotificationScreen from '../screens/Notification/'
import ScheduleScreen from '../screens/Schedule/'
import ProfileScreen from '../screens/Profile/'
import ClubScreen from '../screens/News/Club/'
import UniversityScreen from '../screens/News/University/'
import RecommendationScreen from '../screens/News/Recommendation'
import PromotionScreen from '../screens/News/Promotion/'
import Constants from '../configs/constants'

const newsTab = createMaterialTopTabNavigator({
  Club: ClubScreen,
  Recommendation: RecommendationScreen,
  Promotion: PromotionScreen,
  University: UniversityScreen,
}, {
  tabBarOptions: {
    scrollEnabled: true,
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: 'tomato',
    },
    indicatorStyle: {
      backgroundColor: '#fff'
    }
  },
});

newsTab.navigationOptions = {
  header: null
}
const newsTabStack = createStackNavigator({
  Home: newsTab
})

const TabNavigator = createBottomTabNavigator({
  'หน้าหลัก':newsTabStack,
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

// const newStack = createStackNavigator({
//   News: newsNavigation,
// })
// const newsNavigation = createMaterialTopTabNavigator(
//   {
//     'ชมรม':ClubScreen,
//     'แนะนำ':RecommendationScreen,
//     'มหาลัย':UniversityScreen,
//     'โปรโมชั่น':PromotionScreen
//   },
//   {
//     initialRouteName: 'ชมรม' ,
//     defaultNavigationOptions: ({ navigation }) => {
//       return {
//         tabBarOptions:{
//           style: {
//             backgroundColor: 'black',
//             elevation: 0, // remove shadow on Android
//             shadowOpacity: 0, // remove shadow on iOS,
//             borderWidth:1,
//             borderColor:'#ccc',
//             scrollEnabled:true
//           }
//         }
//       }
//     }      
//   })

export default createAppContainer(TabNavigator)