// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './app/screens/splashScreen';
import AppNavigator from './app/navigation/AppNavigator';
import SelectLanguageScreen from './app/screens/selectLanguageScreen';
 // Your custom splash screen

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Main" component={AppNavigator} />
        <Stack.Screen name="selectLanguage" component={SelectLanguageScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
