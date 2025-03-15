import {Platform, Image, StyleSheet, View} from 'react-native';
import React from 'react';
import LogoImage from './../assets/Logo.png';

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logoImage} source={LogoImage} />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === 'android' ? 30 : 0,
    paddingBottom: Platform.OS === 'android' ? 10 : 0,
  },
  logoImage: {
    width: 38,
    height: 38,
    resizeMode: 'contain',
  },
});
