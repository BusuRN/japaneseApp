import {StyleSheet, View} from 'react-native';
import React, {FC, useState} from 'react';
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
  const [activeCard, setActiveCard] = useState('');
  const [activeColumn, setActiveColumn] = useState('');
  const [activeRow, setActiveRow] = useState('');

  return (
    <View>
      <Title title={title} />
      <View style={styles.headerCells}>
        {headerLetters.map((item, index) => (
          <CellHeader key={index} letter={item} active={activeRow === item} />
        ))}
      </View>
      <View>
        {alphabetData.map((row, rowIndex) => (
          <View style={styles.rowContainer} key={rowIndex}>
            {row.map((cellItem, cellIndex) => {
              if (cellItem.isColumn) {
                return (
                  <CellHeader
                    key={cellIndex}
                    letter={cellItem.letter}
                    isColumn={true}
                    active={activeColumn === cellItem.letter}
                  />
                );
              }
              const horizontalIndex = row
                .filter(item => !item.isColumn)
                .indexOf(cellItem);

              return (
                <CharacterCard
                  key={cellIndex}
                  letter={cellItem.letter}
                  eng={cellItem.eng}
                  active={activeCard === cellItem.letter}
                  onPress={() => {
                    setActiveCard(cellItem.letter);
                    setActiveColumn(row[0]?.letter);
                    setActiveRow(headerLetters[horizontalIndex]);
                  }}
                />
              );
            })}
          </View>
        ))}
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
