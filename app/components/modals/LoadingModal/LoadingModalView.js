import React from 'react'
import { View, Modal, Text, ActivityIndicator } from 'react-native'
import styles from './styles'
import Spinner from './../../commons/Spinner'
import { PRIMARY_COLOR } from '../../../assets/css/color'
class LoadingModalView extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { visible } = this.props
        return (
            <Modal
                animationType='fade'
                transparent={true}
                visible={visible}
                onRequestClose={this.closeModal} >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.descriptionContainer}>
                            <ActivityIndicator size={10} color={PRIMARY_COLOR} size='large' />
                            <Text style={styles.loadingText}>
                                กำลังดึงข้อมูล...
                            </Text>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }
}

export default LoadingModalView