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
                            source={{ uri: 'https://scontent.fbkk2-5.fna.fbcdn.net/v/t1.0-1/c0.0.820.820a/66686017_1125283600997160_4542151837934944256_n.jpg?_nc_cat=110&_nc_oc=AQmNpBihC6kLplVjqVJTIrCFMMm59mZi4qLk9VaYlJEaVjaWaGnRNVpvjGEXBl3tINA&_nc_ht=scontent.fbkk2-5.fna&oh=326e11cf10014a155dd953be098951f0&oe=5E90FC5F' }}
                            style={styles.avatar}
                        />
                    </LinearGradient>
                </View>
                <View style={{ paddingVertical: 70 }}>
                    <TouchableWithoutFeedback>
                        <View style={styles.settingContainer}>
                            <View>
                                <Text style={styles.settingTitleText}>ชื่อจริง</Text>
                                <Text style={styles.settingValueText}>Jamie</Text>
                            </View>
                            <Feather name={'chevron-right'} size={20} color={'gray'} />
                        </View>
                    </TouchableWithoutFeedback>
                    <Hr />
                    <TouchableWithoutFeedback>
                        <View style={styles.settingContainer}>
                            <View>
                                <Text style={styles.settingTitleText}>นามสกุล</Text>
                                <Text style={styles.settingValueText}>Sathira</Text>
                            </View>
                            <Feather name={'chevron-right'} size={20} color={'gray'} />
                        </View>
                    </TouchableWithoutFeedback>
                    <Hr />
                    <TouchableWithoutFeedback>
                        <View style={styles.settingContainer}>
                            <View>
                                <Text style={styles.settingTitleText}>คณะ</Text>
                                <Text style={styles.settingValueText}>วิศวะซอฟแวร์ และความรู้</Text>
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