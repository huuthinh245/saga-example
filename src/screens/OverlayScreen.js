import React, { Component } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { dismissModal } from '../navigation/actions';

export default class Screen extends Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={() => dismissModal(this.props.componentId)}>
        <View style={{ backgroundColor: 'rgba(0,0,0,0.4)', flex: 1 }} />
      </TouchableWithoutFeedback>
    );
  }
}
