import React from 'react'
import { ScrollView, View } from 'react-native'
import styles from './styles'
import NewsCard from '../../../components/news/NewsThread'
import Hr from '../../../components/commons/Hr'
import StatusBar from '../../../components/commons/StatusBar'
import Header from '../../../components/commons/Header';
import { Feather } from '@expo/vector-icons';

class ClubView extends React.Component {

    constructor(props) {
        super(props)
    }

    getNews = (newsId) => {
        const { navigation } = this.props
        navigation.push('Detail', { newsId })
    }

    getProfile = (profileId) => {
        console.log(profileId)
    }

    goBack = () => {
        const { navigation } = this.props;
        navigation.goBack();
    };

    render() {
        const { news, title } = this.props.navigation.state.params
        return (
            <View style={styles.containter}>
                <StatusBar />
                <Header
                    title={title}
                    leftIconComponent={
                        <Feather
                            color='white'
                            onPress={this.goBack}
                            size={28}
                            name={'chevron-left'}
                        />
                    }
                />
                <ScrollView>
                    {news?.map((news, index, newsArray) => {
                        return (
                            <View key={news._id} style={styles.newsContainer}>
                                <NewsCard onNewsPressed={this.getNews} onProfilePressed={this.getProfile} data={news} />
                                {
                                    index == newsArray.length - 1
                                        ?
                                        null
                                        :
                                        <Hr />
                                }
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
        )
    }
}

export default ClubView