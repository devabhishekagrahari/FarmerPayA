// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './app/screens/splashScreen';
import AppNavigator from './app/navigation/AppNavigator';
import SelectLanguageScreen from './app/screens/selectLanguageScreen';
import LoginOtpVerification from './app/screens/otpScreen.tsx';
import LoginScreen from './app/screens/LogInScreen';
import SignUpScreen from './app/screens/signUpScreen.tsx';
import SignUpFormScreen1 from './app/screens/signUpForm1.tsx';
import SignUpFormScreen2 from './app/screens/SignUpForm2.tsx';
import PrimaryRoleScreen from './app/screens/PrimaryRole';
import SecondaryRoleScreen from './app/screens/SecondaryRole.tsx';
import PlantSelectionScreen from './app/screens/PlantSelectionScreen';
import { StatusBar } from 'react-native';
import DualAnimatedRows from './app/components/animation.tsx';
import { InView } from 'react-native-intersection-observer';
import AIAdvisory from './app/components/AIadvisory.tsx';
import AIChat from './app/screens/AIChat.tsx';
import OnboardingScreen from './app/screens/splashScreen2.tsx';
import SplashScreen2 from './app/screens/splashScreen2.tsx';


 // Your custom splash screen

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="primaryRole" component={PrimaryRoleScreen} /> 
        <Stack.Screen name="secondaryRole" component={SecondaryRoleScreen} />
        <Stack.Screen name="selectLanguage" component={SelectLanguageScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="OtpScreen" component={LoginOtpVerification}/>
        <Stack.Screen name="SignUp" component={SignUpScreen}/>
        <Stack.Screen name="SignUpForm1" component={SignUpFormScreen1}/>
        <Stack.Screen name="SignUpForm2" component={SignUpFormScreen2}/>
        <Stack.Screen name="PlantSelection" component={PlantSelectionScreen} />
        <Stack.Screen name="Main" component={AppNavigator} />
         <Stack.Screen name="AiChat" component={AIChat} />
         <Stack.Screen name="Splash2" component={SplashScreen2} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
