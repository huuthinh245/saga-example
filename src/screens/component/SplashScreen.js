import React, { Component } from 'react';
import { View, Image, ActivityIndicator, Text } from 'react-native';
import { connect } from 'react-redux';
import AuthModel from '../../models/Auth';
import { connectionSelector } from '../../reducers/connection';
import { authActionsToDispatch } from '../../actions/auth';
import img from '../../assets/images/Loading.png';
import { goToAuth } from '../../navigation/actions';

class SplashScreen extends Component {
  async componentDidMount() {
    const { isConnected, dispatch, componentId } = this.props;
    const token = AuthModel.getToken();
    if (isConnected && token) {
      dispatch(authActionsToDispatch.getMe(token));
    }else {
      goToAuth();
    }
  }

  render() {
    const { isConnected } = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={img}
          resizeMode="stretch"
        />
        {!isConnected && (
          <Text style={{ position: 'absolute', bottom: 20, color: '#fff', backgroundColor: '#000', padding: 10, borderRadius: 3 }}>
          No network connection
          </Text>
        )}

        
      </View>
    );
  }
}

export default connect(state => ({
  isConnected: connectionSelector(state).isConnected,
}))(SplashScreen);
