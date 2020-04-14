import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'
import Button from '../../../commons/Button'

class Tag extends React.Component {

    constructor(props) {
        super(props)
    }

    onSelect = () => {
        const { onPress } = this.props
        onPress(this.props.index)
    }

    render() {
        const { focused, routeName, tag } = this.props
        const IconComponent = tag.iconComponent
        return (
            <View style={styles.tagContainer} >
                <Button onPress={this.onSelect} style={[styles.tagButton, focused ? styles.focusTagButton : styles.notFocusTagButton]} rounded >
                    <IconComponent name={focused ? tag.iconName : tag.outlineIconName} size={20} color={focused ? 'white' : 'grey'} />
                    <Text style={[styles.tagText, focused ? styles.focusTagText : styles.notFocusTagText]}>{routeName}</Text>
                </Button>
            </View>
        )
    }
}

Tag.propTypes = {
    routeName: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    focused: PropTypes.bool.isRequired,
    tag: PropTypes.object.isRequired,
}

export default Tag