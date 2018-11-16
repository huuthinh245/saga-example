import React, { Component } from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { popScreen, pushScreen } from '../../navigation/actions';
import { screens } from '..';
import Header from '../elements/Header';
import EventTitle from '../elements/eventTitle';
import ProgramItem from '../elements/programItem';

export default class ProgramEvent extends Component {
  _back = () => {
    popScreen(this.props.componentId);
  }
  _keyExtractor = (item, index) => index.toString();
  render() {
    const abc = ['a', 'b', 'c'];
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView>
          <Header title="programme" hidden={false} onBack={this._back} />
        </SafeAreaView>
        <EventTitle />
        <FlatList
          data={abc}
          keyExtractor={this._keyExtractor}
          renderItem={({ item }) => <ProgramItem />}
        />
      </View>
    );
  }
}
