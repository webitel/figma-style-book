const lightColors = {
  root: {
    borderColor: '{content.border.color}'
  },
  header: {
    background: '{content.background}',
    borderColor: '{datatable.border.borderColor}',
    color: '{content.color}',
  },
  headerCell: {
    background: '{content.background}',
    hoverBackground: '{content.hover.background}',
    selectedBackground: '{highlight.background}',
    borderColor: '{datatable.border.color}',
    color: '{content.color}',
    hoverColor: '{content.hover.color}',
    selectedColor: '{highlight.color}',
    focusRing: {
      color: '{focus.ring.color}',
      shadow: '{focus.ring.shadow}'
    }
  },
  row: {
    stripedBackground: '{surface.50}',
    background: '{content.background}',
    hoverBackground: '{content.hover.background}',
    selectedBackground: '{highlight.background}',
    color: '{content.color}',
    hoverColor: '{content.hover.color}',
    selectedColor: '{highlight.color}',
    focusRing: {
      color: '{focus.ring.color}',
      shadow: '{focus.ring.shadow}'
    }
  },
  bodyCell: {
    borderColor: '{datatable.border.color}',
    selectedBorderColor: '{primary.100}'
  },
  footerCell: {
    background: '{content.background}',
    borderColor: '{datatable.border.color}',
    color: '{content.color}',
  },
  footer: {
    background: '{content.background}',
    borderColor: '{datatable.border.color}',
    color: '{content.color}',
  },
  resizeIndicator: {
    color: '{primary.color}'
  },
  filter: {
    overlaySelect: {
        background: '{overlay.select.background}',
        borderColor: '{overlay.select.border.color}',
        color: '{overlay.select.color}',
        shadow: '{overlay.select.shadow}'
    },
    overlayPopover: {
        background: '{overlay.popover.background}',
        borderColor: '{overlay.popover.border.color}',
        color: '{overlay.popover.color}',
        shadow: '{overlay.popover.shadow}',
    },
    rule: {
        borderColor: '{content.border.color}'
    },
    constraint: {
        focusBackground: '{list.option.focus.background}',
        selectedBackground: '{list.option.selected.background}',
        selectedFocusBackground: '{list.option.selected.focus.background}',
        color: '{list.option.color}',
        focusColor: '{list.option.focus.color}',
        selectedColor: '{list.option.selected.color}',
        selectedFocusColor: '{list.option.selected.focus.color}',
        separator: {
            borderColor: '{content.border.color}'
        },
    }
  },
  sortIcon: {
    color: '{text.muted.color}',
    hoverColor: '{text.hover.muted.color}',
  }
}

export default lightColors