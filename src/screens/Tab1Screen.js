import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';

import { goToAuth, pushScreen, showOverlay } from '../navigation/actions';
import { screens } from './index';

export default class Screen extends Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  render() {
    detailLayout = {
      component: {
        name: screens.detail,
        options: {
          topBar: {
            title: {
              text: 'My title'
            }
          }
        }
      }
    };

    registerLayout = {
      component: {
        name: screens.register,
        options: {
          topBar: {
            title: {
              text: 'Register'
            }
          }
        }
      }
    };

    return (
      <View style={{ backgroundColor: 'yellow', flex: 1 }}>
        <TouchableOpacity
          onPress={() => pushScreen(screens.tabs, detailLayout)}
          style={{ padding: 20, backgroundColor: 'red', margin: 20 }}
        >
          <Text>Go to detail</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => showOverlay()}
          style={{ padding: 20, backgroundColor: 'red', margin: 20 }}
        >
          <Text>Show overlay</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => goToAuth()}
          style={{ padding: 20, backgroundColor: 'red', margin: 20 }}
        >
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
