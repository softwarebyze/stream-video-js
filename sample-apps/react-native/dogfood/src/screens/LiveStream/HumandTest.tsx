import React from 'react';
import {
  StreamVideoClient,
  StreamVideo,
  StreamCall,
  User,
  useCallStateHooks,
  ViewerLivestream,
} from '@stream-io/video-react-native-sdk';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const apiKey = 'nfg9e4u6cf86';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMjExNTkifQ.Xu7eJicIzFh-xRtZjSEQDZZH0sSn2PuRWiErZMF5Adk';
const userId = '21159';
const callId = '2d69fc47-b256-40ac-9555-8f672db008ee';
// const callId = 'livestream_64d356f2-3c64-469f-a19c-08a6f83785db';

// const apiKey = 'mmhfdzb5evj2';
// const token =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL0Nhcm5vcl9KYXgiLCJ1c2VyX2lkIjoiQ2Fybm9yX0pheCIsInZhbGlkaXR5X2luX3NlY29uZHMiOjYwNDgwMCwiaWF0IjoxNzI4NDc4OTcyLCJleHAiOjE3MjkwODM3NzJ9.ojhg_VccRAmkixaNwz7kXmxLO15o3PmJrxioWAKTR64';
// const userId = 'Carnor_Jax';
// const callId = '0r8wlb3vrp';

const user: User = { id: userId, name: 'Santhosh-Humand-test' };
const client = StreamVideoClient.getOrCreateInstance({
  apiKey,
  user,
  token,
  options: { logLevel: 'trace' },
});
const call = client.call('livestream', callId);
// call.get();
call.join({ create: false });

export default function App() {
  return (
    <StreamVideo client={client} language="en">
      <StreamCall call={call}>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
          <LivestreamNonHostView />
        </SafeAreaView>
      </StreamCall>
    </StreamVideo>
  );
}

const LivestreamNonHostView = () => {
  // Automatically route audio to speaker devices as relevant for watching videos.
  // Please read more about `media` and `auto` options in the documentation of react-native-incall-manager
  // https://github.com/react-native-webrtc/react-native-incall-manager#usage
  //   useEffect(() => {
  //     IncallManager.start({ media: 'video' });
  //     return () => IncallManager.stop();
  //   }, []);

  const { useCallSettings, useOwnCapabilities } = useCallStateHooks();
  //   const settings = useCallSettings();
  //   //   const { status, isEnabled, isMute } = useMicrophoneState();
  const ownCapabilities = useOwnCapabilities();

  //   console.log('Mic default', settings?.audio.mic_default_on);
  //   //   console.log('Mic status', { status, isEnabled, isMute });
  console.log('Own Capabilities', { ownCapabilities });

  //   return <Text>santhosh</Text>;

  return <ViewerLivestream />;
};

const styles = StyleSheet.create({
  flexed: {
    flex: 1,
  },
  text: {
    alignSelf: 'center',
    color: 'white',
    backgroundColor: 'blue',
    padding: 6,
    margin: 4,
  },
  bottomBar: {
    alignSelf: 'center',
    margin: 4,
  },
});
