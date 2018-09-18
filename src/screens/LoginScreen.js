import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';

import { goToHome, pushScreen } from '../navigation/actions';
import { screens } from './register';

export default class Screen extends Component {
  render() {
    registerLayout = {
      component: {
        name: screens.register,
        options: {
          topBar: {
            title: {
              text: 'Register Account'
            }
          }
        }
      }
    };
    forgotLayout = {
      component: {
        name: screens.forgot,
        options: {
          topBar: {
            title: {
              text: 'Forgot password'
            }
          }
        }
      }
    };
    return (
      <View style={{ backgroundColor: 'yellow', flex: 1 }}>
        <TouchableOpacity
          onPress={() => goToHome()}
          style={{ padding: 20, backgroundColor: 'red', margin: 20 }}
        >
          <Text>Login success by redux</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushScreen(this.props.componentId, registerLayout)}
          style={{ padding: 20, backgroundColor: 'red', margin: 20 }}
        >
          <Text>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pushScreen(this.props.componentId, forgotLayout)}
          style={{ padding: 20, backgroundColor: 'red', margin: 20 }}
        >
          <Text>Forgot</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
