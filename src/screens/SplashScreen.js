import React, { Component } from 'react';
import { View, Image, ActivityIndicator, Text } from 'react-native';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import { keysSelector } from '../reducers/keys';
import { connectionSelector } from '../reducers/connection';
import { keysActionsToDispatch } from '../actions/keys';
import img from '../assets/images/Loading.png';

class SplashScreen extends Component {
  async componentDidMount() {
    const { isConnected, dispatch, componentId } = this.props;
    if (isConnected) {
      dispatch(keysActionsToDispatch.fetchKeys());
    }
  }

  render() {
    const { fetchingKeys, isConnected } = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={img} resizeMode="stretch"
        />
        {fetchingKeys && (
          <ActivityIndicator color="blue" style={{ position: 'absolute', bottom: '30%' }} />
        )}
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
  fetchingKeys: keysSelector(state).fetching
}))(SplashScreen);
