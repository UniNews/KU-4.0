import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import styles, { sliderWidth, itemWidth } from './styles'
import PropTypes from 'prop-types';

const SLIDER_FIRST_ITEM = 1

class Slider extends Component {

    constructor(props) {
        super(props)
        this.state = {
            slider1ActiveSlide: SLIDER_FIRST_ITEM
        }
    }

    onPressCarousel = (id) => {
        if (this.props.onPressed) {
            this.props.onPressed(id);
        }
    }

    _renderItem({ item, index }) {
        const { title, subtitle, illustration } = item
        const uppercaseTitle = title ? (
            <Text
                style={[styles.title]}
                numberOfLines={2}
            >
                {title.toUpperCase()}
            </Text>
        ) : false

        return <TouchableOpacity
            activeOpacity={1}
            style={styles.slideInnerContainer}
            onPress={() =>
                this.onPressCarousel(title)
            }
        >
            <View style={[styles.imageContainer]}>
                <Image
                    source={{ uri: illustration }}
                    style={styles.image}
                />
                <View style={[styles.radiusMask]} />
            </View>
            <View style={[styles.textContainer]}>
                {uppercaseTitle}
                <Text
                    style={[styles.subtitle]}
                    numberOfLines={1}
                >
                    {subtitle}
                </Text>
            </View>
        </TouchableOpacity>
    }

    render() {
        const { data } = this.props
        return (
            <Carousel
                enableSnap={false}
                data={data}
                renderItem={item => this._renderItem(item)}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                inactiveSlideScale={1}
                inactiveSlideOpacity={1}
                activeSlideAlignment={'start'}
                containerCustomStyle={styles.slider}
            />
        )
    }
}

Slider.propTypes = {
    data: PropTypes.array.isRequired,
    onPressed: PropTypes.func
};

export default Slider;