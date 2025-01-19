import React from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import LittleBit from '../components/LittleBit';
import SVGLogo from '../components/SVGLogo';
import {PRIMARY, PRIMARY_DARK, WHITE} from '../consts/COLORS';
import Box from '../components/Box';
import RNVectorIcon from '../components/RNVectorIcon';

const WorkOutScreen = ({navigation}) => {
  const myBoxes = [
    {
      title: 'Exercises\nCompleted',
      value: '30',
    },
    {
      title: 'Workout\nDuration',
      value: '25 min',
    },
    {
      title: 'Active\ntime',
      value: '20 min',
    },
    {
      title: 'Rest\ntime',
      value: '20 min',
    },
    {
      title: 'Difficulty\ntime',
      value: '100%',
    },
    {
      title: 'Total\nworkouts\ncompleted',
      value: '3',
    },
    {
      title: 'Reps',
      value: '240',
    },
    {
      title: 'Weight\nlifted',
      value: '370 kg',
    },
  ];

  return (
    <View style={styles.container}>
      <LittleBit />
      <Pressable
        style={styles.closeButton}
        onPress={() => {
          navigation.goBack();
        }}>
        <RNVectorIcon
          name="cat"
          family="FontAwesome5"
          size={40}
          color={WHITE}
        />
      </Pressable>
      <SVGLogo />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Well done!</Text>
        <Text style={styles.subtitle}>
          {"Here's a summary of\nthis workout"}
        </Text>
        {myBoxes.map(item => {
          return <Box title={item.title} value={item.value} />;
        })}
        {/* {[
          <Box title={'Exercises\nCompleted'} value="30" />,
          <Box title={'Workout\nDuration'} value="25 min" />,
          <Box title={'Active\ntime'} value="20 min" />,
          <Box title={'Rest\ntime'} value="20 min" />,
          <Box title={'Difficulty\ntime'} value="100%" />,
          <Box title={'Total\nworkouts\ncompleted'} value="3" />,
          <Box title={'Reps'} value="240" />,
          <Box title={'Weight\nlifted'} value="370 kg" />,
        ]} */}
        {/* {[124, 345632, 123, 4573, 1231, 74].map(item => {
          return <Text>{item}</Text>;
        })} */}
        {/* {[
          <Text>{124}</Text>,
          <Text>{345632}</Text>,
          <Text>{123}</Text>,
          <Text>{4573}</Text>,
          <Text>{1231}</Text>,
          <Text>{74}</Text>,
        ]} */}
        <Pressable
          onPress={() => {
            console.log('Asta e activitatea mea');
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>Share my awesomeness!</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default WorkOutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingBottom: 20,
  },
  closeButton: {
    // borderWidth: 3,
    position: 'absolute',
    right: 20,
    top: 55,
    zIndex: 1,
  },
  scroll: {
    // padding: 20,
    flex: 1,
    // paddingBottom: 50,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    color: WHITE,
    fontSize: 28,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 20,
    // marginTop: -40,
    // borderWidth: 2,
  },
  subtitle: {
    color: WHITE,
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 20,
    // alignSelf: 'center',
    // alignSelf: 'flex-end',
    // borderWidth: 2,
  },
  button: {
    // borderWidth: 2,
    // height: 200,
    paddingVertical: 12,
    // overflow: 'visible',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF9A',
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    color: WHITE,
    // cursor: 'pointer',
    // overflow: 'visible',
    // flex: 1,
    // width: '100%',
  },
});
