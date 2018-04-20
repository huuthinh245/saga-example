import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { navActions, navTypes, setNav } from 'dn-utils';


const { changeRoot, push } = navActions;

class Screen extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if(event.id === 'willAppear') {
      setNav(this.props.navigator);
    }
  }

  render() {
    setTimeout(() => {
      this.props.changeRoot(navTypes.root.GO_TO_LOGIN);
    }, 3000);
    return (
      <View style={{ backgroundColor: 'green', flex: 1 }}>
        <Text>Splash screen, it will be disappear after 3s</Text>
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

