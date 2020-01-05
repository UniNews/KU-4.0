import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

class ScheduleView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.containter}>
                <Text>Schedule!</Text>
            </View>
        );
    }
}

export default ScheduleView;