import React from 'react'
import { Text, View, Animated, FlatList, Dimensions } from 'react-native'
import styles from './styles'
import { ScrollView } from 'react-native-gesture-handler';
const screenHeight = Math.round(Dimensions.get('window').height);

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

class ProfileInfo extends React.Component {

    constructor(props) {
        super(props)
        this.tabTranslateY = this.props.screenProps.scroll.interpolate({
            inputRange: [0, 300],
            outputRange: [0, -300],
            extrapolate: 'clamp',
        });
    }

    render() {
        const { user } = this.props.screenProps
        return (
            <View>
                <ScrollView contentContainerStyle={{
                    paddingTop: 405,
                    height: screenHeight + 405
                }}>
                <Animated.View
                    style={[
                        styles.profileContainer,
                        {
                            transform: [
                                {
                                    translateY: this.tabTranslateY,
                                },
                            ],
                        },
                    ]}>


                    <View style={styles.profileSectionContainer}>
                        <Text style={styles.profileTitleText}>ชื่อ</Text>
                        <Text style={styles.profileValueText}>{user.displayName}</Text>
                    </View>
                    <View style={styles.profileSectionContainer}>
                        <Text style={styles.profileTitleText}>สถานะ</Text>
                        <Text style={styles.profileValueText}>{user.bio}</Text>
                    </View>
                    <View style={styles.profileSectionContainer}>
                        <Text style={styles.profileTitleText}>หมวดหมู่</Text>
                        <Text style={styles.profileValueText}>{user.tags}</Text>
                    </View>
                </Animated.View>
                </ScrollView>


            </View >
        )
    }
}

export default ProfileInfo