import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { colorPallete } from '@stream-io/video-react-native-sdk';
import { SafeAreaView } from 'react-native-safe-area-context';

export const AuthenticationProgress = () => {
  // TODO: support light mode
  const colors = colorPallete.dark;
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.sheet_secondary }]}
    >
      <ActivityIndicator
        size={'large'}
        color={colors.icon_alert_success}
        style={StyleSheet.absoluteFill}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
