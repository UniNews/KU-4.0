import React from 'react'
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import { Feather } from '@expo/vector-icons'
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import Hr from '../../../components/commons/Hr'

class ProfileSettingView extends React.Component {

    constructor(props) {
        super(props)
    }

    goBack = () => {
        const { navigation } = this.props
        navigation.goBack()
    }

    render() {
        return (
            <View style={styles.containter}>
                <View style={styles.headContainer}>
                    <LinearGradient style={styles.linearGradient} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={['#465859', '#588E57']}>
                        <TouchableWithoutFeedback onPress={this.goBack}>
                            <Feather name={'chevron-left'} style={styles.backButton} size={28} color={'white'} />
                        </TouchableWithoutFeedback>
                        <Text style={styles.headerText}>
                            แก้ไขโปรไฟล์
                            </Text>
                        <Image
                            source={{ uri: this.props.user.avatarURl }}
                            style={styles.avatar}
                        />
                    </LinearGradient>
                </View>
                <View style={{ paddingVertical: 70 }}>
                    <TouchableWithoutFeedback>
                        <View style={styles.settingContainer}>
                            <View>
                                <Text style={styles.settingTitleText}>ชื่อผู้ใช้</Text>
                                <Text style={styles.settingValueText}>{this.props.user.displayName}</Text>
                            </View>
                            <Feather name={'chevron-right'} size={20} color={'gray'} />
                        </View>
                    </TouchableWithoutFeedback>
                    <Hr />
                    <TouchableWithoutFeedback>
                        <View style={styles.settingContainer}>
                            <View>
                                <Text style={styles.settingTitleText}>คณะ</Text>
                                <Text style={styles.settingValueText}>{this.props.user.description}</Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                    <Hr />
                </View>
            </View>
        )
    }
}

export default ProfileSettingView