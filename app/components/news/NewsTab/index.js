import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient'
import CustomTab from './CustomTab'
import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons'
import StatusBar from '../../commons/StatusBar'
import { PRIMARY_COLOR, SECONDARY_COLOR, KU_PRIMARY_COLOR, KU_SECONDARY_COLOR } from '../../../assets/css/color';

class NewsTabView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { navigation } = this.props
        const routes = navigation.state.routes
        return (
            <View>
                <StatusBar />
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[KU_PRIMARY_COLOR, KU_SECONDARY_COLOR]}>
                    <View style={styles.headContainer}>
                        <Text style={styles.logo}>
                            UniNews
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
            </View>
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