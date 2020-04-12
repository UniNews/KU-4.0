import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import tabBarComponent from '../../../components/commons/TabBar'
import LatestCommunity from './Latest'
import HottestComminity from './Hottest'

const communityTab = createMaterialTopTabNavigator({
    'ล่าสุด': LatestCommunity,
    'กำลังฮิต': HottestComminity,
}, {
    tabBarComponent: tabBarComponent,
})

export default communityTab