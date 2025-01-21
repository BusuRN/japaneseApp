import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {ACCENT, PRIMARY, WHITE} from '../consts/COLORS';

interface Props {
  letter: string | null;
  active?: boolean;
  eng?: string | null;
}
const CharacterCard: FC<Props> = ({letter, active, eng}) => {
  return (
    <View
      style={[
        styles.container,
        active === true && styles.activeContainer,
        !letter && styles.invisible,
      ]}>
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
    flex: 1,
    aspectRatio: 1,
    marginHorizontal: 5,
    // width: 58,
    // height: 54,
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
  invisible: {
    opacity: 0,
  },
});
