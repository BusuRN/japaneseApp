import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {PRIMARY, PRIMARY_DARK, WHITE} from '../consts/COLORS';
import RNVectorIcon from './RNVectorIcon';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import DrawScreen from '../screens/DrawScreen';
import PracticeCanvas from './PracticeCanvas';
import {FC} from 'react';

interface Props {
  kmeaning: string;
  onyomi: string;
  kunyomi: string;
  examples: string[];
  isPracticeMode: boolean;
  setIsPracticeMode: (mode: boolean) => void;
  kanjiCharacter: string;
}

const DetailsScreenBody: FC<Props> = ({
  kmeaning,
  onyomi,
  kunyomi,
  isPracticeMode,
  setIsPracticeMode,
  examples,
  kanjiCharacter,
}) => {
  const {bottom} = useSafeAreaInsets();

  const toggleMode = () => {
    setIsPracticeMode(prevMode => !prevMode);
  };

  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={[
        styles.scrollContent,
        !isPracticeMode ? {paddingBottom: bottom + 10} : {paddingBottom: 10},
      ]}
      scrollEnabled={!isPracticeMode}>
      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <View style={styles.cornerTextContainer}>
            <Text style={styles.cornerText}>Meaning</Text>
          </View>
          <Text style={styles.headerText}>{kmeaning}</Text>
        </View>
        <Pressable onPress={toggleMode} style={styles.practiceContainer}>
          <RNVectorIcon
            family="Ionicons"
            name={isPracticeMode ? 'book-outline' : 'brush'}
            size={20}
            color={WHITE}
          />
          <Text style={styles.practiceText}>
            {isPracticeMode ? 'Learn' : 'Practice'}
          </Text>
        </Pressable>
      </View>

      <View style={styles.sectionComponent}>
        <View style={styles.cornerTextContainer}>
          <Text style={styles.cornerText}>on.</Text>
        </View>
        <Text>{onyomi}</Text>
      </View>
      <View style={styles.sectionComponent}>
        <View style={styles.cornerTextContainer}>
          <Text style={styles.cornerText}>kun.</Text>
        </View>
        <Text>{kunyomi}</Text>
      </View>
      {!isPracticeMode &&
        (examples?.length > 0 ? (
          examples.map((example: string, index: number) => (
            <View key={index} style={styles.sectionComponent}>
              <View style={styles.cornerTextContainer}>
                <Text style={styles.cornerText}>Example {index + 1}</Text>
              </View>
              <Text>{example[0]}</Text>
              <Text>{example[1]}</Text>
            </View>
          ))
        ) : (
          <Text style={{color: 'gray', textAlign: 'center'}}>
            No examples available
          </Text>
        ))}
      {isPracticeMode && (
        <View style={styles.fullScreenDrawingContainer}>
          <PracticeCanvas kanjiCharacter={kanjiCharacter} />
        </View>
      )}
    </ScrollView>
  );
};

export default DetailsScreenBody;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: WHITE,
  },
  scrollContent: {
    padding: 10,
    flexGrow: 1,
  },
  sectionContainer: {
    flexDirection: 'row',
  },
  headerText: {
    color: WHITE,
    fontSize: 20,
  },
  sectionHeader: {
    flex: 1,
    justifyContent: 'center',
    padding: 17,
    backgroundColor: PRIMARY,
    borderRadius: 15,
    marginVertical: 3,
  },
  sectionComponent: {
    padding: 17,
    backgroundColor: PRIMARY,
    borderRadius: 15,
    marginVertical: 3,
  },
  practiceContainer: {
    backgroundColor: PRIMARY_DARK,
    borderRadius: 15,
    marginVertical: 3,
    marginLeft: 6,
    padding: 10,
    width: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  practiceText: {
    color: WHITE,
    fontSize: 12,
  },
  cornerTextContainer: {
    right: 0,
    top: 0,
    position: 'absolute',
    backgroundColor: PRIMARY_DARK,
    padding: 5,
    paddingHorizontal: 10,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  cornerText: {
    color: WHITE,
    fontSize: 12,
  },
  drawingContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  fullScreenScroll: {
    flex: 1,
  },

  fullScreenDrawingContainer: {
    flexGrow: 1,
  },
});
