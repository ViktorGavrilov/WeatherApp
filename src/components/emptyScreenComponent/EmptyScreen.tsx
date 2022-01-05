import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../redux/store/Store';

type PropsType = {title: string};
const EmptyScreen: React.FC<PropsType> = ({title}) => {
  const currentTheme = useSelector(
    (state: AppStateType) => state.userConfig?.theme,
  );
  return (
    <>
      <View>
        <Text style={currentTheme === 'dark' ? styles.whiteText : styles.text}>
          {title}
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    margin: 10,
    textAlign: 'center',
    fontSize: 16,
  },
  whiteText: {
    textAlign: 'center',
    margin: 10,
    fontSize: 16,
    color: 'rgb(255,255,255)',
  },
});

export default EmptyScreen;
