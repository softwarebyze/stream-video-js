import React from 'react';
import {
  ColorValue,
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#0000000D',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  svgContainerStyle: {
    width: 25,
    height: 25,
  },
});

type ColorKey = 'callToAction' | 'activated' | 'deactivated' | 'cancel';

const colorKeyToBgColor = (colorKey: ColorKey): ColorValue => {
  switch (colorKey) {
    case 'callToAction':
      return '#20E070';
    case 'activated':
      return '#FFFFFF';
    case 'deactivated':
      return '#00000066';
    case 'cancel':
      return '#FF3742';
  }
};

type Props = {
  onPress: PressableProps['onPress'];
  colorKey: ColorKey;
  size?: number;
  svgContainerStyle?: StyleProp<ViewStyle>;
};

const ButtonContainer = (props: React.PropsWithChildren<Props>) => {
  const { onPress, children, colorKey, size, svgContainerStyle } = props;

  const style: PressableProps['style'] = ({ pressed }) => [
    styles.container,
    {
      backgroundColor: colorKeyToBgColor(colorKey),
      opacity: pressed ? 0.2 : 1,
    },
    size
      ? {
          height: size,
          width: size,
          borderRadius: size,
        }
      : null,
  ];
  return (
    <Pressable style={style} onPress={onPress}>
      <View style={[styles.svgContainerStyle, svgContainerStyle ?? null]}>
        {children}
      </View>
    </Pressable>
  );
};

export default ButtonContainer;
