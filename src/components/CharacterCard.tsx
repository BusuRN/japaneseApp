import {Pressable, StyleSheet, Text} from 'react-native';
import React, {FC} from 'react';
import {ACCENT, PRIMARY, WHITE} from '../consts/COLORS';

interface Props {
  letter: string | null;
  active?: boolean;
  eng?: string | null;
  onPress?: () => void;
  row?: string | null;
}
const CharacterCard: FC<Props> = ({letter, active, eng, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        active === true && styles.activeContainer,
        !letter && styles.invisible,
      ]}>
      <Text style={[styles.text, active === true && styles.activeText]}>
        {letter}
      </Text>
      {active === true && <Text style={styles.engText}>{eng}</Text>}
    </Pressable>
  );
};

export default CharacterCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY,
    flex: 1,
    aspectRatio: 1,
    marginHorizontal: 5,
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
