import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  SafeAreaView,
  Alert,
} from 'react-native';
import DualAnimatedRows from '../../components/animation';
import ChatInputBar from '../../components/AiAdvisoryComponents/chatInputBar';
import DualAnimatedRows1 from '../../components/animation2';

// ✅ adjust this import if needed

const AiWelcomeScreen = ({navigation}:any) => {
  const [inputText ,setInputText]=useState('');
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require('../../assets/images/bg2.png')}
        style={styles.background}
        resizeMode="stretch"
      >
        <View style={styles.container}>
          <Image source={require('../../assets/images/Logo.png')} style={styles.logo} />
          <Text style={styles.subtitle}>What farming help do you need today?</Text>
        </View>
        <View style={{justifyContent:'center',width:'100%',alignItems:'center'}}>
        <DualAnimatedRows1 inView={true} navigation={navigation} />
        </View>

      </ImageBackground>
                    <View style={{ width: '100%' }}>
                <ChatInputBar
                  value={inputText}
                  navigation={navigation}
                  onChangeText={(text) => {
                    setInputText(text);
                    console.log('Typed:', text);
                  }}
                  onMicPress={() => Alert.alert('Mic pressed')}
                  onGalleryPress={() => Alert.alert('Gallery pressed')}
                />
              </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    
  },
  container: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#656F77',
    textAlign: 'center',
    marginBottom: 24,
  },
});

export default AiWelcomeScreen;
