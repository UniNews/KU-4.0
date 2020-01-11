import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

class PromotionView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.containter}>
                <Text>Promotions!</Text>
            </View>
        );
    }
}

export default PromotionView;