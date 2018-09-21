import { Alert } from 'react-native';

const alertTitles: Object = {
  title: 'Alert',
  ok: 'OK',
  cancel: 'Cancel',

  warning: 'Warning',
  success: 'Success',
  error: 'Error',
  failure: 'Failure'
};

const alertContents: Object = {};

const _alert: Function = (
  title = alertTitles.title,
  content = '',
  buttons = [{ text: alertTitles.ok, onPress: () => {} }]
) => {
  Alert.alert(title, content, buttons);
};

export { alertTitles, alertContents, _alert };
