// AIAdvisory.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ImageBackground, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import DualAnimatedRows from './animation';
import { InView } from 'react-native-intersection-observer';
const{width,height}=Dimensions.get('window');
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
interface AIAdvisoryProps {
  inView: boolean;
  navigation:any;
}
const AIAdvisory: React.FC<AIAdvisoryProps> = ({ inView ,navigation}) => {
  return (
    <ImageBackground style={{width:width+16,alignSelf:'center',height:'auto' ,minHeight:width,marginBottom:24}} resizeMode="contain" source={require('../assets/images/aiAdvisoryImage.png')}>
    <View style={styles.container}>
      <Text style={styles.title}>AI Advisory</Text>
      {/* <View style={styles.pillContainer}>
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
      </View> */}

      <DualAnimatedRows inView={inView} navigation={navigation}/>
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
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal:10,
    color:'#1F077A',
    fontFamily: 'Inter-Regular',       // Make sure Inter is linked properly
    lineHeight: 22,            // 100% of 22px
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
