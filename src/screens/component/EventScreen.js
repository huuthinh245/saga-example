import React, { Component } from 'react';
import { View, Text, TouchableOpacity, AsyncStorage, Alert, FlatList } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';
import { Toolbar } from 'react-native-material-ui';
import { goToAuth, pushScreen, showOverlay } from '../../navigation/actions';
import { screens } from '..';
import { connectionSelector } from '../../reducers/connection';
import EventItem from "../elements/eventItem";
import { responsiveFont} from 'PremiumContact/overrideDefaultComponentsProps';

class EventScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      align: 'center'
    }
    // Navigation.events().bindComponent(this);
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
            visible: false,
            title: {
              text: 'aaaaa'
            }
          }
        }
      }
    };
    pushScreen(this.props.componentId, detailLayout)
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Toolbar
          centerElement="Evénements"
          hidden={true}
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
            onChangeText: (text) => {
              console.log(text)
            }
          }}
          isSearchActive={this.state.isSearch}
          style={{
            container: {
              backgroundColor: '#ad121c',
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
        <EventItem
          goToDetail={this._pushDetailEvent}
        />

      </View>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    isConnected: connectionSelector(state).isConnected,
  }
}
export default connect(mapStateToProps)(EventScreen);