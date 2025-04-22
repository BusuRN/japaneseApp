import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const PracticeScreen = ({ navigation }) => {
  return (
    <View>
      <Pressable
        onPress={() => {
          navigation.navigate('Workout');
        }}>
        <Text>Navigate to WorkoutScreen</Text>
      </Pressable>

      <Text>PracticeScreen</Text>
    </View>
  );
};

export default PracticeScreen;

const styles = StyleSheet.create({});
