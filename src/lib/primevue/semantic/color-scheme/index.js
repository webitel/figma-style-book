import darkColor from './dark-color.js';
import lightColor from './light-color.js';
import palette from './palette.js';
import base from './base'
import overlay from './overlay'
import focusRing from './focus-ring'

const colorScheme = {
  light: {
    ...palette,
    ...lightColor,
    ...base.light,
    ...focusRing.colorScheme.light,
    ...overlay.colorScheme.light,
  },
  dark: {
    ...palette,
    ...darkColor,
    ...base.dark,
    ...focusRing.colorScheme.dark,
    ...overlay.colorScheme.dark,
  },
};

export default colorScheme;
