import React from 'react'
import { TouchableNativeFeedback, View, Text, TouchableWithoutFeedback } from 'react-native'
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
            description: ''
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
        const { description } = this.state
        const { navigation } = this.props
        const { report } = this.props.navigation.state.params
        if (description !== '') {
            await newsService.reportNews(report, description)
            AlertHelper.alert('success', 'ส่งการรายงานแล้ว', 'ขอบคุณที่เสริมสร้างสังคม')
            navigation.goBack()
        }
    }

    render() {
        const { loading, description } = this.state
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
                    </View>
                </View>
            </View >
        )
    }
}

export default PostReportView