import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { ColorValue } from 'react-native/types';

type Props = {
  color: ColorValue;
  size: number;
};

const Stats = ({ color, size }: Props) => (
  <Svg viewBox={`0 0 24 24`} width={size} height={size}>
    <Path
      d="M19.8836 17.9604C20.3636 17.1904 20.6336 16.2904 20.5736 15.3004C20.4436 13.1504 18.7336 11.3304 16.6036 11.1004C13.8836 10.8004 11.5836 12.9104 11.5836 15.5704C11.5836 18.0604 13.5936 20.0704 16.0736 20.0704C16.9536 20.0704 17.7736 19.8104 18.4636 19.3704L20.8736 21.7804C21.2636 22.1704 21.9036 22.1704 22.2936 21.7804C22.6836 21.3904 22.6836 20.7504 22.2936 20.3604L19.8836 17.9604ZM16.0836 18.0704C14.7036 18.0704 13.5836 16.9504 13.5836 15.5704C13.5836 14.1904 14.7036 13.0704 16.0836 13.0704C17.4636 13.0704 18.5836 14.1904 18.5836 15.5704C18.5836 16.9504 17.4636 18.0704 16.0836 18.0704ZM15.7236 9.57041C14.9836 9.59041 14.2736 9.75041 13.6236 10.0204L13.0736 9.19041L9.99365 14.2004C9.63365 14.7804 8.82365 14.8404 8.38365 14.3304L6.26365 11.8604L3.20365 16.7604C2.89365 17.2504 2.23365 17.3804 1.76365 17.0404C1.34365 16.7304 1.22365 16.1504 1.50365 15.7004L5.28365 9.65041C5.64365 9.08041 6.45365 9.02041 6.89365 9.53041L9.00365 11.9904L12.1836 6.82041C12.5636 6.20041 13.4636 6.18041 13.8636 6.79041L15.7236 9.57041ZM18.3136 10.0704C17.6736 9.79041 16.9836 9.62041 16.2636 9.58041L20.8036 2.39041C21.1136 1.90041 21.7736 1.78041 22.2336 2.12041C22.6636 2.43041 22.7736 3.02041 22.4936 3.46041L18.3136 10.0704Z"
      fill={color}
    />
  </Svg>
);

export default Stats;
