import React from 'react'
import { View ,Text ,TouchableWithoutFeedback } from 'react-native'
import styles from './styles';

export default class CustomTabBarIcon extends React.Component {
    render() {

        const { focused, routeName } = this.props
        return (
            <TouchableWithoutFeedback
            onPress={this.onSelect}
            >
            <View> 
                <Text style={focused ? styles.textFocuse: styles.textNormal}>{routeName}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
    }

    onSelect = () => {    
    this.props.onPress(this.props.index);
    }
}