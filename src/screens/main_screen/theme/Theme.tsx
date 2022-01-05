import {useEffect, useState} from 'react';
import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import WorkButton from '../../../components/workButton/WorkButton';
import {setUserTheme} from '../../../redux/actions/Actions';
import {AppStateType} from '../../../redux/store/Store';
type PropsType = {
  setIsVisible: () => void;
  error: boolean;
};
const Theme: React.FC<PropsType> = ({setIsVisible}) => {
  const [theme, setTheme] = useState('');
  const [toggleDark, setToggleDark] = useState(false);
  const [toggleWhite, setToggleWhite] = useState(false);
  const currentTheme = useSelector(
    (state: AppStateType) => state.userConfig?.theme,
  );
  useEffect(() => {
    setTheme(currentTheme);
  }, []);

  // const cityRegularExpression = /^[a-zA-Z\u0080-\u024F]+(?:. |-| |')*([1-9a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/;
  // console.log(cityRegularExpression.exec('sdsfdsd'));
  const dispatch = useDispatch();
  const closeModal = () => () => setIsVisible(false);
  const chooseTheme =
    (booleanFirst: boolean, booleanSecond: boolean, newTheme: string) => () => {
      setToggleDark(booleanFirst);
      setToggleWhite(booleanSecond);
      setTheme(newTheme);
    };
  const saveTheme = () => async () => {
    await dispatch(setUserTheme(theme));
    await new Promise(success => setTimeout(success, 1000));
    setIsVisible(false);
  };

  return (
    <>
      <SafeAreaView style={styles.body}>
        <Text style={styles.close} onPress={closeModal()}>
          X
        </Text>
        <Text style={{fontSize: 16, textAlign: 'center', fontWeight: 'bold'}}>
          Choose Theme
        </Text>
        <View
          style={{
            flex: 1,
            // justifyContent: 'space-between',
          }}>
          <View style={{margin: 10}}>
            <TouchableOpacity
              style={toggleDark ? styles.toggleText : styles.text}
              onPress={chooseTheme(true, false, 'dark')}>
              <Text>Dark Theme</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={toggleWhite ? styles.toggleText : styles.text}
              onPress={chooseTheme(false, true, 'white')}>
              <Text>White Theme</Text>
            </TouchableOpacity>
          </View>

          <WorkButton title={'Save'} functionForOnPress={saveTheme} />
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
  toggleText: {
    margin: 5,
    backgroundColor: 'rgb(0, 229, 255)',
  },
  text: {
    margin: 5,
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

export default Theme;
