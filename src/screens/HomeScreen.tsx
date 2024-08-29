import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Logo from './../components/Logo';
import Title from '../components/Title';
import {ACCENT} from '../consts/COLORS';
import CellHeader from '../components/CellHeader';
import CharacterCard from '../components/CharacterCard';
const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>This is my HomeScreen</Text>
      <Pressable
        onPress={() => {
          navigation.navigate('Details');
        }}>
        <Text>Click me</Text>
      </Pressable>
      <Logo />
      <Title title={'Monographs (gojūon)'} />
      <Title title={'Monographs'} style={styles.customTitle} />
      <Title title={'Viacritics (dakuten,handakuten)'} />
      <Title title={'Mon(dakuten,handakuten)'} />
      <Title title={true} />
      <CellHeader letter={'a'} isColumn={true} />
      <CellHeader letter={'i'} />
      <CellHeader letter={'u'} active={true} />
      <CellHeader letter={'e'} active={true} isColumn={true} />
      <CellHeader letter={'o'} />
      <CharacterCard letter={'あ'} active={true} eng={'a'} />
      <CharacterCard letter={'い'} eng={'i'} />
      <CharacterCard letter={'う'} eng={'u'} active={true} />
      <CharacterCard letter={'え'} eng={'e'} />
      <CharacterCard letter={'お'} eng={'o'} />
      <CharacterCard letter={'ま'} active={true} eng={'ma'} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  customTitle: {
    fontSize: 25,
    color: ACCENT,
  },
});
