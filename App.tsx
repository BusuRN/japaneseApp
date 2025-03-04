import React, {useEffect} from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import SplashScreen from 'react-native-splash-screen';

function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <AppNavigator />;
}
export default App;
