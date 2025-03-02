import {StyleSheet, View} from 'react-native';
import React, {FC, useState} from 'react';
import {kanjiData} from '../consts/kanjiData';
import {WHITE_20} from '../consts/COLORS';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import DetailsScreenHeader from '../components/DetailsScreenHeader';
import DetailsScreenBody from '../components/DetailsScreenBody';

interface Props {
  navigation: NativeStackNavigationProp<any>;
  route: RouteProp<
    {
      params: {
        id: string;
      };
    },
    'params'
  >;
}

const DetailsScreen: FC<Props> = ({navigation, route}) => {
  const kanjiId = route.params.id;
  const initialIndex = kanjiData.findIndex(item => item.id === kanjiId);
  const [kanjiIndex, setKanjiIndex] = useState(initialIndex);
  const [isPracticeMode, setIsPracticeMode] = useState(false);
  const goToPreviousKanji = () => {
    if (kanjiIndex > 0) {
      setKanjiIndex(kanjiIndex - 1);
    }
  };

  const goToNextKanji = () => {
    if (kanjiIndex < kanjiData.length - 1) {
      setKanjiIndex(kanjiIndex + 1);
    }
  };
  const {top} = useSafeAreaInsets();
  const singleKanjiData = kanjiData[kanjiIndex];
  const kanjiCharacter = singleKanjiData?.name || 'Kanji not found';
  const kmeaning = singleKanjiData?.kmeaning || 'Meaning not found';
  const onyomi = singleKanjiData?.onyomi_ja || 'Onyomi not found';
  const kunyomi = singleKanjiData?.kunyomi_ja || 'Kunyomi not found';

  return (
    <View style={styles.container}>
      <DetailsScreenHeader
        navigation={navigation}
        kanjiCharacter={kanjiCharacter}
        singleKanjiData={singleKanjiData}
        topPadding={top + 10}
        goToNextKanji={goToNextKanji}
        goToPreviousKanji={goToPreviousKanji}
        kanjiIndex={kanjiIndex}
      />

      <DetailsScreenBody
        kmeaning={kmeaning}
        onyomi={onyomi}
        kunyomi={kunyomi}
        examples={
          JSON.parse(singleKanjiData?.examples)
          // Array.isArray(singleKanjiData?.examples)
          //   ? singleKanjiData.examples
          //   : []
        }
        isPracticeMode={isPracticeMode}
        setIsPracticeMode={setIsPracticeMode}
        kanjiCharacter={kanjiCharacter}
      />
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_20,
  },
});
