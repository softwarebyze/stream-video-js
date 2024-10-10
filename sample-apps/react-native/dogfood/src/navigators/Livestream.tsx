import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LiveStreamParamList } from '../../types';
import { LiveStreamChooseScreen } from '../screens/LiveStream';
import { HostLiveStreamScreen } from '../screens/LiveStream/HostLiveStream';
import { ViewLiveStreamScreen } from '../screens/LiveStream/ViewLiveStream';
import { NavigationHeader } from '../components/NavigationHeader';
import { JoinLiveStream } from '../screens/LiveStream/JoinLiveStream';
import HumandTest from '../screens/LiveStream/HumandTest';

const LiveStreamStack = createNativeStackNavigator<LiveStreamParamList>();

export const LiveStream = () => {
  return <HumandTest />;
};
