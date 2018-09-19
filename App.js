import React from 'react';
import { AppState, Text } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { registerScreens, screens } from './src/screens';
import { store } from './src/redux/reducers';
import CodePush from 'react-native-code-push';

registerScreens(store);

const codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
  updateDialog: true,
  installMode: CodePush.InstallMode.IMMEDIATE
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.appState = AppState.currentState;
    AppState.addEventListener('change', this.handleAppStateChange);

    this.startApp();
  }

  componentDidMount() {
    if (!__DEV__) {
      CodePush.sync(codePushOptions);
    }
  }

  handleAppStateChange = nextAppState => {
    if (this.appState.match(/inactive|background/) && nextAppState === 'active') {
      CodePush.sync(codePushOptions);
    }
    this.appState = AppState.currentState;
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

  render() {
    return null;
  }
}

App = CodePush({ checkFrequency: CodePush.CheckFrequency.MANUAL })(App);

export default App;
