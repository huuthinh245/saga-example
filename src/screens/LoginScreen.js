import React, { Component } from 'react';
import {
  View,
  Image,
  ActivityIndicator,
  AsyncStorage,
  TextInput,
  Text,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import { keysSelector } from '../reducers/keys';
import { connectionSelector } from '../reducers/connection';
import { authSelector } from '../reducers/auth';
import { keysActionsToDispatch } from '../actions/keys';
import img from '../assets/images/Loading.png';
import { showOverlay, dismissOverlay } from '../navigation/actions';
import Auth from '../models/Auth';
import { authActionsToDispatch } from '../actions/auth';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'dung@gmail.com',
      password: '123123'
    };
  }

  async componentDidMount() {
    const { isConnected, dispatch, componentId } = this.props;
    const { token } = Auth.getInstance();

    if (isConnected && token) {
      showOverlay();
      const dismiss = () => dismissOverlay(componentId);
      dispatch(authActionsToDispatch.getMe({ token, dismissOverlay: dismiss }));
    }
  }

  _login = () => {
    const { username, password } = this.state;
    const { auth } = this.props;

    const { isConnected, dispatch, componentId } = this.props;
    if (isConnected && !auth.fetching) {
      showOverlay();
      const dismiss = () => dismissOverlay(componentId);
      dispatch(
        authActionsToDispatch.getToken({
          username,
          password,
          dismissOverlay: dismiss
        })
      );
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'lightyellow',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 5,
            borderWidth: 1,
            borderRadius: 3,
            margin: 5
          }}
        >
          <Text style={{ flex: 1, borderRightWidth: 1, borderColor: 'silver', color: 'gray' }}>
            username
          </Text>
          <TextInput
            ref={ref => {
              this.username = ref;
            }}
            onChangeText={text => this.setState({ username: text })}
            style={{ flex: 3 }}
            value="dung@gmail.com"
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 5,
            borderWidth: 1,
            borderRadius: 3,
            margin: 5
          }}
        >
          <Text style={{ flex: 1, borderRightWidth: 1, borderColor: 'silver', color: 'gray' }}>
            password
          </Text>
          <TextInput
            ref={ref => {
              this.password = ref;
            }}
            onChangeText={text => this.setState({ password: text })}
            secureTextEntry
            style={{ flex: 3 }}
            value="123123"
          />
        </View>

        <TouchableOpacity
          style={{
            paddingVertical: 20,
            paddingHorizontal: 50,
            backgroundColor: 'blue',
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onPress={this._login}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(state => ({
  isConnected: connectionSelector(state).isConnected,
  auth: authSelector(state)
}))(LoginScreen);
