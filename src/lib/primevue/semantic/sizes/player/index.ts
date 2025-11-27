export default {
  counter: {
    padding: '0.25rem',
    gap: '0.25rem',
    borderRadius: '{border-radius.xl}',
    positionPadding: {
      sm: '0.5rem',
      md: '1rem',
      lg: '1rem',
    }
  },
  camPreview: {
    sm: {
      borderRadius: '{border-radius.sm}',
      width: '56px',
      height: '37px',
    },
    md: {
      borderRadius: '{border-radius.xl}',
      width: '108px',
      height: '72px',
    },
    lg: {
      borderRadius: '{border-radius.xl}',
      width: '128px',
      height: '85px',
    },
  },
  wrapper: {
    sm: {
      borderRadius: '{border-radius.lg}',
      width: '256px',
      height: '201px',
      aspectRatio: 256 / 201,   // aspect ratio of width / height, need for css
    },
    md: {
      borderRadius: '{border-radius.xl}',
      width: '740px',
      height: '494px',
    },
    lg: {
      borderRadius: '{border-radius.none}',
      width: '100%',
      height: '100%',
    },
  },
  headline: {
    sm: {
      borderRadius: '{border-radius.lg}',
      padding: '0.5rem',
      gap: '0.5rem',
    },
    md: {
      borderRadius: '{border-radius.xl}',
      padding: '1rem',
      gap: '1rem',
    },
    lg: {
      borderRadius: '{border-radius.none}',
      padding: '1rem',
      gap: '1rem',
    },
  },
  controlBar: {
    sm: {
      borderRadius: '{border-radius.lg}',
      padding: '0.5rem',
      gap: '0.5rem',
      height: '48px'
    },
    md: {
      borderRadius: '{border-radius.xl}',
      padding: '1rem',
      gap: '1rem',
    },
    lg: {
      borderRadius: '{border-radius.xl}',
      padding: '1rem',
      gap: '1rem',
    },
    positionPadding: {
      sm: '0',
      md: '1rem',
      lg: '1rem',
    }
  },
}
