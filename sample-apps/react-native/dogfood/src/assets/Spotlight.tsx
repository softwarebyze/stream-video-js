import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { ColorValue } from 'react-native/types';

type Props = {
  color: ColorValue;
  size: number;
};

export const SpotLight = ({ color, size }: Props) => (
  <Svg viewBox={`0 0 24 24`} width={size} height={size}>
    <Path
      fill={color}
      d="M5.88491 11.3003C4.82185 11.3003 4.28613 10.7646 4.28613 9.65965V5.91802C4.28613 4.81311 4.82185 4.28577 5.88491 4.28577H18.0975C19.1606 4.28577 19.6963 4.81311 19.6963 5.91802V9.65965C19.6963 10.7646 19.1606 11.3003 18.0975 11.3003H5.88491ZM5.88491 19.6959C4.82185 19.6959 4.28613 19.1686 4.28613 18.0637V14.3137C4.28613 13.2171 4.82185 12.6814 5.88491 12.6814H9.70187C10.7649 12.6814 11.3006 13.2171 11.3006 14.3137V18.0637C11.3006 19.1686 10.7649 19.6959 9.70187 19.6959H5.88491ZM14.2889 19.6959C13.2175 19.6959 12.6818 19.1686 12.6818 18.0637V14.3137C12.6818 13.2171 13.2175 12.6814 14.2889 12.6814H18.0975C19.1606 12.6814 19.6963 13.2171 19.6963 14.3137V18.0637C19.6963 19.1686 19.1606 19.6959 18.0975 19.6959H14.2889Z"
    />
  </Svg>
);
