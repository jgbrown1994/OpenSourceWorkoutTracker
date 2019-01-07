import React from 'react';
import { Platform, AsyncStorage, View, Button, StyleSheet, ImageBackground, Image} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    flex: 1,
    justifyContent: 'space-around'
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
      <ImageBackground source={require('../assets/images/diamondPlate.png')} style={{width: '100%', height: '100%'}} >
        <View style={styles.container}>
          <FormInput
            placeholder='Username'
            maxLength={30}
            onChangeText={(text) => this.setState({username: text})}
          />
          <FormInput
            placeholder='Password'
            maxLength={30}
            secureTextEntry
            onChangeText={(text) => this.setState({password: text})}
          />
          <FormValidationMessage> {this.state.errorMsg} </FormValidationMessage>
          <Button title="Login" onPress={this._signInAsync} />
          <Button title="Forgot?" onPress={this._navigateForgotPW} />
          <Button title="Sign up!" onPress={this._navigateSignUp} />
          <Image
            source={require('../assets/images/appLogo.png')}
            transform={[{scale: 0.5}, {rotate: '20deg'}]}
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