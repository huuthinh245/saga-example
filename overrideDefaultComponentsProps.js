import { Platform, PixelRatio } from 'react-native';

import {
  setCustomTextInput,
  setCustomText,
  setCustomImage,
  setCustomTouchableOpacity
} from 'react-native-global-props';

const DEFAULT_FONT_TEXT = 15;
const DEFAULT_FONT_INPUT = 17;

const responsiveFont = size => {
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(size));
  }
  return Math.round(PixelRatio.roundToNearestPixel(size)) - 2;
};

const customTextInputProps = {
  underlineColorAndroid: 'rgba(0,0,0,0)',
  style: {
    padding: 10,
    fontSize: responsiveFont(DEFAULT_FONT_INPUT),
    color: 'black'
  }
};

const customTextProps = {
  style: {
    fontSize: responsiveFont(DEFAULT_FONT_TEXT),
    color: 'black'
  }
};

const customImageProps = {
  resizeMode: 'cover'
};

const customTouchableOpacityProps = {
  hitSlop: { top: 5, right: 5, left: 5, bottom: 5 },
  activeOpacity: 0.7
};

export const configProps = () => {
  setCustomTextInput(customTextInputProps);
  setCustomText(customTextProps);
  setCustomImage(customImageProps);
  setCustomTouchableOpacity(customTouchableOpacityProps);
};
