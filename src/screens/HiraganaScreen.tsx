import {ScrollView, StyleSheet} from 'react-native';
import React, {useEffect, useRef} from 'react';
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
  const andreiScroll = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (andreiScroll.current) {
        andreiScroll.current.scrollToEnd();
      }
    }, 3000);
  }, []);

  return (
    <ScrollView
      ref={andreiScroll}
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
      {/* <AlphabetSection
        title={'Monographs (gojūon)'}
        headerLetters={['a', 'i', 'u', 'e', 'o']}
        alphabetData={HIRAGANA_MONOGRAPHS}
      />
      <AlphabetSection
        title={'Letter "n"'}
        headerLetters={[]}
        alphabetData={HIRAGANA_N}
      />
      <AlphabetSection
        title={'Monographs with diacritics\n(dakuten, handakuten)'}
        headerLetters={['a', 'i', 'u', 'e', 'o']}
        alphabetData={HIRAGANA_DIGRAPHS_WITH_DIACRITICS}
      />
      <AlphabetSection
        title={'Digraphs(yōon)'}
        headerLetters={['ya', 'yu', 'yo']}
        alphabetData={HIRAGANA_DIGRAPHS}
      />
      <AlphabetSection
        title={'Digraphs with diacritics'}
        headerLetters={['ya', 'yu', 'yo']}
        alphabetData={HIRAGANA_DIGRAPHS_WITH_DIACRITICS}
      /> */}
      {/* <Title title={'Monographs (gojūon)'} />
      <View style={styles.headerCells}>
        {['a', 'i', 'u', 'e', 'o'].map(item => {
          return <CellHeader letter={item} />;
        })}
      </View>
      <View>
        {HIRAGANA_MONOGRAPHS.map((row, rowIndex) => {
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
      {/* <View>
        <Title title={'Monographs with diacritics\n(dakuten, handakuten)'} />
        {HIRAGANA_N.map((row, rowIndex) => {
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
      </View>
      <Title title={'Monographs with diacritics\n(dakuten, handakuten)'} />
      <View style={styles.headerCells}>
        {['a', 'i', 'u', 'e', 'o'].map(item => {
          return <CellHeader letter={item} />;
        })}
      </View>
      {HIRAGANA_MONOGRAPHS_WITH_DIACRITICS.map((row, rowIndex) => {
        return (
          <View style={styles.rowContainer}>
            {row.map(cellItem => {
              if (cellItem.isColumn === true) {
                return <CellHeader letter={cellItem.letter} isColumn={true} />;
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
      <Title title={'Digraphs (yōon)'} />
      <View style={styles.headerCells}>
        {['ya', 'yu', 'yo'].map(item => {
          return <CellHeader letter={item} />;
        })}
      </View>
      {HIRAGANA_DIGRAPHS.map((row, rowIndex) => {
        return (
          <View style={styles.rowContainer}>
            {row.map(cellItem => {
              if (cellItem.isColumn === true) {
                return <CellHeader letter={cellItem.letter} isColumn={true} />;
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
      <Title title={'Digraphs with diacritics'} />
      <View style={styles.headerCells}>
        {['ya', 'yu', 'yo'].map(item => {
          return <CellHeader letter={item} />;
        })}
      </View>
      {HIRAGANA_DIGRAPHS_WITH_DIACRITICS.map((row, rowIndex) => {
        return (
          <View style={styles.rowContainer}>
            {row.map(cellItem => {
              if (cellItem.isColumn === true) {
                return <CellHeader letter={cellItem.letter} isColumn={true} />;
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
      })} */}
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
