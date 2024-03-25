const ref = {
  palette: {
    green50: '#F6FEF9',
    green100: '#E9F1FF',
    green200: '#A6F2C6',
    green300: '#79ECA9',
    green400: '#4CE68C',
    green500: '#20E070',
    green600: '#19B359',
    green700: '#138643',
    green800: '#0D592C',
    green900: '#062D16',
    green950: '#041B0D',
    blue50: '#F5FAFF',
    blue100: '#E0F0FF',
    blue200: '#CCDFFF',
    blue300: '#669FFF',
    blue400: '#337EFF',
    blue500: '#005FFF',
    blue600: '#004CCC',
    blue700: '#003999',
    blue800: '#002666',
    blue900: '#00163D',
    blue950: '#000D24',
    red50: '#FFF5F5',
    red100: '#FFE5E7',
    red200: '#FF999F',
    red300: '#FF666E',
    red400: '#FF3742',
    red500: '#FF000E',
    red600: '#CC000B',
    red700: '#990008',
    red800: '#660006',
    red900: '#330003',
    red950: '#1F0002',
    grey50: '#FFFFFF',
    grey100: '#F7F7F8',
    grey200: '#E9EAED',
    grey300: '#DBDDE1',
    grey400: '#B4B7BB',
    grey500: '#72767E',
    grey600: '#4C525C',
    grey700: '#272A30',
    grey800: '#1C1E22',
    grey900: '#121416',
    grey950: '#080707',
  },
};

// aligned with packages/styling/src/_global-theme-variables.scss
const paletteV2 = {
  // Brand colors
  brandColor1: '#005fff',
  brandColor2: '#69e5f6',
  brandColor3: '#00e2a1',
  brandColor4: '#ffd646',
  brandColor5: '#dc433b',
  brandColor6: '#b38af8',
  // Base colors
  baseColor1: '#e3e4e5',
  baseColor2: '#979ca0',
  baseColor3: '#4c535b',
  baseColor4: '#000000',
  baseColor5: '#0c0d0e',
  baseColor6: '#19232d',
  baseColor7: '#101213',

  // Backdrops
  backdrop1: 'rgba(0, 0, 0, 0.5)',

  // Button colors:
  buttonDefaultBase: '#19232d',
  buttonDefaultHover: '#4c535b',
  buttonDefaultPressed: '#0c0d0e',
  buttonDefaultActive: '#19232d',
  buttonDefaultDisabled: '#1e262e',

  buttonPrimaryBase: '#19232d',
  buttonPrimaryHover: '#4c8fff',
  buttonPrimaryPressed: '#0c48ab',
  buttonPrimaryActive: '#005fff',

  buttonSecondaryBase: '#19232d',
  buttonSecondaryHover: '#e96962',
  buttonSecondaryPressed: '#6a3233',
  buttonSecondaryActive: '#dc433b',

  buttonTertiaryBase: '#dc433b',
  buttonTertiaryHover: '#e96962',
  buttonTertiaryPressed: '#6a3233',
  buttonTertiaryActive: '#31292f',

  // Icon colors:
  iconDefault: '#b0b4b7',
  iconHover: '#e3e4e5',
  iconPressed: '#656b72',
  iconActive: '#005fff',
  iconAlert: '#dc433b',
  iconDisabled: '#323b44',

  // Alerts colors:
  alertSuccess: '#00e2a1',
  alertCaution: '#ffd646',
  alertWarning: '#dc433b',

  // Alerts backgrounds:
  alertSuccessBackground: 'rgba(0, 226, 161, 0.5)',
  alertCautionBackground: 'rgba(255, 214, 70, 0.5)',
  alertWarningBackground: 'rgba(220, 67, 59, 0.5)',
};

const { palette } = ref;
export { palette, paletteV2 };
