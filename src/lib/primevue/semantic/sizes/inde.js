export default {
  transitionDuration: '0.2s',
  focusRing: {
    width: '1px',
    style: 'solid',
    color: '{primary.color}',
    offset: '2px',
    shadow: 'none'
  },
  disabledOpacity: '0.6',
  iconSize: '1rem',
  anchorGutter: '2px',
  primary: {
    50: '{emerald.50}',
    100: '{emerald.100}',
    200: '{emerald.200}',
    300: '{emerald.300}',
    400: '{emerald.400}',
    500: '{emerald.500}',
    600: '{emerald.600}',
    700: '{emerald.700}',
    800: '{emerald.800}',
    900: '{emerald.900}',
    950: '{emerald.950}'
  },
  formField: {
    paddingX: '0.75rem',
    paddingY: '0.5rem',
    sm: {
      fontSize: '0.875rem',
      paddingX: '0.625rem',
      paddingY: '0.375rem'
    },
    lg: {
      fontSize: '1.125rem',
      paddingX: '0.875rem',
      paddingY: '0.625rem'
    },
    borderRadius: '{border.radius.md}',
    focusRing: {
      width: '0',
      style: 'none',
      color: 'transparent',
      offset: '0',
      shadow: 'none'
    },
    transitionDuration: '{transition.duration}'
  },
  list: {
    padding: '0.25rem 0.25rem',
    gap: '2px',
    header: {
      padding: '0.5rem 1rem 0.25rem 1rem'
    },
    option: {
      padding: '0.5rem 0.75rem',
      borderRadius: '{border.radius.sm}'
    },
    optionGroup: {
      padding: '0.5rem 0.75rem',
      fontWeight: '600'
    }
  },
  content: {
    borderRadius: '{border.radius.md}'
  },
  mask: {
    transitionDuration: '0.15s'
  },
  navigation: {
    list: {
      padding: '0.25rem 0.25rem',
      gap: '2px'
    },
    item: {
      padding: '0.5rem 0.75rem',
      borderRadius: '{border.radius.sm}',
      gap: '0.5rem'
    },
    submenuLabel: {
      padding: '0.5rem 0.75rem',
      fontWeight: '600'
    },
    submenuIcon: {
      size: '0.875rem'
    }
  },
  overlay: {
    select: {
      borderRadius: '{border.radius.md}',
      shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)'
    },
    popover: {
      borderRadius: '{border.radius.md}',
      padding: '0.75rem',
      shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)'
    },
    modal: {
      borderRadius: '{border.radius.xl}',
      padding: '1.25rem',
      shadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
    },
    navigation: {
      shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)'
    }
  }
}
