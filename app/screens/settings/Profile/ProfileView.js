import React from 'react'
import { Text, View, Image, TouchableWithoutFeedback, TextInput, ActivityIndicator } from 'react-native'
import { Feather } from '@expo/vector-icons'
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import StatusBar from '../../../components/commons/StatusBar'
import uploadService from '../../../services/uploads'
import * as ImagePicker from 'expo-image-picker'
import constants from '../../../configs/constants'
import Constants from 'expo-constants'
import { PRIMARY_COLOR } from '../../../assets/css/color'

class ProfileSettingView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            displayName: this.props.user.displayName,
            bio: this.props.user.bio,
            avatarURL: this.props.user.avatarURL,
            uploading: false,
            error: false
        }
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
            if (status !== 'granted') {
                // TODO: warning alert
            }
        }
    }

    goBack = () => {
        const { navigation } = this.props
        navigation.goBack()
    }

    save = () => {
        const { displayName, avatarURL, bio } = this.state
        const { updateProfile } = this.props
        const data = {
            displayName,
            avatarURL,
            bio,
        }
        updateProfile(data)
    }

    componentDidMount() {
        this.getPermissionAsync()
    }

    pickImage = async () => {
        const pickerResult = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        })
        this.handleImagePicked(pickerResult)
    }

    handleImagePicked = async pickerResult => {
        try {
            if (!pickerResult.cancelled) {
                this.setState({
                    uploading: true
                })
                const uploadResponse = await uploadService.uploadImage(pickerResult.uri)
                const imageLocation = uploadResponse.headers.location
                this.setState({
                    avatarURL: `${constants.API_URL}${imageLocation}`,
                    uploading: false,
                    error: false
                })
            }
        } catch (error) {
            this.setState({
                uploading: false,
                error: true
            })
        }
    }

    render() {
        const { uploading, displayName, avatarURL, bio } = this.state
        const { loading } = this.props
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
                    {
                        <View style={styles.saveButton}>
                            {
                                loading
                                    ?
                                    <ActivityIndicator color={'white'} />
                                    :
                                    <TouchableWithoutFeedback onPress={this.save}>
                                        <Feather name={'check'} size={25} color={'white'} />
                                    </TouchableWithoutFeedback>
                            }
                        </View>

                    }
                    <View style={styles.imageContainer}>
                        {uploading
                            ?
                            <ActivityIndicator color={PRIMARY_COLOR} style={styles.uploadingSpinner} />
                            :
                            <TouchableWithoutFeedback onPress={this.pickImage}>
                                <Image
                                    source={{ uri: avatarURL }}
                                    style={styles.avatar}
                                />
                            </TouchableWithoutFeedback>
                        }
                    </View>
                </LinearGradient>
                <View style={styles.descriptionContainer}>
                    <TouchableWithoutFeedback>
                        <View style={styles.settingContainer}>
                            <Text style={styles.settingTitleText}>ชื่อผู้ใช้</Text>
                            <TextInput
                                style={styles.settingValueText}
                                onChangeText={(text) => this.setState({ displayName: text })}
                                value={displayName} />
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback>
                        <View style={styles.settingContainer}>
                            <Text style={styles.settingTitleText}>สถานะ</Text>
                            <TextInput
                                style={styles.settingValueText}
                                onChangeText={(text) => this.setState({ bio: text })}
                                value={bio} />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        )
    }
}

export default ProfileSettingView