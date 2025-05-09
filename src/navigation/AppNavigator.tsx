import {Platform, StyleSheet, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailsScreen from '../screens/DetailsScreen';
import {ACCENT, WHITE} from '../consts/COLORS';
import Logo from '../components/Logo';
import BackButton from '../components/BackButton';
import BottomNavigator from './BottomNavigator';
import WorkoutScreen from '../screens/WorkoutScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';

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
          headerTitleAlign: 'center',
          headerTitle: () => <Logo />,
          headerBackTitle: 'Nimic',
          headerLeft: () => <BackButton />,
        }}>
        <Stack.Screen
          name="BottomNavigator"
          component={BottomNavigator}
          options={{
            headerLeft: () => {
              return <View />;
            },
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Workout"
          component={WorkoutScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
