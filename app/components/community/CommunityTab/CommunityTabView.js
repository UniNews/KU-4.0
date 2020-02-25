import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient'
import CustomTab from './CustomTab'
import PropTypes from 'prop-types';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import StatusBar from '../../commons/StatusBar'
import { KU_PRIMARY_COLOR, KU_SECONDARY_COLOR } from '../../../assets/css/color';
import Button from '../../commons/Button'

const tags = [
    {
        outlineIconName: 'commenting-o',
        iconName: 'commenting',
        text: 'ทั่วไป',
        iconComponent: FontAwesome
    },
    {
        outlineIconName: 'heart-o',
        iconName: 'heart',
        text: 'ความรัก',
        iconComponent: FontAwesome
    },
    {
        outlineIconName: 'lightbulb-o',
        iconName: 'lightbulb-o',
        text: 'การเรียน',
        iconComponent: FontAwesome
    },
    {
        outlineIconName: 'futbol-o',
        iconName: 'futbol-o',
        text: 'กีฬา',
        iconComponent: FontAwesome
    },
    {
        outlineIconName: 'alert-circle-outline',
        iconName: 'alert-circle',
        text: 'เตือนภัย',
        iconComponent: MaterialCommunityIcons
    },
]

class CommunityTabView extends React.Component {

    componentDidMount() {
        const { selectCommunityTag } = this.props;
        selectCommunityTag(tags[0].text)
    }

    constructor(props) {
        super(props);
    }

    onIconPressed = (index) => {
        const { selectCommunityTag } = this.props;
        selectCommunityTag(tags[index].text)
    }

    render() {
        const { navigation, selectedTag } = this.props
        const routes = navigation.state.routes
        return (
            <View>
                <StatusBar />
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[KU_PRIMARY_COLOR, KU_SECONDARY_COLOR]}>
                    <View style={styles.headContainer}>
                        <Text style={styles.logo}>
                            UniNews
                    </Text>
                        <FontAwesome name="search" color="white" size={21} />
                    </View>
                    <View style={styles.listContainer}>
                        {routes.map((route, index) => {
                            return (
                                <View key={route.key} style={styles.listItem}>
                                    <CustomTab
                                        routeName={route.routeName}
                                        onPress={() => this.navigationHandler(route.routeName)}
                                        focused={navigation.state.index === index}
                                    />
                                </View>
                            )
                        }
                        )}
                    </View>
                    <ScrollView style={styles.tagContainer} showsHorizontalScrollIndicator={false} horizontal={true}>
                        {tags.map((tag, index) => {
                            const IconComponent = tag.iconComponent
                            const isPressed = selectedTag == tag.text
                            return (
                                <Button onPress={() => this.onIconPressed(index)} key={index} style={[styles.tagButton, isPressed ? styles.focusTagButton : styles.notFocusTagButton]} rounded >
                                    <IconComponent name={isPressed ? tag.iconName : tag.outlineIconName} size={20} color={isPressed ? 'white' : 'grey'} />
                                    <Text style={[styles.tagText, isPressed ? styles.focusTagText : styles.notFocusTagText]}>{tag.text}</Text>
                                </Button>
                            )
                        })}
                    </ScrollView>
                </LinearGradient>
            </View>
        );
    }

    navigationHandler = (routeName) => {
        const { navigation } = this.props
        navigation.navigate(routeName);
    }
}

CommunityTabView.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default CommunityTabView;