import darkColor from './dark-color.js';
import lightColor from './light-color.js';
import palette from './palette.js';
import base from './base'
import components from './components'

const colorScheme = {
  light: {
    ...palette,
    ...lightColor,
    ...base.light,
    ...components.light,
  },
  dark: {
    ...palette,
    ...darkColor,
    ...base.dark,
    ...components.dark,
  },
};

export default colorScheme;
