import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

class LoginView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.containter}>
                <Text>Login!</Text>
            </View>
        );
    }
}

export default LoginView;