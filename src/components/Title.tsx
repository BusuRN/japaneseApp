import {StyleSheet, Text, TextStyle, View} from 'react-native';
import React, {FC} from 'react';
import {BLACK} from '../consts/COLORS';

interface Props {
  title: string | number | boolean;
  style?: TextStyle;
}

const Title: FC<Props> = ({title, style}) => {
  return (
    <View>
      <Text style={style || styles.title}>{title}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: BLACK,
  },
});
