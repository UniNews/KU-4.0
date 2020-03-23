import React from 'react';
import { View, TouchableWithoutFeedback, TextInput } from 'react-native';
import styles from './styles';
import CustomTab from './CustomTab'
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import StatusBar from '../../commons/StatusBar'

class SearchTabView extends React.Component {

    constructor(props) {
        super(props);
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
        const { search } = this.props
        const { query } = this.state
        if (query)
            search(query)
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
        const { navigation } = this.props
        const { query } = this.state
        const routes = navigation.state.routes
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='white' />
                <View style={styles.inputContainer}>
                    <View style={styles.searchIconContainer}>
                        <MaterialCommunityIcons
                            onPress={this.goBack}
                            size={26}
                            name={'arrow-left'}
                        />
                    </View>
                    <TextInput
                        value={query}
                        placeholderTextColor={'grey'}
                        style={styles.textInputField}
                        placeholder={'ค้นหาข่าว...'}
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
                <View style={styles.listContainer}>
                    {routes.map((route, index) => {
                        return (
                            <View key={route.key} style={styles.listItem}>
                                <CustomTab
                                    routeName={route.routeName}
                                    onPress={() => this.navigationHandler(route.routeName)}
                                    focused={navigation.state.index === index}
                                />
                            </View>
                        )
                    }
                    )}
                </View>
            </View>
        );
    }

    navigationHandler = (routeName) => {
        const { navigation } = this.props
        navigation.navigate(routeName);
    }
}

SearchTabView.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default SearchTabView;