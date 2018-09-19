import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import { configProps } from './overrideDefaultComponentsProps';

console.disableYellowBox = true;

configProps();

AppRegistry.registerComponent(appName, () => App);

// import { Navigation } from 'react-native-navigation';
// import { registerScreens, screens } from './src/screens';
// import { configProps } from './overrideDefaultComponentsProps';
// import { store } from './src/redux/reducers';

// import alert from './src/assets/icon1.png';
// import auth from './src/assets/icon2.png';

// // console.disableYellowBox = true;

// configProps();
// registerScreens(store);

// Navigation.events().registerAppLaunchedListener(() => {
//   Navigation.setRoot({
//     root: {
//       component: {
//         name: screens.splash
//       }
//     }
//   });
// });

// Navigation.events().registerBottomTabSelectedListener(
//   ({ selectedTabIndex, unselectedTabIndex }) => {
//     console.log(selectedTabIndex, unselectedTabIndex);
//   }
// );
