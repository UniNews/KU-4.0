import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient'
import CustomTabBarIcon from '../../components/CustomTabBarIcon'
class NewsTabView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {navigation} = this.props    
        const routes = navigation.state.routes
        return (
            <View>
                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#465859','#588E57']} style={styles.linearGradient} >
                    <Text style={styles.buttonText}>
                        KU 4.0 
                    </Text>
                    <View style={styles.listText}>
                        {routes.map((route, index) => {
                            return (
                                <View key={route.key}>
                                <CustomTabBarIcon
                                    key={route.key}
                                    routeName={route.routeName}
                                    onPress={() => this.navigationHandler(route.routeName)}
                                    focused={navigation.state.index === index}
                                    index={index}
                                />
                            </View>
                            );
                            }
                        )}
                    </View>
                </LinearGradient>
            </View>
        );
    }

    navigationHandler = (routeName) => {
        this.props.navigation.navigate(routeName);
    }
}

export default NewsTabView;