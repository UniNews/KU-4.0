import React from 'react';
import { View, ScrollView, TouchableWithoutFeedback, KeyboardAvoidingView, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import StatusBar from '../../../components/commons/StatusBar'
import Header from '../../../components/commons/Header'
import Hr from '../../../components/commons/Hr'
import { FontAwesome, Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import Button from '../../../components/commons/Button'

class DetailView extends React.Component {

    constructor(props) {
        super(props);
    }

    goBack = () => {
        const { navigation } = this.props
        navigation.goBack()
    }

    render() {
        return (
            <View style={styles.containter}>
                <StatusBar />
                <Header title={'ชุมชน'} leftIconComponent={
                    <Feather color='white' onPress={this.goBack} size={28} name={'chevron-left'} />
                }
                />
                <KeyboardAvoidingView style={{ flex: 1 }} behavior='height'>

                    <ScrollView>

                        <View style={styles.contentContainer}>
                            <View style={styles.titleContainer}>
                                <View style={styles.infoContainer}>
                                    <TouchableWithoutFeedback>
                                        <Image
                                            style={styles.imageAvatar}
                                            source={{ uri: 'https://scontent.fbkk2-7.fna.fbcdn.net/v/t1.0-9/67403030_876083589433461_6633716974541078528_o.jpg?_nc_cat=109&_nc_oc=AQkgR8USRZDXbn_dpp8Ap6TQs-dxWgmt4v_Jy2NM8LRgy0Sk5cfmyJCqHeA7XglVnD8&_nc_ht=scontent.fbkk2-7.fna&oh=6f3e09abf1be1b2b210715b6bb8ac2c9&oe=5EFA3E15' }}
                                        />
                                    </TouchableWithoutFeedback>
                                    <View style={styles.gapTitleText}>
                                        <Text style={styles.userText}>
                                            เจมมี่
                            </Text>
                                        <Text style={styles.dateText}>
                                            23 มิถุนายน 2020
                            </Text>
                                    </View>
                                </View>
                                <MaterialCommunityIcons style={styles.icon} name='dots-vertical' size={15} color='black' />
                            </View>
                        </View>
                        <View style={styles.descriptionContainer}>
                            <Text style={styles.descriptionText}>
                                เรื่องราวดีๆที่อยากแบ่งปัน ถ้าเลือกคนขับได้ก็คงจะดีนะ (เฉพาะผู้พิการที่ไม่เป็นอันตรายในการขับขี่รถ) เค้าด้อยโอกาสกว่าเราๆอีก
                    </Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <TouchableOpacity style={styles.textIconContainer}>
                                <FontAwesome name='heart-o' size={15} color='grey' />
                                <View style={styles.iconTextContainer}>
                                    <Text style={styles.numberText}>
                                        {`23 `}
                                    </Text>
                                    <Text style={styles.indicatorText}>
                                        ถูกใจ
                                            </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.textIconContainer}>
                                <FontAwesome name='commenting-o' size={18} color='grey' />
                                <View style={styles.iconTextContainer}>
                                    <Text style={styles.numberText}>
                                        {`23 `}
                                    </Text>
                                    <Text style={styles.indicatorText}>
                                        ความเห็น
                            </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <Hr />
                        <Text style={styles.descriptionHeaderText}>
                            ความคิดเห็น (2)
                </Text>

                        <View style={styles.commentContainer}>
                            <View style={styles.commentTitleContainer}>
                                <View style={styles.commentInfoContainer}>
                                    <View>
                                        <TouchableWithoutFeedback>
                                            <Image
                                                style={styles.imageAvatar}
                                                source={{ uri: 'https://scontent.fbkk2-7.fna.fbcdn.net/v/t1.0-9/67403030_876083589433461_6633716974541078528_o.jpg?_nc_cat=109&_nc_oc=AQkgR8USRZDXbn_dpp8Ap6TQs-dxWgmt4v_Jy2NM8LRgy0Sk5cfmyJCqHeA7XglVnD8&_nc_ht=scontent.fbkk2-7.fna&oh=6f3e09abf1be1b2b210715b6bb8ac2c9&oe=5EFA3E15' }}
                                            />
                                        </TouchableWithoutFeedback>
                                    </View>
                                    <View style={styles.gapTitleText}>
                                        <Text style={styles.userText}>
                                            เจมมี่
                                </Text>
                                        <Text style={styles.dateText}>
                                            23 มิถุนายน 2020
                                </Text>
                                        <Text style={styles.commentText}>
                                            เรื่องราวดีๆที่อยากแบ่งปัน ถ้าเลือกคนขับได้ก็คงจะดีนะ (เฉพาะผู้พิการที่ไม่เป็นอันตรายในการขับขี่รถ) เค้าด้อยโอกาสกว่าเราๆอีก
                                </Text>
                                        <View style={styles.commentIconContainer}>
                                            <TouchableOpacity style={styles.textIconContainer}>
                                                <FontAwesome name='heart-o' size={15} color='grey' />
                                                <View style={styles.iconTextContainer}>
                                                    <Text style={styles.numberText}>
                                                        {`23 `}
                                                    </Text>
                                                    <Text style={styles.indicatorText}>
                                                        ถูกใจ
                                            </Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                                <MaterialCommunityIcons style={styles.icon} name='dots-vertical' size={15} color='black' />
                            </View>
                        </View>
                    </ScrollView>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholderTextColor={'grey'} style={styles.textInputField} placeholder={'เขียนความคิดเห็น...'} />
                        <Button style={{ backgroundColor: 'transparent' }}>
                            <Text style={styles.postText}>
                                โพสต์
                            </Text>
                        </Button>
                    </View>
                </KeyboardAvoidingView>

            </View>
        );
    }
}

export default DetailView;