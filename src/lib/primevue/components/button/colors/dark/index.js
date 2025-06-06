const darkColors = {
  root: {
    primary: {
      background: '{primary.color}',
      hoverBackground: '{primary.hover.color}',
      activeBackground: '{primary.active.color}',
      borderColor: '{primary.color}',
      hoverBorderColor: '{primary.hover.color}',
      activeBorderColor: '{primary.active.color}',
      color: '{primary.contrast.color}',
      hoverColor: '{primary.contrast.color}',
      activeColor: '{primary.contrast.color}',
      focusRing: {
        color: '{primary.color}',
        shadow: 'none'
      }
    },
    secondary: {
      background: '{surface.800}',
      hoverBackground: '{surface.700}',
      activeBackground: '{surface.600}',
      borderColor: '{surface.800}',
      hoverBorderColor: '{surface.700}',
      activeBorderColor: '{surface.600}',
      color: '{surface.300}',
      hoverColor: '{surface.200}',
      activeColor: '{surface.100}',
      focusRing: {
        color: '{surface.300}',
        shadow: 'none'
      }
    },
    info: {
      background: '{sky.400}',
      hoverBackground: '{sky.300}',
      activeBackground: '{sky.200}',
      borderColor: '{sky.400}',
      hoverBorderColor: '{sky.300}',
      activeBorderColor: '{sky.200}',
      color: '{sky.950}',
      hoverColor: '{sky.950}',
      activeColor: '{sky.950}',
      focusRing: {
        color: '{sky.400}',
        shadow: 'none'
      }
    },
    success: {
      background: '{green.400}',
      hoverBackground: '{green.300}',
      activeBackground: '{green.200}',
      borderColor: '{green.400}',
      hoverBorderColor: '{green.300}',
      activeBorderColor: '{green.200}',
      color: '{green.950}',
      hoverColor: '{green.950}',
      activeColor: '{green.950}',
      focusRing: {
        color: '{green.400}',
        shadow: 'none'
      }
    },
    warn: {
      background: '{orange.400}',
      hoverBackground: '{orange.300}',
      activeBackground: '{orange.200}',
      borderColor: '{orange.400}',
      hoverBorderColor: '{orange.300}',
      activeBorderColor: '{orange.200}',
      color: '{orange.950}',
      hoverColor: '{orange.950}',
      activeColor: '{orange.950}',
      focusRing: {
        color: '{orange.400}',
        shadow: 'none'
      }
    },
    help: {
      background: '{purple.400}',
      hoverBackground: '{purple.300}',
      activeBackground: '{purple.200}',
      borderColor: '{purple.400}',
      hoverBorderColor: '{purple.300}',
      activeBorderColor: '{purple.200}',
      color: '{purple.950}',
      hoverColor: '{purple.950}',
      activeColor: '{purple.950}',
      focusRing: {
        color: '{purple.400}',
        shadow: 'none'
      }
    },
    danger: {
      background: '{red.400}',
      hoverBackground: '{red.300}',
      activeBackground: '{red.200}',
      borderColor: '{red.400}',
      hoverBorderColor: '{red.300}',
      activeBorderColor: '{red.200}',
      color: '{red.950}',
      hoverColor: '{red.950}',
      activeColor: '{red.950}',
      focusRing: {
        color: '{red.400}',
        shadow: 'none'
      }
    },
    contrast: {
      background: '{surface.0}',
      hoverBackground: '{surface.100}',
      activeBackground: '{surface.200}',
      borderColor: '{surface.0}',
      hoverBorderColor: '{surface.100}',
      activeBorderColor: '{surface.200}',
      color: '{surface.950}',
      hoverColor: '{surface.950}',
      activeColor: '{surface.950}',
      focusRing: {
        color: '{surface.0}',
        shadow: 'none'
      }
    },
    /**
     * TODO @Evgeniy Trahtenberg
     * need to refactor transfer, error and job colors
     * */
    transfer: {
      background: '{primary.color}',
      hoverBackground: '{primary.hover.color}',
      activeBackground: '{primary.active.color}',
      borderColor: '{primary.color}',
      hoverBorderColor: '{primary.hover.color}',
      activeBorderColor: '{primary.active.color}',
      color: '{primary.contrast.color}',
      hoverColor: '{primary.contrast.color}',
      activeColor: '{primary.contrast.color}',
      focusRing: {
        color: '{primary.color}',
        shadow: 'none'
      }
    },
    error: {
      background: '{primary.color}',
      hoverBackground: '{primary.hover.color}',
      activeBackground: '{primary.active.color}',
      borderColor: '{primary.color}',
      hoverBorderColor: '{primary.hover.color}',
      activeBorderColor: '{primary.active.color}',
      color: '{primary.contrast.color}',
      hoverColor: '{primary.contrast.color}',
      activeColor: '{primary.contrast.color}',
      focusRing: {
        color: '{primary.color}',
        shadow: 'none'
      }
    },
    job: {
      background: '{primary.color}',
      hoverBackground: '{primary.hover.color}',
      activeBackground: '{primary.active.color}',
      borderColor: '{primary.color}',
      hoverBorderColor: '{primary.hover.color}',
      activeBorderColor: '{primary.active.color}',
      color: '{primary.contrast.color}',
      hoverColor: '{primary.contrast.color}',
      activeColor: '{primary.contrast.color}',
      focusRing: {
        color: '{primary.color}',
        shadow: 'none'
      }
    },
    disabled: {
      color: '{grey.darken.1}',
      background: '{dp-surface-color.16}',
    },
  },
  outlined: {
    primary: {
      hoverBackground: 'color-mix(in srgb, {primary.color}, transparent 96%)',
      activeBackground: 'color-mix(in srgb, {primary.color}, transparent 84%)',
      borderColor: '{primary.700}',
      color: '{primary.color}'
    },
    secondary: {
      hoverBackground: 'rgba(255,255,255,0.04)',
      activeBackground: 'rgba(255,255,255,0.16)',
      borderColor: '{surface.700}',
      color: '{surface.400}'
    },
    success: {
      hoverBackground: 'color-mix(in srgb, {green.400}, transparent 96%)',
      activeBackground: 'color-mix(in srgb, {green.400}, transparent 84%)',
      borderColor: '{green.700}',
      color: '{green.400}'
    },
    info: {
      hoverBackground: 'color-mix(in srgb, {sky.400}, transparent 96%)',
      activeBackground: 'color-mix(in srgb, {sky.400}, transparent 84%)',
      borderColor: '{sky.700}',
      color: '{sky.400}'
    },
    warn: {
      hoverBackground: 'color-mix(in srgb, {orange.400}, transparent 96%)',
      activeBackground: 'color-mix(in srgb, {orange.400}, transparent 84%)',
      borderColor: '{orange.700}',
      color: '{orange.400}'
    },
    help: {
      hoverBackground: 'color-mix(in srgb, {purple.400}, transparent 96%)',
      activeBackground: 'color-mix(in srgb, {purple.400}, transparent 84%)',
      borderColor: '{purple.700}',
      color: '{purple.400}'
    },
    danger: {
      hoverBackground: 'color-mix(in srgb, {red.400}, transparent 96%)',
      activeBackground: 'color-mix(in srgb, {red.400}, transparent 84%)',
      borderColor: '{red.700}',
      color: '{red.400}'
    },
    contrast: {
      hoverBackground: '{surface.800}',
      activeBackground: '{surface.700}',
      borderColor: '{surface.500}',
      color: '{surface.0}'
    },
    plain: {
      hoverBackground: '{surface.800}',
      activeBackground: '{surface.700}',
      borderColor: '{surface.600}',
      color: '{surface.0}'
    }
  },
  text: {
    primary: {
      hoverBackground: 'color-mix(in srgb, {primary.color}, transparent 96%)',
      activeBackground: 'color-mix(in srgb, {primary.color}, transparent 84%)',
      color: '{primary.color}'
    },
    secondary: {
      hoverBackground: '{surface.800}',
      activeBackground: '{surface.700}',
      color: '{surface.400}'
    },
    success: {
      hoverBackground: 'color-mix(in srgb, {green.400}, transparent 96%)',
      activeBackground: 'color-mix(in srgb, {green.400}, transparent 84%)',
      color: '{green.400}'
    },
    info: {
      hoverBackground: 'color-mix(in srgb, {sky.400}, transparent 96%)',
      activeBackground: 'color-mix(in srgb, {sky.400}, transparent 84%)',
      color: '{sky.400}'
    },
    warn: {
      hoverBackground: 'color-mix(in srgb, {orange.400}, transparent 96%)',
      activeBackground: 'color-mix(in srgb, {orange.400}, transparent 84%)',
      color: '{orange.400}'
    },
    help: {
      hoverBackground: 'color-mix(in srgb, {purple.400}, transparent 96%)',
      activeBackground: 'color-mix(in srgb, {purple.400}, transparent 84%)',
      color: '{purple.400}'
    },
    danger: {
      hoverBackground: 'color-mix(in srgb, {red.400}, transparent 96%)',
      activeBackground: 'color-mix(in srgb, {red.400}, transparent 84%)',
      color: '{red.400}'
    },
    contrast: {
      hoverBackground: '{surface.800}',
      activeBackground: '{surface.700}',
      color: '{surface.0}'
    },
    plain: {
      hoverBackground: '{surface.800}',
      activeBackground: '{surface.700}',
      color: '{surface.0}'
    }
  },
  link: {
    color: '{primary.color}',
    hoverColor: '{primary.color}',
    activeColor: '{primary.color}'
  }
}

export default darkColors
