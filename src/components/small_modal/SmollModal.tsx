import Modal from 'react-native-modal';
import {StyleSheet, Text} from 'react-native';
import React from 'react';

type PropsType = {children: React.ReactNode};
const SmollModal: React.FC<PropsType> = ({children}) => {
  return (
    <Modal
      style={styles.error}
      isVisible={true}
      animationInTiming={1000}
      animationOutTiming={1000}>
      <Text style={styles.text}>{children}</Text>
    </Modal>
  );
};
const styles = StyleSheet.create({
  error: {
    backgroundColor: 'orange',
    maxHeight: 100,
    borderRadius: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: 'red',
  },
});
export default SmollModal;
