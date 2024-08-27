import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Logo from './../components/Logo';
const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>This is my HomeScreen</Text>
      <Pressable
        onPress={() => {
          navigation.navigate('Details');
        }}>
        <Text>Click me</Text>
      </Pressable>
      <Logo />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
