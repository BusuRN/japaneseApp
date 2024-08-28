import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Logo from './../components/Logo';
import Title from '../components/Title';
import {ACCENT} from '../consts/COLORS';
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
      <Title title={'Monographs (gojūon)'} />
      <Title title={'Monographs'} style={styles.customTitle} />
      <Title title={'Viacritics (dakuten,handakuten)'} />
      <Title title={'Mon(dakuten,handakuten)'} />
      <Title title={true} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  customTitle: {
    fontSize: 25,
    color: ACCENT,
  },
});
