import React from 'react';
import { View, Image } from 'react-native';

export class LogoAndMuscleMan extends React.Component {
  render () {
    return (
      <View style={this.props.style} >
        <Image
          style={{flex: 1}}
          source={require('../assets/images/signInPage/appLogo.png')}
          transform={[{rotate: '20deg'}]}
          resizeMode='contain'
        />
        <Image
          style={{flex: 1}}
          source={require('../assets/images/muscleMan.png')}
          resizeMode='contain'
        />
      </View >
    );
  }
}
