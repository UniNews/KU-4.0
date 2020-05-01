import React from 'react'
import { View, TouchableWithoutFeedback, TextInput } from 'react-native'
import styles from './styles'
import { MaterialCommunityIcons, FontAwesome, Feather } from '@expo/vector-icons'
import { MaterialTopTabBar } from 'react-navigation-tabs'
import { KU_SECONDARY_COLOR } from '../../../assets/css/color'

class SearchTabView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            query: '',
            history: []
        }
    }

    updateSearch = text => {
        this.setState({
            query: text,
        })
    }

    componentDidMount() {
        let history = localStorage.getItem('history')
        if (history) {
            history = JSON.parse(localStorage.getItem('history'))
            this.setState({ history: data.history });
        }
    }

    search = () => {
        const { setQuery } = this.props
        const { query } = this.state
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

    goBack = () => {
        const { navigation } = this.props
        navigation.pop()
    }

    render() {
        const { query } = this.state
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <View style={styles.searchIconContainer}>
                        <MaterialCommunityIcons
                            color='black'
                            onPress={this.goBack}
                            size={25}
                            name={'arrow-left'}
                        />
                        {/* <FontAwesome name='search' color='grey' size={16} /> */}
                    </View>
                    <TextInput
                        value={query}
                        autoFocus={true}
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