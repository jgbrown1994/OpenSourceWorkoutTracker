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
          onChangeText={(pwText) => this.setState({password: pwText})}
        />
        <FormInput
          containerStyle={{flex: 2.5, paddingTop: 20, paddingStart: 100, paddingEnd: 100}}
          inputStyle={styles.formInputStyle}
          placeholder='Confirm Password'
          placeholderTextColor='red'
          maxLength={30}
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

  _signUpAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('Main'); // should go to a startup about the app screen and profile completion
  };
}