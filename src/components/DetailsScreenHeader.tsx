import React, {FC, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import RNVectorIcon from './RNVectorIcon';
import {PRIMARY_DARK, WHITE, WHITE_50} from '../consts/COLORS';
import {kanjiData} from '../consts/kanjiData';

interface Props {
  navigation: any;
  kanjiCharacter: string;
  topPadding: number;
  goToNextKanji: () => void;
  goToPreviousKanji: () => void;
  kanjiIndex: number;
  singleKanjiData: string;
  kmmeaning: string;
}

const DetailsScreenHeader: FC<Props> = ({
  navigation,
  kanjiCharacter,
  topPadding,
  goToNextKanji,
  goToPreviousKanji,
  kanjiIndex,
  singleKanjiData,
}) => {
  const [isDottedVisible, setIsDottedVisible] = useState(false);

  return (
    <View style={[styles.header, {paddingTop: topPadding}]}>
      <View style={styles.leftSide}>
        <Pressable>
          <RNVectorIcon
            name="left"
            family="AntDesign"
            size={40}
            color={WHITE}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </Pressable>
        <Pressable
          onPress={() => setIsDottedVisible(prev => !prev)}
          style={{opacity: isDottedVisible ? 1 : 0.5}}>
          <RNVectorIcon
            name="border-outside"
            family="MaterialCommunityIcons"
            size={40}
            color={WHITE}
          />
        </Pressable>
      </View>

      <View style={styles.center}>
        <Pressable onPress={goToPreviousKanji} disabled={kanjiIndex === 0}>
          <RNVectorIcon
            name="arrowleft"
            family="AntDesign"
            size={40}
            color={kanjiIndex === 0 ? WHITE_50 : WHITE}
          />
        </Pressable>
        <View style={styles.kanjiContainer}>
          {isDottedVisible && (
            <>
              <View style={styles.verticalDotted} />
              <View style={styles.horizontalDotted} />
            </>
          )}
          <Text style={styles.kanjiText}>{kanjiCharacter}</Text>
          <View style={styles.strokesInfo}>
            <Text
              style={styles.strokesText}
              numberOfLines={1}
              ellipsizeMode="tail">
              {singleKanjiData.kstroke}
            </Text>
            <RNVectorIcon
              name="brush"
              family="Ionicons"
              size={18}
              color={WHITE}
              style={{marginRight: 5}}
            />
          </View>
        </View>
        <Pressable
          onPress={goToNextKanji}
          disabled={kanjiIndex === kanjiData.length - 1}>
          <RNVectorIcon
            name="arrowright"
            family="AntDesign"
            size={40}
            color={kanjiIndex === kanjiData.length - 1 ? WHITE_50 : WHITE}
          />
        </Pressable>
      </View>

      <View style={styles.rightSide}>
        <Pressable>
          <RNVectorIcon
            name="star"
            family="Feather"
            size={40}
            color={'#FFFFFF00'}
          />
        </Pressable>
        {/* <Pressable>
          <RNVectorIcon
            name="play-circle-outline"
            family="MaterialCommunityIcons"
            size={40}
            color={WHITE}
          />
        </Pressable> */}
      </View>
    </View>
  );
};

export default DetailsScreenHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingTop: 20,
    backgroundColor: PRIMARY_DARK,
  },
  leftSide: {
    justifyContent: 'space-between',
  },
  center: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 30,
  },
  rightSide: {
    justifyContent: 'space-between',
  },
  kanjiContainer: {
    flex: 1,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: WHITE,
    marginHorizontal: 10,
    borderRadius: 10,
    marginVertical: 15,
  },
  verticalDotted: {
    position: 'absolute',
    height: '100%',
    borderWidth: 1,
    borderColor: PRIMARY_DARK,
    opacity: 0.5,
    borderStyle: 'dotted',
  },
  horizontalDotted: {
    position: 'absolute',
    width: '100%',
    borderWidth: 1,
    borderColor: PRIMARY_DARK,
    opacity: 0.5,
    borderStyle: 'dotted',
  },
  strokesInfo: {
    left: '100%',
    top: 10,
    position: 'absolute',
    borderColor: WHITE,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopEndRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  strokesText: {
    fontSize: 20,
    color: WHITE,
    marginLeft: 5,
    paddingRight: 3,
  },
  kanjiText: {
    fontSize: 100,
    color: PRIMARY_DARK,
    padding: 5,
  },
});
