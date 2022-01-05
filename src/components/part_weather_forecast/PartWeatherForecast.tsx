import React from 'react';

import {ScrollView, StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../redux/store/Store';

type PropsType = {
  time: number;
  temperature: string;
  weather: string;
};
const PartWeatherForecast: React.FC<PropsType> = ({
  time,
  temperature,
  weather,
}) => {
  const currentTheme = useSelector(
    (state: AppStateType) => state.userConfig?.theme,
  );

  return (
    <ScrollView style={styles.text}>
      <Text style={currentTheme === 'dark' ? styles.whiteText : styles.text}>
        {time}
      </Text>
      <Text style={currentTheme === 'dark' ? styles.whiteText : styles.text}>
        {weather}
      </Text>
      <Text
        style={
          currentTheme === 'dark' ? styles.whiteText : styles.text
        }>{`${temperature.toFixed(0)}°`}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    margin: 5,
    fontSize: 16,
  },
  whiteText: {
    margin: 5,
    fontSize: 16,
    color: 'rgb(255,255,255)',
  },
});
export default PartWeatherForecast;
