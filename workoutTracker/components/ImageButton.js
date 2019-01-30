import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { images } from '../assets/images/images';
let get = require('lodash.get');

export class ImageButton extends React.Component {
  render () {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={this.props.style} >
        <Image
          style={{flex: 1}}
          source={get(images, this.props.imagePath)}
          resizeMode='contain'
        />
      </TouchableOpacity>
    );
  }
}
