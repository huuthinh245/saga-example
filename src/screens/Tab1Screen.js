import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { navActions, navTypes } from 'dn-utils';

const { changeRoot, push } = navActions;

class Screen extends Component {
  render() {
    return (
      <View style={{ backgroundColor: 'red', flex: 1 }}>
        <Text>this is tab 1</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.changeRoot(navTypes.root.LOGOUT_SUCCESS);
          }}
          style={{ padding: 20, backgroundColor: 'red' }}
        >
          <Text>Logout</Text>
        </TouchableOpacity>

        
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { push, changeRoot },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(Screen);

