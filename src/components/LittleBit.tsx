import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LittleBitImage from './../assets/LittleBit.png';
import { BLACK } from '../consts/COLORS';

const LittleBit = () => {
  return (
    <View style={styles.container}>
      <Image source={LittleBitImage} style={styles.image} />
    </View>
  );
};

export default LittleBit;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: BLACK,

    // zIndex: -1,
  },
  image: {
    width: '100%',
    height: '100%',
    opacity: 0.5,
  },
});
