// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './app/screens/splashScreen';
import AppNavigator from './app/navigation/AppNavigator';
import SelectLanguageScreen from './app/screens/selectLanguageScreen'; 
import PrimaryRoleScreen from './app/screens/PrimaryRole';
import PrimaryActivityScreen from './app/screens/PrimaryActivityScreen';
import PlantSelectionScreen from './app/screens/PlantSelectionScreen';

 // Your custom splash screen

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="primaryRole" component={PrimaryRoleScreen} /> 
        <Stack.Screen name="PrimaryActivity" component={PrimaryActivityScreen} />
        <Stack.Screen name="selectLanguage" component={SelectLanguageScreen}/>
        <Stack.Screen name="PlantSelection" component={PlantSelectionScreen} />
        <Stack.Screen name="Main" component={AppNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
