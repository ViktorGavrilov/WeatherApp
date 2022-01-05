import {Dimensions} from 'react-native';
import {TouchableWithoutFeedback, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type PropsType = {
  title: string;
  functionForOnPress: () => void;
};
const WorkButton: React.FC<PropsType> = ({title, functionForOnPress}) => {
  return (
    <TouchableWithoutFeedback onPress={functionForOnPress()}>
      <View style={styles.body}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  body: {
    backgroundColor: 'rgb(102, 175, 255)',
    justifyContent: 'center',
    width: Dimensions.get('window').width / 1.18,
    height: 50,
    margin: 10,
    borderRadius: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});
export default WorkButton;
