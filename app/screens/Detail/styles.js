import { StyleSheet } from 'react-native';
import Constants from '../../configs/constants';

export default StyleSheet.create({
    container: {
        flex:1
    },
    newsImage: {
        width:390,
        height: 250,
        resizeMode: 'cover'
    },
    titleSubText: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 17,
        alignItems: 'center',
        color: '#474747',
    },
    titleMajorText: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 36,
        alignItems: 'center',
    },
    marginBorder: {
        marginTop: 15,
        borderLeftColor:'#40C5BE',
        borderLeftWidth: 3,
        marginLeft:21,
        paddingLeft: 9
    },
    marginBorderUnder: {
        marginTop: 15,
        borderLeftColor:'#40C5BE',
        marginLeft:21,
        flexDirection:'row',
        alignItems:'center'
    },
    dateText: {
        marginLeft: 5
    },
    newsinfo: {
        marginHorizontal: 19,
        borderLeftColor:'#474747',
        marginTop: 7,
        paddingBottom: 17,
        borderBottomColor:'#DCDCDC',
        borderBottomWidth:1,
        //height: 124
    },
    commentHeader: {
        marginVertical: 14,
        marginHorizontal: 19,
        borderLeftColor:'#40C5BE',
        borderLeftWidth: 2,
        paddingLeft:9,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    fontHeader: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 17,
        alignItems: 'center'
    },
    commentHeaderRow: {
        flexDirection:'row',
        alignItems:'center'
    },
    gapButton: {
        marginLeft:10
    },
    heartIcon: {
        position: 'absolute',
        left: '89%',
        top: '1%'
    },
    plusButton: {
        position: 'absolute',
        left: '96.5%',
        top: '1.5%',
    },
    imageAvatar: {
        width: 50,
        height: 50,
        borderRadius: 30
    },
    commentLayout: {
        marginVertical: 14,
        marginHorizontal: 19,
        paddingLeft:9,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    directionRow: {
        flexDirection:'row'
    },
    avatarName:{
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
    },
    commentDate: {
        fontSize: 11,
        color: '#9B9B9B',
        marginBottom: 4
    },
    commentmessage: {
        fontSize: 14
    },
    gapComment :{
        marginLeft:10
    }
});