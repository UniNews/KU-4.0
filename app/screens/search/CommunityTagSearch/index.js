import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import ExploreTabBar from '../../../components/search/ExploreTabBar'
import TagCommunity from './TagCommunity'
import constants from './../../../configs/constants'

let tabs = {}
for (let tag of constants.TAGS) {
    tabs[tag.text] = {
        screen: TagCommunity,
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
})

export default searchTab