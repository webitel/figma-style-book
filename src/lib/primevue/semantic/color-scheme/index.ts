import darkColor from './dark-color';
import lightColor from './light-color';
import palette from './palette';
import base from './base'
import overlay from './overlay'
import focusRing from './focus-ring'

console.log(overlay, ' overlay')
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
