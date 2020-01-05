import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

class UniversityView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.containter}>
                <Text>University!</Text>
            </View>
        );
    }
}

export default UniversityView;