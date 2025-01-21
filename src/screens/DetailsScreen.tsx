import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC} from 'react';
import {kanjiData} from '../consts/kanjiData';
import {PRIMARY_DARK, WHITE} from '../consts/COLORS';
import RNVectorIcon from '../components/RNVectorIcon';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';

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
  const singleKanjiData = kanjiData.find(item => {
    return item.id === kanjiId;
  });
  console.log(kanjiId);
  console.log(singleKanjiData);
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.closeButton}
        onPress={() => {
          navigation.goBack();
        }}>
        <RNVectorIcon name="left" family="AntDesign" size={40} color={WHITE} />
      </Pressable>

      <TouchableOpacity>
        <Text style={styles.arrow}>←</Text>
      </TouchableOpacity>
      <View style={styles.kanji}>
        <Text style={styles.kanjiText}>訪</Text>
      </View>
      <TouchableOpacity>
        <Text style={styles.arrow}>→</Text>
      </TouchableOpacity>
      <Pressable style={styles.favoriteButton} onPress={() => {}}>
        <RNVectorIcon name="star" family="Feather" size={40} color={WHITE} />
      </Pressable>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: PRIMARY_DARK,
  },
  closeButton: {
    position: 'absolute',
    top: 5,
    zIndex: 1,
  },
  favoriteButton: {
    position: 'absolute',
    top: 5,
    zIndex: 1,
    right: 10,
  },
  arrow: {
    padding: 10,
    fontSize: 40,
    marginVertical: 50,
    marginHorizontal: 50,
    color: WHITE,
  },
  kanjiText: {
    fontSize: 80,
    backgroundColor: WHITE,
    color: PRIMARY_DARK,
    fontWeight: '500',
  },
  kanji: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: WHITE,
  },
});
