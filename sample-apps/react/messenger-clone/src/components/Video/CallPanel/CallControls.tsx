import {
  Call,
  CallMetadata,
  SfuModels,
  StreamVideoLocalParticipant,
} from '@stream-io/video-client';
import { useStreamVideoClient } from '@stream-io/video-react-bindings';
import {
  LocalPhone,
  Mic,
  MicOff,
  PhoneDisabled,
  Videocam,
  VideocamOff,
} from '@mui/icons-material';

type OutgoingCallControlsProps = {
  callCid: string;
};

export const OutgoingCallControls = ({
  callCid,
}: OutgoingCallControlsProps) => {
  const videoClient = useStreamVideoClient();

  return (
    <div className="rmc__button-controls">
      <button
        className="rmc__button rmc__button--red"
        onClick={() => videoClient.cancelCall(callCid)}
      >
        <PhoneDisabled />
      </button>
    </div>
  );
};

type IncomingCallControlsProps = {
  callCid: string;
};
export const IncomingCallControls = ({
  callCid,
}: IncomingCallControlsProps) => {
  const videoClient = useStreamVideoClient();

  return (
    <div className="rmc__button-controls">
      <button
        className="rmc__button rmc__button--green"
        onClick={() => videoClient.acceptCall(callCid)}
      >
        <LocalPhone />
      </button>
      <button
        className="rmc__button rmc__button--red"
        onClick={() => videoClient.rejectCall(callCid)}
      >
        <PhoneDisabled />
      </button>
    </div>
  );
};

type ActiveCallControlsProps = {
  activeCall?: Call;
  localParticipant?: StreamVideoLocalParticipant;
  publishAudioStream?: () => Promise<void>;
  publishVideoStream?: () => Promise<void>;
};
export const ActiveCallControls = ({
  activeCall,
  localParticipant,
  publishAudioStream,
  publishVideoStream,
}: ActiveCallControlsProps) => {
  const videoClient = useStreamVideoClient();

  const isAudioMute = !localParticipant?.publishedTracks.includes(
    SfuModels.TrackType.AUDIO,
  );
  const isVideoMute = !localParticipant?.publishedTracks.includes(
    SfuModels.TrackType.VIDEO,
  );
  return (
    <div className="rmc__button-controls">
      <button
        className="rmc__button rmc__button--transparent"
        onClick={() => {
          if (isAudioMute) {
            void publishAudioStream();
          } else {
            void activeCall?.stopPublish(SfuModels.TrackType.AUDIO);
          }
        }}
      >
        {isAudioMute ? <MicOff /> : <Mic />}
      </button>
      <button
        className="rmc__button rmc__button--transparent"
        onClick={() => {
          if (isVideoMute) {
            void publishVideoStream();
          } else {
            void activeCall?.stopPublish(SfuModels.TrackType.VIDEO);
          }
        }}
      >
        {isVideoMute ? <VideocamOff /> : <Videocam />}
      </button>
      <button
        className="rmc__button rmc__button--red"
        onClick={() => videoClient.cancelCall(activeCall.data.call.cid)}
      >
        <PhoneDisabled />
      </button>
    </div>
  );
};

type ButtonControlsProps = {
  activeCall?: Call;
  outgoingCall?: CallMetadata;
  incomingCall?: CallMetadata;
  localParticipant?: StreamVideoLocalParticipant;
  publishAudioStream?: () => Promise<void>;
  publishVideoStream?: () => Promise<void>;
};

/** @deprecated */
export const CallControls = ({
  activeCall,
  incomingCall,
  outgoingCall,
  localParticipant,
  publishAudioStream,
  publishVideoStream,
}: ButtonControlsProps) => {
  const videoClient = useStreamVideoClient();

  const isAudioMute = !localParticipant?.publishedTracks.includes(
    SfuModels.TrackType.AUDIO,
  );
  const isVideoMute = !localParticipant?.publishedTracks.includes(
    SfuModels.TrackType.VIDEO,
  );

  return (
    <div className="rmc__button-controls">
      {incomingCall && !activeCall && (
        <>
          <button
            className="rmc__button rmc__button--green"
            onClick={() => videoClient.acceptCall(incomingCall.call.cid)}
          >
            <LocalPhone />
          </button>
          <button
            className="rmc__button rmc__button--red"
            onClick={() => videoClient.rejectCall(incomingCall.call.cid)}
          >
            <PhoneDisabled />
          </button>
        </>
      )}
      {activeCall && (
        <>
          <button
            className="rmc__button rmc__button--transparent"
            onClick={() => {
              if (isAudioMute) {
                void publishAudioStream();
              } else {
                void activeCall?.stopPublish(SfuModels.TrackType.AUDIO);
              }
            }}
          >
            {isAudioMute ? <MicOff /> : <Mic />}
          </button>
          <button
            className="rmc__button rmc__button--transparent"
            onClick={() => {
              if (isVideoMute) {
                void publishVideoStream();
              } else {
                void activeCall?.stopPublish(SfuModels.TrackType.VIDEO);
              }
            }}
          >
            {isVideoMute ? <VideocamOff /> : <Videocam />}
          </button>
          <button
            className="rmc__button rmc__button--red"
            onClick={activeCall.leave}
          >
            <PhoneDisabled />
          </button>
        </>
      )}
    </div>
  );
};
