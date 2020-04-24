import React from 'react'
import { Text, View, Image, TouchableWithoutFeedback, TextInput, ActivityIndicator, } from 'react-native'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import uploadService from '../../../services/uploads'
import * as ImagePicker from 'expo-image-picker'
import constants from '../../../configs/constants'
import Constants from 'expo-constants'
import { PRIMARY_COLOR } from '../../../assets/css/color'
import Hr from '../../../components/commons/Hr'

class ProfileSettingView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            displayName: this.props.user.displayName,
            bio: this.props.user.bio,
            avatarURL: this.props.user.avatarURL,
            uploading: false,
            error: false,
            /* error validation */
            displayNameError: '',
            bioError: ''
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

    save = async () => {
        if (!this.isBioError() && !this.isDisplayNameError()) {
            const { displayName, avatarURL, bio } = this.state
            const { updateProfile, navigation } = this.props
            const data = {
                displayName,
                avatarURL,
                bio: bio,
            }
            await updateProfile(data)
            navigation.goBack()
        }
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
                this.setState({
                    avatarURL: `${constants.API_URL}${uploadResponse.data.uri}`,
                    uploading: false,
                    error: false
                })
            }
        } catch (error) {
            this.setState({
                uploading: false,
                error: true
            })
            this.props.showModal()
        }
    }

    updateDisplayName = (text) => {
        this.setState({ displayName: text })
        if (text.length < 3 || text.length > 20)
            this.setState({ displayNameError: 'ต้องมีขนาด 3 ถึง 20 ตัวอักษร' })
        else
            this.setState({ displayNameError: '' })
    }

    updateBio = (text) => {
        this.setState({ bio: text })
        if (text.length > 50)
            this.setState({ bioError: 'ต้องมีขนาดน้อยกว่า 50 ตัวอักษร' })
        else
            this.setState({ bioError: '' })
    }

    isDisplayNameError = () => {
        return this.state.displayNameError !== ''
    }

    isBioError = () => {
        return this.state.bioError !== ''
    }

    render() {
        const { uploading, displayName, avatarURL, bio, displayNameError, bioError } = this.state
        const { loading } = this.props
        const isDisplayNameError = this.isDisplayNameError()
        const isBioError = this.isBioError()

        return (
            <View style={styles.containter}>
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
                                        <Feather name={'check'} size={25} color={isDisplayNameError || isBioError ? 'rgba(255, 255, 255, 0.5)' : 'white'} />
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
                                <View>
                                    <Image
                                        source={{ uri: avatarURL }}
                                        style={styles.avatar}
                                    />
                                    <View style={styles.uploadIconContainer}>
                                        <MaterialCommunityIcons name={'image-plus'} size={30} color={'white'} />
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        }
                    </View>
                </LinearGradient>

                <View style={styles.descriptionContainer}>
                    <View style={styles.settingContainer}>
                        <Text style={isDisplayNameError ? styles.settingErrorTitleText : styles.settingTitleText}>{`ชื่อผู้ใช้ ${displayNameError}`}</Text>
                        <TextInput
                            style={styles.settingValueText}
                            onChangeText={this.updateDisplayName}
                            value={displayName} />
                    </View>
                    <Hr style={isDisplayNameError ? styles.errorHr : null} />
                    <View style={styles.settingContainer}>
                        <Text style={isBioError ? styles.settingErrorTitleText : styles.settingTitleText}>{`สถานะ ${bioError}`}</Text>
                        <TextInput
                            style={styles.settingValueText}
                            onChangeText={this.updateBio}
                            value={bio} />
                    </View>
                    <Hr style={isBioError ? styles.errorHr : null} />
                </View>
            </View >
        )
    }
}

export default ProfileSettingView