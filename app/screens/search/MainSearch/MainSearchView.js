import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import styles from './styles'
import Header from '../../../components/commons/Header'
import { Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import Button from '../../../components/commons/Button'

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

class MainSearchView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedTag: '',
        }
    }

    onTagPressed = (tag) => {
        const { selectedTag } = this.state
        this.setState({
            selectedTag: selectedTag == tag ? '' : tag
        })
    }

    goSearch = () => {
        const { navigation } = this.props
        navigation.navigate('SearchTab')
    }

    goBack = () => {
        const { navigation } = this.props
        navigation.navigate('News')
    }

    render() {
        const { selectedTag } = this.state
        return (
            <View style={styles.containter}>
                <Header
                    title={'ค้นหา'}
                    leftIconComponent={
                        <Feather
                            color='white'
                            onPress={this.goBack}
                            size={28}
                            name={'chevron-left'}
                        />
                    }
                />
                <View style={styles.searchContainer}>
                    <View style={styles.inputContainer}>
                        <View style={styles.searchIconContainer}>
                            <FontAwesome name='search' color='grey' size={16} />
                        </View>
                        <Button onPress={this.goSearch} activeOpacity={1} style={styles.textInputField}>
                            <Text style={styles.searchText}>
                                ค้นหาข่าว, ชุมชน, ชื่อผู้ใช้...
                            </Text>
                        </Button>
                    </View>
                    <ScrollView style={styles.tagContainer} showsHorizontalScrollIndicator={false} horizontal={true}>
                        {tags.map((tag, index) => {
                            const IconComponent = tag.iconComponent
                            const isPressed = selectedTag == tag.text
                            return (
                                <Button onPress={() => this.onTagPressed(tag.text)} key={index} style={[styles.tagButton, isPressed ? styles.focusTagButton : styles.notFocusTagButton]} rounded >
                                    <IconComponent name={isPressed ? tag.iconName : tag.outlineIconName} size={20} color={isPressed ? 'white' : 'grey'} />
                                    <Text style={[styles.tagText, isPressed ? styles.focusTagText : styles.notFocusTagText]}>{tag.text}</Text>
                                </Button>
                            )
                        })}
                    </ScrollView>
                </View>
            </View >
        )
    }
}

export default MainSearchView