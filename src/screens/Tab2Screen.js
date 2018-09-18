import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';

import { goToAuth, pushScreen } from '../navigation/actions';
import { screens } from './index';
import { Navigation } from 'react-native-navigation';

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
              text: 'Detail'
            }
          }
        }
      }
    };

    return (
      <View style={{ backgroundColor: 'violet', flex: 1 }}>
        <TouchableOpacity
          onPress={() => pushScreen(screens.tabs, detailLayout)}
          style={{ padding: 20, backgroundColor: 'red', margin: 20 }}
        >
          <Text>Go to detail</Text>
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
