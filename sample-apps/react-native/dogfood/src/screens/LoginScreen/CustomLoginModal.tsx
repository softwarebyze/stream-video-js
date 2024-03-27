import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
} from 'react-native';
import { colorPallete, useI18n } from '@stream-io/video-react-native-sdk';
import EmailSvg from '../../assets/EmailSvg';
import { Button } from '../../components/Button';

type Props = {
  modalVisible: boolean;
  onClose: () => void;
  loginHandler: (localUserId: string) => void;
};

const CustomLoginModal = ({ modalVisible, onClose, loginHandler }: Props) => {
  const [localUserId, setLocalUserId] = React.useState('');
  const { t } = useI18n();
  // TODO: support light mode
  const colors = colorPallete.dark;
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={onClose}
    >
      <Pressable
        style={[styles.centeredView, { backgroundColor: colors.sheet_overlay }]}
        onPress={onClose}
      >
        <View
          style={[
            styles.modalView,
            { backgroundColor: colorPallete.dark.sheet_primary },
          ]}
          onStartShouldSetResponder={() => true}
        >
          <View style={styles.header}>
            <EmailSvg />
            <Text style={[styles.headerText, { color: colors.type_primary }]}>
              {t('Enter an e-mail address')}
            </Text>
          </View>
          <TextInput
            style={[
              styles.input,
              {
                borderColor: colors.button_tertiary_stroke,
                color: colors.type_primary,
              },
            ]}
            placeholder={t('Email address')}
            value={localUserId}
            onChangeText={(text) => {
              setLocalUserId(text);
            }}
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor={colors.type_secondary}
          />
          <Button
            title={'Login'}
            onPress={() => {
              onClose();
              loginHandler(localUserId);
            }}
            disabled={false}
            buttonStyle={styles.button}
          />
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    marginLeft: 16,
    fontSize: 24,
    fontWeight: '500',
  },
  input: {
    height: 46,
    marginVertical: 32,
    fontSize: 16,
    fontWeight: '500',
    borderWidth: 1,
    paddingHorizontal: 16,
    minWidth: '100%',
    borderRadius: 48,
  },
  modalView: {
    margin: 20,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    minWidth: '100%',
  },
});

export default CustomLoginModal;
