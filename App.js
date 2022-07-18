/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./src/containers/Home"
import Sessions from "./src/containers/Sessions"
import Story from "./src/containers/Story"
import Conference from "./src/containers/Conference"
import Speakers from "./src/containers/Speakers"

const StackNavigator = createNativeStackNavigator()

const App = () => {
  return <NavigationContainer>
    <StackNavigator.Navigator initialRouteName='Home'>
      <StackNavigator.Screen name = 'Home' component={Home} options = {{title:'Home'}}/>
      <StackNavigator.Screen name = 'Sessions' component={Sessions} options = {{title:'Sessions'}}/>
      <StackNavigator.Screen name = 'Story' component={Story} options = {{title:'Story'}}/>
      <StackNavigator.Screen name = 'Conference' component={Conference} options = {{title:'Conference'}}/>
      <StackNavigator.Screen name = 'Speakers' component={Speakers} options = {{title:'Speakers'}}/>
    </StackNavigator.Navigator>
  </NavigationContainer>
    
};


export default App;
