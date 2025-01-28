import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {
  HIRAGANA_MONOGRAPHS,
  HIRAGANA_N,
  HIRAGANA_MONOGRAPHS_WITH_DIACRITICS,
  HIRAGANA_DIGRAPHS,
  HIRAGANA_DIGRAPHS_WITH_DIACRITICS,
  Data,
} from '../consts/HIRAGANA_DATA';
import AlphabetSection from '../components/AlphabetSection';

type HiraganaData = {
  title: string;
  headerLetters: string[];
  alphabetData: Data;
};

const hiraganaData: HiraganaData[] = [
  {
    title: 'Monographs (gojūon)',
    headerLetters: ['a', 'i', 'u', 'e', 'o'],
    alphabetData: HIRAGANA_MONOGRAPHS,
  },
  {
    title: 'Letter "n"',
    headerLetters: [],
    alphabetData: HIRAGANA_N,
  },
  {
    title: 'Monographs with diacritics\n(dakuten, handakuten)',
    headerLetters: ['a', 'i', 'u', 'e', 'o'],
    alphabetData: HIRAGANA_MONOGRAPHS_WITH_DIACRITICS,
  },
  {
    title: 'Digraphs(yōon)',
    headerLetters: ['ya', 'yu', 'yo'],
    alphabetData: HIRAGANA_DIGRAPHS,
  },
  {
    title: 'Digraphs with diacritics',
    headerLetters: ['ya', 'yu', 'yo'],
    alphabetData: HIRAGANA_DIGRAPHS_WITH_DIACRITICS,
  },
];

const HiraganaScreen = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      {hiraganaData.map((item, index) => {
        return (
          <AlphabetSection
            key={index}
            title={item.title}
            headerLetters={item.headerLetters}
            alphabetData={item.alphabetData}
          />
        );
      })}
    </ScrollView>
  );
};

export default HiraganaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerCells: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 29,
    marginHorizontal: -5,
    paddingVertical: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    marginHorizontal: -5,
    paddingVertical: 5,
  },
  contentContainer: {
    padding: 15,
    flexGrow: 1,
  },
});
