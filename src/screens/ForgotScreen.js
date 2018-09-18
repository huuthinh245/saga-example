import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';

import { popScreen, popToRoot } from '../navigation/actions';
import { screens } from './index';

export default class Screen extends Component {
  render() {
    return (
      <View style={{ backgroundColor: 'yellow', flex: 1 }}>
        <TouchableOpacity
          onPress={() => popScreen(this.props.componentId)}
          style={{ padding: 20, backgroundColor: 'red', margin: 20 }}
        >
          <Text>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => popToRoot(this.props.componentId)}
          style={{ padding: 20, backgroundColor: 'red', margin: 20 }}
        >
          <Text>Back to root</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
