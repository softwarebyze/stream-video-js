import React from 'react';
import { useCallStateHooks } from '@stream-io/video-react-bindings';
import { useTheme } from '../../../contexts';
import { CallControlsButton } from './CallControlsButton';
import { IconWrapper, Video, VideoSlash } from '../../../icons';

/**
 * Props for the Toggle Video preview button
 */
export type ToggleVideoPreviewButtonProps = {
  /**
   * Handler to be called when the the video preview button is pressed.
   * @returns void
   */
  onPressHandler?: () => void;
};

/**
 * Button to toggle video mute/unmute status before joining the call.
 */
export const ToggleVideoPreviewButton = ({
  onPressHandler,
}: ToggleVideoPreviewButtonProps) => {
  const {
    theme: {
      colors,
      toggleVideoPreviewButton,
      variants: { buttonSizes },
      defaults,
    },
  } = useTheme();
  const { useCameraState, useCallSettings } = useCallStateHooks();
  const callSettings = useCallSettings();
  const isVideoEnabledInCall = callSettings?.video.enabled;
  const { optimisticIsMute, camera } = useCameraState();
  const onPress = async () => {
    if (onPressHandler) {
      onPressHandler();
      return;
    }
    await camera.toggle();
  };

  if (!isVideoEnabledInCall) {
    return;
  }

  return (
    <CallControlsButton
      onPress={onPress}
      color={
        !optimisticIsMute
          ? colors.buttonSecondaryDefault
          : colors.iconAlertWarning
      }
      size={buttonSizes.md}
      style={{
        container: { ...toggleVideoPreviewButton.container },
        svgContainer: toggleVideoPreviewButton.svgContainer,
      }}
    >
      <IconWrapper>
        {!optimisticIsMute ? (
          <Video color={colors.iconPrimaryDefault} size={defaults.iconSize} />
        ) : (
          <VideoSlash
            color={colors.iconPrimaryDefault}
            size={defaults.iconSize}
          />
        )}
      </IconWrapper>
    </CallControlsButton>
  );
};
