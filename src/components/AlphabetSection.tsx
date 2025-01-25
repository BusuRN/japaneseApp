import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import Title from './Title';
import CellHeader from './CellHeader';
import CharacterCard from './CharacterCard';
import {Data} from '../types/characterTypes';

interface Props {
  title: string;
  headerLetters: string[];
  alphabetData: Data;
}

const AlphabetSection: FC<Props> = ({title, headerLetters, alphabetData}) => {
  return (
    <View>
      <Title title={title} />
      <View style={styles.headerCells}>
        {headerLetters.map((item, index) => {
          return <CellHeader key={index} letter={item} />;
        })}
      </View>
      <View>
        {alphabetData.map((row, rowIndex) => {
          return (
            <View style={styles.rowContainer} key={rowIndex}>
              {row.map((cellItem, cellIndex) => {
                if (cellItem.isColumn === true) {
                  return (
                    <CellHeader
                      key={cellIndex}
                      letter={cellItem.letter}
                      isColumn={true}
                    />
                  );
                }
                return (
                  <CharacterCard
                    key={cellIndex}
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
    </View>
  );
};

export default AlphabetSection;

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
