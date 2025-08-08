const lightColors = {
  root: {
    shadow: '{form.field.shadow}',
    focusRing: {
      color: '{focus.ring.color}',
      shadow: '{focus.ring.shadow}'
    },
    borderColor: 'transparent',
    hoverBorderColor: 'transparent',
    checkedBorderColor: 'transparent',
    checkedHoverBorderColor: 'transparent',
    invalidBorderColor: '{form.field.invalid.border.color}',
    background: '{surface.300}',
    disabledBackground: '{form.field.disabled.background}',
    hoverBackground: '{surface.400}',
    checkedBackground: '{primary.color}',
    checkedHoverBackground: '{primary.hover.color}'
  },
  handle: {
    background: '{surface.0}',
    disabledBackground: '{form.field.disabled.color}',
    hoverBackground: '{surface.0}',
    checkedBackground: '{surface.0}',
    checkedHoverBackground: '{surface.0}',
    color: '{text.muted.color}',
    hoverColor: '{text.color}',
    checkedColor: '{primary.color}',
    checkedHoverColor: '{primary.hover.color}'
  }
}

export default lightColors