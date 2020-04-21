import React from 'react'
import { TouchableNativeFeedback, View, Text, TouchableWithoutFeedback, ActivityIndicator, TextInput } from 'react-native'
import styles from './styles'
import Header from '../../../components/commons/Header'
import { Feather, FontAwesome } from '@expo/vector-icons'
import { KU_SECONDARY_COLOR } from '../../../assets/css/color'
import newsService from '../../../services/news'
import { AlertHelper } from '../../../configs/alertHelper'

const TOPICS = [
    'สแปม',
    'คุมคามทางเพศ',
    'หลอกลวง',
    'อื่นๆ'
]

class PostReportView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            title: '',
            detail: ''
        }
    }

    selectTopic = (topic) => {
        this.setState({
            title: topic
        })
    }

    goBack = () => {
        const { navigation } = this.props
        navigation.goBack()
    }

    report = async () => {
        try {
            const { title, detail } = this.state
            const { navigation } = this.props
            const { report, type } = this.props.navigation.state.params
            if (title !== '') {
                this.setState({
                    loading: true
                })
                if (title !== 'อื่นๆ') {
                    await newsService.report(report, type, title)
                    AlertHelper.alert('info', 'ส่งการรายงานแล้ว', 'ขอบคุณที่ช่วยเสริมสร้างสังคม')
                    navigation.goBack()
                } else if (title === 'อื่นๆ' && detail.length > 0) {
                    await newsService.report(report, type, detail)
                    AlertHelper.alert('info', 'ส่งการรายงานแล้ว', 'ขอบคุณที่ช่วยเสริมสร้างสังคม')
                    navigation.goBack()
                }
            }
        }
        catch (err) {
            const { showModal } = this.props
            showModal()
        }
        finally {
            this.setState({
                loading: false
            })
        }
    }

    updateDetail = text => {
        this.setState({
            detail: text,
        })
    }

    validate = () => {
        const { title, detail } = this.state
        if (title === 'อื่นๆ' && detail.length <= 0)
            return false
        if (title === '')
            return false
        return true
    }

    render() {
        const { loading, title, detail } = this.state
        return (
            <View style={styles.containter}>
                <Header
                    title={'รายงานโพสต์'}
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
                                    <TouchableWithoutFeedback onPress={this.report}>
                                        <Feather name={'check'} size={25} color={this.validate() ? 'white' : 'rgba(255, 255, 255, 0.4)'} />
                                    </TouchableWithoutFeedback>
                            }
                        </View>

                    }
                />

                <View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionText}>
                        โปรดเลือกหัวข้อที่ต้องการรายงาน
                    </Text>
                    <View style={styles.listContainer}>

                        {TOPICS.map((topic, index) => {
                            return <TouchableNativeFeedback onPress={() => this.selectTopic(topic)} key={index}>
                                <View style={styles.topicContainer}>
                                    <View style={styles.selectIconContainer}>
                                        {
                                            title === topic
                                                ?
                                                <FontAwesome name={'check-circle'} size={24} color={KU_SECONDARY_COLOR} />
                                                :
                                                <Feather name={'circle'} size={22} color={'rgba(0, 0, 0, 0.3)'} />
                                        }
                                    </View>
                                    <Text style={styles.topicText}>
                                        {topic}
                                    </Text>
                                </View>
                            </TouchableNativeFeedback>
                        })
                        }
                    </View>
                    {
                        title === 'อื่นๆ' ?
                            <View>
                                <Text style={styles.descriptionText}>
                                    โปรดกรอกรายละเอียดเพื่อดำเนินการต่อ
                                </Text>
                                <View style={styles.textInputFieldContainer}>
                                    <TextInput
                                        maxLength={1000}
                                        value={detail}
                                        placeholderTextColor={'grey'}
                                        style={styles.textInputField}
                                        placeholder={'รายละเอียด'}
                                        onChangeText={this.updateDetail}
                                        multiline
                                    />
                                </View>
                            </View>
                            :
                            null
                    }
                </View>
            </View >
        )
    }
}

export default PostReportView