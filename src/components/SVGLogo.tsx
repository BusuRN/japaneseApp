import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SVGLogoImage from './../assets/Logo.png';

const SVGLogo = () => {
  return (
    <View>
      <Image source={SVGLogoImage} style={styles.svgLogo} />
    </View>
  );
};

export default SVGLogo;

const styles = StyleSheet.create({
  svgLogo: {
    width: 80,
    height: 30,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
});
