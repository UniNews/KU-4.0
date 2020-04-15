import React from 'react'
import { Text, View, Modal, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native'
import styles from './styles'

class PopupModalView extends React.Component {

    constructor(props) {
        super(props)
    }

    closeHandler = () => {
        const { onClosePressed } = this.props
        if (onClosePressed)
            onClosePressed()
    }

    reportHandler = () => {
        const { onReportPressed } = this.props
        if (onReportPressed)
            onReportPressed()
    }

    render() {
        const { visible } = this.props
        return (
            <Modal
                animationType='fade'
                transparent={true}
                visible={visible}
                onRequestClose={this.closeModal} >
                <TouchableWithoutFeedback onPress={this.closeHandler}>
                    <View style={styles.centeredView}>
                        <TouchableNativeFeedback onPress={this.reportHandler}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>
                                    รายงานโพสต์
                                </Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}

export default PopupModalView