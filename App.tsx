import React, { useEffect } from 'react';
import RootNavigation from './src/navigation/StackNavigation';
import BootSplash from "react-native-bootsplash";

const App = () => {
  // useEffect(() => {
  //   BootSplash.hide({ fade: true });
  // }, []);
  return <RootNavigation />;
};

export default App;