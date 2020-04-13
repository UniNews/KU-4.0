import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import NewsSearchScreen from './NewsSearch'
import ProfileSearchScreen from './ProfileSearch'
import SearchTab from '../../../components/search/SearchTab'

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

export default searchTab