import React, { useEffect, useState } from 'react';
import { REACT_NATIVE_DOGFOOD_APP_ENVIRONMENT } from '@env';
import {
  Image,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  ViewStyle,
  Switch,
} from 'react-native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { useAppGlobalStoreSetState } from '../../contexts/AppContext';
import { Button } from '../../components/Button';
import { colorPallete, useI18n } from '@stream-io/video-react-native-sdk';
import { KnownUsers } from '../../constants/KnownUsers';
import { useOrientation } from '../../hooks/useOrientation';
import CustomLoginModal from './CustomLoginModal';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

GoogleSignin.configure({
  // webClientId: '<FROM DEVELOPER CONSOLE>', // client ID of type WEB for your server (needed to verify user ID and offline access)
  // offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  // hostedDomain: 'getstream.io', // specifies a hosted domain restriction
  // forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
  // accountName: '', // [Android] specifies an account name on the device that should be used
  // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  // googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
  // openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
  // profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
});

const generateValidUserId = (userId: string) => {
  // Chat does not allow for Id's to include special characters
  return userId.replace(/[^_\-0-9a-zA-Z@]/g, '_');
};

const LoginScreen = () => {
  const [customLoginModalVisible, setCustomLoginModalVisible] = useState(false);
  const [prontoEnvironment, setProntoEnvironment] = useState(
    REACT_NATIVE_DOGFOOD_APP_ENVIRONMENT === 'pronto',
  );

  const safeAreaInsets = useSafeAreaInsets();

  const [loader, setLoader] = useState(false);
  const { t } = useI18n();
  const orientation = useOrientation();

  const setState = useAppGlobalStoreSetState();

  // TODO: support light mode
  const colors = colorPallete.dark;

  const loginHandler = async (localUserId: string) => {
    try {
      const _userId = generateValidUserId(localUserId);
      let _userImageUrl = `https://getstream.io/random_png/?id=${_userId}&name=${_userId}`;
      const _user = KnownUsers.find((u) => u.id === _userId);
      if (_user) {
        _userImageUrl = _user.image;
      }

      setState({
        userId: _userId,
        userName: _userId,
        userImageUrl: _userImageUrl,
        appMode:
          REACT_NATIVE_DOGFOOD_APP_ENVIRONMENT === 'demo' ? 'Meeting' : 'None',
        appEnvironment:
          REACT_NATIVE_DOGFOOD_APP_ENVIRONMENT === 'demo'
            ? 'demo'
            : prontoEnvironment
            ? 'pronto'
            : 'demo',
      });
    } catch (error) {
      console.log(error);
    }
  };

  const signInViaGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const userId = generateValidUserId(userInfo.user.email);
      const userName = userInfo.user.name as string;

      setState({
        userId,
        userName,
        userImageUrl:
          userInfo.user.photo ??
          `https://getstream.io/random_png/?id=${userInfo.user.email}&name=${userInfo.user.email}`,
        appMode:
          REACT_NATIVE_DOGFOOD_APP_ENVIRONMENT === 'demo' ? 'Meeting' : 'None',
        appEnvironment:
          REACT_NATIVE_DOGFOOD_APP_ENVIRONMENT === 'demo'
            ? 'demo'
            : prontoEnvironment
            ? 'pronto'
            : 'demo',
      });
    } catch (error: any) {
      if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else {
        setLoader(false);
      }
    }
  };

  const landscapeStyles: ViewStyle = {
    flexDirection: orientation === 'landscape' ? 'row' : 'column',
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: colors.sheet_secondary },
        landscapeStyles,
      ]}
      edges={['top']}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={[styles.keyboardContainer, landscapeStyles]}
      >
        <CustomLoginModal
          modalVisible={customLoginModalVisible}
          onClose={() => setCustomLoginModalVisible(false)}
          loginHandler={loginHandler}
        />
        {REACT_NATIVE_DOGFOOD_APP_ENVIRONMENT === 'pronto' && (
          <View style={styles.envHeader}>
            <Text
              style={[styles.envText, { color: colors.type_primary }]}
            >{`Current Environment: ${
              prontoEnvironment ? t('Pronto') : t('Demo')
            }`}</Text>
            <Switch
              value={prontoEnvironment}
              onValueChange={(value) => {
                if (value === true) {
                  setState({ appEnvironment: 'pronto' });
                } else {
                  setState({ appEnvironment: 'demo' });
                }
                setProntoEnvironment(value);
              }}
              trackColor={{ true: colors.icon_primary_hover }}
              thumbColor={colors.icon_primary_accent}
            />
          </View>
        )}
        <View style={styles.topContainer}>
          <View>
            <Image
              source={require('../../assets/prejoin-logo.png')}
              style={styles.logo}
            />
            <View style={styles.titleContainer}>
              <Text style={[styles.title, { color: colors.type_primary }]}>
                {'Stream'}
              </Text>
              <Text
                style={[
                  styles.titleCenter,
                  { color: colors.icon_alert_success },
                ]}
              >
                {'[Video Calling]'}
              </Text>
              <Text style={[styles.title, { color: colors.type_primary }]}>
                {'Demo'}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={[
            styles.buttonsContainer,
            { paddingBottom: safeAreaInsets.bottom },
            { backgroundColor: colors.sheet_primary },
          ]}
        >
          <Button
            title={'Sign in with Email'}
            onPress={() => setCustomLoginModalVisible(true)}
            disabled={loader}
            buttonStyle={styles.signInButton}
          />
          <Button
            title={t('Google Sign In')}
            onPress={signInViaGoogle}
            disabled={loader}
            buttonStyle={styles.signInButton}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    // marginHorizontal: 16,
    justifyContent: 'center',
  },
  envHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  envText: {
    fontSize: 16,
    marginRight: 8,
    alignSelf: 'center',
  },
  logo: {
    maxWidth: '100%',
    resizeMode: 'contain',
  },
  titleContainer: {
    position: 'absolute',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    height: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
  },
  titleCenter: {
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
  },
  buttonsContainer: {
    paddingTop: 16,
    borderTopEndRadius: 24,
    borderTopStartRadius: 24,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInButton: {
    width: '100%',
    marginBottom: 16,
  },
});

export default LoginScreen;
