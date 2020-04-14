import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'
import { FontAwesome } from '@expo/vector-icons'
import Tag from './Tag'
import Header from '../../../components/commons/Header'
import Button from '../../commons/Button'
import { Feather } from '@expo/vector-icons'

class ExploreTabBar extends React.Component {

    constructor(props) {
        super(props)
    }

    navigationHandler = (routeName) => {
        const { navigation } = this.props
        navigation.navigate(routeName)
    }

    goSearch = () => {
        const { navigation } = this.props
        navigation.navigate('ค้นหา')
    }

    render() {
        const { navigation } = this.props
        const routes = navigation.state.routes
        return (
            <View style={styles.containter}>
                <Header
                    title={'สำรวจ'}
                    leftIconComponent={
                        <Feather
                            color='white'
                            onPress={this.goBack}
                            size={28}
                            name={'chevron-left'}
                        />
                    }
                />
                <View style={styles.searchContainer}>
                    <View style={styles.inputContainer}>
                        <View style={styles.searchIconContainer}>
                            <FontAwesome name='search' color='grey' size={16} />
                        </View>
                        <Button onPress={this.goSearch} activeOpacity={1} style={styles.textInputField}>
                            <Text style={styles.searchText}>
                                ค้นหาข่าว, ชุมชน, ชื่อผู้ใช้...
                            </Text>
                        </Button>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {routes.map((route, index) => {
                            return (
                                <Tag
                                    key={route.key}
                                    tag={route.params.tag}
                                    routeName={route.routeName}
                                    onPress={() => this.navigationHandler(route.routeName)}
                                    focused={navigation.state.index === index}
                                />
                            )
                        }
                        )}
                    </ScrollView>
                </View>
            </View>
        )
    }
}

ExploreTabBar.propTypes = {
    navigation: PropTypes.object.isRequired,
}

export default ExploreTabBar