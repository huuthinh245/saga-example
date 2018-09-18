import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import { goToAuth } from '../navigation/actions';

class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countDown: 3
    };
    Navigation.events().bindComponent(this);
  }

  componentDidMount() {
    console.log(this.props);
  }

  componentDidAppear = () => {
    // alert('appear');
  };

  componentDidDisappear = () => {
    // alert('did appear');
  };

  render() {
    const { countDown } = this.state;
    const text = `Splash screen, it will be disappear after ${countDown}s`;
    setTimeout(() => {
      goToAuth();
    }, 3000);
    return (
      <View
        style={{
          backgroundColor: 'green',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text>{text}</Text>
      </View>
    );
  }
}

export default connect()(Screen);
