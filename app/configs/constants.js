import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'

export default {
    API_URL: 'https://uninews-ku.appspot.com',
    APP_ID: '518071865352584',
    TAGS: [
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
}