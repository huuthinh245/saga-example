import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { popScreen, pushScreen } from '../../navigation/actions';
import { screens } from '..';
import Header from '../elements/Header';
import EventTitle from '../elements/eventTitle';

export default class CatalogEvent extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header title="catalog" hidden={false} />
        <EventTitle />
      </View>
    );
  }
}
