import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AIChat from '../screens/AIChat.tsx';
import MyNewScreen from '../screens/aiChatInbox.tsx';
import NotificationScreen from '../components/emptyState/no-notification.tsx';
import NoInternetScreen from '../components/emptyState/no-internet';
import Error_404Screen from '../components/emptyState/error-404';


const {width,height}=Dimensions.get('window');

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarShowLabel: false,
      headerShown: false,
      tabBarIcon: ({ focused }) => {
        let iconSource;

        switch (route.name) {
          case 'Home':
            iconSource = require('../assets/images/home.png');
            break;
          case 'Chat':
            iconSource = require('../assets/images/chat.png');
            break;
          case 'Scanner':
            iconSource = require('../assets/images/scanner.png');
            break;
          case 'Weather':
            iconSource = require('../assets/images/cloud.png');
            break;
          case 'Profile':
            iconSource = require('../assets/images/profile.png');
            break;
          default:
            iconSource = require('../assets/images/home.png');
        }

        const isScanner = route.name === 'Scanner';

        return (
          <View style={[isScanner ? styles.scannerIconContainer : null ]}>
            <Image
              source={iconSource}
              style={[
                styles.tabIcon,
                isScanner && styles.scannerIcon,
                !isScanner
                ? { tintColor: focused ? '#6929C4' : '#C0C0C0' }
                : null
              ]}
            />
          </View>
        );
      },
      tabBarStyle: {
        backgroundColor: '#fff',
        borderTopWidth: 0,
        elevation: 10,
        height: height*0.08, // 👈 increase this value
        paddingBottom: 8, // 👈 optional for spacing
        paddingTop: 8,
      },
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />

    <Tab.Screen name="Chat" component={AIChat} />
    <Tab.Screen
      name="Scanner"
      component={HomeScreen}
      options={{
        tabBarButton: (props) => (
          <TouchableOpacity onPress={ ()=>{console.log('iconPressed')}}style={styles.scannerButtonWrapper}>
            {props.children}
          </TouchableOpacity>
        ),
      }}
    />
    <Tab.Screen name="Weather" component={NotificationScreen} />
    <Tab.Screen name="Profile" component={HomeScreen} />
  </Tab.Navigator>
);



const styles = StyleSheet.create({
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
    marginRight: 8,
  },
  appName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  headerRightContainer: {
    flexDirection: 'row',
    marginRight: 16,
    alignItems: 'center',
  },
  iconButton: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginLeft: 16,
  },
  tabIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  scannerButtonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  scannerIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 34,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#6929C4',
    top:14,
    padding:8,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  scannerIcon: {
    width: 30,
    height: 30,
    resizeMode:'contain'
  },
});

export default AppNavigator;
