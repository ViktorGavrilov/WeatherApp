import Modal from 'react-native-modal';
import React from 'react';
import {useEffect, useState} from 'react';
import moment from 'moment';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
} from 'react-native';
import CityName from './city_name/CityName';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import PartWeatherForecast from '../../components/part_weather_forecast/PartWeatherForecast';
import EmptyScreen from '../../components/emptyScreenComponent/EmptyScreen';
import Theme from './theme/Theme';
import {
  getCurrentWeather,
  getUserCity,
  getUserTheme,
  setUserTheme,
} from '../../redux/actions/Actions';
import {AppStateType} from '../../redux/store/Store';

type PropsType = {};

const MainScreen: React.FC<PropsType> = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isError, setIsError] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const errorMessage = useSelector(
    (state: AppStateType) => state.weather?.errorMessage,
  );
  const city = useSelector((state: AppStateType) => state.weather?.name);
  const currentTheme = useSelector(
    (state: AppStateType) => state.userConfig?.theme,
  );

  const weather = useSelector(
    (state: AppStateType) => state.weather?.currentWeather[0]?.main,
  );
  const temperature = useSelector(
    (state: AppStateType) => state.weather?.currentTemperature.temp,
  );

  const maxTemperature = useSelector(
    (state: AppStateType) => state.weather?.currentTemperature.temp_max,
  );
  const minTemperature = useSelector(
    (state: AppStateType) => state.weather?.currentTemperature.temp_min,
  );
  const weatherForTwoDays = useSelector(
    (state: AppStateType) => state.weather?.weatherForTwoDays,
  );
  const weatherForSevenDays = useSelector(
    (state: AppStateType) => state.weather?.weatherForSevenDays,
  );

  const userCity = useSelector((state: AppStateType) => state.userConfig?.city);
  const dispatch = useDispatch();
  useEffect(() => {
    errorMessage?.length > 1 ? setIsError(true) : setIsError(false);
  }, [errorMessage]);

  useEffect(() => {
    dispatch(getUserCity());
    dispatch(getUserTheme());
    setIsVisible(true);
  }, []);
  useEffect(() => {
    if (temperature < 0) {
      dispatch(setUserTheme('dark'));
    }
  }, [temperature]);

  useEffect(() => {
    dispatch(getCurrentWeather(userCity));
    setIsVisible(false);
  }, [userCity]);

  const renderItemHours = ({item}) => {
    const time = moment(item.dt * 1000).format('hh');

    return (
      <>
        <PartWeatherForecast
          temperature={item.temp}
          time={time}
          weather={item.weather[0]?.main}
        />
      </>
    );
  };
  const renderItemDays = ({item}) => {
    const time = moment(item.dt * 1000).format('Do');

    return (
      <>
        <PartWeatherForecast
          temperature={item.temp.day}
          time={time}
          weather={item.weather[0]?.main}
        />
      </>
    );
  };

  return (
    <SafeAreaView
      style={
        currentTheme === 'dark' ? {backgroundColor: 'rgb(0, 0, 0)', maxWidth:2000} : null
      }>
      {!city && (
        <View>
          <EmptyScreen title={"You don't choose city yet!"} />
          <Button title={'Chose City'} onPress={() => setIsVisible(true)} />
        </View>
      )}
      {!!city && (
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Icon
            name="align-justify"
            size={30}
            color={
              currentTheme === 'dark' ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'
            }
            style={{textAlign: 'right', margin: 15}}
            onPress={() => setEditMode(true)}
          />
          <Icon
            name="search"
            size={30}
            color={
              currentTheme === 'dark' ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'
            }
            style={{textAlign: 'right', margin: 15}}
            onPress={() => setIsVisible(true)}
          />
        </View>
      )}
      <View style={{padding: 10}}>
        <View>
          {city ? (
            <Text
              style={currentTheme === 'dark' ? styles.whiteText : styles.text}>
              {city}
            </Text>
          ) : null}
          {weather ? (
            <Text
              style={currentTheme === 'dark' ? styles.whiteText : styles.text}>
              {weather}
            </Text>
          ) : null}
          {temperature ? (
            <Text
              style={
                currentTheme === 'dark' ? styles.whiteText : styles.text
              }>{`${temperature.toFixed(0)}°`}</Text>
          ) : null}
          {maxTemperature ? (
            <Text
              style={
                currentTheme === 'dark' ? styles.whiteText : styles.text
              }>{`Max. ${maxTemperature}°, min. ${minTemperature}°`}</Text>
          ) : null}
          <FlatList
            data={weatherForTwoDays}
            style={{marginTop: 20, borderTopWidth: 1, borderBottomWidth: 1}}
            renderItem={renderItemHours}
            horizontal={true}
            keyExtractor={item => item.name}
          />
          <FlatList
            style={{marginTop: 20}}
            numColumns={2}
            data={weatherForSevenDays}
            renderItem={renderItemDays}
            keyExtractor={item => item.name}
          />
        </View>
        <Modal isVisible={isVisible} animationInTiming={1000}>
          <CityName setIsVisible={setIsVisible} error={isError} />
        </Modal>
        <Modal isVisible={editMode} animationInTiming={1000}>
          <Theme setIsVisible={setEditMode} error={isError} />
        </Modal>
        {/*{isError ? (*/}
        {/*  <SmollModal>Something wrong... Try again in the minute...</SmollModal>*/}
        {/*) : null}*/}
      </View>
    </SafeAreaView>
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

export default MainScreen;
