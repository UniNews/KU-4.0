import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

class ClubView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.containter}>
                <Text>Clubs!</Text>
            </View>
        );
    }
}

export default ClubView;