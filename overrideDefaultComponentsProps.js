import { Platform, PixelRatio } from 'react-native';

import {
  setCustomTextInput,
  setCustomText,
  setCustomImage,
  setCustomTouchableOpacity
} from 'react-native-global-props';

const DEFAULT_FONT_TEXT = 15;
const DEFAULT_FONT_INPUT = 17;

export const responsiveFont = size => {
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(size));
  }
  return Math.round(PixelRatio.roundToNearestPixel(size)) - 2;
};
// decode = (t, e) => {
//   for (
//     var n, o, u = 0, l = 0, r = 0, d = [], h = 0, i = 0, a = null, c = Math.pow(10, e || 5);
//     u < t.length;

//   ) {
//     (a = null), (h = 0), (i = 0);
//     do (a = t.charCodeAt(u++) - 63), (i |= (31 & a) << h), (h += 5);
//     while (a >= 32);
//     (n = 1 & i ? ~(i >> 1) : i >> 1), (h = i = 0);
//     do (a = t.charCodeAt(u++) - 63), (i |= (31 & a) << h), (h += 5);
//     while (a >= 32);
//     (o = 1 & i ? ~(i >> 1) : i >> 1), (l += n), (r += o), d.push([l / c, r / c]);
//   }
//   return (d = d.map(t => {
//     return { latitude: t[0], longitude: t[1] };
//   }));
// };
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
    color: 'black',
    fontWeight: '100'
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
