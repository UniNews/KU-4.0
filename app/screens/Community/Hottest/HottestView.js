import React from 'react';
import { View, ScrollView } from 'react-native';
import styles from './styles';
import Thread from '../../../components/community/Thread'

class HottestView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.containter}>
                <ScrollView contentContainerStyle={styles.threadContainer}>
                    {/* <Thread />
                    <Thread />
                    <Thread />
                    <Thread />
                    <Thread />
                    <Thread /> */}
                </ScrollView>
            </View>
        );
    }
}

export default HottestView;