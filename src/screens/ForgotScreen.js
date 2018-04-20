import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { navActions } from 'dn-utils';

const { pop, push } = navActions;

class Screen extends Component {
  render() {
    return (
      <View style={{ backgroundColor: 'yellow', flex: 1 }}>
        <TouchableOpacity
          onPress={() => {
            this.props.pop();
          }}
          style={{ padding: 20, backgroundColor: 'red' }}
        >
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { push, pop },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(Screen);

