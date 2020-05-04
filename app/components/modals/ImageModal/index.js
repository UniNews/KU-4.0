import React from 'react'
import {
  Animated,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  Platform,
} from 'react-native'

import ImageDetail from './ImageDetail'

export default class ImageModal extends React.Component {

  _root = <View /> || null
  _originImageOpacity = new Animated.Value(1)

  constructor(props) {
    super(props)
    const { isTranslucent } = props
    if (Platform.OS === 'android' && isTranslucent) {
      StatusBar.setTranslucent(isTranslucent)
    }
    this.state = {
      isOpen: false,
      origin: {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
      },
    }
  }

  _open = () => {
    const { animation = true } = this.props

    if (this._root) {
      this._root.measureInWindow((x, y, width, height) => {
        const { isTranslucent, onOpen } = this.props
        let newY = y
        if (typeof onOpen === 'function') {
          onOpen()
        }
        if (isTranslucent) {
          newY += StatusBar.currentHeight ? StatusBar.currentHeight : 0
          StatusBar.setHidden(true)
        }

        setTimeout(() => {
          this.setState({
            isOpen: true,
          })
        })

        this.setState({
          origin: {
            width,
            height,
            x,
            y: newY,
          },
        })
      })
    }
  }

  _onClose = () => {
    const { onClose, } = this.props
    this._originImageOpacity.setValue(1)
    setTimeout(() => {
      this.setState({
        isOpen: false,
      })
      if (typeof onClose === 'function') {
        onClose()
      }
    })
  }

  render() {
    const {
      source,
      resizeMode,
      renderToHardwareTextureAndroid,
      isTranslucent,
      swipeToDismiss = true,
      imageBackgroundColor,
      overlayBackgroundColor,
      onLongPressOriginImage,
      renderHeader,
      renderFooter,
      onTap,
      onDoubleTap,
      onLongPress,
      didOpen,
      onMove,
      responderRelease,
      willClose,
      height,
      width,
    } = this.props
    const { isOpen, origin } = this.state
    return (
      <View
        ref={(component) => {
          this._root = component
        }}
        onLayout={() => {
          if (this._root) {
            this._root.measureInWindow((x, y, width, height) => {
              this.setState({
                origin: {
                  width,
                  height,
                  x,
                  y,
                },
              })
            })
          }
        }}
        style={[{ alignSelf: 'baseline', backgroundColor: imageBackgroundColor }]}>
        <Animated.View
          useNativeDriver={true}
          renderToHardwareTextureAndroid={renderToHardwareTextureAndroid === false ? false : true}
          style={{ opacity: this._originImageOpacity }}>
          <TouchableOpacity
            activeOpacity={1}
            style={{ alignSelf: 'baseline' }}
            onPress={this._open}
            onLongPress={onLongPressOriginImage}>
            <Image {...this.props} />
          </TouchableOpacity>
        </Animated.View>
        <ImageDetail
          renderToHardwareTextureAndroid={renderToHardwareTextureAndroid}
          isTranslucent={isTranslucent}
          isOpen={isOpen}
          origin={origin}
          source={source}
          resizeMode={resizeMode}
          backgroundColor={overlayBackgroundColor}
          swipeToDismiss={swipeToDismiss}
          renderHeader={renderHeader}
          renderFooter={renderFooter}
          onTap={onTap}
          onDoubleTap={onDoubleTap}
          onLongPress={onLongPress}
          didOpen={didOpen}
          onMove={onMove}
          responderRelease={responderRelease}
          willClose={willClose}
          onClose={this._onClose}
          height={height}
          width={width}
        />
      </View>
    )
  }
}
