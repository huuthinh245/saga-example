import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';

import { popScreen, pushScreen } from '../../navigation/actions';
import { screens } from '..';

export default class Screen extends Component {
  render() {
    const forgotLayout = {
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
          onPress={() => pushScreen(this.props.componentId, forgotLayout)}
          style={{ padding: 20, backgroundColor: 'red', margin: 20 }}
        >
          <Text>Forgot password</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => popScreen(this.props.componentId)}
          style={{ padding: 20, backgroundColor: 'red', margin: 20 }}
        >
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
