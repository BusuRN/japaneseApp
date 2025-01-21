import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {WHITE, WHITE_20} from '../consts/COLORS';

const Box = ({title, value}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default Box;

const styles = StyleSheet.create({
  container: {
    // borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: WHITE_20,
    borderRadius: 20,
    height: 96,
    paddingHorizontal: 20,
    // paddingVertical: 18,
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    color: WHITE,
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 24,
    // textAlign: 'center',
  },
  value: {
    fontSize: 40,
    fontWeight: '600',
    color: WHITE,
  },
});
