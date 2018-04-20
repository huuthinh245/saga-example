import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { navActions } from 'dn-utils';

const { changeRoot, push } = navActions;
class Screen extends Component {
  render() {
    return (
      <View style={{ backgroundColor: 'violet', flex: 1 }}>
        <Text>this is tab2 </Text>
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

