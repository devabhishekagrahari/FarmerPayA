// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './app/screens/SignUp/splashScreen';
import PrimaryRoleScreen from './app/screens/SignUp/Farmer/PrimaryRole.tsx';
import SecondaryRoleScreen from './app/screens/SignUp/Farmer/SecondaryRole.tsx';
import SelectLanguageScreen from './app/screens/SignUp/selectLanguageScreen';
import LoginScreen from './app/screens/SignUp/LogInScreen';
import LoginOtpVerification from './app/screens/SignUp/otpScreen';
import SignUpScreen from './app/screens/SignUp/signUpScreen';
import SignUpFormScreen1 from './app/screens/SignUp/signUpForm1';
import SignUpFormScreen2 from './app/screens/SignUp/SignUpForm2';
import PlantSelectionScreen from './app/screens/SignUp/Farmer/PlantSelectionScreen.tsx';
import { StatusBar } from 'react-native';
import NoNotificationScreen from './app/components/emptyState/no-notification'
import NotificationScreen from './app/screens/NotificationScreen.tsx'
import DualAnimatedRows from './app/components/animation.tsx';
import AIAdvisory from './app/components/AIadvisory.tsx';
import AppNavigator from './app/navigation/AppNavigator';
import AIChat from './app/screens/AIChat/AIChat';
import SplashScreen2 from './app/screens/SignUp/splashScreen2';
import WhoAreUScreen from './app/screens/SignUp/whoAreUScreen';
import AgentSignUp1 from './app/screens/SignUp/Agent/agentSignUp1';
import AgentSignUp2 from './app/screens/SignUp/Agent/agentSignUp2';
import AgentSignUp3 from './app/screens/SignUp/Agent/agentSignUp3';
import UploadDocumentsScreen from './app/screens/SignUp/Agent/UploadDocumentsScreen';
import AgentSignUp4 from './app/screens/SignUp/Agent/agentSignUp4.tsx';
import BankApproval from './app/screens/SignUp/Agent/bankApproval.tsx';
import QrScreen from './app/screens/scanner/qr.tsx';
import ProfileScreen from './app/screens/profileScreen.tsx';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Splash2" component={ProfileScreen} />
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
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen name="AiChat" component={AIChat} />

        <Stack.Screen name="WhoAreU" component={WhoAreUScreen} />
        <Stack.Screen name="AgentSignUp1" component={AgentSignUp1}/>
        <Stack.Screen name="AgentSignUp2" component={AgentSignUp2}/>
        <Stack.Screen name="AgentSignUp3" component={AgentSignUp3}/>
        <Stack.Screen name="AgentSignUp4" component={AgentSignUp4}/>
        <Stack.Screen name="BankApproval" component={BankApproval}/>
        <Stack.Screen name="UploadDocumentsScreen" component={UploadDocumentsScreen}/>
        <Stack.Screen name="QrScreen" component={QrScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
