import popover from './popover';
import tooltip from './tooltip';

const colorScheme = {
  light: {
    ...popover.light,
    ...tooltip.light,
  },
  dark: {
    ...popover.dark,
    ...tooltip.dark,
  },
}

export default colorScheme
