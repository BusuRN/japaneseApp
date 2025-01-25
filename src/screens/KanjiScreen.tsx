import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Pressable,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {kanjiData} from '../consts/kanjiData';
import {ACCENT, BLACK, PRIMARY, WHITE} from '../consts/COLORS';
import RNVectorIcon from '../components/RNVectorIcon';

const KanjiScreen = ({navigation}) => {
  // const numColumns = 5;
  const [searchText, setSearchText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const filteredData = kanjiData.filter(item =>
    item.kmeaning.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Type here to search"
          value={searchText}
          onChangeText={text => {
            setSearchText(text);
          }}
        />
        <Pressable
          onPress={() => {
            setModalVisible(true);
          }}>
          <RNVectorIcon
            name="filter"
            family="Ionicons"
            size={40}
            color={ACCENT}
          />
        </Pressable>
      </View>
      <FlatList
        style={styles.flatList}
        contentContainerStyle={styles.flatContainer}
        data={filteredData}
        renderItem={({item}) => {
          return (
            <Pressable
              onPress={() => {
                console.log(`Test: This Kanji is ${item.name}`);
                navigation.navigate('Details', {
                  // name: item.name,
                  id: item.id,
                });
              }}
              style={styles.card}>
              <Text style={styles.name}>{item.name}</Text>
            </Pressable>
          );
        }}
        keyExtractor={item => item.id}
        numColumns={5}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        // visible={modalVisible}
        // onRequestClose={() => {
        //   Alert.alert('Modal has been closed.');
        //   setModalVisible(!modalVisible);
        // }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={styles.closeButton}
              onPress={() => {
                setModalVisible(false);
                console.log('meerge');
              }}>
              <RNVectorIcon
                name="closecircleo"
                family="AntDesign"
                size={20}
                color={BLACK}
              />
            </Pressable>
            <Text style={styles.modalText}>Filter</Text>
            <View style={styles.rowContainer}>
              <Text style={styles.searchFilter}>Search by:</Text>
              <Pressable
                style={styles.modalButton}
                onPress={() => {
                  console.log('merge');
                }}>
                <Text style={styles.modalButtonText}>All</Text>
              </Pressable>
            </View>
            <View style={styles.rowContainer}>
              <Pressable
                style={styles.modalButton}
                onPress={() => {
                  console.log('merge');
                }}>
                <Text style={styles.modalButtonText}>Meaning</Text>
              </Pressable>
              <Pressable
                style={styles.modalButton}
                onPress={() => {
                  console.log('merge');
                }}>
                <Text style={styles.modalButtonText}>Examples</Text>
              </Pressable>
            </View>
            <View style={styles.rowContainer}>
              <Pressable
                style={styles.modalButton}
                onPress={() => {
                  console.log('merge');
                }}>
                <Text style={styles.modalButtonText}>Onyomi</Text>
              </Pressable>
              <Pressable
                style={styles.modalButton}
                onPress={() => {
                  console.log('merge');
                }}>
                <Text style={styles.modalButtonText}>Kunyomi</Text>
              </Pressable>
            </View>
            <View style={styles.filterContainer}>
              <View style={styles.rowContainer}>
                <Text style={styles.searchFilter}>Filter by grade:</Text>
                <Pressable
                  style={styles.modalButton}
                  onPress={() => {
                    console.log('merge');
                  }}>
                  <Text style={styles.modalButtonText}>All</Text>
                </Pressable>
              </View>
              <View style={styles.rowContainer}>
                <Pressable
                  style={styles.modalButton}
                  onPress={() => {
                    console.log('merge');
                  }}>
                  <Text style={styles.modalButtonText}>1</Text>
                </Pressable>
                <Pressable
                  style={styles.modalButton}
                  onPress={() => {
                    console.log('merge');
                  }}>
                  <Text style={styles.modalButtonText}>2</Text>
                </Pressable>
                <Pressable
                  style={styles.modalButton}
                  onPress={() => {
                    console.log('merge');
                  }}>
                  <Text style={styles.modalButtonText}>3</Text>
                </Pressable>
                <Pressable
                  style={styles.modalButton}
                  onPress={() => {
                    console.log('merge');
                  }}>
                  <Text style={styles.modalButtonText}>4</Text>
                </Pressable>
                <Pressable
                  style={styles.modalButton}
                  onPress={() => {
                    console.log('merge');
                  }}>
                  <Text style={styles.modalButtonText}>5</Text>
                </Pressable>
                <Pressable
                  style={styles.modalButton}
                  onPress={() => {
                    console.log('merge');
                  }}>
                  <Text style={styles.modalButtonText}>6+</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default KanjiScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
  },
  searchBar: {
    height: 50,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 15,
    paddingRight: 15,
    marginHorizontal: 15,
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 15,
    paddingTop: 15,
  },
  rowContainer: {
    flexDirection: 'row',
    margin: 5,
    marginHorizontal: -5,
    alignItems: 'center',
  },
  flatList: {
    flex: 1,
  },
  flatContainer: {
    padding: 10,
    flexGrow: 1,
  },
  card: {
    flex: 1,
    margin: 5,
    aspectRatio: 1,
    backgroundColor: PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  name: {
    fontSize: 32,
    color: WHITE,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    padding: 50,
  },
  modalView: {
    borderRadius: 20,
    backgroundColor: WHITE,
    padding: 10,
  },
  modalText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 15,
  },
  searchFilter: {
    fontSize: 16,
    fontWeight: '500',
    flex: 1,
    marginHorizontal: 5,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: 20,
  },
  closeButton: {
    position: 'absolute',
    right: 15,
    top: 15,
    zIndex: 1,
  },
  modalButton: {
    backgroundColor: ACCENT,
    borderRadius: 8,
    height: 30,
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  modalButtonText: {
    textAlign: 'center',
    fontSize: 16,
    color: WHITE,
    fontWeight: '500',
  },
  modalButtonNumber: {
    textAlign: 'center',
    fontSize: 16,
    color: WHITE,
    fontWeight: '500',
  },
  filterContainer: {
    marginTop: 20,
  },
});
