import React from 'react'
import { View, TextInput, Modal, Text, ActivityIndicator, ScrollView, TouchableOpacity, TouchableNativeFeedback } from 'react-native'
import styles from './styles'
import Header from '../../../components/commons/Header'
import { Feather, FontAwesome, } from '@expo/vector-icons'
import { KU_SECONDARY_COLOR } from '../../../assets/css/color'
import newsService from '../../../services/news'
import constants from './../../../configs/constants'

class PostCommunityView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            description: '',
            modalVisible: false,
            selectedTags: [],
            error: false,
            toBeSelectedTags: []
        }
    }

    onTagPressed = (tag) => {
        const { toBeSelectedTags } = this.state
        let found = toBeSelectedTags.find(element => element.text === tag.text)
        if (found) {
            let index = toBeSelectedTags.indexOf(tag)
            if (index > -1)
                toBeSelectedTags.splice(index, 1)
        }
        else {
            if (toBeSelectedTags.length >= 2)
                toBeSelectedTags.pop()
            toBeSelectedTags.push(tag)
        }
        this.setState({
            toBeSelectedTags
        })
    }

    closeModel = () => {
        this.setState({
            modalVisible: false,
            toBeSelectedTags: []
        })
    }

    saveModel = () => {
        const { toBeSelectedTags } = this.state
        this.setState({
            modalVisible: false,
            selectedTags: toBeSelectedTags,
            toBeSelectedTags: [],
        })
    }

    openModel = () => {
        const { selectedTags } = this.state
        this.setState({
            modalVisible: true,
            toBeSelectedTags: [...selectedTags]
        })
    }

    goBack = () => {
        const { navigation } = this.props
        navigation.goBack()
    }

    goCommunityDetail = (newsId) => {
        this.props.navigation.replace('CommunityDetail', { newsId })
    }

    postCommunity = async () => {
        try {
            this.setState({
                loading: true
            })
            const { description, selectedTags } = this.state
            const community = await newsService.postCommunity(description, selectedTags.map(tag => tag.text))
            this.setState({
                loading: false
            })
            const { refreshCommunities } = this.props
            refreshCommunities()
            this.goCommunityDetail(community.data?._id)
        }
        catch (err) {
            this.setState({
                error: true,
                loading: false
            })
            this.props.showModal()
        }
    }

    render() {
        const { modalVisible, selectedTags, loading, description, toBeSelectedTags } = this.state
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
                    onRequestClose={this.closeModel}>
                    <View style={styles.modelContainer}>
                        <Header
                            title={`เลือกแท็ก (${toBeSelectedTags.length}/2)`}
                            leftIconComponent={
                                <Feather
                                    color='white'
                                    onPress={this.closeModel}
                                    size={28}
                                    name={'chevron-left'}
                                />
                            }
                            rightIconComponent={
                                <Feather
                                    style={styles.saveButton}
                                    color='white'
                                    onPress={this.saveModel}
                                    size={25}
                                    name={'check'}
                                />
                            }
                        />
                        <ScrollView>
                            {constants.TAGS.map((tag, index) => {
                                const isPressed = toBeSelectedTags.find(element => element.text === tag.text)
                                const IconComponent = tag.iconComponent
                                return (
                                    <TouchableNativeFeedback onPress={() => this.onTagPressed(tag)} key={index}  >
                                        <View style={styles.selectTagButtonContainer}>
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
                                        </View>
                                    </TouchableNativeFeedback>
                                )
                            })}
                        </ScrollView>
                    </View>
                </Modal>
                <View style={styles.contentContainer}>
                    <View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                            {
                                selectedTags.map((tag, index) => {
                                    return <TouchableOpacity key={index} onPress={this.openModel}>
                                        <View style={[styles.tagContainer, styles.pressedTagBackgroud]}>
                                            <tag.iconComponent name={tag.iconName} size={20} color={'white'} />
                                            <Text style={[styles.tagText, styles.pressedTagText]}>{tag.text}</Text>
                                            <FontAwesome name={'angle-down'} style={styles.tagText} size={20} color={'white'} />
                                        </View>
                                    </TouchableOpacity>
                                })
                            }
                            {
                                selectedTags.length < 2
                                    ?
                                    <TouchableOpacity onPress={this.openModel}>
                                        <View style={[styles.tagContainer, styles.notPressedTagBackgroud]}>
                                            <FontAwesome name={'angle-down'} size={20} color={'grey'} />
                                            <Text style={[styles.tagText, styles.notPressedTagText]}>เลือกแท็ก</Text>
                                        </View>
                                    </TouchableOpacity>
                                    :
                                    null
                            }
                        </ScrollView>
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