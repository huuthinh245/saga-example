import React from 'react';
import { AppState, NetInfo, AsyncStorage } from 'react-native';
import CodePush from 'react-native-code-push';
import { Navigation } from 'react-native-navigation';

import { registerScreens, screens } from './src/screens';
import store from './src/store';
import { configProps } from './overrideDefaultComponentsProps';
import { changeConnectionStatus } from './src/actions/connection';
import AuthModel from './src/models/Auth';

console.disableYellowBox = true;

registerScreens(store);

configProps();

const codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
  updateDialog: true,
  installMode: CodePush.InstallMode.IMMEDIATE
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.appState = AppState.currentState;

    this.getSavedState();

    AppState.addEventListener('change', this.handleAppStateChange);

    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);

    this.startApp();
  }

  componentDidMount() {
    if (!__DEV__) {
      CodePush.sync(codePushOptions);
    }
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
  }

  getSavedState = async () => {
    const token = await AsyncStorage.getItem('token');

    if (token) {
      AuthModel.setToken(token);
    }
  };

  handleAppStateChange = nextAppState => {
    if (this.appState.match(/inactive|background/) && nextAppState === 'active') {
      CodePush.sync(codePushOptions);
    }
    this.appState = AppState.currentState;
  };

  handleConnectivityChange = isConnected => {
    store.dispatch(changeConnectionStatus(isConnected));
  };

  startApp() {
    Navigation.events().registerAppLaunchedListener(() => {
      Navigation.setRoot({
        root: {
          component: {
            name: screens.splash
          }
        }
      });
    });

    Navigation.events().registerBottomTabSelectedListener(
      ({ selectedTabIndex, unselectedTabIndex }) => {
        console.log(selectedTabIndex, unselectedTabIndex);
      }
    );
  }
}

App = CodePush({ checkFrequency: CodePush.CheckFrequency.MANUAL })(new App());

export default App;
