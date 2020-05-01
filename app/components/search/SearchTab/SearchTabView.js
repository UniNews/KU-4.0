import React from 'react'
import { View, TouchableWithoutFeedback, TextInput, Text, TouchableOpacity, TouchableNativeFeedback, FlatList } from 'react-native'
import styles from './styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { MaterialTopTabBar } from 'react-navigation-tabs'
import { KU_SECONDARY_COLOR } from '../../../assets/css/color'

class SearchTabView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            query: '',
            history: [],
            initial: true
        }
    }

    updateSearch = text => {
        this.setState({
            query: text,
        })
    }

    componentDidMount() {
        const { getHistory } = this.props
        getHistory()
    }

    search = () => {
        const { setQuery, addHistory } = this.props
        const { query } = this.state
        if (query.trim() !== '') {
            this.setState({
                initial: false,
            })
            setQuery(query)
            addHistory(query)
        }
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

    renderHistory = ({ item, index }) => {
        return <TouchableNativeFeedback onPress={() => this.selectHistory(item)}>
            <View style={styles.searchHistoryTextContainer}>
                <Text style={styles.searchItemText}>
                    {item}
                </Text>
                <TouchableOpacity onPress={() => this.deleteHistory(index)}>
                    <MaterialCommunityIcons name='close' color={'grey'} size={18} />
                </TouchableOpacity>
            </View>
        </TouchableNativeFeedback>
    }

    renderHistoryHeader = () => {
        return <View style={styles.searchHistoryTextContainer}>
            <Text style={styles.searchHistoryText}>
                การค้นหาล่าสุด
             </Text>
            <TouchableOpacity onPress={this.deleteAllHistory}>
                <Text style={styles.deleteAllText}>
                    ลบทั้งหมด
                </Text>
            </TouchableOpacity>
        </View>
    }

    selectHistory = (query) => {
        this.setState({
            query,
        })
    }

    deleteAllHistory = () => {
        const { deleteAllHistory } = this.props
        deleteAllHistory()
    }

    deleteHistory = (index) => {
        const { deleteHistory } = this.props
        deleteHistory(index)
    }

    render() {
        const { query, initial } = this.state
        const { history } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.whiteBackgroud}>
                    <View style={styles.inputContainer}>
                        <View style={styles.searchIconContainer}>
                            <MaterialCommunityIcons
                                color='black'
                                onPress={this.goBack}
                                size={25}
                                name={'arrow-left'}
                            />
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
                </View>
                {
                    !initial || (history && history.length === 0) ?
                        <View style={styles.whiteBackgroud}>
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
                        :
                        <View style={styles.searchHistoryContainer}>
                            <View style={styles.whiteBackgroud}>
                                <FlatList
                                    ListHeaderComponent={this.renderHistoryHeader}
                                    keyExtractor={(history, index) => index.toString()}
                                    data={history}
                                    renderItem={this.renderHistory}
                                />
                            </View>
                        </View>
                }
            </View>
        )
    }
}

export default SearchTabView