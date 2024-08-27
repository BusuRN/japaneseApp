import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RNVectorIcon from './RNVectorIcon';
import {WHITE} from '../consts/COLORS';
import {useNavigation} from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <Pressable
      onPress={() => {
        navigation.goBack();
      }}
      style={styles.container}>
      <RNVectorIcon
        name={'chevron-left'}
        family={'Feather'}
        size={37}
        color={WHITE}
      />
    </Pressable>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    marginLeft: -16,
  },
});
