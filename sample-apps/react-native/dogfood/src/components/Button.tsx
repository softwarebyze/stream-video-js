import React, { useMemo } from 'react';
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { BUTTON_HEIGHT } from '../constants';
import {
  Theme,
  defaultTheme,
  useTheme,
} from '@stream-io/video-react-native-sdk';

type ButtonPropTypes = Omit<PressableProps, 'style'> & {
  title: string;
  buttonStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
};

export const Button = ({
  disabled,
  title,
  buttonStyle,
  titleStyle,
  ...rest
}: ButtonPropTypes) => {
  const styles = useStyles();

  return (
    <Pressable
      disabled={disabled}
      {...rest}
      style={[
        styles.button,
        disabled ? styles.disabledButtonStyle : null,
        buttonStyle,
      ]}
    >
      <Text style={[styles.buttonText, titleStyle]}>{title}</Text>
    </Pressable>
  );
};

const useStyles = () => {
  let appTheme: Theme;
  try {
    appTheme = useTheme()?.theme;
  } catch (e) {
    appTheme = defaultTheme;
  }

  return useMemo(
    () =>
      StyleSheet.create({
        button: {
          backgroundColor: appTheme.colors.primary,
          justifyContent: 'center',
          borderRadius: 8,
          height: BUTTON_HEIGHT,
          paddingHorizontal: appTheme.variants.spacingSizes.md,
        },
        buttonText: {
          color: appTheme.colors.static_white,
          fontWeight: appTheme.typefaces.heading6.fontWeight,
          textAlign: 'center',
          fontSize: 17,
        },
        disabledButtonStyle: {
          backgroundColor: appTheme.colors.disabled,
        },
      }),
    [appTheme],
  );
};
