// AIAdvisory.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const QUESTIONS = [
  { text: 'Where is nearest seed shop? 🌱' },
  { text: 'गेहूँ की MSP क्या है?” 🌾' },
  { text: 'Aaj ka mausam? ☀️' },
  { text: 'ಮೇಯುವ ಸರ್ಕಾರ ಯೋಜನೆಗೆ ಅರ್ಹನು? 📚' },
  { text: 'Which government scheme am I eligible for? 📄' },
  { text: 'How to get Kisan Card? 📄' },
  { text: 'बोरवेल गहराई? 💧' },
  { text: 'गेहूँ की MSP क्या है?” 🌾' },
  { text: 'Aaj ka mausam? ☀️' }, 
];

const AIAdvisory = () => {
  return (
    <ImageBackground style={{width:400, height:380}}  source={require('../assets/images/aiAdvisoryImage.png')}>
    <View style={styles.container}>
      <Text style={styles.title}>AI Advisory</Text>
      <View style={styles.pillContainer}>
        {QUESTIONS.map((item, index) => (
          <LinearGradient
            colors={['#FF0000', '#FFA500']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradientBorder}
          >
          <TouchableOpacity key={index} style={styles.pill}>
            <Text style={styles.pillText}>{item.text}</Text>
          </TouchableOpacity>
          </LinearGradient>
        ))}
      </View>
    </View></ImageBackground>
  );
};

export default AIAdvisory;

const styles = StyleSheet.create({
  container: {

    padding: 16,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    marginTop: 16,
  },
  title: {
    fontFamily: 'Inter',       // Make sure Inter is linked properly
  fontWeight: '600',         // or use fontFamily: 'Inter-SemiBold' if you have specific variants
  fontSize: 22,
  lineHeight: 22,            // 100% of 22px
  letterSpacing: -0.88,
    color: '#1F077A',
    marginBottom: 16,
    marginTop:12,

  },
  pillContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  gradientBorder:{
     padding:1,
     borderRadius:20,
     margin:4
  },
  pill: {

    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  pillText: {
    fontSize: 10,
    color: '#3C1C78',
  },
});
