import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { navActions } from 'dn-utils';
import { definedScreens } from './register';


const { pop, push } = navActions;

class Screen extends Component {
  render() {
    const registerScreen = {
      screen: definedScreens.forgot,
      title: 'forgot pushed'
    };
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
        <TouchableOpacity
          onPress={() => {
            this.props.push(registerScreen);
          }}
          style={{ padding: 20, backgroundColor: 'red', margin: 20 }}
        >
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { pop, push },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(Screen);

