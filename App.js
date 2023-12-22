import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './screens/HomePage';
import ChatScreen from './screens/ChatScreen';
import MessageScreen from './screens/MessageScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GlobalState from './context';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GlobalState>

        <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{ headerShown : false}}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{headerShown : false }}
        />
        <Stack.Screen
          name="MessageScreen"
          component={MessageScreen}
          options={{ headerShown : false }}
        />
      </Stack.Navigator>
      {/* <StatusBar style="auto" /> */}
      <StatusBar hidden = {true} />
    </NavigationContainer>

    </GlobalState>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
