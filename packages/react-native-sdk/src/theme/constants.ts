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

const darkColorPrimitives = {
  primary: {
    '70': {
      value: '#4c8fff',
    },
    '100': {
      value: '#005fff',
    },
    '150': {
      value: '#123d82',
    },
    '180': {
      value: '#1b2c43',
    },
  },
  secondary: {
    '60': {
      value: '#a5effa',
    },
    '100': {
      value: '#69e5f6',
    },
    '140': {
      value: '#448592',
    },
    '180': {
      value: '#263942',
    },
  },
  tertiary: {
    '60': {
      value: '#d1b9fb',
    },
    '100': {
      value: '#b38af8',
    },
    '170': {
      value: '#4b446b',
    },
    '190': {
      value: '#2d3042',
    },
  },
  success: {
    '60': {
      value: '#66eec7',
    },
    '100': {
      value: '#00e2a1',
    },
    '150': {
      value: '#12715c',
    },
    '190': {
      value: '#1d2f34',
    },
  },
  caution: {
    '60': {
      value: '#ffe690',
    },
    '100': {
      value: '#ffd646',
    },
    '150': {
      value: '#786c38',
    },
    '180': {
      value: '#353830',
    },
  },
  warning: {
    '70': {
      value: '#e77b76',
    },
    '100': {
      value: '#dc433b',
    },
    '150': {
      value: '#7d3535',
    },
    '190': {
      value: '#31292f',
    },
  },
  neutral: {
    '0': {
      value: '#eff0f1',
    },
    '10': {
      value: '#e3e4e5',
    },
    '20': {
      value: '#caccce',
    },
    '30': {
      value: '#b0b4b7',
    },
    '40': {
      value: '#979ca0',
    },
    '50': {
      value: '#7e8389',
    },
    '60': {
      value: '#656b72',
    },
    '70': {
      value: '#4c535b',
    },
    '80': {
      value: '#323b44',
    },
    '90': {
      value: '#19232d',
    },
    '100': {
      value: '#0d1721',
    },
    '110': {
      value: '#101213',
    },
    '120': {
      value: '#000000',
    },
  },
};

type ColorPrimitive = typeof darkColorPrimitives;

const getColorVariables = (
  colorPrimitives: ColorPrimitive,
  manualColors: {
    sheetOverlay: string;
    buttonSecondaryDisabled: string;
    buttonTertiaryDisabled: string;
  },
) => {
  return {
    sheet_primary: colorPrimitives.neutral['120'].value,
    sheet_secondary: colorPrimitives.neutral['110'].value,
    sheet_tertiary: colorPrimitives.neutral['90'].value,
    sheet_overlay: manualColors.sheetOverlay,
    container_primary: colorPrimitives.primary['180'].value,
    container_secondary: colorPrimitives.secondary['180'].value,
    container_tertiary: colorPrimitives.tertiary['190'].value,
    container_success: colorPrimitives.success['190'].value,
    container_caution: colorPrimitives.caution['180'].value,
    container_warning: colorPrimitives.warning['190'].value,
    container_neutral: colorPrimitives.neutral['80'].value,
    type_primary: colorPrimitives.neutral['0'].value,
    type_secondary: colorPrimitives.neutral['30'].value,
    type_tertiary: colorPrimitives.neutral['60'].value,
    type_quaternary: colorPrimitives.neutral['110'].value,
    icon_primary_accent: colorPrimitives.primary['100'].value,
    icon_primary_default: colorPrimitives.neutral['0'].value,
    icon_primary_hover: colorPrimitives.neutral['30'].value,
    icon_primary_pressed: colorPrimitives.neutral['60'].value,
    icon_primary_disabled: colorPrimitives.neutral['50'].value,
    icon_alert_warning: colorPrimitives.warning['100'].value,
    icon_alert_caution: colorPrimitives.caution['100'].value,
    icon_alert_success: colorPrimitives.success['100'].value,
    button_primary_default: colorPrimitives.primary['100'].value,
    button_primary_hover: colorPrimitives.primary['70'].value,
    button_primary_pressed: colorPrimitives.primary['150'].value,
    button_primary_disabled: colorPrimitives.primary['180'].value,
    button_secondary_default: colorPrimitives.neutral['90'].value,
    button_secondary_hover: colorPrimitives.neutral['80'].value,
    button_secondary_pressed: colorPrimitives.neutral['110'].value,
    button_secondary_active_default: colorPrimitives.primary['100'].value,
    button_secondary_active_hover: colorPrimitives.primary['70'].value,
    button_secondary_active_pressed: colorPrimitives.primary['150'].value,
    button_secondary_disabled: manualColors.buttonSecondaryDisabled,
    button_secondary_warning_default: colorPrimitives.warning['100'].value,
    button_secondary_warning_hover: colorPrimitives.warning['70'].value,
    button_secondary_warning_pressed: colorPrimitives.warning['150'].value,
    button_tertiary_stroke: colorPrimitives.neutral['80'].value,
    button_tertiary_hover: colorPrimitives.neutral['70'].value,
    button_tertiary_pressed: colorPrimitives.neutral['110'].value,
    button_tertiary_active: colorPrimitives.neutral['90'].value,
    button_tertiary_disabled: manualColors.buttonTertiaryDisabled,
    button_quaternary_default: colorPrimitives.warning['100'].value,
    button_quaternary_hover: colorPrimitives.warning['70'].value,
    button_quaternary_pressed: colorPrimitives.warning['150'].value,
    button_quaternary_disabled: colorPrimitives.warning['190'].value,
  };
};

const colorVariablesDark = getColorVariables(darkColorPrimitives, {
  sheetOverlay: 'rgba(12, 13, 14, 0.6500)',
  buttonSecondaryDisabled: 'rgba(30, 38, 46, 0.1600)',
  buttonTertiaryDisabled: 'rgba(30, 38, 46, 0.1600)',
});

export type ColorVariablesType = ReturnType<typeof getColorVariables>;

const { palette } = ref;
export { palette, colorVariablesDark };
