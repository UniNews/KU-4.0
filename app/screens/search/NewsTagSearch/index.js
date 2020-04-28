import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import ExploreTabBar from '../../../components/search/ExploreTabBar'
import TagNews from './TagNews'
import constants from './../../../configs/constants'

let tabs = {}
for (let tag of constants.TAGS) {
    tabs[tag.text + 'TagNews'] = {
        screen: TagNews,
        params: {
            tag
        }
    }
}

const searchTab = createMaterialTopTabNavigator(tabs, {
    tabBarComponent: ExploreTabBar,
    swipeEnabled: true,
    tabBarOptions: {
        scrollEnabled: true,
    },
    lazy: true,
    backBehavior: 'none'
})

export default searchTab