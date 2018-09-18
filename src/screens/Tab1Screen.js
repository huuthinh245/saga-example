import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';

import { goToAuth, pushScreen, showOverlay } from '../navigation/actions';
import { screens } from './register';

export default class Screen extends Component {
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
      <View style={{ backgroundColor: 'yellow', flex: 1 }}>
        <TouchableOpacity
          onPress={() => pushScreen(this.props.componentId, detailLayout)}
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
