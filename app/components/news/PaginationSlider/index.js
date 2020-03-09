import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import styles from './styles';

const width = Dimensions.get('window').width;

class SliderBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 0
    };
  }

  onCurrentImagePressedHandler = () => {
    if (this.props.onPressed) {
      this.props.onPressed(this.state.currentImage);
    }
  }

  onSnap = (index) => {
    const { currentImageEmitter } = this.props;
    this.setState({ currentImage: index }, () => {
      if (currentImageEmitter) currentImageEmitter(this.state.currentImage);
    });
  }

  _renderItem({ item, index }) {
    const {
      sliderBoxHeight,
      disableOnPress,
    } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.imgContainer}
        key={index}
        onPress={() => !disableOnPress && this.onCurrentImagePressedHandler()}
      >
        <Image
          style={[styles.img, { height: sliderBoxHeight || 200 }]}
          source={typeof item === 'string' ? { uri: item } : item}
          resizeMethod={'resize'}
          resizeMode={'cover'}
          {...this.props}
        />
      </TouchableOpacity>
    );
  }

  get pagination() {
    const { currentImage } = this.state;
    const {
      data,
      dotStyle,
      dotColor,
      inactiveDotColor,
    } = this.props;
    return (
      <Pagination
        borderRadius={2}
        dotsLength={data.length}
        activeDotIndex={currentImage}
        dotStyle={dotStyle || styles.dotStyle}
        dotColor={dotColor || colors.dotColors}
        inactiveDotColor={inactiveDotColor || colors.white}
        inactiveDotScale={0.8}
        carouselRef={this._ref}
        inactiveDotOpacity={0.8}
        tappableDots={!!this._ref}
        containerStyle={[
          styles.paginationBoxStyle,
        ]}
        {...this.props}
      />
    );
  }

  render() {
    const {
      data,
      circleLoop,
      autoplay,
      parentWidth,
    } = this.props;
    return (
      <View>
        <Carousel
          layout={'default'}
          data={data}
          ref={c => (this._ref = c)}
          loop={circleLoop || true}
          enableSnap={true}
          autoplay={autoplay || false}
          itemWidth={parentWidth || width}
          sliderWidth={parentWidth || width}
          loopClonesPerSide={5}
          renderItem={item => this._renderItem(item)}
          onSnapToItem={index => this.onSnap(index)}
          {...this.props}
        />
        {data.length > 1 && this.pagination}
      </View>
    );
  }
}

const colors = {
  dotColors: '#FFFFFF',
  white: '#BDBDBD'
};

export default SliderBox;