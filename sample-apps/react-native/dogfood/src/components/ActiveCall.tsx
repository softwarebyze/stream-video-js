import React, { useCallback, useEffect, useState, useMemo } from 'react';
import {
  useCall,
  CallContent,
  useTheme,
} from '@stream-io/video-react-native-sdk';
import { ActivityIndicator, StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ParticipantsInfoList } from './ParticipantsInfoList';
import {
  CallControlsComponent,
  BottomControlsProps,
} from './CallControlls/BottomControls';
import { useOrientation } from '../hooks/useOrientation';
import { Z_INDEX } from '../constants';
import { TopControls } from './CallControlls/TopControls';

type ActiveCallProps = BottomControlsProps & {
  onBackPressed?: () => void;
  onHangupCallHandler?: () => void;
  onCallEnded: () => void;
};

export const ActiveCall = ({
  onChatOpenHandler,
  onBackPressed,
  onHangupCallHandler,
  onCallEnded,
  unreadCountIndicator,
}: ActiveCallProps) => {
  const [isCallParticipantsVisible, setIsCallParticipantsVisible] =
    useState<boolean>(false);
  const call = useCall();
  const currentOrientation = useOrientation();
  const styles = useStyles();
  const { theme: colors } = useTheme();

  const onOpenCallParticipantsInfo = useCallback(() => {
    setIsCallParticipantsVisible(true);
  }, []);

  useEffect(() => {
    return call?.on('call.ended', () => {
      onCallEnded();
    });
  }, [call, onCallEnded]);

  const CustomControlsComponent = useCallback(() => {
    return (
      <CallControlsComponent
        onParticipantInfoPress={onOpenCallParticipantsInfo}
        onChatOpenHandler={onChatOpenHandler}
        unreadCountIndicator={unreadCountIndicator}
      />
    );
  }, [onChatOpenHandler, onOpenCallParticipantsInfo, unreadCountIndicator]);

  if (!call) {
    return <ActivityIndicator size={'large'} style={StyleSheet.absoluteFill} />;
  }

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={colors.sheetPrimary}
      />
      <View style={styles.topUnsafeArea} />
      <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
        <CallContent
          onBackPressed={onBackPressed}
          onHangupCallHandler={onHangupCallHandler}
          CallTopView={TopControls}
          CallControls={CustomControlsComponent}
          landscape={currentOrientation === 'landscape'}
        />
        <ParticipantsInfoList
          isCallParticipantsInfoVisible={isCallParticipantsVisible}
          setIsCallParticipantsInfoVisible={setIsCallParticipantsVisible}
        />
      </SafeAreaView>
      <View style={styles.bottomUnsafeArea} />
    </View>
  );
};

const useStyles = () => {
  const { theme } = useTheme();

  return useMemo(
    () =>
      StyleSheet.create({
        container: { flex: 1 },
        callContent: { flex: 1 },
        safeArea: { flex: 1, paddingBottom: theme.variants.insets.bottom },
        topUnsafeArea: {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: theme.variants.insets.top,
          backgroundColor: theme.colors.sheetPrimary,
          zIndex: Z_INDEX.IN_FRONT,
        },
        bottomUnsafeArea: {
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: theme.variants.insets.bottom,
          backgroundColor: theme.colors.sheetPrimary,
        },
        view: {
          ...StyleSheet.absoluteFillObject,
          zIndex: Z_INDEX.IN_FRONT,
        },
      }),
    [theme],
  );
};
