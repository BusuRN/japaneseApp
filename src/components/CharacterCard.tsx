import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ACCENT, PRIMARY, WHITE} from '../consts/COLORS';

const CharacterCard = ({letter, active, eng}) => {
  return (
    <View style={[styles.container, active === true && styles.activeContainer]}>
      <Text style={[styles.text, active === true && styles.activeText]}>
        {letter}
      </Text>
      {active === true && <Text style={styles.engText}>{eng}</Text>}
    </View>
  );
};

export default CharacterCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY,
    width: 54,
    height: 54,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeContainer: {
    backgroundColor: ACCENT,
  },
  text: {
    color: WHITE,
    fontSize: 38,
  },
  engText: {
    fontSize: 17,
    color: WHITE,
  },
  activeText: {
    fontSize: 25,
  },
});
