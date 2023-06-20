const colors = {
  white: '#ffffff',
  darkBackground: '#111111',
  lightBackground: '#fffffe',
  blue: '#3498db',
  lightGrey: '#bdc3c7',
  extraLightGrey: '#ededed',
  nearlyWhite: '#F4F8F7',
  grey: '#7f8c8d',
  textColor: '#1c1e21',
  primary: '#32d48e',
  red: '#e74c3c',
  beige: '#FEF5C3'
} as const;

export type ColorScheme = typeof colors;

export default colors;
