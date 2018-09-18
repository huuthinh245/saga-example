import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';

import { popScreen, popToRoot } from '../navigation/actions';
import { screens } from './register';

export default class Screen extends Component {
  render() {
    return (
      <View style={{ backgroundColor: 'blue', flex: 1 }}>
        <TouchableOpacity
          onPress={() => popScreen(this.props.componentId)}
          style={{ padding: 20, backgroundColor: 'red', margin: 20 }}
        >
          <Text>Back Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
