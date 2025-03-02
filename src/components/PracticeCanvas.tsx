import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState, useRef} from 'react';
import Slider from '@react-native-community/slider';
import {SketchCanvas} from '@terrylinla/react-native-sketch-canvas';
import {
  BLACK,
  PRIMARY,
  PRIMARY_50,
  PRIMARY_DARK,
  WHITE,
} from '../consts/COLORS';
import RNVectorIcon from '../components/RNVectorIcon';

const colors = [
  '#000000',
  '#6D6D6D',
  '#D48888',
  '#E89C54',
  '#96D764',
  '#6BD8B9',
  '#4B6FC6',
  '#915FD3',
  '#DA6097',
  '#D1494B',
];

const PracticeCanvas = ({kanjiCharacter}) => {
  const [colorMenu, setColorMenu] = useState(false);
  const [isKanjiVisible, setIsKanjiVisible] = useState(true);
  const [color, setColor] = useState('#000000');
  const [strokeWidth, setStrokeWidth] = useState(10);
  const canvasRef = useRef<SketchCanvas>(null);

  return (
    <View style={styles.container}>
      <View style={styles.canvasContainer}>
        {isKanjiVisible && (
          <View style={styles.kanjiContainer}>
            <Text style={styles.backgroundKanji}>{kanjiCharacter}</Text>
          </View>
        )}
        <SketchCanvas
          ref={canvasRef}
          style={styles.canvas}
          strokeColor={color}
          strokeWidth={strokeWidth}
        />
      </View>
      <View>
        {colorMenu === true && (
          <View style={styles.colorContainer}>
            {colors.map(item => {
              return (
                <Pressable
                  key={item}
                  style={[
                    styles.colorButton,
                    {backgroundColor: item},
                    item === color && styles.selectedColor,
                  ]}
                  onPress={() => {
                    setColor(item);
                    setColorMenu(false);
                  }}>
                  {item === color && (
                    <RNVectorIcon
                      name="check"
                      family="AntDesign"
                      size={18}
                      color={WHITE}
                    />
                  )}
                </Pressable>
              );
            })}
          </View>
        )}
        <View style={styles.headerButtons}>
          <Pressable
            style={styles.button}
            onPress={() => setIsKanjiVisible(prev => !prev)}>
            <RNVectorIcon
              name={isKanjiVisible ? 'eye-off' : 'eye'}
              family="Feather"
              size={20}
              color={'grey'}
            />
            <Text style={styles.buttonText}>Preview</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => {
              setColorMenu(!colorMenu);
            }}>
            <RNVectorIcon
              name="format-color-fill"
              family="MaterialIcons"
              size={20}
              color={'grey'}
            />
            <Text style={styles.buttonText}>Color</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              if (canvasRef.current) {
                canvasRef.current?.undo();
              }
            }}
            style={styles.button}>
            <RNVectorIcon
              name="undo"
              family="MaterialIcons"
              size={20}
              color={'grey'}
            />
            <Text style={styles.buttonText}>Undo</Text>
          </Pressable>

          <Pressable
            onPress={() => {
              if (canvasRef.current) {
                canvasRef.current?.clear();
              }
            }}
            style={styles.button}>
            <RNVectorIcon
              name="trash"
              family="FontAwesome5"
              size={16}
              color={'grey'}
            />
            <Text style={styles.buttonText}>Clear</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default PracticeCanvas;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  canvasContainer: {
    flex: 1,
  },
  canvas: {
    flex: 1,
  },
  headerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
    backgroundColor: PRIMARY_50,
    borderRadius: 10,
    margin: 5,
    flex: 1,
    height: 50,
  },
  buttonText: {
    color: PRIMARY_DARK,
    fontSize: 14,
  },
  colorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: PRIMARY_50,
    borderRadius: 10,
    marginHorizontal: 10,
    padding: 5,
    position: 'absolute',
    bottom: 70,
  },
  colorButton: {
    aspectRatio: 1,
    flex: 1,
    margin: 5,
    borderRadius: 40,
  },
  thickValue: {
    color: PRIMARY_DARK,
    paddingHorizontal: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  thickValue2: {
    color: PRIMARY_DARK,
    marginHorizontal: 10,
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: PRIMARY_50,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  verticalLine: {
    width: 4,
    height: 20,
    backgroundColor: PRIMARY_DARK,
    marginHorizontal: -4,
  },
  selectedColor: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  kanjiContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  backgroundKanji: {
    fontSize: 200,
    // color: 'red',
    // opacity: 0.5,
    // color: 'rgb(255,255,0)',
    // color: '#FFFF00',
    // color: 'rgba(255,0,0,0.5)',
    color: '#00000022',

    textAlign: 'center',
  },
});
