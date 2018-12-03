import React, { Component } from 'react';
import { View, SafeAreaView, FlatList } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';
import { Toolbar } from 'react-native-material-ui';
import { goToAuth, pushScreen } from '../../navigation/actions';
import { eventAction } from '../../actions/event';
import { screens } from '..';
import { connectionSelector } from '../../reducers/connection';
import { eventSelector } from '../../reducers/eventReducer';
import AuthModel from '../../models/Auth';
import EventItem from '../elements/eventItem';
import { responsiveFont } from 'PremiumContact/overrideDefaultComponentsProps'; // eslint-disable-line

class EventScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      align: 'center'
    };
    // Navigation.events().bindComponent(this);
  }

  componentDidMount() {
    const { isConnected, dispatch } = this.props;
    const societe = AuthModel.getId();
    const strToken = AuthModel.getToken();
    if (isConnected && societe && strToken) {
      dispatch(eventAction.getListEvent({ societe, strToken }));
    }
  }
  _logout = () => {
    goToAuth();
    // Alert.alert('Log out', 'Are you sure to log out ?', [
    //   {
    //     text: 'OK',
    //     onPress: async () => {
    //       await AsyncStorage.removeItem('token');
    //       goToAuth();
    //     }
    //   },
    //   {
    //     text: 'Cancel'
    //   }
    // ]);
  };

  _pushDetailEvent = () => {
    const detailLayout = {
      component: {
        name: screens.detail,
        options: {
          topBar: {
            visible: false
          }
        }
      }
    };
    pushScreen(this.props.componentId, detailLayout);
  };

  _onBack = () => {
    Navigation.pop(this.props.componentId);
  };

  _renderItem = ({ item }) => {
    return (
      <EventItem goToDetail={this._pushDetailEvent} item={item} fetching={this.props.fetching} />
    );
  };

  _keyExtractor = item => item.idintermediation.toString();

  _onRefresh = () => {
    const { fetching, dispatch, isConnected } = this.props;
    const societe = AuthModel.getId();
    const strToken = AuthModel.getToken();
    if (!fetching && isConnected) {
      dispatch(eventAction.getListEvent({ societe, strToken }));
    }
  };
  render() {
    const { listEvent, fetching } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView style={{ backgroundColor: '#ad121c' }}>
          <Toolbar
            centerElement="Evénements"
            hidden
            showIconSearch
            searchable={{
              autoFocus: true,
              placeholder: 'Search',
              onSearchPressed: () => {
                this.setState({ align: 'auto' });
              },
              onSearchCloseRequested: () => {
                this.setState({ align: 'center' });
              },
              onChangeText: text => {
                console.log(text);
              }
            }}
            isSearchActive={this.state.isSearch}
            style={{
              container: {
                backgroundColor: '#ad121c'
              },
              titleText: {
                textAlign: this.state.align,
                fontWeight: '100',
                fontSize: responsiveFont(18)
              },
              centerElementContainer: {
                marginLeft: 0,
                marginRight: 24
              },
              leftElementContainer: {
                margin: 0
              }
            }}
          />
        </SafeAreaView>
        <FlatList
          data={listEvent}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
          onRefresh={this._onRefresh}
          refreshing={fetching}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    isConnected: connectionSelector(state).isConnected,
    listEvent: eventSelector(state).data,
    fetching: eventSelector(state).fetching
  };
};
export default connect(mapStateToProps)(EventScreen);
