import React, { Component } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { popScreen, pushScreen } from '../../navigation/actions';
import { screens } from '..';
import Header from '../elements/Header';
import EventTitle from '../elements/eventTitle';

export default class CatalogEvent extends Component {
  _back = () => {
    popScreen(this.props.componentId);
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView style={{ backgroundColor: '#ad121c' }}>
          <Header title="catalog" hidden={false} onBack={this._back} />
        </SafeAreaView>
        <EventTitle />
      </View>
    );
  }
}
