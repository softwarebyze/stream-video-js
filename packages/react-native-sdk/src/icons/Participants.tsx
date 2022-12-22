import { Svg, Path } from 'react-native-svg';

type Props = {
  color: string;
};

export const Participants = ({ color }: Props) => (
  <Svg viewBox="0 0 23 20">
    <Path
      clipRule="evenodd"
      d="M 11 8 C 13.2091 8 15 6.20914 15 4 C 15 1.79086 13.2091 0 11 0 C 8.79086 0 7 1.79086 7 4 C 7 6.20914 8.79086 8 11 8 Z M 5.5 1 C 3.567 1 2 2.567 2 4.5 C 2 6.433 3.567 8 5.5 8 C 6.05228 8 6.5 7.55228 6.5 7 C 6.5 6.44772 6.05228 6 5.5 6 C 4.67157 6 4 5.32843 4 4.5 C 4 3.67157 4.67157 3 5.5 3 C 6.05228 3 6.5 2.55228 6.5 2 C 6.5 1.44772 6.05228 1 5.5 1 Z M 4 16 C 4 12.134 7.13401 9 11 9 C 14.866 9 18 12.134 18 16 C 18 16.397 17.9669 16.7869 17.903 17.1671 C 17.6021 18.9581 13 19.5 11 19.5 C 9 19.5 4.41865 19.0753 4.09763 17.1708 C 4.03335 16.7894 4 16.3982 4 16 Z M 3.85402 10.7725 C 4.28304 10.4247 4.34889 9.79494 4.0011 9.36592 C 3.6533 8.9369 3.02357 8.87105 2.59455 9.21884 C 1.01345 10.5006 0 12.4618 0 14.659 C 0 15.0572 0.0333547 15.4484 0.0976325 15.8297 C 0.18943 16.3743 0.705335 16.7414 1.24994 16.6496 C 1.79454 16.5578 2.16161 16.0419 2.06981 15.4973 C 2.02397 15.2253 2 14.9453 2 14.659 C 2 13.0903 2.72123 11.6908 3.85402 10.7725 Z M 20.5 4.5 C 20.5 2.567 18.933 1 17 1 C 16.4477 1 16 1.44772 16 2 C 16 2.55228 16.4477 3 17 3 C 17.8284 3 18.5 3.67157 18.5 4.5 C 18.5 5.32843 17.8284 6 17 6 C 16.4477 6 16 6.44772 16 7 C 16 7.55228 16.4477 8 17 8 C 18.933 8 20.5 6.433 20.5 4.5 Z M 18.3703 10.7725 C 17.9413 10.4247 17.8755 9.79494 18.2233 9.36592 C 18.5711 8.9369 19.2008 8.87105 19.6298 9.21884 C 21.2109 10.5006 22.2244 12.4618 22.2244 14.659 C 22.2244 15.0572 22.191 15.4484 22.1267 15.8297 C 22.0349 16.3743 21.519 16.7414 20.9744 16.6496 C 20.4298 16.5578 20.0628 16.0419 20.1546 15.4973 C 20.2004 15.2253 20.2244 14.9453 20.2244 14.659 C 20.2244 13.0903 19.5031 11.6908 18.3703 10.7725 Z"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
);
