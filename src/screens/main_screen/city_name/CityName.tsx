import {useState} from 'react';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import {useDispatch} from 'react-redux';
import CustomInput from '../../../components/customInput/CustomInput';
import WorkButton from '../../../components/workButton/WorkButton';
import {getCurrentWeather, setUserCity} from '../../../redux/actions/Actions';

type PropsType = {
  setIsVisible: () => void;
  error: boolean;
};
const CityName: React.FC<PropsType> = ({setIsVisible, error}) => {
  const [text, onChangeText] = useState('');
  const [isAnimated, setIsAnimated] = useState(false);

  const dispatch = useDispatch();
  const closeModal = () => () => setIsVisible(false);

  const saveInnerText = () => async () => {
    setIsAnimated(true);
    await dispatch(getCurrentWeather(text));
    await dispatch(setUserCity(text));
    await new Promise(success => setTimeout(success, 2000));
    setIsVisible(false);
    setIsAnimated(false);
  };

  return (
    <>
      <SafeAreaView style={styles.body}>
        <Text style={styles.close} onPress={closeModal()}>
          X
        </Text>
        <View
          style={{
            flex: 1,
          }}>
          <CustomInput text={text} setText={onChangeText} />
          {error ? <Text style={{color: 'red'}}>Something wrong</Text> : null}
          <ActivityIndicator animating={isAnimated} size={'small'} />
          <WorkButton title={'Save'} functionForOnPress={saveInnerText} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'rgb(204, 229, 255)',
    borderRadius: 30,
    maxHeight: 200,
  },
  text: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 20,
  },
  close: {
    borderWidth: 1,
    width: 20,
    textAlign: 'center',
    borderRadius: 10,
    backgroundColor: 'rgb(255,255,255)',
    overflow: 'hidden',
    alignSelf: 'flex-end',
    margin: 10,
  },
});

export default CityName;
