import {
  Participant,
  VideoDimension,
} from '@stream-io/video-client-sfu/dist/src/gen/sfu_models/models';
import { RefObject, useCallback, useEffect, useRef } from 'react';
import { Call } from '@stream-io/video-client-sfu';
import { useParticipantStreams } from '../../hooks/useParticipantStreams';
import { useParticipants } from '../../hooks/useParticipants';

export const Stage = (props: { call: Call; participants: Participant[] }) => {
  const { call, participants: initialParticipants } = props;
  const { userAudioStreams, userVideoStreams } = useParticipantStreams(call);
  const participants = useParticipants(call, initialParticipants);

  const videoElementsByUserId = useRef<{
    [userId: string]: HTMLVideoElement | undefined;
  }>({});
  const updateVideoElementForUserId = useCallback(
    (userId: string, ref: RefObject<HTMLVideoElement | undefined>) => {
      videoElementsByUserId.current[userId] = ref.current!;
    },
    [],
  );

  const gridRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!gridRef.current) return;
    const requestSubscriptions = async () => {
      const subscriptions: { [key: string]: VideoDimension } = {};
      Object.entries(videoElementsByUserId.current).forEach(
        ([userId, element]) => {
          if (!element) return;
          const width = element.clientWidth;
          const height = element.clientHeight;
          subscriptions[userId] = {
            width,
            height,
          };
        },
      );
      if (Object.keys(subscriptions).length > 0) {
        call.updateSubscriptions(subscriptions).catch((e: Error) => {
          console.error(`Failed to update subscriptions`, e);
        });
      }
    };
    const resizeObserver = new ResizeObserver(
      debounce(requestSubscriptions, 1200),
    );
    resizeObserver.observe(gridRef.current);
    requestSubscriptions().catch((e) => {
      console.error(e);
    });
    return () => {
      resizeObserver.disconnect();
    };
  }, [call, participants]);

  const grid = `str-video__grid-${participants.length || 1}`;
  return (
    <div className={`str-video__stage ${grid}`} ref={gridRef}>
      {participants.map((participant) => {
        const userId = participant.user!.id;
        const audioStream = userAudioStreams[userId];
        const videoStream = userVideoStreams[userId];
        return (
          <ParticipantBox
            key={userId}
            participant={participant}
            audioStream={audioStream}
            videoStream={videoStream}
            setVideoRef={(ref) => {
              updateVideoElementForUserId(userId, ref);
            }}
          />
        );
      })}
    </div>
  );
};

type ParticipantProps = {
  participant: Participant;
  audioStream?: MediaStream;
  videoStream?: MediaStream;
  setVideoRef: (ref: RefObject<HTMLVideoElement | undefined>) => void;
};
const ParticipantBox = (props: ParticipantProps) => {
  const { audioStream, videoStream, participant, setVideoRef } = props;
  const audioRef = useRef<HTMLAudioElement>(null);
  const videoRef = useRef<HTMLVideoElement>();

  useAttachMediaStream(audioRef.current, audioStream);
  useAttachMediaStream(videoRef.current, videoStream);

  return (
    <div className="str-video__participant">
      <audio autoPlay ref={audioRef} />
      <video
        className="str-video__remote-video"
        autoPlay
        ref={(ref) => {
          if (ref) {
            videoRef.current = ref;
            setVideoRef(videoRef);
          }
        }}
      />
      <div className="str-video__participant_details">
        <span className="str-video__participant_name">
          {participant.user?.id}
        </span>
      </div>
    </div>
  );
};

const useAttachMediaStream = (
  $el?: HTMLMediaElement | null,
  mediaStream?: MediaStream,
) => {
  useEffect(() => {
    if (!$el) return;
    if (mediaStream) {
      $el.srcObject = mediaStream;
    }
    return () => {
      $el.srcObject = null;
    };
  }, [$el, mediaStream]);
};

const debounce = (fn: () => void, timeoutMs: number) => {
  let id: NodeJS.Timeout;
  return () => {
    clearTimeout(id);
    id = setTimeout(fn, timeoutMs);
  };
};
