import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';

import { popScreen, popToRoot } from '../navigation/actions';
import { screens } from './index';

export default class Screen extends Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }
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
