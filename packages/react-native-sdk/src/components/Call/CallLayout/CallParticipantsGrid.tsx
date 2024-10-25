import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { useCallStateHooks } from '@stream-io/video-react-bindings';
import { useDebouncedValue } from '../../../utils/hooks/useDebouncedValue';
import {
  CallParticipantsList as DefaultCallParticipantsList,
  CallParticipantsListComponentProps,
} from '../CallParticipantsList/CallParticipantsList';
import { ComponentTestIds } from '../../../constants/TestIds';
import { useTheme } from '../../../contexts/ThemeContext';
import { CallContentProps } from '../CallContent';
import { ParticipantViewComponentProps } from '../../Participant';
import { useIsInPiPMode } from '../../../hooks/useIsInPiPMode';
import { StreamVideoParticipant } from '@stream-io/video-client';
import { generateMockParticipants } from '.';

/**
 * Props for the CallParticipantsGrid component.
 */
export type CallParticipantsGridProps = ParticipantViewComponentProps &
  Pick<
    CallContentProps,
    'supportedReactions' | 'CallParticipantsList' | 'disablePictureInPicture'
  > &
  Pick<CallParticipantsListComponentProps, 'ParticipantView'> & {
    /**
     * Check if device is in landscape mode.
     * This will apply the landscape mode styles to the component.
     */
    landscape?: boolean;
  };

/**
 * Component used to display the list of participants in a grid mode.
 */
export const CallParticipantsGrid = ({
  CallParticipantsList = DefaultCallParticipantsList,
  ParticipantLabel,
  ParticipantNetworkQualityIndicator,
  ParticipantReaction,
  ParticipantVideoFallback,
  ParticipantView,
  VideoRenderer,
  supportedReactions,
  landscape,
  disablePictureInPicture,
}: CallParticipantsGridProps) => {
  const {
    theme: { colors, callParticipantsGrid },
  } = useTheme();
  const { useRemoteParticipants, useParticipants, useLocalParticipant } =
    useCallStateHooks();
  const _remoteParticipants = useRemoteParticipants();
  const localParticipant = useLocalParticipant();
  const _allParticipants = useParticipants();
  // we debounce the participants arrays to avoid unnecessary rerenders that happen when participant tracks are all subscribed simultaneously
  const remoteParticipants = useDebouncedValue(_remoteParticipants, 300);
  const allParticipants = useDebouncedValue(_allParticipants, 300);
  const landscapeStyles: ViewStyle = {
    flexDirection: landscape ? 'row' : 'column',
  };

  let participants = allParticipants;
  // console.log('🚀 ~ participants:', participants);
  // let participants = generateMockParticipants(9);

  const isInPiPMode = useIsInPiPMode(disablePictureInPicture);
  if (isInPiPMode) {
    participants =
      remoteParticipants.length > 0
        ? [remoteParticipants[0] as StreamVideoParticipant]
        : localParticipant
          ? [localParticipant]
          : [];
  }

  const participantViewProps: CallParticipantsListComponentProps = {
    ParticipantView,
    ParticipantLabel,
    ParticipantNetworkQualityIndicator,
    ParticipantReaction,
    ParticipantVideoFallback,
    VideoRenderer,
  };

  return (
    <View
      style={[
        styles.container,
        landscapeStyles,
        { backgroundColor: colors.sheetPrimary },
        callParticipantsGrid.container,
      ]}
      testID={ComponentTestIds.CALL_PARTICIPANTS_GRID}
    >
      {CallParticipantsList && (
        <CallParticipantsList
          participants={participants}
          supportedReactions={supportedReactions}
          landscape={landscape}
          {...participantViewProps}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});
