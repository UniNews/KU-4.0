import React from 'react'
import { Text, View, Image, TouchableWithoutFeedback, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import Hr from '../../../components/commons/Hr'
import StatusBar from '../../../components/commons/StatusBar'
import userService from '../../../services/user'
import * as ImagePicker from 'expo-image-picker'
import appconstants from '../../../configs/constants'
import axios from 'axios'

class ProfileSettingView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            displayName: this.props.user.displayName,
            avatarURL: this.props.user.avatarURL,
            uploading:false
        }
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    }

    goBack = () => {
        const { navigation } = this.props
        navigation.goBack()
    }

    save = async () => {
        const data = {
            displayName:this.state.displayName,
            avatarURL:this.state.avatarURL
        }
        await this.props.updateProfile(data)
    }

    componentDidMount() {
        this.getPermissionAsync();
    }

    _pickImage = async () => {
            let pickerResult = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                aspect: [4, 3],
            });
        this._handleImagePicked(pickerResult);
    };

    _handleImagePicked = async pickerResult => {
        let uploadResponse
        try {
            this.setState({
                uploading: true
            });
    
        if (!pickerResult.cancelled) {
            uploadResponse = await this.uploadImageAsync(pickerResult, pickerResult.uri);
            let imageLocation = uploadResponse.headers.location;
            imageLocation = `${appconstants.API_URL}${imageLocation}`;
            this.setState({ avatarURL: imageLocation });
            }
        } catch (e) {
            console.log({ uploadResponse });
            console.log({ e });
            alert('Upload failed, sorry :(');
        } finally {
            this.setState({ uploading: false });
        }
    }

    async uploadImageAsync(photo, uri) {
        let apiUrl = `${appconstants.API_URL}/images`;
        let uriParts = uri.split('.');
        let fileType = uriParts[uriParts.length - 1];
        let formData = new FormData();
        formData.append('image', {
            uri: photo.uri,
            name: `photo.${fileType}`,
            type: `image/${fileType}`
        });
        return axios({
            method: 'post',
            url: apiUrl,
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(function(res) {
            return res;
        }).catch(function(err) {
            return err;
        })  
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
                    <TouchableWithoutFeedback onPress={this._pickImage}>
                        <Image
                            source={{ uri: this.state.avatarURL }}
                            style={styles.avatar}
                        />
                    </TouchableWithoutFeedback>
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
                                <Text style={styles.settingValueText}>{'sssss'}</Text>
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