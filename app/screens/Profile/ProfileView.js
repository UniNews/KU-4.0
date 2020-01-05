import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

class ProfileView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.containter}>
                <Text>Profile!</Text>
            </View>
        );
    }
}

export default ProfileView;