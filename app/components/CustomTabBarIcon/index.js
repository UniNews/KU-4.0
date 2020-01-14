import React from 'react'
import { View ,Text ,TouchableWithoutFeedback } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import styles from './styles';

export default class CustomTabBarIcon extends React.Component {
    render() {

        const {index, focused, routeName} = this.props
        let icon = '';

        switch (index) {
            case 0: 
            icon = 'info';
            break;

            case 1:
            icon = 'home';
            break;

            case 2:
            icon = 'plus';
            break;

            default: 
            icon = 'info';
        }

        return (
            <TouchableWithoutFeedback
            onPress={this.onSelect}
            >
            <View> 
                <View>
                    <FontAwesome name={icon} style={focused ? styles.textFocuse: styles.textNormal}/>
                </View>
                <Text style={focused ? styles.textFocuse: styles.textNormal}>{routeName}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
    }

    onSelect = () => {    
    this.props.onPress(this.props.index);
    }
}