import React from 'react'
import { View, TextInput, KeyboardAvoidingView, Modal, Alert, Text, ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native'
import styles from './styles'
import Header from '../../../components/commons/Header'
import { Feather, FontAwesome, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import { STATUS_BAR_HEIGHT } from '../../../assets/css/device'
import Button from '../../../components/commons/Button'
import { REGULAR_FONT } from '../../../assets/css/typography'
import { PRIMARY_COLOR, KU_SECONDARY_COLOR, KU_PRIMARY_COLOR } from '../../../assets/css/color'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import newsService from '../../../services/news'

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

class PostCommunityView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            description: '',
            modalVisible: false,
            selectedTag: {},
            error: false
        }
    }

    onTagPressed = (tag) => {
        const { selectedTag } = this.state
        this.setState({
            selectedTag: selectedTag.text === tag.text ? '' : tag
        })
    }

    closeModel = () => {
        this.setState({
            modalVisible: false
        })
    }

    openModel = () => {
        this.setState({
            modalVisible: true
        })
    }

    goBack = () => {
        const { navigation } = this.props
        navigation.goBack()
    }

    postCommunity = async () => {
        try {
            this.setState({
                loading: true
            })
            const { description, selectedTag } = this.state
            await newsService.postCommunity(description, selectedTag.text)
            this.setState({
                loading: false
            })
        }
        catch (err) {
            this.setState({
                error: true,
                loading: false
            })
        }
    }

    render() {
        const { modalVisible, selectedTag, loading, description } = this.state
        const isPressed = Object.keys(selectedTag).length > 0
        const isMinLength = description.length >= 1
        return (
            <View style={styles.containter}>
                <Header
                    title={'โพสต์ใหม่'}
                    leftIconComponent={
                        <Feather
                            color='white'
                            onPress={this.goBack}
                            size={28}
                            name={'chevron-left'}
                        />
                    }
                    rightIconComponent={
                        <View style={styles.saveButton}>
                            {
                                loading
                                    ?
                                    <ActivityIndicator color={'white'} />
                                    :
                                    <Feather
                                        color={isMinLength ? 'white' : 'rgba(255, 255, 255, 0.5)'}
                                        onPress={isMinLength ? this.postCommunity : null}
                                        size={25}
                                        name={'check'}
                                    />
                            }
                        </View>
                    }
                />

                <Modal
                    animationType='slide'
                    visible={modalVisible}
                    onRequestClose={() => {
                        this.setState({
                            selectedTag: {},
                            modalVisible: false

                        })
                    }}>
                    <View style={styles.modelContainer}>
                        <Header
                            title={'เลือกแท็ก'}
                            rightIconComponent={
                                <Feather
                                    style={styles.saveButton}
                                    color='white'
                                    onPress={this.closeModel}
                                    size={25}
                                    name={'check'}
                                />
                            }
                        />
                        <ScrollView>
                            {tags.map((tag, index) => {
                                const isPressed = selectedTag.text === tag.text
                                const IconComponent = tag.iconComponent
                                return (
                                    <Button activeOpacity={1} onPress={() => this.onTagPressed(tag)} style={styles.selectTagButtonContainer} key={index} outlined >
                                        <View style={styles.iconContainer}>
                                            <IconComponent style={styles.selectIcon} name={tag.outlineIconName} size={25} color={'grey'} />
                                            <Text style={styles.selectText}>{tag.text}</Text>
                                        </View>
                                        {
                                            isPressed
                                                ?
                                                <FontAwesome name={'check-circle'} size={25} color={KU_SECONDARY_COLOR} />
                                                :
                                                <Feather name={'circle'} size={22} color={'rgba(0, 0, 0, 0.3)'} />
                                        }
                                    </Button>
                                )
                            })}
                        </ScrollView>
                    </View>
                </Modal>
                <View style={styles.contentContainer}>
                    <View style={styles.topContainer} >
                        <TouchableOpacity onPress={this.openModel}>
                            {
                                isPressed
                                    ?
                                    <View style={[styles.tagContainer, styles.pressedTagBackgroud]}>
                                        <selectedTag.iconComponent name={selectedTag.iconName} size={20} color={'white'} />
                                        <Text style={[styles.tagText, styles.pressedTagText]}>{selectedTag.text}</Text>
                                        <FontAwesome name={'angle-down'} style={styles.tagText} size={20} color={'white'} />
                                    </View>
                                    :
                                    <View style={[styles.tagContainer, styles.notPressedTagBackgroud]}>
                                        <FontAwesome name={'angle-down'} size={20} color={'grey'} />
                                        <Text style={[styles.tagText, styles.notPressedTagText]}>เลือกแท็ก</Text>
                                    </View>
                            }
                        </TouchableOpacity>
                    </View>
                    <TextInput
                        maxLength={1000}
                        multiline
                        placeholder={'คุณกำลังคิดอะไรอยู่?'}
                        placeholderTextColor='grey'
                        onChangeText={(text) => this.setState({ description: text })}
                        style={styles.textInput} />
                </View>
            </View >
        )
    }
}

export default PostCommunityView