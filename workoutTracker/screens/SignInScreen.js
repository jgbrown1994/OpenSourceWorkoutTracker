import React from 'react';
import { Platform, AsyncStorage, View, TouchableOpacity, StyleSheet, ImageBackground, Image} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { LogoAndMuscleMan } from '../components/LogoAndMuscleMan';
import { ImageButton } from '../components/ImageButton';
import { StyledFormInput } from '../components/StyledFormInput';

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
        <StyledFormInput
          flex={2.5}
          paddingTop={50}
          placeholder='Username'
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
        <ImageButton
          onPress={this._signInAsync}
          style={{flex: 4}}
          imagePath='signInPage.loginButton'
        />
        <View style={{flexDirection: 'row', flex: 1.5}} >
          <ImageButton
            onPress={this._navigateForgotPW}
            style={{flex: 3}}
            imagePath='signInPage.forgotButton'
          />
          <ImageButton
            onPress={this._navigateSignUp}
            style={{flex: 3}}
            imagePath='signInPage.signUpButton'
          />
        </View>
        <LogoAndMuscleMan style={{flex: 10}} />
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
    this.props.navigation.navigate('SignUpScreen');
  }
}