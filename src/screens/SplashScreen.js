import React, { Component } from 'react';
import { View, Image, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import { keysSelector } from '../reducers/keys';
import { connectionSelector } from '../reducers/connection';
import { keysActionsToDispatch } from '../actions/keys';
import img from '../assets/images/Loading.png';
import { showOverlay, dismissOverlay } from '../navigation/actions';

class SplashScreen extends Component {
  async componentDidMount() {
    const { isConnected, dispatch, componentId } = this.props;
    if (isConnected) {
      showOverlay();
      const dismiss = () => dismissOverlay(componentId);
      dispatch(keysActionsToDispatch.fetchKeys({ dismissOverlay: dismiss }));
    }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Image source={img} resizeMode="cover" />
        {this.props.fetchingKeys && (
          <ActivityIndicator color="blue" style={{ position: 'absolute', bottom: '30%' }} />
        )}
      </View>
    );
  }
}

export default connect(state => ({
  isConnected: connectionSelector(state).isConnected,
  fetchingKeys: keysSelector(state).fetching
}))(SplashScreen);
