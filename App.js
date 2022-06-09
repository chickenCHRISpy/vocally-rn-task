import React, { useState } from 'react';
import {NavigationContainer, DarkTheme, DefaultTheme} from '@react-navigation/native'
import { StyleSheet, StatusBar,Text, View } from 'react-native';
import Tabs from './tabs'

export const ThemeContext = React.createContext();

// export default function App() {
 
//   return (

//     <NavigationContainer
//     theme={!theme ? DarkTheme : DefaultTheme }
//     >
//       <Tabs />
//     </NavigationContainer>
    
//   );
// }

export default function App() {
  const [theme, setTheme] = useState('Dark');

  const themeData = { theme, setTheme };
  return (
    <ThemeContext.Provider value={themeData}>
      <NavigationContainer theme={theme == 'Dark' ? DarkTheme : LightTheme}>
      <Tabs />
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
