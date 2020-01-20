import React from 'react'
import { Text, TextInput, View, Avatar, Alert, Image, Linking, ScrollView } from 'react-native'
import styles from './styles'
import Hyperlink from 'react-native-hyperlink'
import { FontAwesome } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'

class DetailView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            isHide: true
        }
    }
    componentDidUpdate(prevProps) {
        
    }
    
    render() {
        var comments = [];

        for(let i = 0; i < 2; i++){

            comments.push(
                <View key={i} style={styles.commentLayout}>
                    <View style={styles.directionRow}>
                        <Image
                            style={styles.imageAvatar}
                            source={{uri: 'https://scontent.fbkk22-3.fna.fbcdn.net/v/t1.0-1/c0.0.820.820a/66686017_1125283600997160_4542151837934944256_n.jpg?_nc_cat=110&_nc_ohc=X4ovrI8YYLcAX9k8MI_&_nc_ht=scontent.fbkk22-3.fna&_nc_tp=1003&oh=a1f840ed4a1c6371eeb21242ffd1ea41&oe=5E90FC5F'}} 
                        />
                        <View style={styles.gapComment}>
                            <Text style={styles.avatarName}>
                                Jimmy
                            </Text>
                            <Text style={styles.commentDate}>
                                Date
                            </Text>
                            <Text style={styles.commentmessage}>
                                kuy
                            </Text>
                        </View>
                    </View>
                    <FontAwesome style={styles.editComment} name="ellipsis-v" size={15} color="black" />
                </View>
            )
        }
        return (
            <ScrollView style={styles.container}>
                <Image style={styles.newsImage}
                    source={require('../../assets/imgs/testdetail.png')}/>
                <Ionicons name="md-heart-empty" size={25} style={styles.heartIcon} color="white" />
                <FontAwesome style={styles.plusButton} name="ellipsis-v" size={20} color="white" />
                <View>
                    <View style={styles.marginBorder}>
                        <Text style={styles.titleSubText}>
                            สำนักคอมฯ
                        </Text>
                        <Text style={styles.titleMajorText}>
                            CPSK SPORT WEEK 2019
                        </Text>
                    </View>
                    <View style={styles.marginBorderUnder}>
                        <FontAwesome name="calendar" size={10} color="#9B9B9B" />
                        <Text style={styles.dateText}>
                            Date
                        </Text>
                    </View>
                    <View style={styles.newsinfo}>
                        <Hyperlink linkStyle={{ textDecorationLine: 'underline', color: 'blue' }} onPress={(url, text) => Linking.openURL(url)}>
                            <Text>
                                CPSK E-SPORT WEEK 2019
                                การแข่งขันเพื่อหาตัวแทนภาควิชาไปแข่งในงาน ENIAC #16
                                โดยในปีนี้เราจัดการแข่งขันด้วยกันถึง 5 เกม
                                https://www.facebook.com/groups/753581421377564/?ref=share
                                sdasdsadsadasdsadasdasdasdasdasdsadasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdsadasdasdasdasdasdasdasdasdasdasdasdasdsappppppppppppppppppppp
                            </Text>
                        </Hyperlink>
                    </View>
                    <View style={styles.commentHeader}>
                        <Text style={styles.fontHeader}>ความเห็นยอดนิยม</Text>
                        <View style={styles.commentHeaderRow}>
                            <Text>ดูทั้งหมด</Text>
                            <FontAwesome  style={styles.gapButton} name="chevron-right" size={10} color="#9B9B9B" />
                        </View>
                    </View>
                    { comments }
                </View>
            </ScrollView>
        );
    }
}

export default DetailView;