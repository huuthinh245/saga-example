import { Navigation } from 'react-native-navigation';
import { Component } from 'react';
import { navTypes } from 'dn-utils';

import { store } from './redux/reducers';
import { definedScreens } from './screens/register';

export default class App extends Component {
  constructor(props) {
    super(props);
    store.subscribe(this.onStoreUpdate.bind(this));
    store.dispatch({ 
      type: navTypes.CHANGE_ROOT, 
      payload: navTypes.rootTypes.PRELOADER 
    });
  }

  onStoreUpdate() {
    const { root } = store.getState().nav;
    if (this.currentRoot !== root) {
      this.currentRoot = root;
      this.startApp(root);
    }
  }

  startApp = (root) => {
    switch (root) {
      case navTypes.rootTypes.PRELOADER:
        Navigation.startSingleScreenApp({
          screen: {
            screen: definedScreens.splash,
            animated: true,
            animatedType: 'fade',
            title: 'SPLASH SCREEN'
          },
        });
        break;

      case navTypes.rootTypes.GO_TO_LOGIN:
        Navigation.startSingleScreenApp({
          screen: {
            screen: definedScreens.login,
            animated: true,
            animatedType: 'fade',
            title: 'LOGIN SCREEN'
          },
        });
        break;

      case navTypes.rootTypes.LOGOUT_SUCCESS:
        Navigation.startSingleScreenApp({
          screen: {
            screen: definedScreens.login,
            animated: true,
            animatedType: 'fade',
            title: 'LOGIN SCREEN'
          },
        });
        break;

      case navTypes.rootTypes.LOGIN_SUCCESS:
        Navigation.startTabBasedApp({
          tabs: [
            {
              label: 'Home',
              screen: definedScreens.tab1,
              title: 'Hey',
              overrideBackPress: false,
              navigatorStyle: {}
            },
            {
              label: 'Library',
              screen: definedScreens.tab2,
              title: 'ay da',
              overrideBackPress: false,
              navigatorStyle: {}
            }
          ],
          animated: true,
          animatedType: 'fade',
          drawer: { 
            left: { 
              screen: definedScreens.drawer
            },
            disableOpenGesture: false,
            passProps: {
              title: 'Hello from SideMenu'
            }
          },
        });
        break;

      default:
        break;
    }
  }
}