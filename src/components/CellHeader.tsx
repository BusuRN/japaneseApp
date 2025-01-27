import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {ACCENT, PRIMARY_DARK, WHITE} from '../consts/COLORS';

interface Props {
  letter: string | null;
  active?: boolean;
  isColumn?: boolean;
}

const CellHeader: FC<Props> = ({letter, active, isColumn}) => {
  return (
    <View
      style={[
        isColumn ? styles.columnContainer : styles.rowContainer,

        active && styles.activeContainer,
        !letter && styles.invisible,
      ]}>
      <Text style={styles.text}>{letter}</Text>
    </View>
  );
};

export default CellHeader;

const styles = StyleSheet.create({
  rowContainer: {
    backgroundColor: PRIMARY_DARK,
    flex: 1,
    marginHorizontal: 5,
    height: 24,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeContainer: {
    backgroundColor: ACCENT,
  },
  columnContainer: {
    width: 24,
    backgroundColor: PRIMARY_DARK,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  text: {
    color: WHITE,
    fontSize: 18,
    fontWeight: 'bold',
  },
  invisible: {
    opacity: 0,
  },
});
