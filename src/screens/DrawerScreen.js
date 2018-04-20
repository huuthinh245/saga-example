import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { navActions } from 'dn-utils';

const { pop, push, toggleDrawer } = navActions;
const toggle = {
  to: 'close'
};

class Screen extends Component {
  render() {
    return (
      <View style={{ backgroundColor: 'aqua', flex: 1 }}>
        <Text>this is drawer</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.toggleDrawer(toggle);
          }}
          style={{ padding: 20, backgroundColor: 'red' }}
        >
          <Text>toggle drawer</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { push, pop, toggleDrawer },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(Screen);

