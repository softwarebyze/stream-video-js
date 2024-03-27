import { colors, darkThemeColors } from './colors';
import { colorVariablesDark } from './constants';
import { Theme, ThemeV2 } from './types';

export const colorPallet: Theme = {
  light: colors,
  dark: darkThemeColors,
};

export const colorPallete: ThemeV2 = {
  dark: colorVariablesDark,
};

export * from './theme';
