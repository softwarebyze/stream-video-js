import {
  CallingState,
  CancelCallConfirmButton,
  Icon,
  LoadingIndicator,
  Notification,
  useCallStateHooks,
  useI18n,
} from '@stream-io/video-react-sdk';
import clsx from 'clsx';

import { CallHeaderTitle } from './CallHeaderTitle';
import { ToggleSettingsTabModal } from './Settings/SettingsTabModal';
import { ToggleDocumentationButton } from './ToggleDocumentationButton';

import { LayoutSelectorProps } from './LayoutSelector';

import { useIsDemoEnvironment } from '../context/AppEnvironmentContext';

const LatencyIndicator = () => {
  const { useCallStatsReport } = useCallStateHooks();
  const statsReport = useCallStatsReport();
  const latency = statsReport?.publisherStats?.averageRoundTripTimeInMs ?? 0;

  return (
    <div className="rd__header__latency">
      <div
        className={clsx('rd__header__latency-indicator', {
          'rd__header__latency-indicator--good': latency && latency <= 100,
          'rd__header__latency-indicator--ok':
            latency && latency > 100 && latency < 400,
          'rd__header__latency-indicator--bad': latency && latency > 400,
        })}
      ></div>
      {latency} ms
    </div>
  );
};

const formatTime = (timeInSeconds: number) => {
  const date = new Date(0);
  date.setSeconds(timeInSeconds);
  const format = date.toISOString(); // '1970-01-01T00:00:35.000Z'
  const hours = format.substring(11, 13);
  const minutes = format.substring(14, 16);
  const seconds = format.substring(17, 19);
  return `${hours !== '00' ? hours + ':' : ''}${minutes}:${seconds}`;
};

const Elapsed = () => {
  const { useCallSessionDuration } = useCallStateHooks();
  const sessionDuration = useCallSessionDuration();
  const elapsed = formatTime(sessionDuration);

  return (
    <div className="rd__header__elapsed">
      <Icon className="rd__header__elapsed-icon" icon="verified" />
      <div className="rd__header__elapsed-time">{elapsed}</div>
    </div>
  );
};

export const ActiveCallHeader = ({
  onLeave,
  selectedLayout,
  onMenuItemClick,
}: { onLeave: () => void } & LayoutSelectorProps) => {
  const { useCallCallingState } = useCallStateHooks();
  const callingState = useCallCallingState();
  const isOffline = callingState === CallingState.OFFLINE;
  const isMigrating = callingState === CallingState.MIGRATING;
  const isJoining = callingState === CallingState.JOINING;
  const isReconnecting = callingState === CallingState.RECONNECTING;
  const hasFailedToRecover = callingState === CallingState.RECONNECTING_FAILED;

  const { t } = useI18n();

  const isDemo = useIsDemoEnvironment();

  return (
    <>
      <div className="rd__call-header rd__call-header--active">
        <div className="rd__call-header__title">
          <CallHeaderTitle
            title={isDemo ? t('Stream Video Calling') : undefined}
          />

          <ToggleDocumentationButton />
        </div>

        <div className="rd__call-header__settings">
          <ToggleSettingsTabModal
            layoutProps={{
              selectedLayout: selectedLayout,
              onMenuItemClick: onMenuItemClick,
            }}
            tabModalProps={{
              inMeeting: true,
            }}
          />
        </div>

        <div className="rd__call-header__controls-group">
          <Elapsed />
          <LatencyIndicator />
        </div>
        <div className="rd__call-header__leave">
          <CancelCallConfirmButton onLeave={onLeave} />
        </div>
      </div>
      <div className="rd__call-header__notifications">
        {(() => {
          if (isOffline || hasFailedToRecover) {
            return (
              <Notification
                isVisible
                placement="bottom"
                message={
                  isOffline
                    ? 'You are offline. Check your internet connection and try again later.'
                    : 'Failed to restore connection. Check your internet connection and try again later.'
                }
              >
                <span />
              </Notification>
            );
          }

          return (
            <Notification
              isVisible={isJoining || isReconnecting || isMigrating}
              iconClassName={null}
              placement="bottom"
              message={
                <LoadingIndicator
                  text={
                    isMigrating
                      ? 'Migrating...'
                      : isJoining
                        ? 'Joining...'
                        : 'Reconnecting...'
                  }
                />
              }
            >
              <span />
            </Notification>
          );
        })()}
      </div>
    </>
  );
};
