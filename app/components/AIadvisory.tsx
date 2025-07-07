// AIAdvisory.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const QUESTIONS = [
  { text: 'Where is nearest seed shop? 🌱' },
  { text: 'गेहूँ की MSP क्या है?” 🌾' },
  { text: 'Aaj ka mausam? ☀️' },
  { text: 'ಮೇಯುವ ಸರ್ಕಾರ ಯೋಜನೆಗೆ ಅರ್ಹನು? 📚' },
  { text: 'Which government scheme am I eligible for? 📄' },
  { text: 'How to get Kisan Card? 📄' },
  { text: 'बोरवेल गहराई? 💧' },
];

const AIAdvisory = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI Advisory</Text>
      <View style={styles.pillContainer}>
        {QUESTIONS.map((item, index) => (
          <TouchableOpacity key={index} style={styles.pill}>
            <Text style={styles.pillText}>{item.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default AIAdvisory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9F6FF',
    padding: 16,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    marginTop: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E0B8C',
    marginBottom: 16,
  },
  pillContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  pill: {
    borderWidth: 1,
    borderColor: '#E539FF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    margin: 4,
    backgroundColor: '#fff',
  },
  pillText: {
    fontSize: 10,
    color: '#3C1C78',
  },
});
