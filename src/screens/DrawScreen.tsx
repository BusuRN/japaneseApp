import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState, useRef } from 'react';
import Slider from '@react-native-community/slider';
import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas';
import { PRIMARY, PRIMARY_50, PRIMARY_DARK, WHITE } from '../consts/COLORS';
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

const DrawScreen = ({ customStyle }) => {
  const [colorMenu, setColorMenu] = useState(false);
  const [isKanjiVisible, setIsKanjiVisible] = useState(false);
  const [color, setColor] = useState('#000000');
  const [thicknessMenu, setThicknessMenu] = useState(false);
  const [strokeWidth, setStrokeWidth] = useState(5);

  const canvasRef = useRef<SketchCanvas>(null);

  return (
    <View style={styles.container}>
      <View style={[styles.headerButtons, customStyle]}>
        <Pressable
          style={styles.button}
          onPress={() => {
            setColorMenu(!colorMenu);
          }}
        // onPress={colorVisibility}
        // onPress={() => {
        //   if (colorMenu === true) {
        //     setColorMenu(false);
        //   } else {
        //     setColorMenu(true);
        //   }
        // }}
        >
          <RNVectorIcon
            name="format-color-fill"
            family="MaterialIcons"
            size={20}
            color={'grey'}
          />
          <Text style={styles.buttonText}>Color</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => {
            setThicknessMenu(!thicknessMenu);
          }}>
          <RNVectorIcon
            name="grip-lines"
            family="FontAwesome5"
            size={20}
            color={'grey'}
          />
          <Text style={styles.buttonText}>L.thick.</Text>
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
      {colorMenu === true && (
        <View style={styles.colorContainer}>
          {colors.map(item => {
            return (
              <Pressable
                key={item}
                style={[
                  styles.colorButton,
                  { backgroundColor: item },
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
      {thicknessMenu === true && (
        <View style={styles.sliderContainer}>
          <View style={styles.colorContainer}>
            <Text style={styles.thickValue}>1</Text>
            <View style={styles.verticalLine} />
            <Slider
              style={{ width: '100%', height: 40, flex: 1 }}
              minimumValue={1}
              maximumValue={10}
              minimumTrackTintColor={PRIMARY_DARK}
              maximumTrackTintColor={PRIMARY}
              value={strokeWidth}
              step={1}
              onValueChange={value => setStrokeWidth(value)}
            />
            <View style={styles.verticalLine} />
            <Text style={styles.thickValue2}>10</Text>
            <View>
              <RNVectorIcon
                name="check"
                family="AntDesign"
                size={30}
                color={PRIMARY_DARK}
                onPress={() => {
                  setThicknessMenu(false);
                }}
              />
            </View>
          </View>
        </View>
      )}
      <SketchCanvas
        ref={canvasRef}
        style={styles.canvas}
        strokeColor={color}
        strokeWidth={strokeWidth}
      />
    </View>
  );
};

export default DrawScreen;

const styles = StyleSheet.create({
  container: {
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
    padding: 5,
    marginHorizontal: 10,
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
});
