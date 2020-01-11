import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

class NewsView extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <View style={styles.containter}>
                <Text>Header</Text>
            </View>
        );
    }
}

export default NewsView;