import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient'

class NewsTabView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const navigation = JSON.stringify(this.props.navigation.state.routes)
        const arrayRoutes = this.props.navigation.state.routes
        var topTabsList = [];

        for(let i = 0; i < arrayRoutes.length ; i++){
            topTabsList.push(
                <Text style={styles.iconText}>
                    {arrayRoutes[i].routeName}
                </Text>
            )
        }
        return (
            <View>
                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#465859','#588E57']} style={styles.linearGradient} >
                    <Text style={styles.buttonText}>
                        KU 4.0 
                    </Text>
                    <View style={styles.listText}>
                        {topTabsList}
                    </View>
                </LinearGradient>
            </View>
        );
    }
}

export default NewsTabView;