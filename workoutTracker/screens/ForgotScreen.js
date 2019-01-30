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

export default class ForgotScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msgSent: '',
      email: ''
    };
  }

  static navigationOptions = {
    title: 'Forgot Password',
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
          placeholder='Email'
          textContentType='emailAddress'
          maxLength={50}
          onChangeText={(email) => this.setState({email: email})}
        />
        <FormValidationMessage> {this.state.msgSent} </FormValidationMessage>
        <ImageButton 
          onPress={this._sendResetPWEmail}
          style={{flex: 4}}
          imagePath='forgotPage.sendEmailButton'
        />
        <LogoAndMuscleMan style={{flex: 10}}/>
      </ImageBackground>
    );
  }

  _sendResetPWEmail = () => {
    // Shouldn't do any validation to tell user whether account exists, just reply email sent in all cases
    // TODO: Actually send email here (Probably call to AWS email service??)
    this.setState({msgSent: `Reset Password link sent to ${this.state.email}`});
  };
}