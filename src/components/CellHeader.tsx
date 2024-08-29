import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {ACCENT, PRIMARY_DARK, WHITE} from '../consts/COLORS';

interface Props {
  letter: string;
  active?: boolean;
  isColumn?: boolean;
}

const CellHeader: FC<Props> = ({letter, active, isColumn}) => {
  return (
    <View
      style={[
        styles.container,
        active === true && styles.activeContainer,
        isColumn === true && styles.columnContainer,
      ]}>
      <Text style={styles.text}>{letter}</Text>
    </View>
  );
};

export default CellHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_DARK,
    width: 55,
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
    height: 55,
  },
  text: {
    color: WHITE,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
