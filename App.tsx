import React, {useEffect} from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import SplashScreen from 'react-native-splash-screen';
import {StatusBar, StyleSheet, View} from 'react-native';

function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={'red'} />
      <AppNavigator />
    </View>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
