const sizes = {
  root: {
    transitionDuration: '{transition.duration}'
  },
  track: {
    borderRadius: '{content.border.radius}',
    size: '3px'
  },
  handle: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    content: {
      borderRadius: '50%',
      width: '16px',
      height: '16px',
    },
    focusRing: {
      width: '{focus.ring.width}',
      style: '{focus.ring.style}',
      offset: '{focus.ring.offset}',
    }
  }
}

export default sizes