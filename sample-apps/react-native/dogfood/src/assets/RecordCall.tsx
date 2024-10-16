import React from 'react';
import { ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';

type Props = {
  color: ColorValue;
  size: number;
};

const RecordCall = ({ color, size }: Props) => (
  <Svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
    <Path
      d="M13.9997 2.33337C7.55967 2.33337 2.33301 7.56004 2.33301 14C2.33301 20.44 7.55967 25.6667 13.9997 25.6667C20.4397 25.6667 25.6663 20.44 25.6663 14C25.6663 7.56004 20.4397 2.33337 13.9997 2.33337ZM13.9997 23.3334C8.84301 23.3334 4.66634 19.1567 4.66634 14C4.66634 8.84337 8.84301 4.66671 13.9997 4.66671C19.1563 4.66671 23.333 8.84337 23.333 14C23.333 19.1567 19.1563 23.3334 13.9997 23.3334Z"
      fill={color}
    />
    <Path
      d="M13.9997 19.8334C17.2213 19.8334 19.833 17.2217 19.833 14C19.833 10.7784 17.2213 8.16671 13.9997 8.16671C10.778 8.16671 8.16634 10.7784 8.16634 14C8.16634 17.2217 10.778 19.8334 13.9997 19.8334Z"
      fill={color}
    />
  </Svg>
);

export default RecordCall;
