import * as React from 'react';
import {
  View,
  Animated,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  SafeAreaView
} from 'react-native';
import { responsiveFont } from 'PremiumContact/overrideDefaultComponentsProps'; // disble-eslint
// import { TabView } from 'react-native-tab-view';
import { Icon } from 'react-native-material-ui';
import { Navigation } from 'react-native-navigation';
import Header from '../elements/Header';

// import { connect } from 'react-redux';
import { popScreen, popToRoot, goToAuth } from '../../navigation/actions';
import { screens } from '..';
import MapEvent from './MapEvent';
import ProgramEvent from './ProgramEvent';
import CatalogEvent from './CatalogEvent';
import ImageEv from '../../assets/images/cover_photo.jpg';

const { height, width } = Dimensions.get('window');

class DetailEvent extends React.Component {
  _back = () => {
    popScreen(this.props.componentId);
  };
  _pushMapEvent = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: screens.map,
        passProps: {
          abc: {
            a: 'a',
            b: 'b'
          }
        },
        options: {
          topBar: {
            visible: false
          }
        }
      }
    });
  };
  _pushInternalMap = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: screens.map,
        passProps: {
          abc: {
            a: 'a',
            b: 'b'
          }
        },
        options: {
          topBar: {
            visible: false
          }
        }
      }
    });
  };
  _pushCatallogue = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: screens.catalog,
        passProps: {
          abc: {
            a: 'a',
            b: 'b'
          }
        },
        options: {
          topBar: {
            visible: false
          }
        }
      }
    });
  };
  _pushProgram = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: screens.program,
        passProps: {
          abc: {
            a: 'a',
            b: 'b'
          }
        },
        options: {
          topBar: {
            visible: false
          }
        }
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={{ backgroundColor: '#ad121c' }}>
          <Header title="Details de I'evenement" hidden={false} onBack={this._back} />
        </SafeAreaView>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={ImageEv} />
        </View>
        <View style={styles.betweenView}>
          <View style={styles.header}>
            <Icon name="shopping-basket" size={36} color="#64abda" />
            <Text style={styles.headerText}>
              Production Temps Reel
              {'\n'}
              LYON
            </Text>
          </View>
          <View style={styles.wrapperContact}>
            <View style={styles.date}>
              <Icon name="alarm" size={24} />
              <Text style={styles.contentText}>13 Juin 2018</Text>
            </View>
            <View style={styles.address}>
              <Icon name="location-on" size={24} />
              <Text style={styles.contentText} numberOfLines={1}>
                Westotel Nantes Atlantiqued23d32d32d23d23d23{' '}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={this._pushMapEvent}>
            <Text>MAP</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this._pushInternalMap}>
            <Text>INTERNAL MAP</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this._pushCatallogue}>
            <Text>CATALOGUE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this._pushProgram}>
            <Text>PROGRAME</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

// class DetailEvent extends React.Component {
//   constructor(props) {
//     super(props);
//     Navigation.events().bindComponent(this);
//     this.state = {
//       index: 0,
//       routes: [
//         { key: 'map', title: 'Plan\'accès' },
//         { key: 'program', title: 'Programme' },
//         { key: 'catalog', title: 'catologue' },

//       ][],
//     };
//   }

//   _handleIndexChange = index => {
//     this.setState({ index });
//   };

//   _renderTabBar = props => {
//     const lengthRoute = props.navigationState.routes.length;
//     const inputRange = props.navigationState.routes.map((x, i) => i);
//     return (
//       <SafeAreaView style={styles.tabBar}>
//         {props.navigationState.routes.map((route, i) => {
//           const color = props.position.interpolate({
//             inputRange,
//             outputRange: inputRange.map(
//               inputIndex => (inputIndex === i ? '#D6356C' : '#222')
//             ),
//           });
//           return (
//             <View style={styles.tabItem} key={i}>
//               <TouchableOpacity
//                 style={[styles.tabItem]}
//                 onPress={() => this._handleIndexChange(i)}
//               >
//                 <Animated.Text style={{ color, flex: 1, textAlign: 'center' }}>{route.title}</Animated.Text>
//               </TouchableOpacity>
//               {i < lengthRoute - 1 && <View style={[styles.rightBorder]} />}
//             </View>
//           );
//         })}
//       </SafeAreaView>
//     );
//   };

//   _renderScene = ({ route }) => {
//     switch (route.key) {
//       case 'map':
//         return <MapEvent {...this.props} />;
//       case 'program':
//         return <ProgramEvent {...this.props} />;
//       case 'catalog':
//         return <CatalogEvent {...this.props} />;
//       default:
//         return null;
//     }
//   }

//   render() {
//     return (
//       <TabView
//         navigationState={this.state}
//         renderScene={this._renderScene}
//         renderTabBar={this._renderTabBar}
//         onIndexChange={this._handleIndexChange}
//         tabBarPosition="bottom"
//       />
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageContainer: {
    flex: 4,
    backgroundColor: 'gray'
  },
  image: {
    height: (height * 4) / 12,
    width
  },
  betweenView: {
    flex: 2,
    // backgroundColor: 'green'
    marginTop: 40
  },
  buttonContainer: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },

  header: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 10
  },
  headerText: {
    fontSize: responsiveFont(17)
  },
  wrapperContact: {
    flexDirection: 'row',
    marginVertical: 20
    // marginRight: 20
  },
  imageBackground: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.3,
    width: width - 20
  },
  address: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  date: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  contentText: {
    fontSize: responsiveFont(13),
    color: '#c0c0c0'
  },
  footer: {
    flexDirection: 'row',
    marginLeft: 2,
    alignItems: 'center'
  },
  footerText: {
    fontSize: responsiveFont(20),
    fontWeight: '100',
    flex: 0.75
  },
  button: {
    // backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    borderColor: 'red',
    flex: 0.18,
    width: width - 40,
    alignSelf: 'center',
    borderWidth: 0.5,
    marginBottom: 10
  },
  buttonText: {
    marginVertical: 10,
    color: '#fff',
    fontSize: responsiveFont(18),
    fontWeight: '100'
  }
  // tabBar: {
  //   flexDirection: 'row',
  //   borderTopWidth: 1,
  //   borderColor: '#ad121c'
  // },
  // tabItem: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   paddingVertical: 8,
  // },
  // rightBorder: {
  //   position: 'absolute',
  //   borderColor: '#cccccc',
  //   zIndex: 9999,
  //   top: '30%',
  //   bottom: '30%',
  //   left: '100%',
  //   borderRightWidth: 1,
  //   width: 1,
  //   height: 30
  // }
});

export default DetailEvent;
