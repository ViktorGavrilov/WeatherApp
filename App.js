/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import {
  StyleSheet,
  View,
} from 'react-native';
import MainScreen from './src/screens/main_screen/MainScreen';
import {store} from './src/redux/store/Store';

const App = () => {
  return (
    <View>
      <Provider store={store}>
        <MainScreen />
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default App;
