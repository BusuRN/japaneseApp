import { Platform, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HiraganaScreen from '../screens/HiraganaScreen';
import KatakanaScreen from '../screens/KatakanaScreen';
import RNVectorIcon from '../components/RNVectorIcon';
import { ACCENT, WHITE, WHITE_50 } from '../consts/COLORS';
import PracticeScreen from '../screens/PracticeScreen';
import DrawScreen from '../screens/DrawScreen';
import KanjiScreen from '../screens/KanjiScreen';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: ACCENT,
          height: Platform.OS === 'android' ? 120 : 80,
          paddingBottom: Platform.OS === 'android' ? 60 : 25,
        },
        headerShown: false,
        tabBarBackground: () => {
          return <View style={styles.bottomBar} />;
        },
        tabBarActiveTintColor: WHITE,
        tabBarInactiveTintColor: WHITE_50,
      }}>
      <Tab.Screen
        name="Hiragana"
        component={HiraganaScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Text
                style={[
                  styles.bottomText,
                  focused === true && styles.activeBottomText,
                ]}>
                あ
              </Text>
            );
          },
        }}
      />
      <Tab.Screen
        name="Katakana"
        component={KatakanaScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Text
                style={[
                  styles.bottomText,
                  focused === true && styles.activeBottomText,
                ]}>
                ア
              </Text>
            );
          },
        }}
      />
      <Tab.Screen
        name="Kanji"
        component={KanjiScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Text
                style={[
                  styles.bottomText,
                  focused === true && styles.activeBottomText,
                ]}>
                字
              </Text>
            );
          },
        }}
      />
      <Tab.Screen
        name="Draw"
        component={DrawScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <RNVectorIcon
                name={'brush'}
                family={'Ionicons'}
                size={27}
                color={focused ? WHITE : WHITE_50}
              />
            );
          },
        }}
      />
      {/* <Tab.Screen
        name="Practice"
        component={PracticeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Text
                style={[
                  styles.bottomText,
                  focused === true && styles.activeBottomText,
                ]}>
                P
              </Text>
            );
          },
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  bottomText: {
    fontSize: 30,
    color: WHITE_50,
    fontWeight: '500',
  },
  activeBottomText: {
    color: WHITE,
  },
});
