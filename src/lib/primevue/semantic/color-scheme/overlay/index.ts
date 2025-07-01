import light from './light'
import dark from './dark'

export default {
  sizes: {
    select: {
      borderRadius: '{border.radius.md}',
      shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)'
    },
    popover: {
      borderRadius: '1rem',
      padding: '0.75rem',
      shadow: '{0 0 10px rgba(255, 0, 0, 0.5)}',
    },
    modal: {
      borderRadius: '{border.radius.xl}',
      padding: '1.25rem',
      shadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
    },
    navigation: {
      shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)'
    },
  },

  colorScheme: {
    light,
    dark,
  },
}
