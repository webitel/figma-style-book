const lightColor = {
  // dp colors
  'dp-surface-color': {
    1: 'hsl(225,20%,77%)',
    2: 'hsl(225,20%,78%)',
    3: 'hsl(225,20%,79%)',
    4: 'hsl(225,20%,80%)',
    5: 'hsl(225,20%,81%)',
    6: 'hsl(225,20%,82%)',
    7: 'hsl(225,20%,83%)',
    8: 'hsl(225,20%,84%)',
    9: 'hsl(225,20%,85%)',
    10: 'hsl(225,20%,86%)',
    11: 'hsl(225,20%,87%)',
    12: 'hsl(225,20%,88%)',
    13: 'hsl(225,20%,89%)',
    14: 'hsl(225,20%,90%)',
    15: 'hsl(225,20%,91%)',
    16: 'hsl(225,20%,92%)',
    17: 'hsl(225,20%,93%)',
    18: 'hsl(225,20%,94%)',
    19: 'hsl(225,20%,95%)',
    20: 'hsl(225,20%,96%)',
    21: 'hsl(225,20%,97%)',
    22: 'hsl(225,20%,98%)',
    23: 'hsl(225,20%,99%)',
    24: 'hsl(0,0%,100%)',
  },

  // surface color for primevue theme
  surface: {
    0: 'hsl(0, 0%, 100%)',
    50: 'hsl(225, 20%, 97%)',
    100: 'hsl(225, 20%, 94%)',
    200: 'hsl(225, 20%, 91%)',
    300: 'hsl(225, 20%, 88%)',
    400: 'hsl(225, 20%, 85%)',
    500: 'hsl(225, 20%, 82%)',
    600: 'hsl(225, 20%, 79%)',
    700: 'hsl(225, 20%, 77%)',
    800: 'hsl(225, 20%, 75%)',
    900: 'hsl(225, 20%, 72%)',
    950: 'hsl(225, 20%, 70%)',
    contrastColor: '{black}',
  },

  primary: {
    50: 'hsla(43, 97%, 95%, 1)',
    100: 'hsla(43, 97%, 90%, 1)',
    200: 'hsla(43, 97%, 80%, 1)',
    300: 'hsla(43, 97%, 70%, 1)',
    400: 'hsla(43, 97%, 60%, 1)',
    500: 'hsla(43, 97%, 50%, 1)',
    600: 'hsla(43, 97%, 40%, 1)',
    700: 'hsla(43, 97%, 30%, 1)',
    800: 'hsla(43, 97%, 20%, 1)',
    900: 'hsla(43, 97%, 15%, 1)',
    950: 'hsla(43, 97%, 10%, 1)',
    contrastColor: '{black}',
  },

  secondary: {
    50: 'hsla(225, 20%, 95%, 1)',
    100: 'hsla(225, 20%, 92%, 1)',
    200: 'hsla(225, 20%, 89%, 1)',
    300: 'hsla(225, 20%, 87%, 1)',
    400: 'hsla(225, 20%, 86%, 1)',
    500: 'hsla(225, 20%, 84%, 1)',
    600: 'hsla(225, 20%, 70%, 1)',
    700: 'hsla(225, 20%, 55%, 1)',
    800: 'hsla(225, 20%, 40%, 1)',
    900: 'hsla(225, 20%, 25%, 1)',
    950: 'hsla(225, 20%, 15%, 1)',
    contrastColor: '{black}',
  },

  success: {
    50: 'hsla(121, 75%, 90%, 1)',
    100: 'hsla(121, 75%, 80%, 1)',
    200: 'hsla(121, 75%, 65%, 1)',
    300: 'hsla(121, 75%, 50%, 1)',
    400: 'hsla(121, 75%, 42%, 1)',
    500: 'hsla(121, 75%, 35%, 1)',
    600: 'hsla(121, 75%, 30%, 1)',
    700: 'hsla(121, 75%, 25%, 1)',
    800: 'hsla(121, 75%, 20%, 1)',
    900: 'hsla(121, 75%, 15%, 1)',
    950: 'hsla(121, 75%, 10%, 1)',
    contrastColor: '{grey.lighten.5}',
  },

  info: {
    50: 'hsla(209, 75%, 95%, 1)',
    100: 'hsla(209, 75%, 88%, 1)',
    200: 'hsla(209, 75%, 76%, 1)',
    300: 'hsla(209, 75%, 64%, 1)',
    400: 'hsla(209, 75%, 57%, 1)',
    500: 'hsla(209, 75%, 50%, 1)',
    600: 'hsla(209, 75%, 42%, 1)',
    700: 'hsla(209, 75%, 34%, 1)',
    800: 'hsla(209, 75%, 26%, 1)',
    900: 'hsla(209, 75%, 18%, 1)',
    950: 'hsla(209, 75%, 12%, 1)',
    contrastColor: '{black}',
  },

  danger: {
    50: 'hsla(0, 90%, 97%, 1)',
    100: 'hsla(0, 90%, 90%, 1)',
    200: 'hsla(0, 90%, 80%, 1)',
    300: 'hsla(0, 90%, 72%, 1)',
    400: 'hsla(0, 90%, 68%, 1)',
    500: 'hsla(0, 90%, 65%, 1)',
    600: 'hsla(0, 90%, 55%, 1)',
    700: 'hsla(0, 90%, 45%, 1)',
    800: 'hsla(0, 90%, 35%, 1)',
    900: 'hsla(0, 90%, 25%, 1)',
    950: 'hsla(0, 90%, 15%, 1)',
    contrastColor: '{white}',
  },

  // Focus colors
  'focus-color': '{black}',

  // Primary colors
  'primary-color': '{amber-accent-3}',
  'primary-hover-color': '{amber-accent-2}',
  'primary-active-color': '{amber-accent-1}',
  'primary-light-color': '{amber-lighten-3}',
  'primary-on-color': '{grey-darken-4}',

  // Secondary colors
  'secondary-color': '{dp-surface-color-10}',
  'secondary-hover-color': '{dp-surface-color-14}',
  'secondary-active-color': '{dp-surface-color-16}',
  'secondary-light-color': '{dp-surface-color-16}',
  'secondary-on-color': '{grey-darken-4}',

  // Success colors
  'success-color': '{green-darken-4}',
  'success-hover-color': '{green-darken-3}',
  'success-active-color': '{green-darken-2}',
  'success-light-color': '{green-lighten-3}',
  'success-on-color': '{white}',

  // Warning colors
  'warning-color': '{orange-accent-2}',
  'warning-hover-color': '{orange-accent-1}',
  'warning-active-color': '{orange-lighten-3}',
  'warning-light-color': '{orange-lighten-3}',
  'warning-on-color': '{white}',

  // Error colors
  'error-color': '{red-lighten-1}',
  'error-hover-color': '{red-lighten-2}',
  'error-active-color': '{red-lighten-3}',
  'error-light-color': '{red-lighten-3}',
  'error-on-color': '{white}',

  // Info colors
  'info-color': '{light-blue-darken-1}',
  'info-hover-color': '{light-blue-lighten-1}',
  'info-active-color': '{light-blue-lighten-2}',
  'info-light-color': '{light-blue-lighten-4}',
  'info-on-color': '{white}',

  // Task colors
  'task-color': '{blue-darken-1}',
  'task-hover-color': '{blue-lighten-1}',
  'task-active-color': '{blue-lighten-2}',
  'task-light-color': '{blue-lighten-4}',
  'task-on-color': '{white}',

  // Transfer colors
  'transfer-color': '{indigo-lighten-1}',
  'transfer-hover-color': '{indigo-lighten-2}',
  'transfer-active-color': '{indigo-lighten-3}',
  'transfer-light-color': '{indigo-lighten-4}',
  'transfer-on-color': '{white}',

  // Chat colors
  'chat-color': '{indigo-accent-2}',
  'chat-hover-color': '{indigo-accent-1}',
  'chat-active-color': '{indigo-lighten-3}',
  'chat-light-color': '{indigo-lighten-4}',
  'chat-on-color': '{white}',

  // Email colors
  'email-color': '{blue-darken-3}',
  'email-hover-color': '{blue-darken-2}',
  'email-light-color': '{blue-lighten-2}',
  'email-on-color': '{black}',

  // accent colors
  'accent-color': '{purple-lighten-1}',
  'sub-accent-color': '{indigo-darken-3}',

  // content wrapper
  'content-wrapper-color': '{dp-surface-color-20}',
};

export default lightColor;
