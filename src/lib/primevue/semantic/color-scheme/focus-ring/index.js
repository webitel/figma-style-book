import light from './light'
import dark from './dark'

export default {
  sizes: {
    focusRing: {
      width: '1px',
      style: 'solid',
      color: '{primary.color}',
      offset: '2px',
      shadow: 'none'
    },
  },
  colorScheme: {
    light,
    dark,
  }
}
