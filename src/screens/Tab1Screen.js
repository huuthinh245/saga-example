import React, { Component } from 'react';
import { View, Text, TouchableOpacity, AsyncStorage, Alert } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';

import { goToAuth, pushScreen, showOverlay } from '../navigation/actions';
import { screens } from './index';

export default class Screen extends Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  _logout = () => {
    Alert.alert('Log out', 'Are you sure to log out ?', [
      {
        text: 'OK',
        onPress: async () => {
          await AsyncStorage.removeItem('token');
          goToAuth();
        }
      },
      {
        text: 'Cancel'
      }
    ]);
  };

  render() {
    detailLayout = {
      component: {
        name: screens.detail,
        options: {
          topBar: {
            title: {
              text: 'My title'
            }
          }
        }
      }
    };

    registerLayout = {
      component: {
        name: screens.register,
        options: {
          topBar: {
            title: {
              text: 'Register'
            }
          }
        }
      }
    };

    return (
      <View style={{ backgroundColor: 'yellow', flex: 1 }}>
        <TouchableOpacity
          onPress={() => pushScreen(screens.tabs, detailLayout)}
          style={{ padding: 20, backgroundColor: 'red', margin: 20 }}
        >
          <Text>Go to detail</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this._logout}
          style={{ padding: 20, backgroundColor: 'red', margin: 20 }}
        >
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
