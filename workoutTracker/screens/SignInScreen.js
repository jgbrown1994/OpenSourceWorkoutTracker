import React from 'react';
import { Platform, AsyncStorage, View, TouchableOpacity, StyleSheet, ImageBackground, Image} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly'
  },
  backgroundStyle: {
    width: '100%',
    height: '100%',
    alignItems: 'center'
  },
  formInputStyle: {
    color: 'red',
    fontSize: 40,
    fontFamily: 'Academy Engraved LET', // Should also have one for Android!
    textAlign: 'center'
  }
});

export default class SignInScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errorMsg: ''
    };
  }

  static navigationOptions = {
    title: 'Sign In',
  };

  render() {
    return (
      <ImageBackground source={require('../assets/images/diamondPlate.png')}
        imageStyle={{resizeMode:'stretch'}}
        style={styles.backgroundStyle}
      >
          <FormInput
            containerStyle={{flex: 2.5, paddingTop: 50, paddingStart: 100, paddingEnd: 100}}
            inputStyle={styles.formInputStyle}
            placeholder='Username'
            placeholderTextColor='red'
            maxLength={30}
            onChangeText={(text) => this.setState({username: text})}
          />
          <FormInput
            containerStyle={{flex: 2.5, paddingTop: 20, paddingLeft: 100, paddingRight: 100}}
            inputStyle={styles.formInputStyle}
            placeholder='Password'
            placeholderTextColor='red'
            maxLength={30}
            secureTextEntry
            onChangeText={(text) => this.setState({password: text})}
          />
          <FormValidationMessage> {this.state.errorMsg} </FormValidationMessage>
          <TouchableOpacity onPress={this._signInAsync} style={{flex: 4}} >
            <Image
              style={{flex: 1}}
              source={require('../assets/images/loginButton.png')}
              resizeMode='contain'
            />
          </TouchableOpacity>
          <View style={{flexDirection: 'row', flex: 1.5}} >
            <TouchableOpacity onPress={this._navigateForgotPW} style={{flex: 3}} >
              <Image
                style={{flex: 1}}
                source={require('../assets/images/forgotButton.png')}
                resizeMode='contain'
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={this._navigateSignUp} style={{flex: 3}} >
              <Image
                style={{flex: 1}}
                source={require('../assets/images/signUpButton.png')}
                resizeMode='contain'
              />
            </TouchableOpacity>
          </View>
          <View style={{flex: 10}}>
            <Image
              style={{flex: 1}}
              source={require('../assets/images/appLogo.png')}
              transform={[{rotate: '20deg'}]}
              resizeMode='contain'
            />
            <Image
              style={{flex: 1}}
              source={require('../assets/images/muscleMan.png')}
              resizeMode='contain'
            />
          </View>
      </ImageBackground>
    );
  }

  _signInAsync = async () => {
    this.setState({errorMsg: ''});
    if(!this._checkInputValidity(this.state.username, this.state.password)) {
      return;
    }
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('Main');
  };

  _checkInputValidity = (username, password) => {
    // TODO: Make this a regex that actually follows the allowed usernames
    if (username === '') {
      this.setState({errorMsg: 'Username is required'});
      return false;
    }
    if (password === '') {
      this.setState({errorMsg: 'Password is required'});
      return false;
    }
    return true;
  }

  _navigateForgotPW = () => {
    this.props.navigation.navigate('ForgotPWScreen');
  }

  _navigateSignUp = () => {
    this.props.navigation.navigate('CreateAccountScreen');
  }
}