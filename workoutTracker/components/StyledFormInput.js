import React from 'react';
import { FormInput } from 'react-native-elements';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  formInputStyle: {
    color: 'red',
    fontSize: 40,
    fontFamily: 'Academy Engraved LET', // Should also have one for Android!
    textAlign: 'center'
  }
});

export class StyledFormInput extends React.Component {
  render () {
    return (
      <FormInput
        containerStyle={
          {
            flex: this.props.flex || 1,
            paddingTop: this.props.paddingTop || 20,
            paddingStart: 100,
            paddingEnd: 100
          }
        }
        inputStyle={styles.formInputStyle}
        placeholder={this.props.placeholder || ''}
        placeholderTextColor='red'
        maxLength={this.props.maxLength || 30}
        textContentType={this.props.textContentType || 'none'}
        onChangeText={this.props.onChangeText}
      />
    );
  }
}
