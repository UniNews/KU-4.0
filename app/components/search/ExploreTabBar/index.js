import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'
import { FontAwesome } from '@expo/vector-icons'
import Tag from './Tag'
import Header from '../../../components/commons/Header'
import Button from '../../commons/Button'
import { Feather } from '@expo/vector-icons'
import { Dimensions } from 'react-native'
export const { width: viewportWidth } = Dimensions.get('window')

const TAG_WIDTH = 75

class ExploreTabBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            initial: true
        }
    }

    navigationHandler = (routeName) => {
        const { navigation } = this.props
        navigation.navigate(routeName)
    }

    scrollTo = (index) => {
        if ((index + 1) * TAG_WIDTH >= viewportWidth)
            this.scroll.scrollTo({ x: viewportWidth, y: 0, animated: true })
        else
            this.scroll.scrollTo({ x: 0, y: 0, animated: true })
    }

    componentDidUpdate(prevProps) {
        const { navigation } = this.props
        const { initial } = this.state
        if (navigation && (prevProps.navigation !== navigation || initial)) {
            this.scrollTo(navigation.state.index)
            this.setState({
                initial: false
            })
        }
    }

    goBack = () => {
        const { navigation } = this.props
        navigation.goBack()
    }

    goSearch = () => {
        const { navigation } = this.props
        navigation.navigate('Search')
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
                    <ScrollView
                        ref={ref => this.scroll = ref}
                        horizontal
                        showsHorizontalScrollIndicator={false}>
                        {routes.map((route, index) => {
                            return (
                                <Tag
                                    key={route.key}
                                    tag={route.params.tag}
                                    routeName={route.params.tag.text}
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