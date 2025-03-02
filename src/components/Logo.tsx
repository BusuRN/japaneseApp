import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LogoImage from './../assets/Logo.png';

const Logo = () => {
  return (
    <View>
      <Image style={{width: 38, height: 38}} source={LogoImage} />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({});
