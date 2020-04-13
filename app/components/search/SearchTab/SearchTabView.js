import React from 'react'
import { View, TouchableWithoutFeedback, TextInput } from 'react-native'
import styles from './styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { MaterialTopTabBar } from 'react-navigation-tabs'
import { KU_SECONDARY_COLOR } from '../../../assets/css/color'

class SearchTabView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            query: '',
        }
    }

    goBack = () => {
        const { navigation } = this.props
        navigation.goBack()
    }

    goSearch = () => {
        this.props.navigation.navigate('Search')
    }

    updateSearch = text => {
        this.setState({
            query: text,
        })
    }

    search = () => {
        const { setQuery } = this.props
        const { query } = this.state
        if (query)
            setQuery(query)
    }

    clearQuery = () => {
        this.setState({
            query: '',
        })
    }

    componentWillUnmount() {
        const { reset } = this.props
        reset()
    }

    render() {
        const { query } = this.state
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        value={query}
                        // autoFocus={true}
                        placeholderTextColor={'grey'}
                        style={styles.textInputField}
                        placeholder={'ค้นหาข่าว, ชุมชน, ชื่อผู้ใช้...'}
                        onSubmitEditing={this.search}
                        onChangeText={this.updateSearch}
                        returnKeyType={'search'}
                    />
                    {query
                        ?
                        <TouchableWithoutFeedback onPress={this.clearQuery}>
                            <View style={styles.clearIconContainer}>
                                <MaterialCommunityIcons name='close' color={'grey'} size={20} />
                            </View>
                        </TouchableWithoutFeedback>
                        :
                        null
                    }
                </View>
                <MaterialTopTabBar
                    {...this.props}
                    activeTintColor={KU_SECONDARY_COLOR}
                    inactiveTintColor={'grey'}
                    scrollEnabled={false}
                    labelStyle={styles.labelStyle}
                    indicatorStyle={styles.indicatorStyle}
                    style={styles.tabStyle}
                />
            </View>
        )
    }
}

export default SearchTabView