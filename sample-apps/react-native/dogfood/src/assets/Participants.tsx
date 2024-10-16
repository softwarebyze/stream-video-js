import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { ColorValue } from 'react-native/types';

type Props = {
  color: ColorValue;
  size: number;
};

const Participants = ({ color, size }: Props) => (
  <Svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
    <Path
      d="M18.667 12.8334C20.6037 12.8334 22.1553 11.27 22.1553 9.33337C22.1553 7.39671 20.6037 5.83337 18.667 5.83337C16.7303 5.83337 15.167 7.39671 15.167 9.33337C15.167 11.27 16.7303 12.8334 18.667 12.8334ZM9.33366 12.8334C11.2703 12.8334 12.822 11.27 12.822 9.33337C12.822 7.39671 11.2703 5.83337 9.33366 5.83337C7.39699 5.83337 5.83366 7.39671 5.83366 9.33337C5.83366 11.27 7.39699 12.8334 9.33366 12.8334ZM9.33366 15.1667C6.61533 15.1667 1.16699 16.5317 1.16699 19.25V21C1.16699 21.6417 1.69199 22.1667 2.33366 22.1667H16.3337C16.9753 22.1667 17.5003 21.6417 17.5003 21V19.25C17.5003 16.5317 12.052 15.1667 9.33366 15.1667ZM18.667 15.1667C18.3287 15.1667 17.9437 15.19 17.5353 15.225C17.5587 15.2367 17.5703 15.26 17.582 15.2717C18.912 16.24 19.8337 17.535 19.8337 19.25V21C19.8337 21.4084 19.752 21.805 19.6237 22.1667H25.667C26.3087 22.1667 26.8337 21.6417 26.8337 21V19.25C26.8337 16.5317 21.3853 15.1667 18.667 15.1667Z"
      fill={color}
    />
  </Svg>
);

export default Participants;
