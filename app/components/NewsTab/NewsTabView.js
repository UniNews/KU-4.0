import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient'
import CustomTab from '../CustomTab'
import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons'

class NewsTabView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { navigation } = this.props
        const routes = navigation.state.routes
        return (
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#465859', '#588E57']}>
                <View style={styles.headContainer}>
                    <Text style={styles.logo}>
                        KU 4.0
                    </Text>
                    <FontAwesome name="search" color="white" size={21} />
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
            </LinearGradient>
        );
    }

    navigationHandler = (routeName) => {
        const { navigation } = this.props
        navigation.navigate(routeName);
    }
}

NewsTabView.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default NewsTabView;