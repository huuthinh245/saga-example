import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Toolbar } from 'react-native-material-ui';
import { connect } from 'react-redux';

import { goToAuth, pushScreen } from '../../navigation/actions';
import { screens } from '..';
import { Navigation } from 'react-native-navigation';
import Profile from '../elements/profile';
import  Header  from '../elements/Header';

export default class ContactScreen extends Component {
  constructor(props) {
    super(props);
    // Navigation.events().bindComponent(this);
  }
  componentDidMount() {
    Navigation.mergeOptions(this.props.componentId, {
      options: {
        topBar: {
          title: {
            text: 'zzz'
          }
        }
      }
    })
  }
  render() {
    detailLayout = {
      component: {
        name: screens.detail,
        options: {
          topBar: {
            title: {
              text: 'Detail'
            }
          }
        }
      }
    };
    return (
      <View style={{ flex: 1 }}>
        <Header title="contact" />
        <Profile />
      </View>
    );
  }
}

const styles = StyleSheet.create({
 
})