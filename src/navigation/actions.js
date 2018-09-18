import { Navigation } from 'react-native-navigation';
import { screens } from '../screens/register';

import alert from '../assets/icon1.png';
import auth from '../assets/icon2.png';

export const goToHome = ({ titles = [] }: Object = {}) =>
  Navigation.setRoot({
    root: {
      stack: {
        id: 'Main',
        children: [
          {
            bottomTabs: {
              id: 'MainTabs',
              children: [
                {
                  component: {
                    name: screens.tab1,
                    options: {
                      bottomTab: {
                        fontSize: 12,
                        text: titles[0] || 'tab 1',
                        icon: alert
                      }
                    }
                  }
                },
                {
                  component: {
                    name: screens.tab2,
                    options: {
                      bottomTab: {
                        text: titles[1] || 'tab 2',
                        fontSize: 12,
                        icon: auth
                      }
                    }
                  }
                }
              ]
            }
          }
        ]
      }
    }
  });

export const goToAuth = ({ loginTitle = 'Login Header' }: Object = {}) =>
  Navigation.setRoot({
    root: {
      stack: {
        id: 'Auth',
        children: [
          {
            component: {
              name: screens.login,
              options: {
                topBar: { title: { text: loginTitle } }
              }
            }
          }
        ]
      }
    }
  });

export const showOverlay = async () =>
  Navigation.showOverlay({
    component: {
      name: screens.overlay,
      options: {
        overlay: {
          interceptTouchOutside: true
        }
      }
    }
  });

export const dismissOverlay = async componentId => Navigation.dismissOverlay(componentId);
export const pushScreen = async (componentId, layout) => Navigation.push(componentId, layout);
export const popScreen = async componentId => Navigation.pop(componentId);
export const popToRoot = async componentId => Navigation.popToRoot(componentId);
export const setStackRoot = async (componentId, params) =>
  Navigation.setStackRoot(componentId, params);
export const showModal = async layout => Navigation.showModal(layout);
export const dismissModal = async (componentId, mergeOptions) =>
  Navigation.dismissModal(componentId, mergeOptions);
export const dismissAllModals = async mergeOptions => Navigation.dismissAllModals(mergeOptions);
export const mergeOptions = async (componentId, options) =>
  Navigation.mergeOptions(componentId, options);
