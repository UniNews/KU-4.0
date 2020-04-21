import React from 'react'
import { TouchableNativeFeedback, View, Text, TouchableWithoutFeedback, ActivityIndicator ,TextInput } from 'react-native'
import styles from './styles'
import Header from '../../../components/commons/Header'
import { Feather, FontAwesome } from '@expo/vector-icons'
import { KU_SECONDARY_COLOR } from '../../../assets/css/color'
import newsService from '../../../services/news'
import { AlertHelper } from '../../../configs/alertHelper'
import Button from '../../../components/commons/Button'

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
            description: '',
            query:''
        }
    }

    selectTopic = (topic) => {
        this.setState({
            description: topic
        })
    }

    goBack = () => {
        const { navigation } = this.props
        navigation.goBack()
    }

    report = async () => {
        try {
            const { description, query } = this.state
            const { navigation } = this.props
            const { report, type } = this.props.navigation.state.params
            this.setState({
                loading: true
            })
            if (description !== '') {
                if (description!=='อื่นๆ') {
                    await newsService.report(report, type, description)
                    AlertHelper.alert('info', 'ส่งการรายงานแล้ว', 'ขอบคุณที่ช่วยเสริมสร้างสังคม')
                    navigation.goBack()
                } else {
                    await newsService.report(report, type, query)
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

    updateSearch = text => {
        this.setState({
            query: text,
        })
    }

    render() {
        const { loading, description, query } = this.state
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
                                        <Feather name={'check'} size={25} color={description !== '' ? 'white' : 'rgba(255, 255, 255, 0.4)'} />
                                    </TouchableWithoutFeedback>
                            }
                        </View>

                    }
                />

                < View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionText}>
                        โปรดเลือกหัวข้อที่ต้องการรายงาน
                    </Text>
                    <View style={styles.listContainer}>

                        {TOPICS.map((topic, index) => {
                            return <TouchableNativeFeedback onPress={() => this.selectTopic(topic)} key={index}>
                                <View style={styles.topicContainer}>
                                    <View style={styles.selectIconContainer}>
                                        {
                                            description === topic
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
                    {description==='อื่นๆ'?
                        <View style={styles.inputContainer}>
                            <TextInput
                                value={query}
                                placeholderTextColor={'grey'}
                                style={styles.textInputField}
                                placeholder={'ข้อความ'}
                                onChangeText={this.updateSearch}
                                returnKeyType={'search'}
                            />
                        </View>
                        :null
                    }
                    </View>
                </View>
            </View >
        )
    }
}

export default PostReportView