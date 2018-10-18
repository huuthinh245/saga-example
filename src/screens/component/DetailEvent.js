import * as React from 'react';
import { View, Animated, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { TabView } from 'react-native-tab-view';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';
import { popScreen, popToRoot, goToAuth } from '../../navigation/actions';
import { screens } from '..';
import MapEvent from './MapEvent';
import ProgramEvent from './ProgramEvent';
import CatalogEvent from './CatalogEvent';
class DetailEvent extends React.Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
    this.state = {
      index: 0,
      routes: [
        { key: 'map', title: 'Plan\'accès' },
        { key: 'program', title: 'Programme' },
        { key: 'catalog', title: 'catologue' },

      ],
    };
  }

  _handleIndexChange = index => {
    this.setState({ index });
  };

  _renderTabBar = props => {
    const lengthRoute = props.navigationState.routes.length;
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const color = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map(
              inputIndex => (inputIndex === i ? '#D6356C' : '#222')
            ),
          });
          return (
            <View style={styles.tabItem} key={i}>
              <TouchableOpacity
                style={[styles.tabItem]}
                onPress={() => this._handleIndexChange(i)}>
                <Animated.Text style={{ color, flex: 1, textAlign: 'center' }}>{route.title}</Animated.Text>
              </TouchableOpacity>
              {i < lengthRoute - 1 && <View style={[styles.rightBorder]} />}
            </View>
          );
        })}
      </View>
    );
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
      case 'map':
        return <MapEvent {...this.props} />;
      case 'program':
        return <ProgramEvent {...this.props} />;
      case 'catalog':
        return <CatalogEvent {...this.props} />;
      default:
        return null;
    }
  }

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
        tabBarPosition="bottom"
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#ad121c'
  },
  tabItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  rightBorder: {
    position: 'absolute',
    borderColor: '#cccccc',
    zIndex: 9999,
    top: '30%',
    bottom: '30%',
    left: '100%',
    borderRightWidth: 1,
    width: 1,
    height: 30
  }
});

export default DetailEvent;