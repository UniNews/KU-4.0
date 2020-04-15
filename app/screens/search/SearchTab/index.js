import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import NewsSearchScreen from './NewsSearch'
import CommunitySearchScreen from './CommunitySearch'
import ProfileSearchScreen from './ProfileSearch'
import SearchTab from '../../../components/search/SearchTab'

const searchTab = createMaterialTopTabNavigator({
    'ข่าว': NewsSearchScreen,
    'ชุมชน': CommunitySearchScreen,
    'โปรไฟล์': ProfileSearchScreen,
}, {
    tabBarComponent: SearchTab,
    swipeEnabled: true,
    tabBarOptions: {
        scrollEnabled: true,
    },
})

export default searchTab