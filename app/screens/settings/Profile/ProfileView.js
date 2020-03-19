import React from 'react'
import { Text, View, Image, TouchableWithoutFeedback, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import Hr from '../../../components/commons/Hr'
import StatusBar from '../../../components/commons/StatusBar'

class ProfileSettingView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            displayName: this.props.user.displayName
        }
    }

    goBack = () => {
        const { navigation } = this.props
        navigation.goBack()
    }

    save = () => {
        // TODO: call PUT /users/:id
    }

    render() {
        return (
            <View style={styles.containter}>
                <StatusBar />
                <LinearGradient style={styles.linearGradient} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={['#465859', '#588E57']}>

                    <TouchableWithoutFeedback onPress={this.goBack}>
                        <Feather name={'chevron-left'} style={styles.backButton} size={28} color={'white'} />
                    </TouchableWithoutFeedback>
                    <Text style={styles.headerText}>
                        แก้ไขโปรไฟล์
                            </Text>
                    <TouchableWithoutFeedback onPress={this.save}>
                        <Feather name={'check'} style={styles.saveButton} size={25} color={'white'} />
                    </TouchableWithoutFeedback>

                    <Image
                        source={{ uri: this.props.user.avatarURL }}
                        style={styles.avatar}
                    />
                </LinearGradient>
                <View style={{ paddingVertical: 70 }}>
                    <TouchableWithoutFeedback>
                        <View style={styles.settingContainer}>
                            <Text style={styles.settingTitleText}>ชื่อผู้ใช้</Text>
                            <TextInput
                                style={styles.settingValueText}
                                onChangeText={(text) => this.setState({ displayName: text })}
                                value={this.state.displayName} />
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