import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import PropTypes from 'prop-types'
import { FontAwesome } from '@expo/vector-icons'
import StatusBar from '../../commons/StatusBar'
import { KU_PRIMARY_COLOR, KU_SECONDARY_COLOR } from '../../../assets/css/color'
import { MaterialTopTabBar } from 'react-navigation-tabs'

class NewsTabView extends React.Component {

    constructor(props) {
        super(props)
    }

    goSearch = () => {
        const { navigation } = this.props
        navigation.navigate('Search')
    }

    render() {
        return (
            <View>
                <StatusBar />
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[KU_PRIMARY_COLOR, KU_SECONDARY_COLOR]}>
                    <View style={styles.headContainer}>
                        <Text style={styles.logo}>
                            UniNews
                        </Text>
                        <TouchableOpacity onPress={this.goSearch}>
                            <FontAwesome name="search" color="white" size={21} />
                        </TouchableOpacity>
                    </View>
                    <MaterialTopTabBar
                        {...this.props}
                        activeTintColor={'white'}
                        inactiveTintColor={'rgba(255, 255, 255, 0.5)'}
                        scrollEnabled={false}
                        labelStyle={styles.labelStyle}
                        indicatorStyle={styles.indicatorStyle}
                        style={styles.tabStyle}
                    />
                </LinearGradient>
            </View>
        )
    }
}

NewsTabView.propTypes = {
    navigation: PropTypes.object.isRequired,
}

export default NewsTabView