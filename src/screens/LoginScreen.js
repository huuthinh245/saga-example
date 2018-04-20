import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { navActions, navTypes, setNav, getNav } from 'dn-utils';
import { definedScreens } from '../screens/register';


const { changeRoot, push } = navActions;

class Screen extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if(event.id === 'willAppear') {
      if(getNav().screenInstanceID !== this.props.navigator.screenInstanceID) {
        console.log('vao day');
        setNav(this.props.navigator);
      }
    }
  }

  render() {
    const registerScreen = {
      screen: definedScreens.register,
      title: 'register pushed'
    };

    const forgotScreen = {
      screen: definedScreens.forgot,
      title: 'forgot pushed'
    };

    return (
      <View style={{ backgroundColor: 'yellow', flex: 1 }}>
        <TouchableOpacity
          onPress={() => {
            this.props.changeRoot(navTypes.root.LOGIN_SUCCESS);
          }}
          style={{ padding: 20, backgroundColor: 'red', margin: 20 }}
        >
          <Text>Login success by redux</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.push(registerScreen);
          }}
          style={{ padding: 20, backgroundColor: 'red', margin: 20 }}
        >
          <Text>Register</Text>
        </TouchableOpacity>
          
        <TouchableOpacity
          onPress={() => {
            this.props.push(forgotScreen);
          }}
          style={{ padding: 20, backgroundColor: 'red', margin: 20 }}
        >
          <Text>Forgot</Text>
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

