import React from 'react';
import { Platform, AsyncStorage, View, TouchableOpacity, StyleSheet, ImageBackground, Image} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { LogoAndMuscleMan } from '../components/LogoAndMuscleMan';
import { ImageButton } from '../components/ImageButton';

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

export default class ForgotScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      errMsg: ''
    };
  }

  static navigationOptions = {
    title: 'Sign Up',
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
          placeholder='Email'
          placeholderTextColor='red'
          maxLength={50}
          onChangeText={(emailText) => this.setState({email: emailText})}
        />
        <FormInput
          containerStyle={{flex: 2.5, paddingTop: 20, paddingStart: 100, paddingEnd: 100}}
          inputStyle={styles.formInputStyle}
          placeholder='Username'
          placeholderTextColor='red'
          maxLength={30}
          onChangeText={(usernameText) => this.setState({username: usernameText})}
        />
        <FormInput
          containerStyle={{flex: 2.5, paddingTop: 20, paddingStart: 100, paddingEnd: 100}}
          inputStyle={styles.formInputStyle}
          placeholder='Password'
          placeholderTextColor='red'
          maxLength={30}
          secureTextEntry
          onChangeText={(pwText) => this.setState({password: pwText, confirmPassword: ''})}
        />
        <FormInput
          containerStyle={{flex: 2.5, paddingTop: 20, paddingStart: 100, paddingEnd: 100}}
          inputStyle={styles.formInputStyle}
          placeholder='Confirm Password'
          placeholderTextColor='red'
          maxLength={30}
          secureTextEntry
          onChangeText={(confirmText) => this.setState({confirmPassword: confirmText})}
        />
        <FormValidationMessage> {this.state.errMsg} </FormValidationMessage>
        <ImageButton 
          imagePath='signInPage.signUpButton'
          style={{flex: 4}}
          onPress={this._signUpAsync}
        />
        <LogoAndMuscleMan style={{flex: 10}}/>
      </ImageBackground>
    );
  }

  /*
    signUpObject will look like:
      {
        username: [string],
        password: [string],
        confirmPassword: [string],
        email: [string]
      }
  */
  _areSignUpFieldsValid = (signUpObject) => {
    // TODO should expand validation based on server requirements
    if (signUpObject.username === '') {
      this.setState({errMsg: 'Username is required'});
      return false;
    }
    if (signUpObject.password === '') {
      this.setState({errMsg: 'Password is required'});
      return false;
    }
    if (signUpObject.confirmPassword === '') {
      this.setState({errMsg: 'You must confirm your password'});
      return false;
    }
    if (signUpObject.confirmPassword !== signUpObject.password) {
      this.setState({errMsg: 'Passwords do not match'});
      return false;
    }
    if (signUpObject.email === '') {
      this.setState({errMsg: 'Email is required'});
      return false;
    }
    return true;
  }

  _signUpAsync = async () => {
    if (!this._areSignUpFieldsValid(this.state)) return;
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('Main'); // should go to a startup about the app screen and profile completion
  };
}