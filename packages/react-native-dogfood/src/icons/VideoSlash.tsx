import * as React from 'react';
import {Svg, Path} from 'react-native-svg';

type Props = {
  color: string;
};

const VideoSlash = ({color}: Props) => (
  <Svg viewBox="0 0 30 25">
    <Path
      d="M22.4886 24.1679C22.8345 24.5139 23.4037 24.5139 23.7497 24.1679C24.0845 23.8219 24.0957 23.2639 23.7497 22.9067L1.81892 0.998256C1.4841 0.652274 0.903739 0.652274 0.557757 0.998256C0.222935 1.34424 0.222935 1.9246 0.557757 2.25942L22.4886 24.1679ZM17.5555 3.35317H6.14927L21.1604 18.3643C21.2274 18.0407 21.2609 17.6166 21.2609 17.2259V7.06968C21.2609 4.70361 19.9662 3.35317 17.5555 3.35317ZM22.9015 16.1433L26.7073 19.4246C27.1761 19.8264 27.656 20.0831 28.1359 20.0831C29.0399 20.0831 29.6537 19.4358 29.6537 18.4536V6.70138C29.6537 5.71924 29.0399 5.07192 28.1359 5.07192C27.656 5.07192 27.1761 5.32861 26.7073 5.7304L22.9015 9.01165V16.1433ZM5.72517 21.746H18.0801L2.13142 5.79736C2.00865 6.10986 1.94169 6.61209 1.94169 7.10317V18.0853C1.94169 20.4402 3.31445 21.746 5.72517 21.746Z"
      fill={color}
    />
  </Svg>
);

export default VideoSlash;
