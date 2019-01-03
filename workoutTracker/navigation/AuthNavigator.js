import React from 'react';
import { Platform, AsyncStorage, View, Button, StyleSheet} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { createStackNavigator } from 'react-navigation';

const styles = StyleSheet.create({
    container: {
      borderRadius: 4,
      borderWidth: 0.5,
      borderColor: '#d6d7da',
    }
});

class SignInScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: ''
      };
    }

    static navigationOptions = {
      title: 'Login',
    };
  
    render() {
      return (
        <View style={styles.container}>
          <FormInput placeholder='Username' onChangeText={(text) => this.setState({username: text})}/>
          <FormInput placeholder='Password' onChangeText={(text) => this.setState({password: text})}/>
          <FormValidationMessage> </FormValidationMessage>
          <Button title="Sign in!" onPress={this._signInAsync} />
          <Button title="Forgot Password" onPress={this._navigateForgotPW} />
          <Button title="Don't have an Account?" onPress={this._navigateSignUp} />
        </View>
      );
    }
  
    _signInAsync = async () => {
      await AsyncStorage.setItem('userToken', 'abc');
      this.props.navigation.navigate('Main');
    };

    _navigateForgotPW = () => {
      this.props.navigation.navigate('ForgotPWScreen');
    }

    _navigateSignUp = () => {
      this.props.navigation.navigate('CreateAccountScreen');
    }
}

class CreateAccountScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
  }

  static navigationOptions = {
    title: 'Create Account',
  };

  render() {
    return (
      <View style={styles.container}>
        <FormInput placeholder='Email' onChangeText={(text) => this.setState({email: text})}/>
        <FormInput placeholder='Username' onChangeText={(text) => this.setState({username: text})}/>
        <FormInput placeholder='Password' onChangeText={(text) => this.setState({password: text})}/>
        <FormValidationMessage> </FormValidationMessage>
        <Button title="Sign up!" onPress={this._signUpAsync} />
      </View>
    );
  }

  _signUpAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('Main'); // should go to a startup about the app screen and profile completion
  };
}

class ForgotPWScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }

  static navigationOptions = {
    title: 'Forgot Password',
  };

  render() {
    return (
      <View style={styles.container}>
        <FormInput placeholder='Email' onChangeText={(text) => this.setState({email: text})}/>
        <Button title="Send Reset Password Link" onPress={this._resetPW} />
      </View>
    );

    _resetPW = () => {
      // do something lol
      this.setState({emailSent: true})
      return 1;
    }
  }
}

export default createStackNavigator({
    SignInScreen: SignInScreen,
    ForgotPWScreen: ForgotPWScreen,
    CreateAccountScreen: CreateAccountScreen
});