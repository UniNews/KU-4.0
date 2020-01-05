import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

class NotificationView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.containter}>
                <Text>Notification!</Text>
            </View>
        );
    }
}

export default NotificationView;