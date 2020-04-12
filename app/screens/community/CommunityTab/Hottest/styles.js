import { StyleSheet } from 'react-native'
import { KU_SECONDARY_COLOR } from '../../../../assets/css/color'

export default StyleSheet.create({
    containter: {
        flex: 1,
    },
    threadContainer: {
        backgroundColor: 'white',
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 10,
        elevation: 2,
    },
    contentContainer: {
        paddingBottom: 90
    },
    floatingButtonContainer: {
        backgroundColor: KU_SECONDARY_COLOR,
        position: 'absolute',
        bottom: 20,
        right: 20,
        alignSelf: 'flex-end',
        width: 55,
        height: 55,
        borderRadius: 55 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    }
})