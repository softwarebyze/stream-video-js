import React from 'react';
import { ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';

type Props = {
  fill?: ColorValue;
  height?: number;
  width?: number;
};

const EmailSvg = ({ fill, height, width }: Props) => (
  <Svg
    viewBox="0 0 20 16"
    fill="none"
    width={width ?? 20}
    height={height ?? 16}
  >
    <Path
      d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 7L2 2H18ZM18 14H2V4L10 9L18 4V14Z"
      fill={fill ?? '#fff'}
    />
  </Svg>
);
export default EmailSvg;
