import React from 'react'
import { Text, View, Modal, TouchableWithoutFeedback } from 'react-native'
import styles from './styles'
import PlatformTouchable from '../../commons/PlatformTouchable'

class PopupModalView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            post: null,
        }
    }

    componentDidMount() {
        const { childRef } = this.props
        if (childRef)
            childRef(this)
    }

    componentWillUnmount() {
        const { childRef } = this.props
        if (childRef)
            childRef(undefined)
    }

    show(post) {
        this.setState({
            visible: true,
            post
        })
    }

    closeHandler = () => {
        this.setState({
            visible: false,
            postId: null,
            postType: null
        })
    }

    reportHandler = () => {
        const { onReportPressed } = this.props
        const { post } = this.state
        this.setState({
            visible: false,
            post: null
        })
        if (onReportPressed)
            onReportPressed(post)
    }

    deleteHandler = () => {
        const { onDeletePressed } = this.props
        const { post } = this.state
        this.setState({
            visible: false,
            post: null
        })
        if (onDeletePressed)
            onDeletePressed(post)
    }

    render() {
        const { user } = this.props
        const { visible, post } = this.state
        return (
            <Modal
                animationType='fade'
                transparent={true}
                visible={visible}
                onRequestClose={this.closeModal} >
                <TouchableWithoutFeedback onPress={this.closeHandler}>
                    <View style={styles.centeredView}>
                        <View style={styles.border}>
                            <PlatformTouchable onPress={this.reportHandler}>
                                <View style={styles.modalView}>
                                    <Text style={styles.modalText}>
                                        รายงานโพสต์
                                </Text>
                                </View>
                            </PlatformTouchable>
                            {
                                post && (user._id === post.author?._id)
                                    ?
                                    <PlatformTouchable onPress={this.deleteHandler}>
                                        <View style={styles.modalView}>
                                            <Text style={styles.modalText}>
                                                ลบโพสต์
                                        </Text>
                                        </View>
                                    </PlatformTouchable>
                                    :
                                    null
                            }
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}

export default PopupModalView