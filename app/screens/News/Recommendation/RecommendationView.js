import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

class RecommendationView extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.containter}>
                <Text>Recommendation!</Text>
            </View>
        );
    }
}

export default RecommendationView;