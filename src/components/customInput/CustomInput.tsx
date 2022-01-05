import React from 'react';
import {TouchableWithoutFeedback, StyleSheet, TextInput} from 'react-native';

type PropsType = {
  text: string;
  setText: () => void;
  placeholder: string;
};
const CustomInput: React.FC<PropsType> = ({
  text,
  setText,
  placeholder = '',
}) => {
  return (
    <TouchableWithoutFeedback>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        placeholder={'write city'}
        value={text}
      />
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },
});
export default CustomInput;
