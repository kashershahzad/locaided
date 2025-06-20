import React, { useEffect } from 'react';
import RootNavigation from './src/navigation/StackNavigation';
import RNBootSplash from 'react-native-bootsplash';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);
  return <RootNavigation />;
};

export default App;