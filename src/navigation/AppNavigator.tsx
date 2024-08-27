import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import {ACCENT, WHITE} from '../consts/COLORS';
import Logo from '../components/Logo';
import BackButton from '../components/BackButton';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: ACCENT,
          },
          headerTintColor: WHITE,
          headerTitle: () => {
            return <Logo />;
          },
          headerBackTitle: 'Nimic',
          headerLeft: () => {
            return <BackButton />;
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerLeft: () => {
              return <View />;
            },
          }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
