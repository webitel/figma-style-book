import darkColor from './dark-color.js';
import lightColor from './light-color.js';
import palette from './palette.js';
import base from './base'
import overlay from './overlay'

const colorScheme = {
  light: {
    ...palette,
    ...lightColor,
    ...base.light,
    ...overlay.light,
  },
  dark: {
    ...palette,
    ...darkColor,
    ...base.dark,
    ...overlay.dark,
  },
};

export default colorScheme;
