import React from 'react'
import { Text, View, Modal } from 'react-native'
import styles from './styles'
import { MaterialIcons, AntDesign } from '@expo/vector-icons'
import Button from '../../commons/Button'

class ErrorModalView extends React.Component {

    constructor(props) {
        super(props)
    }

    closeModal = () => {
        const { hideModal } = this.props
        hideModal()
    }

    render() {
        const { isShowing } = this.props
        return (
            <Modal
                animationType='fade'
                transparent={true}
                visible={isShowing}
                onRequestClose={this.closeModal} >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.topView}>
                            <MaterialIcons name='error' size={50} color='white' />
                        </View>
                        <View style={styles.bottomView}>
                            <Text style={styles.headerText}>
                                เกิดข้อผิดพลาด
                            </Text>
                            <Text style={styles.bodyText}>
                                โปรดลองใหม่ในภายหลัง
                            </Text>
                            <Button onPress={this.closeModal} rounded style={styles.closeButton}>
                                <AntDesign name='close' size={17} color='white' />
                                <Text style={styles.closeText}>ปิด</Text>
                            </Button>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }
}

export default ErrorModalView