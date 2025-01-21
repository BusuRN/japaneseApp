import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {
  KATAKANA_DIGRAPHS,
  KATAKANA_DIGRAPHS_WITH_DIACRITICS,
  KATAKANA_MONOGRAPHS,
  KATAKANA_MONOGRAPHS_WITH_DIACRITICS,
  KATAKANA_N,
} from '../consts/KATAKANA_DATA';
import AlphabetSection from '../components/AlphabetSection';
import {Data} from '../types/characterTypes';

type KatakanaData = {
  title: string;
  headerLetters: string[];
  alphabetData: Data;
};

const katakanaData: KatakanaData[] = [
  {
    title: 'Monographs (gojūon)',
    headerLetters: ['a', 'i', 'u', 'e', 'o'],
    alphabetData: KATAKANA_MONOGRAPHS,
  },
  {
    title: 'Letter "n"',
    headerLetters: [],
    alphabetData: KATAKANA_N,
  },
  {
    title: 'Monographs with diacritics\n(dakuten, handakuten)',
    headerLetters: ['a', 'i', 'u', 'e', 'o'],
    alphabetData: KATAKANA_MONOGRAPHS_WITH_DIACRITICS,
  },
  {
    title: 'Digraphs(yōon)',
    headerLetters: ['ya', 'yu', 'yo'],
    alphabetData: KATAKANA_DIGRAPHS,
  },
  {
    title: 'Digraphs with diacritics',
    headerLetters: ['ya', 'yu', 'yo'],
    alphabetData: KATAKANA_DIGRAPHS_WITH_DIACRITICS,
  },
];

const KatakanaScreen = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      {katakanaData.map((item, index) => {
        return (
          <AlphabetSection
            key={index}
            title={item.title}
            headerLetters={item.headerLetters}
            alphabetData={item.alphabetData}
          />
        );
      })}
      {/* <Title title={'Monographs (gojūon)'} />
      <View style={styles.headerCells}>
        {['a', 'i', 'u', 'e', 'o'].map(item => {
          return <CellHeader letter={item} />;
        })}
      </View>
      <View>
        {KATAKANA_MONOGRAPHS.map((row, rowIndex) => {
          return (
            <View style={styles.rowContainer}>
              {row.map(cellItem => {
                if (cellItem.isColumn === true) {
                  return (
                    <CellHeader letter={cellItem.letter} isColumn={true} />
                  );
                }
                return (
                  <CharacterCard
                    letter={cellItem.letter}
                    // active={true}
                    eng={cellItem.eng}
                  />
                );
              })}
            </View>
          );
        })}
      </View> */}
    </ScrollView>
  );
};

export default KatakanaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'orange',
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
