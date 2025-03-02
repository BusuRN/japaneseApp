import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import errorPhoto from './../assets/errorPhoto.png';
import {BLACK} from '../consts/COLORS';

const ErrorPhoto = () => {
  return (
    <View style={styles.container}>
      <Image source={errorPhoto} style={styles.image} />
    </View>
  );
};

export default ErrorPhoto;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});
