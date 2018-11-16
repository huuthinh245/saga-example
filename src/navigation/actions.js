import { Navigation } from 'react-native-navigation';
import { screens } from '../screens';

import alert from '../assets/icon1.png';
import auth from '../assets/icon2.png';

export const goToHome = ({ titles = [] }: Object = {}) =>
  Navigation.setRoot({
    root: {
      stack: {
        id: screens.main,
        children: [
          {
            component: {
              id: 'mainpage',
              name: screens.main,
              options: {
                topBar: {
                  visible: false,
                }
              }
            },

          },
        ],
      },
    }
  });

export const goToAuth = ({ loginTitle = 'Login Header' }: Object = {}) =>
  Navigation.setRoot({
    root: {
      stack: {
        id: screens.auth,
        children: [
          {
            component: {
              name: screens.login,
              options: {
                topBar: { visible: false }
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

export const dismissOverlay = componentId => Navigation.dismissOverlay(componentId);
export const pushScreen = (componentId, layout) => Navigation.push(componentId, layout);
export const popScreen = async (componentId, mergeOptions) =>
  Navigation.pop(componentId, mergeOptions);
export const popToScreen = async (componentId, mergeOptions) =>
  Navigation.popTo(componentId, mergeOptions);
export const popToRoot = async componentId => Navigation.popToRoot(componentId);
export const setStackRoot = async (componentId, params) =>
  Navigation.setStackRoot(componentId, params);
export const showModal = async layout => Navigation.showModal(layout);
export const dismissModal = async (componentId, mergeOptions) =>
  Navigation.dismissModal(componentId, mergeOptions);
export const dismissAllModals = async mergeOptions => Navigation.dismissAllModals(mergeOptions);
export const mergeOptions = async (componentId, options) =>
  Navigation.mergeOptions(componentId, options);
